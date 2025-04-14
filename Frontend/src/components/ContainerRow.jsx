import {TableCell, TableRow} from "@/components/ui/table.jsx";
import {Badge} from "@/components/ui/badge.jsx";
import {Button} from "@/components/ui/button.jsx";
import {Copy,Trash2 }from "lucide-react"
import { toast } from "sonner"



export default function ContainerRow({container,onStart,onStop,fetchContainers}){


    const name = container?.Names?.[0]?.replace("/", "") ?? "N/A";
    const ip = container?.NetworkSettings?.Networks?.bridge?.IPAddress ?? "N/A";

    const handleCopy = async (id) => {
        await navigator.clipboard.writeText(id)
        toast(<span className="text-blue-600 font-semibold">Container ID copied!</span>)
    }
    const handleDeleteContainer=async (id)=>{
        try{
            const response=await fetch("http://localhost:5001/containers/"+id,{
                method:"DELETE"
            })
            if(!response.ok){
                throw new Error("couldn't delete container")
            }
            const data=await response.json();
            console.log({message:"container deleted successfully",id})
            fetchContainers();

        }
        catch (err){
            console.log.json({message:"couldn't delete the container"})
        }
    }


    return (

        <TableRow className={"font-[Primeform_Pro_Demo] font-light"} >
        <TableCell className={"flex gap-2"}>{container.Id.slice(0, 12)} <button onClick={()=>{handleCopy(container.Id)}}> <Copy className={"w-3 "} /></button></TableCell>
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
            <Button size="sm" onClick={() =>
                container.State === "running"
                    ? onStop(container.Id)
                    : onStart(container.Id)
            }>
                {container.State === "running" ? "Stop" : "Start"}
            </Button>
            <button onClick={()=>{handleDeleteContainer(container.Id)}}><Trash2/> </button>
        </TableCell>
    </TableRow>)
}