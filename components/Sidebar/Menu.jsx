"use client";

import React from 'react'
import { menu } from '@/utils/menu'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Menu() {
    return (
        <ul>
            {
                menu.map(item => (<Navlink key={"navlink" + item.id} item={item} />))
            }
        </ul>
    )
}

const Navlink = ({ item }) => {
    const pathname = usePathname()
    return (
        <Link href={item.path} >
            <li className='group flex relative items-center p-3 pl-8 gap-5 overflow-hidden cursor-pointer'>
                <div className='-z-10 opacity-25 absolute top-0 left-0 w-full h-full bg-slate-400 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out'></div>
                <item.icon></item.icon>
                {item.title}
                {
                    pathname === item.path && (
                        <div className='absolute w-1 h-full top-0 right-0 bg-green-400'></div>
                    )
                }
            </li>
        </Link>
    )
}