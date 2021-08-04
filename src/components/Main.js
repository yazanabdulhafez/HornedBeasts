import React from 'react';
import HornedBeasts from './HornedBeasts';
import { Row } from 'react-bootstrap';
import BeastImages from './data.json';
import FilterForm from './Form';

class Main extends React.Component {
constructor(props){
  super(props);
  this.state={
filterState:BeastImages
 }
};



 filterItem = (categItem) => {
   console.log('hello');
   console.log('cate'+categItem);
   if (categItem==='All'){
    this.setState({
      filterState:BeastImages
     
    });
   }else{
     console.log(BeastImages)
    let updatedItems = BeastImages.filter((Elemement) => {
       return Elemement.horns === categItem;
    });
    console.log(updatedItems);
    this.setState({
      filterState:updatedItems
     
    });
  }    
};

  render() {
    return (
      <main>
        <FilterForm filterItems={this.filterItem}/>
        <Row >
          {
            this.state.filterState.map((item, index) => {
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
