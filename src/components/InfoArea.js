import React, {useState, useEffect} from 'react'
import InfoCard from './InfoCard'
import "./infoArea.css"

function InfoArea() {

    const [lgData,setLgData] = useState([])
    useEffect(() => {
        fetch("https://www.thesportsdb.com/api/v1/json/1/all_leagues.php")
        .then(res => res.json())
        .then(data => setLgData(data.leagues))
    },[])
    return (
        <div className="infoArea">
            {lgData.map((lgInfo) => {
                return <InfoCard lgName = {lgInfo.strLeague} lgType={lgInfo.strSport} key={lgInfo.idLeague}></InfoCard>
            })}
            {/* <InfoCard></InfoCard> */}
        </div>
    )
}

export default InfoArea
