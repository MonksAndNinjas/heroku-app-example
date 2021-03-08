import React from 'react';
// connects to store and allows use of functions in /actions
// I place fetch calls here because it avoids duplication of store arrays
import { connect } from 'react-redux';
import { fetchPhotos } from './actions/fetch';  // monksandninjas.github.io

class App extends React.Component {
  render() {
    return (
      <>
      </>
    );
  }
  // fetch data from API's
  componentDidMount() {
    this.props.fetchPhotos()
  }
}

const mapStateToProps = state => {
  return({
    photosData: state.photos,
  })
}

export default connect(mapStateToProps, {fetchPhotos})(App);
