import Link from "next/link";
import React from "react";
import { Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";

export default function Index() {
  // console.log(props);

  return (
    <div>
      <h1>Welcome To Site:</h1>
      <Link href={"/about"}>About</Link>
      <br />
      <Link href={"/products"}>Products</Link>
      <br />
      <Link href={"/houses"}>Houses</Link>
      <br />

      {/* <ul>
                {props.users.map(u => (
                    <li key={u.id}>{u.name}</li>
                ))}
            </ul> */}

      <Container className="d-flex justify-content-center align-items-center">
        <Row className="mt-5 w-100">
          <ListGroup>
            <ListGroup.Item>
              <Link
                href={"/users"}
                className="bg-info text-white p-3 fs-3 mb-1 w-100 d-block text-decoration-none"
              >
                users
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link
                href={"/posts"}
                className="bg-warning text-dark p-3 fs-3 mb-1 w-100 d-block text-decoration-none"
              >
                posts
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link
                href={"/admin"}
                className="bg-success text-dark p-3 fs-3 mb-1 w-100 d-block text-decoration-none"
              >
                admin
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link
                href={"/admin/panel"}
                className="bg-danger text-dark p-3 fs-3 mb-1 w-100 d-block text-decoration-none"
              >
                admin-panel
              </Link>
            </ListGroup.Item>
          </ListGroup>
        </Row>
      </Container>
    </div>
  );
}
