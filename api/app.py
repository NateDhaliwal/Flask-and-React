from flask import Flask

app = Flask(__name__)


@app.route('/api/index')
def index():
    return {"time": "Hello from the backend!"}
