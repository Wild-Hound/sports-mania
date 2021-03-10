import React from 'react'
import "./infoCard.css"


function InfoCard({lgName,lgType}) {
    return (
        <div className="infoCard">
            <h3 className="lgName">{lgName}</h3>
            <h5 className="lgType">Sports Type: {lgType}</h5>
            <button className="lgBtn">Explore</button>
        </div>
    )
}

export default InfoCard
