import { Table, TableHeader, TableRow, TableHead, TableBody ,TableCell} from "@/components/ui/table";
import {useEffect, useState} from "react";

export default function Networks(){


    const [networks,setNetworks]=useState([]);

    useEffect(() => {
        async function fetchNetworks() {
            try {
                const response = await fetch("http://localhost:5001/networks");
                if(!response.ok){
                    throw new Error(`HTTP error! Status: ${response.status}`);
                    return;
                }
                const networks = await response.json();

                setNetworks(networks);
                //console.log(volumes)
            } catch (err) {
                console.error("Error fetching containers:", err);
            }
        }

        fetchNetworks();
    }, []);





    return(
        <>
            <h1 className="text-2xl font-semibold mb-4 text-left">Docker Networks</h1>
            <Table >
                <TableHeader>
                    <TableRow className="bg-gray-200">
                        <TableHead className="text-center">Name</TableHead>
                        <TableHead className="text-center">ID</TableHead>
                        <TableHead className="text-center">Driver</TableHead>
                        <TableHead className="text-center">Scope</TableHead>
                        <TableHead className="text-center">Created</TableHead>
                        <TableHead className="text-center">Ingress</TableHead>
                        <TableHead className="text-center">Internal</TableHead>
                        <TableHead className="text-center">Attachable</TableHead>

                    </TableRow>
                </TableHeader>
                <TableBody>
                    {networks.map((net) => (
                        <TableRow key={net.Id}>
                            <TableCell>{net.Name.slice(0, 20)}</TableCell>
                            <TableCell title={net.Id}>{net.Id.slice(0, 10)}</TableCell>
                            <TableCell>{net.Driver}</TableCell>
                            <TableCell>{net.Scope}</TableCell>
                            <TableCell>{new Date(net.Created).toLocaleDateString()}</TableCell>
                            <TableCell>{net.Ingress ? "Yes" : "No"}</TableCell>
                            <TableCell>{net.Internal ? "Yes" : "No"}</TableCell>
                            <TableCell>{net.Attachable ? "Yes" : "No"}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table></>

    )
}