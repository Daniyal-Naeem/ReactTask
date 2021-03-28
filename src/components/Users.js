
import React from 'react';
import { Row, Col, Card, Button, Container } from "react-bootstrap"

const Users = () => {
    const inputData = [
        {
            id: 1,
            md: "3",
            name: "firstName",
            email: "abcd@xyz",
            phone: "01-023-04304-34",
            website: "abcd.com",
            heading: "anyone",
            description: "Your job is to code an app with posts of users. "

        },
        {
            id: 2,
            md: "3",
            name: "firstName",
            email: "abcd@xyz",
            phone: "01-023-04304-34",
            website: "abcd.com",
            heading: "anyone",
            description: "Your job is to code an app with posts of users. "
        },
        {
            id: 3,
            md: "3",
            name: "firstName",
            email: "abcd@xyz",
            phone: "01-023-04304-34",
            website: "abcd.com",
            heading: "anyone",
            description: "Your job is to code an app with posts of users. "
        },
        {
            id: 4,
            md: "3",
            name: "firstName",
            email: "abcd@xyz",
            phone: "01-023-04304-34",
            website: "abcd.com",
            heading: "anyone",
            description: "Your job is to code an app with posts of users. "
        },
        {
            id: 5,
            md: "3",
            name: "firstName",
            email: "abcd@xyz",
            phone: "01-023-04304-34",
            website: "abcd.com",
            heading: "anyone",
            description: "Your job is to code an app with posts of users. "
        },
        {
            id: 6,
            md: "3",
            name: "firstName",
            email: "abcd@xyz",
            phone: "01-023-04304-34",
            website: "abcd.com",
            heading: "anyone",
            description: "Your job is to code an app with posts of users. "
        },
        {
            id: 7,
            md: "3",
            name: "firstName",
            email: "abcd@xyz",
            phone: "01-023-04304-34",
            website: "abcd.com",
            heading: "anyone",
            description: "Your job is to code an app with posts of users. "
        },
        {
            id: 8,
            md: "3",
            name: "firstName",
            email: "abcd@xyz",
            phone: "01-023-04304-34",
            website: "abcd.com",
            heading: "anyone",
            description: "Your job is to code an app with posts of users. "
        },
    ];
    return (
        <Container>
            <Row className="mt-2">
                {inputData.map(
                    ({
                        id,
                        md,
                        name,
                        email,
                        phone,
                        website,
                        heading,
                        description,
                    }) => (
                        <Col key={id} md={md}>
                            <Card border="dark"className="mb-2">
                                <Card.Body>
                                    <Card.Title>{name}</Card.Title>
                                    <Card.Link href="#">{email}</Card.Link><br/>
                                    <Card.Link href="#">{phone}</Card.Link><br />
                                    <Card.Link href="#">{website}</Card.Link>
                                    <Card.Subtitle className="mb-2 text-muted mt-2">{heading}</Card.Subtitle>
                                    <Card.Text>
                                        {description}
                                    </Card.Text>
                                    <div className="text-center">
                                    <Button variant="outline-dark" block>Details</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
            </Row>
        </Container>

    )
}

export default Users;