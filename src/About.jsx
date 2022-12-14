import React from "react"
import star from "../src/start.jpg"
import { NavLink } from "react-router-dom"
import Common from './Common'

export default function About(){
    return(
      <>
      <Common
       name='About ' 
       second='We are a growing chain of delicous chefs collectively spreading sweet handcrafted works.'
      imgsrc={star} 
      visit='/contact' 
      btname="Contact us"/>
      </>
    )
}