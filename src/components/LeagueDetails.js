import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import {Link} from "react-router-dom"
import "./LeagueDetails.css"
import male from "../Images/male-min.jpg"
import female from "../Images/female-min.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons'

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
            <div className="socialArea">
                <div className="social"><a href="https://twitter.com/home?lang=en"><FontAwesomeIcon icon={faTwitter} /></a></div>
                <div className="social"><a href="https://www.youtube.com/"><FontAwesomeIcon icon={faYoutube} /></a></div>
                <div className="social"><a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} /></a></div>
            </div>
        </div>
    )
}

export default LeagueDetails
