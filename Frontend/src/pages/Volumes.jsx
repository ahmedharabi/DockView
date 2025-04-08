import { Table, TableHeader, TableRow, TableHead, TableBody ,TableCell} from "@/components/ui/table";
import {useEffect, useState} from "react";

export default function Volumes(){


    const [volumes,setVolumes]=useState([]);

    useEffect(() => {
        async function fetchVolumes() {
            try {
                const response = await fetch("http://localhost:5001/volumes");
                if(!response.ok){
                    throw new Error(`HTTP error! Status: ${response.status}`);
                    return;
                }
                const volumes = await response.json();

                setVolumes(volumes.Volumes);
                //console.log(volumes)
            } catch (err) {
                console.error("Error fetching containers:", err);
            }
        }

        fetchVolumes();
    }, []);





    return(
        <Table>
            <TableHeader>
                <TableRow className="bg-gray-200">
                    <TableHead className="text-center">Volume Name</TableHead>
                    <TableHead className="text-center">Driver</TableHead>
                    <TableHead className="text-center">Mount Path</TableHead>
                    <TableHead className="text-center">Created At</TableHead>

                </TableRow>
            </TableHeader>
            <TableBody>
                {volumes.map((volume) => (
                    <TableRow key={volume.id}>
                        <TableCell>{volume.Name.slice(0, 10)}</TableCell>
                        <TableCell>{volume.Driver}</TableCell>
                        <TableCell>{volume.Mountpoint.slice(0, 30)}</TableCell>
                        <TableCell>{new Date(volume.CreatedAt ).toLocaleDateString()}</TableCell> {/* Convert timestamp to date */}
                    </TableRow>
                ))}
            </TableBody>
        </Table>

    )
}