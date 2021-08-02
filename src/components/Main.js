import React from 'react';
import HornedBeasts from './HornedBeasts';
import BeastPictuers from './assets/data.json';
import { Container, Col, Row } from 'react-bootstrap';

class Main extends React.Component {
  render() {
    return (
      <main>
        <Container fluid>
          <Row fluid='md'>
            {BeastPictuers.map((beast, idx) => (
              <Col key={idx}>
                <HornedBeasts
                  img_source={beast.image_url}
                  title={beast.title}
                  description={beast.description}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </main>);
  }
}

export default Main;
