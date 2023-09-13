import { Bars4Icon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className="bg-orange-600 dark:bg-slate-900 text-white shadow-sm">
            <div className="flex items-center justify-between p-10">
                <Link href="/" className="font-serif text-4xl">
                    News
                    <span className="underline decoration-gray-200 decoration-2 pl-2">
                        Today
                    </span>

                </Link>
                <div className="space-x-5 flex items-center">
                    <Bars4Icon className="h-6 w-6 cursor-pointer" />
                </div>
            </div>
        </header>
    )
}

export default Header
