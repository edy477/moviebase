import React,{useState,useEffect} from "react";
import fetch from 'node-fetch';
import Layout from "../../components/layout";
import MovieDb from "moviedb-promise";
import Sidebar from "../../components/sidebar";
import Mainlayout from "../../components/mainlayout";
import Moviepage from "../../components/moviepage";
function movielist({movies}) {
    console.log(movies)
    /*
      <Sidebar/>
            <h1>MovieList</h1>

                <ul>
                    {movies.map(movie => (<li>{movie.title}</li>))

                    }

            </ul>
            <h1>sdadsdsasda</h1>

     *     <ul>
     {movies.map(movie => (<li>{movie.title}</li>))

                }
     </ul>*/
    /*a
    }
  //  c
    const movies =  fetchData();
    console.log(movies)

   /* moviedb.discoverMovie('sort_by=popularity.desc').then(res => {
        console.log(res['results'])
    }).catch(console.error)*/



    return(

<div></div>
    )
};
/*
export async function getStaticProps() {


    return{
        props:{
            movies,
        },
    }
}*/
export async function getStaticProps() {

    const moviedb = new MovieDb(process.env.customKey);
    const res =await moviedb.discoverMovie('sort_by=popularity.desc');
   const movies = res['results']
    console.log(movies)
    return{
        props:{
            movies,
        },
    }
}
export default  movielist;