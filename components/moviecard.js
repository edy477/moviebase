import  React,{userSate,useEffect} from "react"
import Link from "next/link";

const Moviecard = ({title,id,imgUrl,genres})=> {

    //       <img src={'https://image.tmdb.org/t/p/w500/'+imgUrl}  className="transform scale-50 " alt={imgUrl}/>
//     {genres.map(item => <li className="text-gray-500">{item.name}</li>)}
    const tp ={
        "genres": [
            {
                "id": 28,
                "name": "Action"
            },
            {
                "id": 12,
                "name": "Adventure"
            },
            {
                "id": 16,
                "name": "Animation"
            },
            {
                "id": 35,
                "name": "Comedy"
            },
            {
                "id": 80,
                "name": "Crime"
            },
            {
                "id": 99,
                "name": "Documentary"
            },
            {
                "id": 18,
                "name": "Drama"
            },
            {
                "id": 10751,
                "name": "Family"
            },
            {
                "id": 14,
                "name": "Fantasy"
            },
            {
                "id": 36,
                "name": "History"
            },
            {
                "id": 27,
                "name": "Horror"
            },
            {
                "id": 10402,
                "name": "Music"
            },
            {
                "id": 9648,
                "name": "Mystery"
            },
            {
                "id": 10749,
                "name": "Romance"
            },
            {
                "id": 878,
                "name": "Science Fiction"
            },
            {
                "id": 10770,
                "name": "TV Movie"
            },
            {
                "id": 53,
                "name": "Thriller"
            },
            {
                "id": 10752,
                "name": "War"
            },
            {
                "id": 37,
                "name": "Western"
            }
        ]
    };


    console.log(genres[1])
   console.log(tp.genres[genres[1]])
    const genresstring = [];
    genres.forEach((element) => {
        genresstring.push(tp.genres[element]);

    } )
    console.log(genresstring)
    return(
        <div className="  p-4 rounded lg:w-64 mb-2">





            <img src={'https://image.tmdb.org/t/p/w500/'+imgUrl}  className="transform scale-20  rounded" alt={imgUrl}/>


            <Link href={'/movie/'+id}><a className=" ml-2 text-gray-100  font-bold font-sans font-light text-1xl">{title}</a></Link>

</div>

    )
};
export default  Moviecard;