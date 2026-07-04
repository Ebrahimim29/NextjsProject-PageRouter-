import Link from 'next/link';
import React from 'react';

export default function Index(props) {

    // console.log(props);
    
    return (
        <div>
            <h1>Welcome To Site:</h1>
            <Link href={"/about"}>About</Link><br/>
            <Link href={"/products"}>Products</Link><br/>
            <Link href={"/houses"}>Houses</Link>
            <ul>
                {props.posts.map(p=>(
                    <li key={p.id}>{p.title}</li>
                ))}
            </ul>
        </div>
    );
}

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()
    // console.log(posts.length);
    
    return {
        props: {
            posts,
        },
    }
}

