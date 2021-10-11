import * as React from 'react';
import { Container, Button } from 'reactstrap';
import './home.scss'

function Home(props) {
    return (
        <Container>
            <div className="App">
                <Button color="danger">Danger!</Button>
                <h1 className="greeting"> Hello, World!! </h1>
            </div>
        </Container>
    );
}

export default React.memo(Home);