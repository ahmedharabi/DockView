import { Table, TableHeader, TableRow, TableHead, TableBody } from "@/components/ui/table";
import ImageRow from "@/components/ImageRow";
import {useEffect, useState} from "react";

export default function Images() {
    const [images,setImages]=useState([]);

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


    return (
        <div>
            <h1 className="text-2xl font-semibold  text-left">Docker Images</h1>
            <h3 className={"text-left mb-5"}>View and manage your local and Docker Hub images</h3>
            <Table>
                <TableHeader>
                    <TableRow className="bg-gray-200">
                        <TableHead className="text-center">ID</TableHead>
                        <TableHead className="text-center">Image</TableHead>
                        <TableHead className="text-center">Tag</TableHead>
                        <TableHead className="text-center">Size</TableHead>
                        <TableHead className="text-center">Created</TableHead>

                    </TableRow>
                </TableHeader>
                <TableBody>
                    {images.map((image) => (
                        <ImageRow key={image.Id} image={image}/>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
