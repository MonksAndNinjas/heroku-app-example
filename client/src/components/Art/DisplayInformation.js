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
        <button onClick={() => this.handleClick('Current')} >Current</button>
        <button onClick={() => this.handleClick('Past')} >Past</button>
        <button onClick={() => this.handleClick('Events')} >Events</button>
        <button onClick={() => this.handleClick('About')} >About</button>
        <button onClick={() => this.handleClick('Contact')} >Contact</button>
      </div>
    )
  }
}

export default DisplayInformation;
