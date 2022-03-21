import React from 'react'
import "./footer.css"
import playstore from "../../images/playstore.png"

import appstore from "../../images/appstore.png"

function Footer() {
  return (
<footer id="footer">
<div className='leftfooter'>
<h4> download our app</h4>
<img src={playstore} alt="playstore"/>
<img src={appstore} alt="appstore"/>
</div>
<div className='midfooter'>
<h1>dummy writes later will do</h1>
</div>
<div className='rightfooter'>
<h1>
    Follow us
</h1>
<a href='https://www.instagram.com/its_ankush_003/'>Instagram</a>
<a href='https://www.facebook.com/ankush.banerjee.1042/'>facebook</a>

</div>
</footer>
  )
}

export default Footer