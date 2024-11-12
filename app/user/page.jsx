import React from "react";
import Post from "../components/Post";

async function loadData() {
    const res = await fetch("https://reqres.in/api/users");
    const data = await res.json();
    return data;
}

export default async function User() {
    const data = await loadData();
    return <div>
        {data.data.map((item) => (
            <Post key={item.id} post={item} />
        ))}

    </div>;
}
