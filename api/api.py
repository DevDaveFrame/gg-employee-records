import os
import dateutil.parser
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy

project_dir = os.path.dirname(os.path.abspath(__file__))
database_file = "sqlite:///{}".format(os.path.join(project_dir, "employeedatabase.db"))

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = database_file

db = SQLAlchemy(app)

class Employee(db.Model):
  id = db.Column('employee_id', db.Integer, primary_key=True)
  first_name = db.Column('first_name', db.String(50))
  last_name = db.Column('last_name', db.String(50))
  salary = db.Column('salary', db.Integer)
  hire_date = db.Column('hire_date', db.Date)
  position = db.Column('position', db.String(50))
  manager = db.Column('manager', db.String(50))
  
  def __init__(self, first_name, last_name, salary, hire_date, position, manager):
    self.first_name = first_name
    self.last_name = last_name
    self.salary = salary
    self.hire_date = hire_date
    self.position = position
    self.manager = manager
  def __repr__(self):
    return "<Employee: {}>".format(self.first_name + " " + self.last_name)
  def serialize(self):
    return {
      "id": self.id,
      "first_name": self.first_name,
      "last_name": self.last_name,
      "salary": self.salary,
      "hire_date": self.hire_date,
      "position": self.position,
      "manager": self.manager
    }



@app.route('/employees', methods=["GET", "POST"])
def home():
    employees = None
    if request.method == "POST":
      form = request.get_json()
      print(form)
      try:
          employee = Employee(
            first_name=form['firstName'],
            last_name=form['lastName'],
            salary=form['salary'],
            hire_date=dateutil.parser.parse(form['hireDate']),
            position=form['position'],
            manager=form['manager']
          )
          db.session.add(employee)
          db.session.commit()
          return jsonify(employee.serialize())
      except Exception as e:
        db.session.rollback()
        print("Failed to add employee record")
        print(e)
    employees = Employee.query.all()
    return jsonify({'employees': list(map(lambda employee: employee.serialize(), employees))})

@app.route("/employees/<int:employee_id>", methods=["POST", "DELETE"])
def update():
  if request.form:
    try:
        employee = Employee.query.filter_by(id=employee_id).first()
        employee.first_name = request.form.get("first_name")
        employee.last_name = request.form.get("last_name")
        employee.salary = request.form.get("salary")
        employee.hire_date = request.form.get("hire_date")
        employee.position = request.form.get("position")
        employee.manager = request.form.get("manager")
        db.session.commit()
    except Exception as e:
        print("Couldn't update employee record")
        print(e)
    return {employee}
  if request.method == "DELETE":
    employee = Employee.query.filter_by(id=employee_id).first()
    db.session.delete(employee)
    db.session.commit()
    return {employee}


if __name__ == "__main__":
    app.run(debug=True)
