import { TableCell, TableRow } from "@/components/ui/table";
 import { formatBytes, timeAgo } from "@/lib/utils";

export default function ImageRow({ image }) {
    const repoTag = image.RepoTags?.[0]?.split(":") || ["<none>", "<none>"];
    const shortId = image.Id?.substring(7, 17) || "<no-id>"; // skip 'sha256:' and keep 10 chars
    const size = formatBytes(image.Size);
    const created = timeAgo(image.Created * 1000);

    return (
        <TableRow className={"bg-white"}>
            <TableCell>{shortId}</TableCell>
            <TableCell>{repoTag[0]}</TableCell>
            <TableCell>{repoTag[1]}</TableCell>
            <TableCell>{size}</TableCell>
            <TableCell>{created}</TableCell>
        </TableRow>
    );
}