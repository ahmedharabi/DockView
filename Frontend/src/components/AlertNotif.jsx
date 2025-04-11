import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert.jsx";

export default function AlertNotif({title,description}){
    return(<Alert>

        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>
            {description}
        </AlertDescription>
    </Alert>)

}