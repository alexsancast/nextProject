import React from "react";

export default function Post({ params }) {
    console.log(params)
    return <div>Post{params.id}</div>;
}