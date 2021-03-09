import React from 'react';

class DisplayInformation extends React.Component {
  state = {
    showMe: 'Current'
  }
  
  handleClick(e) {
    console.log(e);
    this.setState({
        showMe: e
      })
    console.log(this.state.showMe);
  }
  
  render() {
    return(
      <div>
        <div>
          <button onClick={() => this.handleClick('Current')} >Current</button>
          <button onClick={() => this.handleClick('Past')} >Past</button>
          <button onClick={() => this.handleClick('Events')} >Events</button>
          <button onClick={() => this.handleClick('About')} >About</button>
          <button onClick={() => this.handleClick('Contact')} >Contact</button>
        </div>
        <div>
           { this.state.showMe === 'Current' (<h1>'Current'</h1>) : null }
           { this.state.showMe === 'Past' (<h1>'Past'</h1>) : null }
           { this.state.showMe === 'Events' (<h1>'Events'</h1>) : null }    
           { this.state.showMe === 'About' (<h1>'About'</h1>) : null } 
           { this.state.showMe === 'Contact' (<h1>'Contact'</h1>) : null }                                    
        </div>
      </div>
    )
  }
}

export default DisplayInformation;
