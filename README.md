**Docker Container Manager**

A web app to manage Docker containers, allowing users to view, start, and stop containers via a simple interface.

**Features**

*   View all containers (running, stopped, etc.).
    
*   Start and stop containers via the web interface.
    
*   Display container information such as ID, Name, Status, IP, etc.
    

**Setup**

**Backend Setup**

1.  Clone the repository:git clone https://github.com/ahmedharabi/docker-monitoring-tool
    
2.  Install dependencies:cd backend npm install
    
3.  Run the backend:node app.js
    

**Frontend Setup**

1.  Navigate to the frontend folder:cd frontend
    
2.  Install dependencies:npm install
    
3.  Run the frontend:npm start
    

**API Endpoints**

*   **GET /containers**: Fetch all containers.
    
*   **POST /containers/:id/start**: Start a container by ID.
    
*   **POST /containers/:id/stop**: Stop a container by ID.
