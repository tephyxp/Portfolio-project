
'use client'
import {
  RiGithubFill, 
  RiLinkedinFill,
  RiSlackFill,
} from 'react-icons/ri';

import Link from 'next/link';

//icons 

const icons =[
  {
    path:'/',
    name:<RiLinkedinFill />    
  },
  {
    path:'/',
    name:<RiGithubFill />    
  },
  {
    path:'/',
    name:<RiSlackFill />    
  },
]

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) =>{
        return <Link href={icon.path} key={index}>
        <div className={`${iconStyles}`}>{icon.name}</div></Link>
      })}
      </div>
  )
}

export default Socials