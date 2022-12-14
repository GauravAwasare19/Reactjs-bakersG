import React from "react"
import star from "../src/baker.jpg"
import { NavLink } from "react-router-dom"
import Common from './Common'

export default function Home(){
    return(
      <>
      <Common 
        name='All the confectionery products at one place- ' 
        second='Explore more to see exciting offers!'
        imgsrc={star} 
        visit='/service' 
        btname="Explore"/>
      </>
    )
}