/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import categorie from "../../../data/expertise.json";
import "./Filter.scss";


const Filter = ({FilterChange}) => {


    const [categories, setCategories] = useState(categorie.categories);
    const [hovered, setHovered] = useState("");

    

    useEffect(() => {
        setCategories(categorie.categories);
 },[]);


    const HandleChange = (e) => {
        FilterChange(e.currentTarget.dataset.name);
        setHovered(e.currentTarget.dataset.name);
    }

   


    return (
        <div id="works_projets_fitler-container">
            <div className={`work_projets_filter_title-container`}>
                <span className={`works_projets_filter-text`}>Filtrer par</span>
            </div>
            <div className={`work_projets_filter_button-container`}>
                <p 
                    className={`
                        work_projet_filter-button 
                        ${hovered === "" ? 'hovered':''}
                    `}
                    onClick={HandleChange}
                    data-name=""
                >
                    All
                </p>
                {categories.map((item,idx) => {
                    return (
                        <p 
                            key={idx} 
                            value={item.id}
                            data-name={item.name}
                            onClick={HandleChange}
                            onMouseOver={() => setHovered(idx + 1)}
                            className={`
                                work_projet_filter-button 
                                ${hovered === item.name ? 'hovered' : ''} 
                            `}
                        >
                            {item.name}
                        </p>
                    )
                })}
            </div>

        </div>
    );
};

export default Filter;