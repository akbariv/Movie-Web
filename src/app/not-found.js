"use client";

import { FileSearch } from "@phosphor-icons/react/dist/ssr";

const Page = () => {
    return (
        <>
        <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
            <div className="flex justify-center items-center gap-2">
             <FileSearch size={32} className="text-color-accent"/>   
            <h1 className="text-color-accent text-2xl font-bold">Not Found</h1>
            </div>
        </div>
        </>
    )
}

export default Page;