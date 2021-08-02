import React from 'react';
import Card from 'react-bootstrap/Card';

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
      <Card style={{ width: '25rem' }}>
        <Card.Img onClick={this.addNewVote}
          variant='top'
          src={this.props.img_source} />
        <Card.Body>
          <Card.Text className="descriptionText">
            {this.props.description}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="footerElements">
          <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="orange" class="bi bi-heart-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
          </svg>({this.state.userVotes})</p>
        </Card.Footer>
      </Card>
    );
  }

}
export default HornedBeasts;
