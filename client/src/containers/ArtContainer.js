import React from 'react';
// imports art component
import Art from '../components/Art/Art';
import ArtArchive from '../components/Art/ArtArchive';
import Current from '../components/Art/Current';
import Events from '../components/Art/Events';
import About from '../components/Art/About';
import Contact from '../components/Art/Contact';
// connects to store and allows use of functions in /actions
import { connect } from 'react-redux';
// import logo image
import monkslogo from '../images/MonksAndNinjasTitle.svg';

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
        <img src={monkslogo} alt="Monks And Ninjas" />
        
         <div>
          <button onClick={() => this.handleClick('Current')} >Current</button>
          <button onClick={() => this.handleClick('Past')} >Past</button>
          <button onClick={() => this.handleClick('Events')} >Events</button>
          <button onClick={() => this.handleClick('About')} >About</button>
          <button onClick={() => this.handleClick('Contact')} >Contact</button>
        </div>                               

           { this.state.showMe === 'Current' ? (<Current />) : null }
           { this.state.showMe === 'Events' ? (<Events />) : null }    
           { this.state.showMe === 'About' ? (<About />) : null } 
           { this.state.showMe === 'Contact' ? (<Contact />) : null } 

        { displayPhotos(this.props.photosData) ? (
          <div className="artsWrapper">
            <React.Fragment>
              {this.state.showMe === 'Current' ? (<ArtArchive category={this.props.photosData.photos.current} type={"current"} />) : null }
          
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
