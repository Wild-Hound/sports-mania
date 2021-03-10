import React, {useEffect, useState} from 'react'
import "./infoCard.css"


function InfoCard({lgName,lgType,id}) {
    const [imgSrc, setImgSrc] = useState('')
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`)
        .then(res => res.json())
        .then(data => setImgSrc(data.leagues[0].strBadge))
    }, [])
    return (
        <div className="infoCard">
            <img src={imgSrc} className="lgImg"/>
            <h3 className="lgName">{lgName}</h3>
            <h5 className="lgType">Sports Type: {lgType}</h5>
            <button className="lgBtn">Explore</button>
        </div>
    )
}

export default InfoCard
