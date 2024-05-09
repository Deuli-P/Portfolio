
export default async function getLastProject() {

    const response = await fetch('http://localhost:3002/v01/project/last',{
        next: {
            revalidate : 60
        }
    })
        if(response.status !== 200) throw new Error("Failed to fetch last project");
        else {
            return response.json();
        }
}