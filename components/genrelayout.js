import React,{useState,useEffect} from "react";
import Mainlayout from "./mainlayout";
const Genrelayout = ({children}) => {

    return(
       <Mainlayout>
           <div>{children}</div>

       </Mainlayout>
    )
}

export default  Genrelayout;