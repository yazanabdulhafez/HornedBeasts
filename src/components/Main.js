import React from 'react';
import HornedBeasts from './HornedBeasts';
import { Row } from 'react-bootstrap';
import BeastImages from './data.json';

class Main extends React.Component {
  render() {
    return (
      <main>
        <Row >
          {
            BeastImages.map((item, index) => {
              return (
                <HornedBeasts
                  key={index}
                  img_source={item.image_url}
                  title={item.title}
                  description={item.description}
                  modal={this.props.wantedModal}
                />
              );
            })
          }
        </Row>
      </main>);
  }
}

export default Main;
