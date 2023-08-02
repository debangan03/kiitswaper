import React from 'react'
import {BiSearch} from 'react-icons/bi'
import {MdAccountCircle} from 'react-icons/Md'
import { getServerSession } from "next-auth";
import Link from 'next/link'
import Signout from '../Signout'
import LogoutNav from './LogoutNav';
import LoginNav from './LoginNav';


async function Navbar(){
    const login = await getServerSession();
    if(login){
    return (
        <LoginNav/>

    )
}
else{
    return (
        <LogoutNav/>

    )
}
}

export default Navbar;