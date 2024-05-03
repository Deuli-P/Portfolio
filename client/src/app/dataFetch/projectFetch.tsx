

const fetchDataProjectServerProps =async(id:string)=> {
    
        try{
            const response = await fetch(`http://localhost:3002/v01/project/${id}`,{
                cache: "force-cache"
            })
            return response
        }
        catch(err){
            console.log("[PROJECT PAGE] Error Fetch data Projet:",err)
        }
}

export default fetchDataProjectServerProps;
