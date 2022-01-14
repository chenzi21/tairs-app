import React from "react";
import Link from "next/link";

export default function NavCategory({title}){
    return(
        <div className="title">
            <Link href={{pathname:`/${title}`}}>
                {title}
            </Link>
        </div>
    )
}