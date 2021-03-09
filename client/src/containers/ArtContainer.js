import React from 'react';
// imports art component
import Art from '../components/Art/Art';
import ArtArchive from '../components/Art/ArtArchive';
import DisplayInformation from '../components/Art/DisplayInformation';
// connects to store and allows use of functions in /actions
import { connect } from 'react-redux';

import { displayPhotos } from '../helpers/displayContent';
// styling
import '../css/artContainer.css';
// handles rendering of all art elements
class ArtContainer extends React.Component {
  state = {
    showMe: 'Current
  }

  handleClick(e) {
    this.setState({
      showMe: e
    })
  }

  render() {
    return (
      <div className="container">
        <h1>Monks And Ninjas</h1>
        
         <div>
          <button onClick={() => this.handleClick('Current')} >Current</button>
          <button onClick={() => this.handleClick('Past')} >Past</button>
          <button onClick={() => this.handleClick('Events')} >Events</button>
          <button onClick={() => this.handleClick('About')} >About</button>
          <button onClick={() => this.handleClick('Contact')} >Contact</button>
        </div>

{this.state.ShowMe === 'Past' ? (        

        { displayPhotos(this.props.photosData) ? (
          <div className="artsWrapper">
            <React.Fragment>
              <ArtArchive category={this.props.photosData.photos.signature} type={"signature"} />
              <ArtArchive category={this.props.photosData.photos.paintings} type={"paintings"} />
              <ArtArchive category={this.props.photosData.photos.digital} type={"digital"} />
              <ArtArchive category={this.props.photosData.photos.drawings} type={"drawings"} />
            </React.Fragment>
            <Art />
          </div>
          ) : (
            null
          )}
  ) : null }
      </div>
    )
  }
}
// makes photos from store accessable
const mapStateToProps = state => {
  return({
    photosData: state.photos
  })
}

export default connect(mapStateToProps)(ArtContainer);
