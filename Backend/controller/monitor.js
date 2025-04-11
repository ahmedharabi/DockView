exports.getContainerStats=async (req,res)=>{
    try {
        const id = req.params.id;
        const response = await fetch("http://localhost:2375/containers/"+id+"/stats?stream=false");
        if (!response.ok) {
            throw new Error(`Failed to fetch hardware stats: ${response.statusText}`);
        }
        const stats = await response.json();
        if (!stats) {
            res.status(500).json({message: "invalid reponse from deocker api"})
        }
        res.json(stats);
    }
    catch (err){
        res.status(500).json({message:"couldn't fetch stats"})
    }
}
