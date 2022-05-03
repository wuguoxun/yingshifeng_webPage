import React from 'react'
import './Nav.css'
import {AiFillHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiTwotoneBook} from 'react-icons/ai'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDots} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {

  const [activeNav,setActiveNav]=useState('#')

  console.log(activeNav)

  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiFillHome/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><AiTwotoneBook/></a>
      <a href="#footer" onClick={()=> setActiveNav('#footer')} className={activeNav === '#footer' ? 'active' : ''}><BiMessageSquareDots/></a>
    </nav>
  )
}

export default Nav