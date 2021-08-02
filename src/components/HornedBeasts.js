import React from 'react';
import './Main.css';
class HornedBeasts extends React.Component {


  render() {
    return (
      <div>
        <h2> {this.props.title}</h2>
        <div className="flex">
          <img src={this.props.img_source} alt={this.props.title} />
        </div>
        <div className="flex">
          <p>
            {this.props.description}
          </p>
        </div>
      </div>
    );
  }

}
export default HornedBeasts;
