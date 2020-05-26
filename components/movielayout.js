import React,{useState,useEffect} from "react";
import Mainlayout from "./mainlayout";
const Movielayout = ({children}) => {

    return(
        <Mainlayout>
            <div>{children}</div>

        </Mainlayout>
    )
}

export default  Movielayout;