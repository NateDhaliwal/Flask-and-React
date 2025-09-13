from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins=["http://localhost:3000", "https://phc3kh-3000.csb.app"])

@app.route('/index')
def index():
    return {"time": "Hello from the backend!"}

@app.route('/post', methods=['POST'])
def post_test():
    a = request.get_json()
    return {'time': 'success!'}

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)