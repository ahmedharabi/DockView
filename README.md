<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    
</head>
<body>

<h1>Docker Container Monitoring Dashboard</h1>

<p>This is a browser-based dashboard for managing and monitoring Docker containers. Built using the <strong>Docker Engine API</strong>, it provides a centralized platform to view, manage, and interact with Docker containers, networks, volumes, and images in real-time.</p>

<h2>Features</h2>
<ul>
    <li><strong>Real-Time Monitoring:</strong> View real-time statistics such as CPU usage, memory usage, and disk I/O for each container.</li>
    <li><strong>Container Management:</strong> Easily start, stop, remove, and manage Docker containers directly from the browser.</li>
    <li><strong>Interactive Interface:</strong> A simple and interactive UI that presents all relevant data in an easy-to-understand format.</li>
    <li><strong>Docker Engine API:</strong> Uses Docker Engine API to communicate with the Docker engine and retrieve container data.</li>
    <li><strong>Centralized View:</strong> A unified dashboard to manage all your Docker resources, including images, volumes, and networks.</li>
</ul>

<h2>Installation</h2>
<p>To set up the project locally, follow these steps:</p>

<ol>
    <li><strong>Clone the Repository:</strong>
        <pre>git clone https://github.com/ahmedharabi/DockView </pre>
    </li>
    <li><strong>Install Dependencies:</strong> Navigate to the project folder and install the required dependencies for both the backend and frontend.
        <pre>cd docker-container-monitoring</pre>
        <pre>npm install</pre>
    </li>
    <li><strong>Start the Backend:</strong> 
        <pre>cd Backend</pre>
        <pre>npm start</pre>
        <p>The backend will be running on port <strong>5001</strong> by default.</p>
    </li>
    <li><strong>Start the Frontend:</strong> In another terminal, navigate to the frontend folder and start the frontend server.
        <pre>cd Frontend</pre>
        <pre>npm start</pre>
        <p>The frontend will be available at <strong>http://localhost:3000</strong> by default.</p>
    </li>
    <li>Make sure both the backend and frontend servers are running simultaneously for full functionality.</li>
</ol>

<h2>Usage</h2>
<p>Once the server is running, you can:</p>
<ul>
    <li>View the stats of all your containers in real-time.</li>
    <li>Monitor CPU, memory, and disk usage for each container.</li>
    <li>Start, stop, or remove containers using the interactive buttons on the dashboard.</li>
    <li>View Docker images, volumes, and networks.</li>
    <li>All actions are done through the browser interface, eliminating the need to use the command line for container management.</li>
</ul>

<h2>Docker Engine API</h2>
<p>This dashboard uses the <strong>Docker Engine API</strong> to interact with your Docker host and retrieve container information. The API allows for operations such as:</p>
<ul>
    <li>Fetching stats (CPU, memory, disk usage) for containers.</li>
    <li>Listing and managing containers, images, networks, and volumes.</li>
    <li>Starting and stopping containers through the API.</li>
</ul>
<p>Make sure that your Docker daemon is accessible via the API. If you are using a remote Docker host, you may need to adjust the API URL and configure proper authentication.</p>

<h2>Technologies Used</h2>
<ul>
    <li><strong>React.js:</strong> Frontend framework for building the user interface.</li>
    <li><strong>Docker Engine API:</strong> API used to interact with Docker and retrieve data.</li>
    <li><strong>Socket.IO:</strong> Real-time communication between the backend and frontend to push container stats and events.</li>
    <li><strong>Express.js:</strong> Backend framework to handle requests and interact with Docker API.</li>
</ul>

<h2>Contributing</h2>
<p>If you'd like to contribute to this project, feel free to fork the repository, make changes, and submit a pull request. Here are some ways you can help:</p>
<ul>
    <li>Fixing bugs or improving features.</li>
    <li>Optimizing the dashboard performance.</li>
    <li>Improving documentation.</li>
</ul>

<h2>License</h2>
<p>This project is licensed under the MIT License. See the <a href="LICENSE">LICENSE</a> file for more details.</p>

<h2>Contact</h2>
<p>If you have any questions or suggestions, feel free to reach out via GitHub issues or contact me directly.</p>

</body>
</html>
