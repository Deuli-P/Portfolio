'use client';

import Article from './Article';
import getExperience  from './getExperience';
import { useEffect, useState } from 'react';


const ListExperience = () => {
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      const fetchExperience = async () => {
        const experiences = await getExperience();
        setItems(experiences);
      };
  
      fetchExperience();
    }, []);
  
    return(
      <>
        {items.map((item:any) =>{
          return(
            <Article entreprise={item} key={item._id}/>
          )
        })}
      </>
    );
  }
  
  export default ListExperience;