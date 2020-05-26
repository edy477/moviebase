import React,{useState,useEffect} from "react";


const Defaultpage = ({movies}) => {

    let  message = 'vers'

    return(
        <div>
            <button aria-label={message} data-balloon-pos="left">Hover me!</button>

        </div>
    )
}

export default  Defaultpage;