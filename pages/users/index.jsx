import { ListGroup, ListGroupItem } from "react-bootstrap";

export default function Users (props) {
    return(
        <div>
            <ListGroup>
                {props.users.map(u=>(
                    <ListGroup.Item key={u.id}>{u.name}</ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    )
};


export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()

    return {
        props: {
            users,
        },
    }
}