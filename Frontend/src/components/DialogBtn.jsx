import {
    Dialog,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button.jsx";
import {Input} from "@/components/ui/input.jsx";
import {Label} from "@radix-ui/react-label";
import {useEffect, useState,useActionState} from "react";
import ImageRow from "@/components/ImageRow.jsx";


export default function DialogBtn(){
    const [images,setImages]=useState([]);
    const [state, formAction,pending] = useActionState(startContainer, {});
    useEffect(() => {
        async function fetchImages() {
            try {
                const res = await fetch("http://localhost:5001/images");
                const data = await res.json();

                setImages(data);
                console.log(data)
            } catch (err) {
                console.error("Error fetching containers:", err);
            }
        }

        fetchImages();
    }, []);
    async function startContainer(prevState, formData) {
        const name = formData.get("name");
        const image = formData.get("image");

        await fetch("http://localhost:5001/containers/create",{
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                image:image,
                name:name
            })
        })

    }
    return(
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className={"bg-green-400 text-white hover:bg-green-300 hover:text-white"}>Add Container</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add Container</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>

                <form action={formAction}>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">Name</Label>
                            <Input id="name" name="name" className="col-span-3"/>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="image" className="text-right">Image</Label>
                            <select name="image" id="image" className="col-span-3 border-1 p-1.5 rounded-md">
                                {images.map((image) => {
                                    const repoTag = image.RepoTags?.[0]?.split(":") || ["<none>", "<none>"];
                                    return <option key={image.Id} value={repoTag[0]}>{repoTag[0]}</option>;
                                })}
                            </select>
                        </div>
                    </div>
                <DialogFooter>
                    <Button type="submit" >{pending ? "creating" : "create"}</Button>
                </DialogFooter>
            </form>

        </DialogContent>
</Dialog>


)
}