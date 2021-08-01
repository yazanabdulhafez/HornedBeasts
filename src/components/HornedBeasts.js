import React from 'react';

class HornedBeasts extends React.Component {
  

  render() { 
    return ( 
      <div>
        <h2> {this.props.title}</h2>
        <img src={this.props.img_source} alt={this.props.title}  />
        <p>
          {this.props.description }
        </p>

      </div>
     );
  };

}
export default HornedBeasts;