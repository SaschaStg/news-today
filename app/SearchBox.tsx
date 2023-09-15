"use client"

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react"

const SearchBox = () => {
    const [input, setInput] = useState("")
    const router = useRouter();

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push(`/suchen?q=${input.toLowerCase()}`)
    }

    return (
        <form onSubmit={submitHandler} className="mx-auto flex items-center justify-between bg-white px-5 py-2 dark:bg-slate-800 dark:text-gray-50">
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)}
                placeholder="Newsthema suchen.."
                className="h-14 w-full flex-1 rounded-sm bg-gray-100 px-4 py-4 text-slate-800 outline-none placeholder:text-xs dark:bg-slate-700 dark:text-white"></input>

            <button disabled={!input} type="submit" className="bg-orange-600 p-4 text-white disabled:bg-grey-500">
                <MagnifyingGlassIcon className="h-6 w-6" />
            </button>
        </form>
    )
}

export default SearchBox
