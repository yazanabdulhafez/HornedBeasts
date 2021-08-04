import React from 'react';
import {Card,Button} from 'react-bootstrap';

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userVotes: 0,
    };
  }
  addNewVote = () => {
    this.setState({
      userVotes: this.state.userVotes + 1,
    });
  };

  render() {
    return (

   

      <Card bg='info' text='dark' style={{ width: '18rem' }}>
            <Card.Header closeButton>
            <Card.Title>{this.props.title}</Card.Title>
          </Card.Header>
        <Card.Img onClick={this.addNewVote}
          variant='top'
          src={this.props.img_source} />
        <Card.Body >
          <Card.Text className="descriptionText">
            {this.props.description}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="footerElements">
          <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-heart-fill" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
          </svg>({this.state.userVotes})</p>
          <Button variant="secondary" onClick={()=>this.props.modal(
            {
              img_source:this.props.img_source,
              description:this.props.description,
              title:this.props.title
            }
          )}>
              click me
            </Button>
        </Card.Footer>
      </Card>
    );
  }

}
export default HornedBeasts;
