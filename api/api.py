from flask import Flask, request

app = Flask(__name__)
api = Api(app)

@app.route('/employees', methods=['GET', 'POST', 'PUT', 'DELETE'])
def _employees():
  return {employees = employees.get}
