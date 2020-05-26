import React,{useState,useEffect} from "react";
import Moviepage from "../../components/moviepage";
import MovieDb from "moviedb-promise";
const Listmovies = ({genre}) =>{
console.log(genre)
    return  (
        <div>

        </div>

    )
}
export async function getInitialProps({ query }) {
    const  {genre } = query;
    const moviedb = new MovieDb('9b30eddad32975fb2bec8125c8b2608b');
    const res =await moviedb.discoverMovie('sort_by=popularity.desc');
    const movies = res['results']
    console.log(movies)
    return{
        props:{
            genre,
        },
    }

}
export default  Listmovies