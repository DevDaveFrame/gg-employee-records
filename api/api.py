import os
from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy

project_dir = os.path.dirname(os.path.abspath(__file__))
database_file = "sqlite:///{}".format(os.path.join(project_dir, "employeedatabase.db"))

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = database_file

db = SQLAlchemy(app)

class Employee(db.Model):
  id = db.Column('employee_id', Integer, primary_key=True)
  first_name = db.Column('first_name', String(50))
  last_name = db.Column('last_name', String(50))
  salary = db.Column('salary', Integer)
  hire_date = db.Column('hire_date', Date)
  position = db.Column('position', String(50))
  manager = db.Column('manager', String(50))

  def __repr__(self):
    return "<Employee Name: {}>".format(self.first_name + " " + self.last_name)
  
@app.route('/employees', methods=["GET", "POST"])
def home():
    employees = None
    if request.form:
        try:
            employee = Employee(id=request.form.get("employee_id"))
            db.session.add(employee)
            db.session.commit()
            return {employee}
        except Exception as e:
            print("Failed to add employee record")
            print(e)
    employees = Employee.query.all()
    return {employees}

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
  if request.method == "DELETE"
    employee = Employee.query.filter_by(id=employee_id).first()
    db.session.delete(employee)
    db.session.commit()
    return {employee}


if __name__ == "__main__":
    app.run(debug=True)
