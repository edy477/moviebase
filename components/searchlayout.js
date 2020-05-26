import React,{useState,useEffect} from "react";
import Mainlayout from "./mainlayout";
const Searchlayout = ({children}) => {

    return(
        <Mainlayout>
            <div>{children}</div>

        </Mainlayout>
    )
}

export default  Searchlayout;