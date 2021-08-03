import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import React from 'react';
import BeastImages from './components/data.json';
import SelectedBeast from './components/SelectedBeast ';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      BeastPictuers: BeastImages,
      modalShow: false,
      modalData: {},
    };
  }

  handleShow = (data) => {
    this.setState = {
      modalShow: true,
      modalData: data
    };
  }

  handleClose = () => {
    this.setState = {
      modalShow: false
    };
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main wantedModal={this.handleShow} data={this.state.BeastPictuers} />
        <SelectedBeast action={this.handleshow}
          showData={this.state.modalshow}
          handleClose={this.handleClose}
          modalData={this.state.modalData}
        />
        <Footer />
      </React.Fragment >
    );
  }
}

export default App;
