import React from 'react';

class Contact extends React.Component {
  
  render() {
    return(
      <div>
        <h1>Contact</h1>
        
        <p>Phone: 7202201556</p>
        <a href={"mailto:" + 'Joseph@MonksAndNinjas.com'}>Joseph@MonksAndNinjas.com</a>      
      </div>
    )
  }
}

export default Contact;
