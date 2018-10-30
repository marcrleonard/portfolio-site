import React, { Component } from 'react';
import SingleProject from './SingleProject.js'

class Currently extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {

    let curr = {
      'name': 'PixelStrings',
      'tags': 'PaaS',
      'short_desc': 'QD',
      // 'bg_img': '',
      'full_desc': `Currently, I am a core backend developer of PixelStrings,
        a platform by <a class="whiteLink" href="http://cinnafilm.com">Cinnafilm</a> . <a class='whiteLink' href="http://pixelstrings.com"> PixelStrings</a>
            specializes cloud video processing and delivery.
        My job is two fold - automating the allocation and orcehstration cloud compute resources for
        processing and delivery, and creating APIs to enable different type of
        video conversion formats.
        These services are accesed by the front end UI, as well as our public API.`,
      'technologies': ['python'],
      'full_media': 'img/pxs_screenshot.jpg',
      'links': ['pixelstrings.com']
    }

    let side = 'left'


    return (
      <div>
        <center>
          <h2>
            Currently
          </h2>
          <div>
            <SingleProject
              className='clear'
              key={curr.name.toString()}
              side={side}
              project={curr}
            />
          </div>
        </center>

      </div>
    );
  }
}

export default Currently;
