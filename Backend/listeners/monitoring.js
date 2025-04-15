//const fetch = require('node-fetch');

function calculateCPUPercent(cpuStats, precpuStats) {
    const cpuDelta = cpuStats.cpu_usage.total_usage - precpuStats.cpu_usage.total_usage;
    const systemDelta = cpuStats.system_cpu_usage - precpuStats.system_cpu_usage;
    const onlineCPUs = cpuStats.online_cpus || 1;

    if (systemDelta > 0 && cpuDelta > 0) {
        return ((cpuDelta / systemDelta) * onlineCPUs * 100).toFixed(2);
    }
    return "0.00";
}

module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log('🟢 Client connected to monitoring socket');

        const interval = setInterval(async () => {
            try {
                const res = await fetch('http://localhost:2375/containers/json');
                if (!res.ok) {
                    console.error('Failed to fetch containers:', res.statusText);
                    return;
                }
                const containers = await res.json();

                if (containers.length === 0) {
                    console.log("No containers found.");
                    return;
                }

                const statsArray = [];

                for (const container of containers) {
                    const statsRes = await fetch(`http://localhost:2375/containers/${container.Id}/stats?stream=false`);
                    const stats = await statsRes.json();

                    const cpuPercent = calculateCPUPercent(stats.cpu_stats, stats.precpu_stats);
                    const memoryUsageMB = (stats.memory_stats.usage / (1024 * 1024)).toFixed(2);
                    const memoryLimitMB = (stats.memory_stats.limit / (1024 * 1024)).toFixed(2);


                    statsArray.push({
                        id: stats.id,
                        name: stats.name.replace("/", ""),
                        cpuPercent,
                        memoryUsageMB,
                        memoryLimitMB,

                    });
                }

                //console.log('Sending container stats:', statsArray);
                socket.emit('monitoring-data', statsArray);
            } catch (err) {
                console.error('⚠️ Error fetching stats:', err.message);
            }
        }, 1000);

        socket.on('disconnect', () => {
            clearInterval(interval);
            console.log('🔴 Client disconnected');
        });
    });
};
