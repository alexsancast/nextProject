'use client'

import React from "react";



export default function Post({ post }) {
    return <div key={post.id}>
        <h3>{post.title}</h3>

        <button onClick={() => alert(post.id)}>Click me</button>
    </div>;

}


