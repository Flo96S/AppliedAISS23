# Applied-AI SS23
## Easy AI traffic sign evaluation

This repository contains the files for our Applied AI project at the Esslingen University of Applied Sciences. The goal of the project is to develop an artificial intelligence that can recognize and classify traffic signs. The AI is based on a Convolutional Neural Network (CNN) that was trained with the German Traffic Sign Recognition Benchmark (GTSRB) Dataset. The dataset comprises more than 50,000 images of 43 different traffic signs.
In addition to the AI, the project also includes an API that receives and processes POST requests from a website. The website allows the user to upload an image of a traffic sign and get the prediction of the AI. The API is implemented with Flask in a python.

![AppAi](https://github.com/Flo96S/AppliedAISS23/assets/35099715/a8fa3549-b30d-4297-ae95-565ff610b8cd)

## Model

The CNN model was trained using TensorFlow and Keras and is based on a Python Jupyter Notebook published by [Shikha Gupta](https://www.analyticsvidhya.com/blog/2021/12/traffic-signs-recognition-using-cnn-and-keras-in-python/). We needed to change some functions and parameters to make the Notebook work on the newer version of Tensorflow. The model achieved an accuracy of 97.8% on the test set.

![loss](https://github.com/Flo96S/AppliedAISS23/assets/35099715/fa39e439-30ca-4ec8-9078-f1ff3543d872)
![Accuracy](https://github.com/Flo96S/AppliedAISS23/assets/35099715/b2e31ac4-0e1e-4f05-baa9-b6eecbcac0e0)

## Installation

We have a python file called backend.py in our Website folder. With pip you have to install flask, flask_cors, PIL and tensorflow/keras. 
Flask Cors is only needed if you run your backend locally and want to connect to the website on the same device.
```linux
pip3 install Flask
pip3 install flask-cors
pip3 install PIL
pip3 install tensorflow
```
Currently we run our backend in developer debug mode to monitor the speed of our api and to see if incoming traffic is handled correctly. This includes, that we don't use a domain to call our api, we use the ip of our server directly. In apache or nginx this could be configured otherwise. To run everything locally on your machine, you have to run the backend.py and change the fetch ip in /Website/script.js to localhost:5000. The main AI file which is used by the backend is the traffic_classifier.h5.
