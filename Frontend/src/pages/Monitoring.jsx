import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

export default function Monitoring() {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const socket = io("http://localhost:5001"); // Adjust if your server is on a different port

        socket.on("connect", () => {
            console.log("🟢 Connected to monitoring server");
        });

        socket.on("monitoring-data", (data) => {
            if (data.length > 0) {
                const container = data[0]; // show stats for first container

                const newPoint = {
                    time: new Date().toLocaleTimeString(),
                    cpu: parseFloat(container.cpuPercent),
                    memory: parseFloat(container.memoryUsageMB),
                    diskRead: (container.diskReadBytes / 1024).toFixed(2), // Disk Read in KB
                    diskWrite: (container.diskWriteBytes / 1024).toFixed(2), // Disk Write in KB
                };

                setChartData((prevData) => [...prevData.slice(-19), newPoint]); // keep last 20 points
            }
        });

        socket.on("disconnect", () => {
            console.log("🔴 Disconnected from monitoring server");
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">📊 Real-Time Container Monitoring</h2>
            <div className="bg-white rounded-lg shadow-md p-4">
                <ResponsiveContainer width="100%" height={350}>
                    <AreaChart data={chartData} >
                        <defs>
                            <linearGradient id="cpuColor" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="memColor" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="diskColor" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                            </linearGradient>
                        </defs>

                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="time" />
                        <YAxis yAxisId="left" label={{ value: "% CPU", angle: -90, position: "insideLeft" }} />
                        <YAxis
                            yAxisId="right"
                            orientation="right"
                            label={{ value: "Memory / Disk", angle: -90, position: "insideRight" }}
                        />
                        <Tooltip />
                        <Legend />

                        <Area
                            yAxisId="left"
                            type="basis"
                            dataKey="cpu"
                            stroke="#22c55e"
                            fillOpacity={1}
                            fill="url(#cpuColor)"
                            name="CPU (%)"
                        />
                        <Area
                            yAxisId="right"
                            type="monotone"
                            dataKey="memory"
                            stroke="#3b82f6"
                            fillOpacity={1}
                            fill="url(#memColor)"
                            name="Memory (MB)"
                        />


                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
