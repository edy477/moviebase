import React,{useState,useEffect} from "react";
import MovieDb from "moviedb-promise";
import Link from "next/link";

const Searchbar = ()=> {
const [name,setName] = useState('');
const [results,setResults] = useState({results:[]})
    const moviedb = new MovieDb('9b30eddad32975fb2bec8125c8b2608b');
 //   const res =await moviedb.discoverMovie('sort_by=popularity.desc&with_genres='+genre);
   // const data = res;
    let names = 'contagion';

const  handleChange =  evt =>{

       console.log(evt.target.value )
        let tp = evt.target.value.toString();
       setName(evt.target.value.toString())

        if (tp.length>3)
        {
            moviedb.searchMovie({ query: tp.toString() }).then(res => {
//    console.log(res)

                setResults({results: res})
            }).catch(console.error)
            names  =tp;
        }



    }

    const updateMacros = async () => {
    const payload  ={
        "name" : name.toString()
    }
      /*  const res = await fetch('http://localhost:3000/genre/search', {
            method: 'post',
            body: JSON.stringify(payload)
        });
*/



};

    let tml = `This is a <a href="#">link</a>, for a test.`


//console.log(results)
    return(
<div>
<div  className="pl-5 relative flex flex-row  justify-start w-1/2" >
    <input  onChange={handleChange}
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            type="name" placeholder="ad aestra"/>


    <button  className="pl-2 absolute rounded-r font-bold bg-blue-900 text-white inset-y-0 right-0 pr-3" onClick={updateMacros}><Link  href="/search/[keywords]" as={`/search/${name}`}><a>Search</a></Link></button>


</div>



</div>

)
    };




export default  Searchbar;