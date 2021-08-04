import React from 'react';
import { Form } from 'react-bootstrap';

class FilterForm extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {value: 'All'};

  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // handleChange(event) {
  //   this.setState({value: event.target.value});
  // }

  // handleSubmit(event) {
  //   alert('you choose beasts with : ' + this.state.value);
  //   event.preventDefault();
  // }
  onChangeColor(event) {
    console.log(event.target.value);
    this.props.filterItems(event.target.value);
  }

  render() {
    return (
      <Form.Control
        as="select"
        custom
        onChange={this.onChangeColor.bind(this)}
      >
        <option value="All" >All</option>
        <option value="1" > One</option >
        <option value="2">Two</option>
        <option value="3" >Three</option>
        <option value="100" >one hundred</option>
      </Form.Control >

    );
  }
}

export default FilterForm;