import { ListGroup, ListGroupItem } from "react-bootstrap";

export default function Posts(props){
    return(
        <div>
            <ListGroup>
                {props.posts.map(p=>(
                    <ListGroupItem key={p.id}>{p.title}</ListGroupItem>
                ))}
            </ListGroup>
        </div>
    )
};

export async function getStaticProps(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()

    return {
        props: {
            posts,
        }
    }
}