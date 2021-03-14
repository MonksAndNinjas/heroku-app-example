import React from 'react';

class Contact extends React.Component {
  
  render() {
    return(
      <div className="contactContainer" >
        <h1>Contact</h1>
        
        <a href="tel:+7202201556">Tel: 7202201556</a>
        <a href={"mailto:" + 'Joseph@MonksAndNinjas.com'}>Email: Joseph@MonksAndNinjas.com</a>      
      </div>
    )
  }
}

export default Contact;
