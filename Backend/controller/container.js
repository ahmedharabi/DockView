exports.getContainers=async (req,res)=>{
    const containers=await fetch("http://localhost:2375/containers/json?all=true");
    const data=await containers.json();
    res.json(data);
}
exports.getContainerById= async (req,res)=>{
    const id=req.params.id
    try {
        const response = await fetch(`http://localhost:2375/containers/${containerId}/json`);

        if (!response.ok) {
            return res.status(response.status).json({ error: `Container not found or error: ${response.statusText}` });
        }
        const data = await response.json();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: "Error fetching container data", details: err.message });
    }
}
exports.startContainer=async (req,res)=>{
    const id = req.params.id;

    try {
        const response = await fetch(`http://localhost:2375/containers/${id}/start`, {
            method: "POST"
        });

        if (!response.ok) {
            return res.status(response.status).json({
                error: `Container not found or error: ${response.statusText}`
            });
        }

        res.json({ message: `Container ${id} started successfully` });
    } catch (err) {
        res.status(500).json({
            error: "Couldn't start container, try again later",
            details: err.message
        });
    }
}
exports.stopContainer=async (req,res)=>{
    const id = req.params.id;

    try {
        const response = await fetch(`http://localhost:2375/containers/${id}/stop`, {
            method: "POST"
        });

        if (!response.ok) {
            return res.status(response.status).json({
                error: `Container not found or error: ${response.statusText}`
            });
        }

        res.json({ message: `Container ${id} stopped successfully` });
    } catch (err) {
        res.status(500).json({
            error: "Couldn't stop container, try again later",
            details: err.message
        });
    }
}
exports.restartContainer=async (req,res)=>{
    const id = req.params.id;

    try {
        const response = await fetch(`http://localhost:2375/containers/${id}/restart`, {
            method: "POST"
        });

        if (!response.ok) {
            return res.status(response.status).json({
                error: `Container not found or error: ${response.statusText}`
            });
        }

        res.json({ message: `Container ${id} restarted successfully` });
    } catch (err) {
        res.status(500).json({
            error: "Couldn't restart container, try again later",
            details: err.message
        });
    }
}

exports.deleteContainer=async (req,res)=>{
    const id = req.params.id;

    try {
        const response = await fetch(`http://localhost:2375/containers/${id}`, {
            method: "DELETE"
        });

        if (!response.ok) {
            return res.status(response.status).json({
                error: `Container not found or error: ${response.statusText}`
            });
        }

        res.json({ message: `Container ${id} deleted successfully` });
    } catch (err) {
        res.status(500).json({
            error: "Couldn't delete container, try again later",
            details: err.message
        });
    }
}

exports.createContainer=async (req,res)=>{
    const name=req.body.name;
    const image=req.body.image;

    try{
        const response = await fetch("http://localhost:2375/containers/create?name=" + name, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Image: image
            })
        })
        if (!response.ok) {
            throw new Error("coulnd't create container")
        }
        const container=await response.json();
        res.status(201).json({message:"container created with id: "+container.Id})
    }catch (err){
        res.status(500).json({message:"couldn't create container"})
    }
}



