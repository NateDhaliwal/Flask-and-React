from flask import Flask

app = Flask(__name__)


@app.route('/index')
def index():
    return {"time": "Hello from the backend!"}
