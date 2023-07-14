'use client'

import Link from "next/link"
import { useState } from "react"

export default function PassForm(){

    const [pass, setPass] = useState("")

    return (
        <div className="flex flex-col gap-2 text-center">
            <label htmlFor="pass">Password</label>
            <input className="text-black" name="pass" type="text" onChange={(value)=>setPass(value.target.value)}/>
            <Link className="bg-gray-200 text-black uppercase rounded-sm" href={`/${pass}`} >Ingresar</Link>
        </div>
    )
}