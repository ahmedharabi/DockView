exports.getImages=async  (req,res)=>{
    try{
        const response = await fetch("http://localhost:2375/images/json");
        if(!response.ok){
            throw new Error(`Failed to fetch images: ${response.statusText}`);
        }
        const images = await response.json();
        if(!images ||! Array.isArray(images)){
            res.status(500).json({message:"invalid response from docker api"});
        }
        res.json(images)
    }catch (err){
        res.status(500).json({message:"couldn't fetch images"});
    }

}
