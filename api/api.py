import os
from flask import Flask, request, redirect
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
