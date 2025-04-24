# Seng533Project - Software Performance Analysis

## Description

This repository contains server implementations in multiple languages (C#, Go, JavaScript, and Python) along with a `k6` load testing script (`load_test.js`). This project was created to evaluate and compare the performance characteristics of different server-side technologies under load.

## Project Structure

The repository includes the following files:

* `README.md`: This file, providing an overview of the project.
* `load_test.js`: A `k6` script used to generate load and measure the performance of the servers.
* `server.cs`: A server implementation using C# (likely ASP.NET Core).
* `server.go`: A server implementation using Go.
* `server.js`: A server implementation using JavaScript (likely Node.js).
* `server.py`: A server implementation using Python (likely Flask or Django).

## Load Testing

The `load_test.js` script uses `k6`, a modern load testing tool, to simulate user traffic and measure the performance of the servers.  The script defines metrics such as:

* **Response time:** The time it takes for the server to respond to a request.
* **Requests per second (RPS):** The number of requests the server can handle per second.
* **Error rate:** The percentage of requests that result in errors.

## Setup and Execution

To run the load test, you will need to:

1.  **Install `k6`:** Follow the installation instructions on the k6 website (https://k6.io/docs/getting-started/installation/).
2.  **Set up the servers:** Each server (C#, Go, JavaScript, Python) needs to be set up and running on a specific port.  Refer to the specific server file (e.g., `server.cs`) for instructions on how to run it.  This usually involves having the appropriate runtime or SDK installed (e.g., .NET for C#, Go runtime for Go, Node.js for JavaScript, Python for Python) and running a command-line command.
3.  **Run the load test:** Once the servers are running, execute the `load_test.js` script using the `k6 run` command:

    ```bash
    k6 run load_test.js
    ```

## Analysis

The results of the load test can be used to compare the performance of the different server implementations.  Factors that may influence performance include:

* **Programming language:** Different languages have different performance characteristics.
* **Framework:** The web framework used (e.g., ASP.NET Core, Go's net/http, Express.js, Flask) can impact performance.
* **Server configuration:** Server settings, such as the number of worker threads, can affect performance.
* **Hardware:** The underlying hardware on which the servers are running will also play a role.
