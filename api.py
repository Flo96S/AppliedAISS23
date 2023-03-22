from flask import Flask
from flask_cors import CORS
import random
import threading

trafficlight = 0
sign = 0
speedlim = 0
currentSpeed = 0

app = Flask(__name__)
CORS(app)

@app.route("/", methods=['GET'])
def get():
    return "Hello", 200

@app.route("/currentspeed", methods=['GET'])
def get_current_speed():
    global currentSpeed
    return str(currentSpeed), 200

@app.route("/speed", methods=['GET'])
def get_speed():
    global speedlim
    return str(speedlim), 200

@app.route("/sign", methods=['GET'])
def get_sign():
    global sign
    return str(sign), 200

@app.route("/trafficlight", methods=["GET"])
def get_trafficlight():
    global trafficlight
    return str(trafficlight), 200

def get_random_speed():
    dat = [-1,10,20,30,40,50,60,70,80,90,100,110,120,130]
    return dat[random.randint(0,len(dat)-1)]


def get_new_numbers():
    threading.Timer(5, get_new_numbers).start()
    global sign
    global trafficlight
    global speedlim
    global currentSpeed
    
    currentSpeed = random.randint(0,250)
    sign = random.randint(0,10)
    trafficlight = random.randint(-1,5)
    speedlim = get_random_speed()

if __name__ == "__main__":
    get_new_numbers()
    app.run(host='127.0.0.1', port = 5000, debug=True)
