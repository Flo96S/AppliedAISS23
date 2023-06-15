# Applied-AI SS23
## Easy AI traffic sign evaluation

This repository contains the files for my Applied AI project at the Esslingen University of Applied Sciences. The goal of the project is to develop an artificial intelligence that can recognize and classify traffic signs. The AI is based on a Convolutional Neural Network (CNN) that was trained with the German Traffic Sign Recognition Benchmark (GTSRB) Dataset. The dataset comprises more than 50,000 images of 43 different traffic signs.
In addition to the AI, the project also includes an API that receives and processes POST requests from a website. The website allows the user to upload an image of a traffic sign and get the prediction of the AI. The API is implemented with Flask in a python.
## Model
The CNN model was trained using TensorFlow and Keras and is based on a Python Jupyter Notebook published by [Shikha Gupta](https://www.analyticsvidhya.com/blog/2021/12/traffic-signs-recognition-using-cnn-and-keras-in-python/). The model achieved an accuracy of 97.8% on the test set.