'use client';

import { useState, useEffect } from "react";
import getProjects from "./getProjects";
import Card from "./Card";

const ListProjects = () => {
    
    const [items, setItems] = useState([]);
    
    useEffect(() => {
    const fetchProjects = async () => {
        const experiences = await getProjects();
        setItems(experiences);
    };

    fetchProjects();
    }, []);
    
    return(
        <>
            {items.map((item) => {
                return(
                    <Card key={item._id} title={item.name} image={item.cover.image} alt={item.cover.alt} type={item.support} id={item._id} />
                )
            })}

        </>
    )
}

export default ListProjects;