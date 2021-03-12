import React from 'react';

class Contact extends React.Component {
  
  render() {
    return(
      <div className="contactContainer" >
        <h1>Contact</h1>
        
        <p>7202201556</p>
        <a href={"mailto:" + 'Joseph@MonksAndNinjas.com'}>Joseph@MonksAndNinjas.com</a>      
      </div>
    )
  }
}

export default Contact;
