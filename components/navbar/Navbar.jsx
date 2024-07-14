"use client"
import Link from 'next/link'
import React,{useState} from 'react'
import { CiMenuBurger } from "react-icons/ci";
const Navbar = () => {
  const [nav,setNav] = useState(false)
  return (
    <header className='w-full h-[80px] shadow-md sticky z-10'>
      <nav className='relative w-full h-full'>
      <div className='flex justify-between max-w-[1340px] h-full mx-auto max-md:mx-2 items-center'>
        <div className='flex gap-5'>
        <h2 className='md:text-xl font-bold md:mr-10'>Siltie FM</h2>
            <Link href={`/`} className='links'>Home</Link>
            <Link href={`/`} className='links'>News</Link>
            <Link href={`/`} className='links'>Sport</Link>
            <Link href={`/`} className='links'>Bussiness</Link>
            <Link href={`/`} className='links'>Radio</Link>
            <Link href={`/`} className='links'>Technology</Link> 
        </div>
        <div className='flex justify-center items-center gap-4'>
            <button>Login</button>
            <button onClick={()=>setNav(!nav)}><CiMenuBurger className='w-[60px] h-[40px] hidden max-md:flex text-black z-30'/></button>
        </div>
        </div>
         
        <div className={`absolute top-0 ${nav?'right-0':'right-[-100%] tran'} w-[70%] min-h-[100vh] flex flex-col gap-6 justify-center items-center bg-slate-100 tran -z-30 md:hidden `}>
            <Link href={`/`} className=''>Home</Link>
            <Link href={`/`} className=''>News</Link>
            <Link href={`/`} className=''>Sport</Link>
            <Link href={`/`} className=''>Bussiness</Link>
            <Link href={`/`} className=''>Radio</Link>
            <Link href={`/`} className=''>Technology</Link> 
        </div>
      </nav>
    </header>
  )
}

export default Navbar
