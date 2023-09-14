import { categories } from '@/constants/categories'
import React from 'react'
import NavItem from './NavItem'

function NavLinks() {
    return (
        <nav className="flex items-center justify-center space-x-5 overflow-x-scroll border-b bg-white text-slate-800 scrollbar-hide dark:bg-slate-800 dark:text-white">
            {categories.map((category, index) => (
                <NavItem key={index} category={category} />
            ))}
        </nav>
    )
}

export default NavLinks
