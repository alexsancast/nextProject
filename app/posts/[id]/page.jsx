import React from "react";

async function loadDataPost(id) {
    const res = await fetch(`https://reqres.in/api/users/${id}`);
    const data = await res.json();
    return data;
}
export default async function Post({ params }) {
    const data = await loadDataPost(params.id);
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <img className="rounded-full" src={data.data.avatar} alt={data.data.first_name} />
            <h2>{data.data.first_name}</h2>
            <h3>{data.data.last_name}</h3>
            <h4>{data.data.email}</h4>

        </div>
    );
}
