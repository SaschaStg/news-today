"use client"

import { categories } from '@/constants/categories'
import React from 'react'
import NavItem from './NavItem'
import { usePathname } from 'next/navigation'

const NavLinks = () => {
    const pathname = usePathname();

    const isActive = (path: string) => {
        const newPath: any = pathname?.split('/').pop();
        return newPath === path;
    }
    return (
        <nav className="flex items-center justify-center space-x-5 overflow-x-scroll border-b bg-white text-slate-800 scrollbar-hide dark:bg-slate-800 dark:text-white">
            {categories.map((category, index) => (
                <NavItem key={index} category={category} isActive={isActive(category)} />
            ))}
        </nav>
    )
}

export default NavLinks
