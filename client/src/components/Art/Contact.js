import React from 'react';

import phoneSymbol from '../../images/phoneSymbol.svg';
import emailSymbol from '../../images/mailsymbol.svg';

class Contact extends React.Component {
  
  render() {
    return(
      <div className="contactContainer" >
        <a href="tel:+7202201556"><img id="phone" style={{width: "7%"}} src={phoneSymbol} alt="telephone" /></a>
        <a href={"mailto:" + 'Joseph@MonksAndNinjas.com'}><img id="email" style={{width: "7%"}} src={emailSymbol} alt="email" /></a>      
      </div>
    )
  }
}

export default Contact;
