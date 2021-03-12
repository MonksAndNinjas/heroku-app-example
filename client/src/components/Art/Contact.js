import React from 'react';

class Contact extends React.Component {
  
  render() {
    return(
      <div className="contactContainer" >
        <h2>Contact</h2>
        
        <p>7202201556</p>
        <a href={"mailto:" + 'Joseph@MonksAndNinjas.com'}>Joseph@MonksAndNinjas.com</a>      
      </div>
    )
  }
}

export default Contact;
