import React, {useState, useEffect} from 'react'
import InfoCard from './InfoCard'
import "./infoArea.css"
import PaginationCus from './PaginationCus'


function InfoArea() {

    const [lgData,setLgData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostPerPage] = useState(10)
    const [initCount, setInitCount] = useState(1)
    useEffect(() => {
        fetch("https://www.thesportsdb.com/api/v1/json/1/all_leagues.php")
        .then(res => res.json())
        .then(data => setLgData(data.leagues))
    },[])

    function paginate(event,page){
        console.log("page: "+page)
        console.log("init: "+initCount)
        
        if( event.type=="click"){
            if(page > initCount){
                let nextRes = currentPage + ((page - initCount) * 10)
               setCurrentPage(nextRes)
               setInitCount(page)
            }else if(page < initCount){
                console.log("true")
                let nextRes = currentPage - ((initCount - page) * 10)
                console.log((initCount - page) * 10)
               setCurrentPage(nextRes)
               setInitCount(page)
            }
        }
        // let nextRes = currentPage + 10;
        //     setCurrentPage(nextRes)
        //     console.log(page)
    }

    const indexOfLastPost = currentPage + postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentdatas = lgData.slice(indexOfFirstPost, indexOfLastPost)

    return (
        <>
            <div className="infoArea">
                {currentdatas.map((cdata) => {
                    return <InfoCard lgName = {cdata.strLeague} lgType={cdata.strSport} key={cdata.idLeague} id={cdata.idLeague}></InfoCard>
                })}
            </div>
            <PaginationCus func={paginate} postsPerPage={postsPerPage} totalPosts={lgData.length}></PaginationCus>
        </>
    )
}

export default InfoArea
