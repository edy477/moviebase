import React from "react";
import Sidebar from "./sidebar";
import Link from "next/link";

import Searchbar from "./searchbar";
const Mainlayout  = ({children}) => {
    /**/
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
    return(

        <div className="grid grid-cols-3    gap-0   w-full h-full">


            <div className="col-start-1   row-span-4 pl-1 bg-gray-900 w-full h-full max-h-full pt-4 border-r-2 border-gray-700 ">

                <div className="md:relative mx-auto lg:float-right lg:px-6">
                    <ul className="list-reset flex flex-row md:flex-col text-center md:text-left">



                        {tp.genres.map( item => <li className="mr-3 flex-1" key={item.id}>
                            <Link href={'/genres/'+item.id} ><a className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500">
                                <span
                                    className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">{item.name}</span>
                                </a></Link></li>)

                        }

                    </ul>
                </div>

            </div>

            <div className="pl-20  row-span-4  max-h-full pr-20 pt-10 bg-gray-800  col-start-2  col-span-2 row-span-2 w-full h-screen  ">
<Searchbar/>
                {children}</div>
        </div>
    )

}

export default  Mainlayout;