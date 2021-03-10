import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import "./LeagueDetails.css"
import male from "../Images/male.png"
import female from "../Images/female.png"

function LeagueDetails() {

    // const [leagueId, setLeagueId] = useState(0)
    const [leagueInfo, setLeagueInfo] = useState({})
    const {id} = useParams()
    
    useEffect(() => {
        // setLeagueId(id)
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`)
        .then(res => res.json())
        .then(data => setLeagueInfo(data.leagues[0]))
    }, [])
    let {strLeague,intFormedYear,strBadge,strCountry,strDescriptionEN,strGender,strLeagueAlternate,strLogo,strSport} = leagueInfo;
    return (
        <div>
            <div className="head">
                <img src={strLogo} className="logo"/>
                <img src={strBadge} className="badge"/>
                <div className="names">
                    <h1>{strLeague}</h1>
                    <h2>{strLeagueAlternate}</h2>
                </div>
            </div>
            <div className="topMeta">
                <div className="meta">
                    <h2>Formed Year: {intFormedYear}</h2>
                    <h2>Country: {strCountry}</h2>
                    <h2>Gender: {strGender}</h2>
                    <h2>Type: {strSport}</h2>
                </div>
                <img src={strGender == "Male" ? male:female} className="genderPic"/>
            </div>
            <p className="disc">{strDescriptionEN}</p>
        </div>
    )
}

export default LeagueDetails
