import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';


export default function App() {
  return (
    <>
    <Card>
      <Card.Header as="h5">Experimental Grab Plugin</Card.Header>
      <Card.Body>
        <Card.Title>Just tru to login with Google</Card.Title>
        <Card.Text>
          Please, use your gmail account.
        </Card.Text>
        <Button variant="primary">Login</Button>
      </Card.Body>
    </Card>
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      You clicked me {count} times
    </button>
  );
}