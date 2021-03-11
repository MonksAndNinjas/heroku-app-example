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
import logopic from '../images/logoMN.svg;

import { displayPhotos } from '../helpers/displayContent';
// styling
import '../css/artContainer.css';
// handles rendering of all art elements
class ArtContainer extends React.Component {
  state = {
    showMe: 'Current'
  }

  handleClick(e1, e2, e3, e4, e5) {
    document.getElementById(e1).style.color = 'white';
    document.getElementById(e1).style.background = 'black';
    
    document.getElementById(e2).style.color = 'black';
    document.getElementById(e2).style.background = 'white';
    
    document.getElementById(e3).style.color = 'black';
    document.getElementById(e3).style.background = 'white';
    
    document.getElementById(e4).style.color = 'black';
    document.getElementById(e4).style.background = 'white'; 
    
    document.getElementById(e5).style.color = 'black';
    document.getElementById(e5).style.background = 'white'; 
    
    this.setState({
      showMe: e1
    })
  }

  render() {
    return (
      <div className="container">
        <img id="logo" style={{width: "100%"}} src={monkslogo} alt="Monks And Ninjas" />
        <img id="MN" style={{width: "100%}} src={logopic} alt="Aztec Warrior" />
      
         <div className="navigation">
          <button id="Current" className="line" onClick={() => this.handleClick('Current', 'Past', 'Events', 'About', 'Contact')} >Current</button>
          <button id="Past" className="line" onClick={() => this.handleClick('Past', 'Current', 'Events', 'About', 'Contact')} >Past</button>
          <button id="Events" className="line" onClick={() => this.handleClick('Events', 'Current', 'Past', 'About', 'Contact')} >Events</button>
          <button id="About" className="line" onClick={() => this.handleClick('About', 'Current', 'Past', 'Events', 'Contact')} >About</button>
          <button id="Contact" className="line" onClick={() => this.handleClick('Contact', 'Current', 'Past', 'Events', 'About')} >Contact</button>
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
