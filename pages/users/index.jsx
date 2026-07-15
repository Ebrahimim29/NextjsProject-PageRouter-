import Link from "next/link";
import { useRouter } from "next/router";
import { Button, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";

export default function Users (props) {

    const router = useRouter()

    return(

        <Container className="d-flex justify-content-center align-items-center flex-column">
            
            <Button className="mt-2" onClick={()=>router.back()}>Back</Button>

            <Row className="mt-3 w-100">
                <ListGroup>
                    {props.users.map(u=>(
                        <ListGroupItem key={u.id}>
                            <Link className="text-decoration-none" href={`/users/${u.id}`}>
                                {u.name}
                            </Link>
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </Row>
        </Container>


        // <div>
        //     <ListGroup>
        //         {props.users.map(u=>(
        //             <ListGroup.Item key={u.id}>{u.name}</ListGroup.Item>
        //         ))}
        //     </ListGroup>
        // </div>
    )
};


export async function getServerSideProps() {
    const res = await fetch('http://localhost:4000/users')
    const users = await res.json()
    return {
        props: { users }
    }
}