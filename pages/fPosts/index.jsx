import { useRouter } from "next/router";
import { Button, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";

export default function Posts(props) {

    const router = useRouter();

    return (
        <Container className="d-flex justify-content-center align-items-center flex-column">
            <Button className="mt-2" onClick={()=>router.back()}>
                Back
            </Button>
            <Row className="mt-3 w-100">
                <ListGroup>
                    {props.posts.map(p=>(
                        <ListGroupItem key={p.id}>
                            <Link className="text-decoration-none" href={`/posts/${p.id}`}>{p.title}</Link>
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </Row>
        </Container>
    )
}



export async function getServerSideProps() {
    const res = await fetch('http://localhost:4000/posts');
    const posts = await res.json();
    return {
        props: {
            posts,
        }
    },
}