import { useEffect, useState } from "react";
import {
    Table,
    TableHeader,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function ContainerTable() {
    const [containers, setContainers] = useState([]);

    useEffect(() => {
        async function fetchContainers() {
            try {
                const res = await fetch("http://localhost:5001/containers");
                const data = await res.json();
                setContainers(data);
            } catch (err) {
                console.error("Error fetching containers:", err);
            }
        }

        fetchContainers();
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-semibold mb-4">Running Containers</h1>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-center">ID</TableHead>
                        <TableHead className="text-center">Name</TableHead>
                        <TableHead className="text-center">Image</TableHead>
                        <TableHead className="text-center">Status</TableHead>
                        <TableHead className="text-center">IP</TableHead>
                        <TableHead className="text-center">Command</TableHead>
                        <TableHead className="text-center">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {containers.map((container) => {
                        const name = container?.Names?.[0]?.replace("/", "") ?? "N/A";
                        const ip =
                            container?.NetworkSettings?.Networks?.bridge?.IPAddress ?? "N/A";

                        return (
                            <TableRow key={container.Id}>
                                <TableCell>{container.Id.slice(0, 12)}</TableCell>
                                <TableCell>{name}</TableCell>
                                <TableCell>{container.Image}</TableCell>
                                <TableCell>
                                    <Badge
                                        variant={
                                            container.State === "running" ? "default" : "destructive"
                                        }
                                    >
                                        {container.Status}
                                    </Badge>
                                </TableCell>
                                <TableCell>{ip}</TableCell>
                                <TableCell>{container.Command}</TableCell>
                                <TableCell>
                                    <Button size="sm">
                                        {container.State === "running" ? "Stop" : "Start"}
                                    </Button>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </div>
    );
}
