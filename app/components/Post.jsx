'use client'
import Link from "next/link";

import React from "react";



export default function Post({ post }) {
    return <div key={post.id}>
        <Link href={`/posts/${post.id}`}>
            <h3>{post.first_name}</h3>
            <img src={post.avatar} alt={post.first_name} />
        </Link>

        <button onClick={() => alert(post.id)}>Click me</button>
    </div>;

}


