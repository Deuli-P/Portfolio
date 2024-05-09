const getProjects = async () => {
    const response = await fetch('http://localhost:3002/v01/projects/all',{ 
         method: 'GET',
         headers: {
              'Content-Type': 'application/json',
         }
    })
    return response.json();
}

export default getProjects;