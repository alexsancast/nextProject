'use client'
import Link from "next/link";

import React from "react";



export default function Post({ post }) {
    return <div className="flex flex-col items-center justify-center" key={post.id}>
        <Link href={`/posts/${post.id}`}>
            <img className="rounded-full" src={post.avatar} alt={post.first_name} />
            <h3>{post.first_name}</h3>

        </Link>

        <button className="bg-blue-500 text-white p-2 rounded-md" onClick={() => alert(post.id)}>Click me</button>
    </div>;

}


