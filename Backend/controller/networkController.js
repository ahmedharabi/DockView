exports.getNetworks=async  (req,res)=>{
    try{
        const response = await fetch("http://localhost:2375/networks");
        if(!response.ok){
            throw new Error(`Failed to fetch networks: ${response.statusText}`);
        }
        const networks = await response.json();
        if(!networks ||! Array.isArray(networks)){
            res.status(500).json({message:"invalid response from docker api"});
        }
        res.json(networks)
    }catch (err) {
        res.status(500).json({message: "couldn't fetch networks"});
    }  }

