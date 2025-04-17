# Netdata-Monitoring-Application

Objective - Monitor system resources using Netdata by installing it, visualizing system and app performance metrics.

Now, What is Net data? 
--> Netdata is a distributed real-time, health monitoring platform for systems, hardware, containers & applications, collecting metrics.

Steps :- 
1) Docker Installation - 
 - Install Docker (if not already installed)
 - Open Docker Desktop and ensure it is running.



2) Run Netdata using Docker -
 - Using this command "docker run -d --name=netdata -p 19999:19999 --cap-add SYS_PTRACE --security-opt apparmor=unconfined netdata/netdata"
   Here the flags : 
   d → Detached mode (runs in background)
   --name=netdata → Container name
   -p 19999:19999 → Maps port 19999 to view Netdata on http://localhost:19999
   --cap-add SYS_PTRACE and --security-opt apparmor=unconfined → Required for full monitoring access on Linux systems

3) Open Netdata Dashboard - 
 - Open your browser.
 - Go to: http://localhost:19999

You’ll see a dashboard full of charts!

4) Explore Metrics
 - Explore these sections on the Netdata dashboard:
 - System Overview (CPU usage, RAM usage, disk I/O)
 - Disk Usage
 - Docker Containers
 - Network Usage 
 - Processes 
 - Alerts (in the left-hand menu)

You’ll get real-time data — try opening a few apps and observe how metrics change.

5) Now you can create a Dummy App to Monitor
 - Create package.json by writing the command "npm init -y" in git bash terminal
 - Create server.js file and write :- 
  // server.js
  const http = require('http');
  const server = http.createServer((req, res) => {
  let sum = 0;
  for (let i = 0; i < 1e7; i++) sum += i; // simulate CPU usage
  res.end('Hello, World!');
});

 server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
- Then write node server.js 

Then Open http://localhost:3000 in your browser. Now go back to http://localhost:19999 and see the increase in CPU usage.
