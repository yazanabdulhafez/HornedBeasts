import React from 'react';
import {Card,Modal,Button} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

class SelectedBeast extends React.Component {
  render() {
    return (
      <>
        <Modal  show={this.props.showData} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.modalData.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card style={{ height: '250px' }}>
           <Card.Img src={this.props.modalData.img_source}
            alt={this.props.modalData.title}
          />
          <Card.Body>
          <Card.Text className="descriptionText">
            {this.props.modalData.description}
          </Card.Text>
        </Card.Body>
          </Card>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default SelectedBeast;
