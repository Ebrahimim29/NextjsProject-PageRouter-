import Link from "next/link";
import { ListGroup, ListGroupItem } from "react-bootstrap";

export default function Posts(props) {
    return (
        <div>
            <ListGroup>
                {props.posts.map(p => (
                    <ListGroupItem key={p.id}>
                        <Link className="text-text-decoration-none" href={`/posts/${p.id}`}>
                            {p.title}
                        </Link>    
                    </ListGroupItem>
                    
                ))}
            </ListGroup>
        </div>
    )
};

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()

    return {
        props: {
            posts,
        }
    }
}