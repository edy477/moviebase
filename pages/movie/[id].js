import React,{useState,useEffect} from "react";
import Moviepage from "../../components/moviepage";
import MovieDb from "moviedb-promise";
import { useRouter } from 'next/router'
import Genrelayout from "../../components/genrelayout";
import Moviecard from "../../components/moviecard";
import Movielayout from "../../components/movielayout";
import Listmovies from "../genres/[genre]";

const Movieid = ({data,info,credits,similar})=> {
   const router =  useRouter();
   //console.log(router.query.id)
    console.log(info)
    //const moviedb = new MovieDb('9b30eddad32975fb2bec8125c8b2608b');
    // const res =await moviedb.movieImages('movie_id='+id.toString());
    /*moviedb.movieImages({ id : '419704' }).then(res => {
        console.log(res)
    }).catch(console.error)

*/
    console.log(data)
    console.log(similar)
    console.log(credits)

    console.log(data["backdrops"][0]["file_path"])

    return (
        <div className="grid grid-cols-2">
                <div className="col-start-1 overflow-hidden  pt-0">
                    <img src={'https://image.tmdb.org/t/p/original/'+data["posters"][0]["file_path"]} className="transform scale-75  relative inset-x-0 top-0 "  alt="dsds"/>
                </div>




            <div className="col-start-2 pl-4 pt-10">

                <h1 className="font-sans font-bold text-5xl  text-white text-base text-center ">
                    {info["title"]}


                </h1>
<ul className="text-center">
                {info.genres.map(item => <li className="inline-block box-border ml-2 text-lg pl-1 pr-1 rounded-sm bg-gray-500  " key={item.id}><span className="text-white ">{item.name}</span></li>)
                }
                </ul  >

                <div className="text-center">
                    <div className=" inline-block font-bold text-xl mb-2 text-gray-100">Release Date: {info["release_date"]}</div>
                    <div className=" inline-block font-bold text-xl mb-2 text-gray-100 ml-1  "> / Duration:  {info["runtime"]} min</div>

                </div>
                <div className="text-center">
                    <div className=" inline-block font-bold text-xl mb-2 text-gray-100 ml-2 ">Language: {info["original_language"]} </div>


                    <div className=" inline-block font-bold text-xl mb-2 text-gray-100 ml-2 ">User Score: {info["vote_average"]}</div>
                </div>

                <h2 className="text-white font-sans font-bold text-2xl text-center">Overview </h2>
                <p className=" text-xl mb-2 text-gray-100">
                    {info["overview"]}
                </p>
                <div>
                    <div className=" inline-block  text-xl mb-2 text-gray-100 ml-2 ">Status: {info["status"]}</div>
                    <div className=" inline-block  text-xl mb-2 text-gray-100 ml-2 ">Budget: $ {info["budget"]}</div>
                    <div className=" inline-block  text-xl mb-2 text-gray-100 ml-2 ">Revenue: $ {info["revenue"]}</div>
                </div>

                <div className=" flex flex-wrap flex-row  w-full overflow-y-scroll h-24 ">

                    {data.backdrops.map(item =><div><img  src={'https://image.tmdb.org/t/p/original/'+item.file_path} className="transform scale-5 w-40 "></img></div> )

                    }
                    {data.posters.map(item => <div><img  src={'https://image.tmdb.org/t/p/original/'+item.file_path} className=" transform scale-5 w-40 "></img></div>)

                    }
                </div>

            </div>

        </div>

    )


}
Movieid.getInitialProps = async ({query}) => {
    const _id = query.id;

    const moviedb = new MovieDb('9b30eddad32975fb2bec8125c8b2608b');
   // const res =await moviedb.movieImages('movie_id='+id.toString());
    const res =await moviedb.movieImages({id:_id.toString() });
    const  res2 = await moviedb.movieInfo({id:_id.toString() });
    const res3 = await  moviedb.movieCredits({id:_id.toString()});
    const res4 = await  moviedb.movieSimilar({id:_id.toString()});

    const data = res;
    const info = res2;
    const credits = res3;
    const similar = res4;

    //  const resp = await fetch(`/api/todos`);
    //const data = await resp.json();
    return {data,info,credits,similar}
}
Movieid.layout  = Movielayout;

export  default  Movieid;