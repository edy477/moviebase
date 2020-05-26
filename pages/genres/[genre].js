import React,{useState,useEffect} from "react";
import Moviepage from "../../components/moviepage";
import MovieDb from "moviedb-promise";
import { useRouter } from 'next/router'
import Genrelayout from "../../components/genrelayout";
import Moviecard from "../../components/moviecard";

const Listmovies = ({data}) => {
    console.log(data)


    return (
<div>
    <div className="principal flex flex-wrap justify-between">
        {data.results.map(item => <Moviecard  genres={item.genre_ids} key={item.id} title={item.title}  imgUrl={item.poster_path} id={item.id}/> )}


    </div>

</div>

    )
}
Listmovies.getInitialProps = async ({query}) => {
    const {genre} = query;

    const moviedb = new MovieDb('9b30eddad32975fb2bec8125c8b2608b');
    const res =await moviedb.discoverMovie('sort_by=popularity.desc&with_genres='+genre);
    const data = res;

  //  const resp = await fetch(`/api/todos`);
    //const data = await resp.json();
    return {data}
}
/*
function Listmovies({movies}) {
    const router = useRouter()
    const { genre } = router.query
    console.log(genre)
    console.log(movies)
    return  (
        <div>
            <h1>dsdsds</h1>
        </div>

    )
}
/*



const Listmovies = ({movies}) =>{
    const router = useRouter()
    const { genre } = router.query
    console.log(genre)
    console.log(movies)
    return  (
        <div>
     <h1>dsdsds</h1>
        </div>

    )
}*//*
export async function getInitialProps({ query }) {


    const  {genre } = query;
    const moviedb = new MovieDb('9b30eddad32975fb2bec8125c8b2608b');
    const res =await moviedb.discoverMovie('sort_by=popularity.desc&with_genres='+genre.toString());
 const movies = res

    return{
        props:{
            movies,
        },
    }

}
*/
Listmovies.layout = Genrelayout;
export default  Listmovies