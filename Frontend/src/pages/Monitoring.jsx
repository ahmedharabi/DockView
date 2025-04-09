import { useEffect, useState } from "react";

export default function Monitoring() {
    const [cpuUsage, setCpuUsage] = useState(null);
    const [memoryUsage, setMemoryUsage] = useState(null);
    const containerID = "3db1c9c4c0061492b28fb46556c3f799bfe5f1737226859473618ac8bf1ea131";

    // Convert bytes to MB
    const bytesToMB = (bytes) => (bytes / (1024 * 1024)).toFixed(2);

    // Fetch Docker stats
    const fetchStats = async () => {
        try {
            const response = await fetch(`http://localhost:5001/monitor/${containerID}/stats`);
            const stats = await response.json();

            // CPU Usage Calculation (calculate difference from the previous fetch)
            const cpuUsageTotal = stats.cpu_stats.cpu_usage.total_usage;
            const systemCpuUsage = stats.cpu_stats.system_cpu_usage;

            // You may need to store the previous values and calculate the difference
            // to get the CPU percentage properly, assuming this is your first fetch:
            const cpuPercent = systemCpuUsage > 0 ? (cpuUsageTotal / systemCpuUsage) * 100 : 0;

            // Memory Usage (in MB)
            const memoryUsageBytes = stats.memory_stats.usage;
            const memoryUsageMB = bytesToMB(memoryUsageBytes);

            // Set state values
            setCpuUsage(cpuPercent.toFixed(2));  // Round to 2 decimal places
            setMemoryUsage(memoryUsageMB);
        } catch (error) {
            console.error("Error fetching stats:", error);
        }
    };

    // Periodic fetch every 5 seconds
    useEffect(() => {
        fetchStats();
        const intervalId = setInterval(fetchStats, 5000);

        // Clean up the interval on unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <h1>Real-Time Monitoring</h1>
            <p><strong>CPU Usage:</strong> {cpuUsage !== null ? `${cpuUsage}%` : "Loading..."}</p>
            <p><strong>Memory Usage:</strong> {memoryUsage !== null ? `${memoryUsage} MB` : "Loading..."}</p>
        </div>
    );
}
