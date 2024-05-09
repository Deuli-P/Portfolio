

export default async function getProject(id: string){

    const response = await fetch(`http://localhost:3002/v01/project/${id}`,{
        next: {
            revalidate: 60,
        }
    });
    return response.json();
}


