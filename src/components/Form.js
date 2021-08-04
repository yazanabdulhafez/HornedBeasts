import React from 'react';
import { Form } from 'react-bootstrap';

class FilterForm extends React.Component {
  
  onChangeNumberOfHorns(event) {
    console.log(event.target.value);
    this.props.filterItems(event.target.value);
  }

  render() {
    return (
      <Form className="form">
      <Form.Control
      size='sm'
       as="select"
        custom
        onChange={this.onChangeNumberOfHorns.bind(this)}
      >
        <option value="All" >All</option>
        <option value="1" > One</option >
        <option value="2">Two</option>
        <option value="3" >Three</option>
        <option value="100" >one hundred</option>
      </Form.Control >
      </Form>
    );
  }
}

export default FilterForm;