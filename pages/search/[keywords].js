import React,{useState,useEffect} from "react";
import Moviepage from "../../components/moviepage";
import MovieDb from "moviedb-promise";
import { useRouter } from 'next/router'
import Genrelayout from "../../components/genrelayout";
import Moviecard from "../../components/moviecard";
import Searchlayout from "../../components/searchlayout";
import Movieid from "../movie/[id]";
const Searchpage = ({data})=> {
console.log(data)
return(
    <div >

        <div className="principal flex flex-wrap justify-between">
            {data.results.map(item => <Moviecard  genres={item.genre_ids} key={item.id} title={item.title}  imgUrl={item.poster_path} id={item.id}/> )}


        </div>


    </div>
)

}

Searchpage.getInitialProps = async ({query}) => {
    const name = query.keywords;
    const moviedb = new MovieDb('9b30eddad32975fb2bec8125c8b2608b');
    const results  = await  moviedb.searchMovie({ query: name.toString() })
    const data = results;
    return {data}

}
Searchpage.layout  = Searchlayout;

export  default  Searchpage;