import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import React from 'react';
import SelectedBeast from './components/SelectedBeast ';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      modalData: {},
    };
  }

  handleShow = (data) => {
    this.setState({
      modalShow: true,
      modalData: data
    });
  }

  handleClose = () => {
    this.setState({
      modalShow: false
    });
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main wantedModal={this.handleShow} />
        <SelectedBeast
          showData={this.state.modalShow}
          handleClose={this.handleClose}
          modalData={this.state.modalData}
        />
        <Footer />
      </React.Fragment >
    );
  }
}

export default App;
