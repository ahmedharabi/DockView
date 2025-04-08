exports.getVolumes=async (req,res)=>{
    try{
        const response=await fetch("http://localhost:2375/volumes");
        if (!response.ok) {
            throw new Error(`Failed to fetch volumes: ${response.statusText}`);
        }
        const volumes=await response.json();
        console.log(volumes)
        if (!volumes) {
            return res.status(500).json({ message: "Invalid response structure from Docker API" });
        }
        res.status(200).json(volumes);

    }catch (err){
        res.status(500).json({message:"couldn't fetch volumes"});
    }
}