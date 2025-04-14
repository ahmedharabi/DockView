import { useEffect, useState } from "react";
import {
    Table,
    TableHeader,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
} from "@/components/ui/table";
import{RefreshCcw }from"lucide-react"
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import ContainerRow from "./ContainerRow.jsx";
import DialogBtn from "@/components/DialogBtn.jsx";



async function handleStart(id){
    try{
        const res=await fetch("http://localhost:5001/containers/"+id+"start",{
            method:"POST"
        });
        if (!res.ok) {
            return {"error" : "Container not found or error: ${response.statusText"};
        }



    }catch (err){

    }
}

export function ContainerTable() {
    const [containers, setContainers] = useState([]);
    const [dialogOpen, setDialogOpen] = useState(true);
    const [dialogTitle, setDialogTitle] = useState("");
    async function refreshContainers(){
        try{
            const res=await fetch("http://localhost:5001/containers/?all=true");
            const data = await res.json();
            setContainers(data);

        }
        catch (err){
            console.error("Error fetching containers:", err);
        }
    }
    async function handleStart(id){
        try{
            const res=await fetch("http://localhost:5001/containers/"+id+"/start",{
                method:"POST"
            });
            if (!res.ok) {
                //return {"error" : "Container not found or error: ${response.statusText"};

            }
            await refreshContainers();
            setDialogOpen(true)
            console.log(containers)



        }catch (err){
            console.error("Failed to start container:", err);

        }
    }
    async function handleStop(id){
        try{
            const res=await fetch("http://localhost:5001/containers/"+id+"/stop",{
                method:"POST"
            });
            if (!res.ok) {
                //return {"error" : "Container not found or error: ${response.statusText"};



            }
            await refreshContainers();



        }catch (err){
            console.error("Failed to start container:", err);

        }
    }

    useEffect(() => {
        async function fetchContainers() {
            try {
                const res = await fetch("http://localhost:5001/containers/?all=true");
                const data = await res.json();
                setContainers(data);
            } catch (err) {
                console.error("Error fetching containers:", err);
            }
        }

        fetchContainers();
    }, []);

    return (
        <div >

            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold  text-left font-[Primeform_Pro_Demo]">Running Containers <button
                    onClick={refreshContainers}><RefreshCcw className={"text-blue-500"}/></button></h1>
                <DialogBtn onRefresh={refreshContainers}/>
            </div>

            <h3 className={"text-left mb-5 font-[Primeform_Pro_Demo]  text-left"}>View all your running containers and
                applications</h3>

            <Table>
                <TableHeader>
                <TableRow className="bg-gray-200">
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
                        return (<ContainerRow key={container.Id} container={container} onStart={handleStart} onStop={handleStop} fetchContainers={refreshContainers} />);
                    })}
                </TableBody>
            </Table>

        </div>
    );
}
