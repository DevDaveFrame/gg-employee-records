from flask import Flask

app = Flask(__name__)

@app.route('/employees')
def get_employees():
  return {employees = employees.get}
  