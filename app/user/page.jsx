import React from "react";


async function loadData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return data;
}
export default async function User() {
    const data = await loadData();
    return <div>
        {data.map((item) => (
            <div key={item.id}>{item.title}</div>
        ))}
    </div>;
}
