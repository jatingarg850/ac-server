import React from 'react';
import { acImage } from "../../assets/assets";// Fixed the path to the image

export default function AcList() {
    return (
        <div className='ac-list'>
            <img 
                src={acImage}
                alt="AC Image"
                className="ac-image"
            />
            <h2 className='ac-list__title'>
                <span className='brand-name'>
                    Voltas
                </span> 
                183V DZU 1.5 Ton
            </h2>
        </div>
    );
}