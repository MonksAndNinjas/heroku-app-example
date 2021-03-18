import React from 'react';
// helper for social icons
import { SocialIcon } from 'react-social-icons';
// styling
import '../css/SocialMedia.css'
// displays Social Media icons in footer
class SocialMedia extends React.Component {

  render() {
    return (
      <div id="socialMedia">
        <SocialIcon style={{ overflow: 'visible', height: '25px', width: '25px' }} url="https://www.instagram.com/monksandninjas/?hl=en" />
        <SocialIcon style={{ overflow: 'visible', height: '25px', width: '25px' }} url="https://www.linkedin.com/in/joseph-jimenez-31794711b/" />
        <SocialIcon style={{ overflow: 'visible', height: '25px', width: '25px' }} url="https://twitter.com/monksandninjas" />
        <SocialIcon style={{ overflow: 'visible', height: '25px', width: '25px' }} url="https://www.facebook.com/Monks-And-Ninjas-315010412179306" />
      </div>
    );
  }
}

export default SocialMedia;
