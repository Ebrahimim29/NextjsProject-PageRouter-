import Link from 'next/link';
import React from 'react';
import { Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap';

export default function Index() {

    // console.log(props);

    return (
        <div>
            <h1>Welcome To Site:</h1>
            <Link href={"/about"}>About</Link><br />
            <Link href={"/products"}>Products</Link><br />
            <Link href={"/houses"}>Houses</Link>
            <br/>

            {/* <ul>
                {props.users.map(u => (
                    <li key={u.id}>{u.name}</li>
                ))}
            </ul> */}

            <Container>
                <Row className="mt-5">
                    <ListGroup>
                        <ListGroup.Item>
                            <Link href={"/users"}><div className='bg-info text-white p-3 fs-3 mb-1'>users</div></Link>
                            <Link href={"/posts"}><div className='bg-warning text-dark p-3 fs-3 mb-1'>posts</div></Link>
                        </ListGroup.Item>
                    </ListGroup>
                </Row>
            </Container>
 
        </div>
    );
}


