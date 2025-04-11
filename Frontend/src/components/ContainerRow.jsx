import {TableCell, TableRow} from "@/components/ui/table.jsx";
import {Badge} from "@/components/ui/badge.jsx";
import {Button} from "@/components/ui/button.jsx";


export default function ContainerRow({container,onStart,onStop}){


    const name = container?.Names?.[0]?.replace("/", "") ?? "N/A";
    const ip = container?.NetworkSettings?.Networks?.bridge?.IPAddress ?? "N/A";

    return (<TableRow className={"font-[Primeform_Pro_Demo] font-light"} >
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
            <Button size="sm" onClick={() =>
                container.State === "running"
                    ? onStop(container.Id)
                    : onStart(container.Id)
            }>
                {container.State === "running" ? "Stop" : "Start"}
            </Button>
        </TableCell>
    </TableRow>)
}