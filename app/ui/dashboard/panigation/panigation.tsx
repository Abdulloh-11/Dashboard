"use client"
import React from "react";
import styles from "./panigation.module.css";
import {usePathname, useSearchParams, useRouter} from "next/navigation";
import {inspect} from "util";

export default function  Panigation({count}:{count:number | undefined}){
    const searchParams = useSearchParams()
    const {replace} = useRouter()
    const pathname = usePathname()
    const params = new URLSearchParams(searchParams ? searchParams : "")
    const page = Number(params.get("page")) || 1
    const ITEM_PER_PAGE = 2
    const hasPrev = ITEM_PER_PAGE * (page - 1) > 0
    const hasNext = ITEM_PER_PAGE * (page - 1) + ITEM_PER_PAGE < Number(count)
    const handleChange = (type: string)=>{
        type === "prev" ? params.set("page", (page - 1).toString()) :
            params.set("page", (page + 1).toString())
        replace(`${pathname}?${params}`)
    }
    return (
        <div className={styles.container}>
            <button className={styles.button} disabled={!hasPrev} onClick={()=>handleChange("prev")}>
                Previev

            </button>

            <button className={styles.button} disabled={!hasNext} onClick={()=>handleChange("next")}>
                Next

            </button>

        </div>
    )

}
