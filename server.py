from flask import Flask, jsonify
app = Flask(__name__)

@app.route('/compute')
def compute():
    return jsonify({"result": 42})

if __name__ == '__main__':
    app.run(port=3000)