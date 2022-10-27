import React from 'react';
import Card from "./Card";
import Logement from "../models/logements.json";

const Gallery = () => {
    return (
        <section className='gallery'>
            {
                Logement.map((logement , index) => {
                    return (
                        
                        <Card key={index} logement={logement} no={index} />
                    )
                })
            }
        </section>
    );
};

export default Gallery;