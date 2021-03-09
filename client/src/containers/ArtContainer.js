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
    showMe: 'Current'
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

        { displayPhotos(this.props.photosData) ? (
          <div className="artsWrapper">
           { this.state.showMe === 'Current' ? (<h1>Current</h1>) : null }
           { this.state.showMe === 'Events' ? (<h1>Events</h1>) : null }    
           { this.state.showMe === 'About' ? (<h1>About</h1>) : null } 
           { this.state.showMe === 'Contact' ? (<h1>Contact</h1>) : null } 
            <React.Fragment>
  {this.state.showMe === 'Past' ? (<ArtArchive category={this.props.photosData.photos.signature} type={"signature"} />) : null } 
  {this.state.showMe === 'Past' ? (<ArtArchive category={this.props.photosData.photos.paintings} type={"paintings"} />) : null } 
  {this.state.showMe === 'Past' ? (<ArtArchive category={this.props.photosData.photos.digital} type={"digital"} />) : null } 
  {this.state.showMe === 'Past' ? (<ArtArchive category={this.props.photosData.photos.drawings} type={"drawings"} />) : null } 
          </React.Fragment>
            <Art />
          </div>
          ) : (
            null
          )}
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
