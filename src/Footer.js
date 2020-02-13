import React from 'react';
const Footer = () => {
  return (
    <div className = "container">
      <div className="row border-top p-2">
        <div className="col-12 col-md-6 my-2">
          <p><small className="text-secondary">Copyright © Surafel Seyoum. 2020. All Rights Reserved</small></p>
        </div>
        <div className="col-12 col-md-6 my-md-2 ">
          <div className="d-flex justify-content-md-end">
            <div className="link-element"><a href="https://www.linkedin.com/in/lesurafel/" target='_block'><i className="fa fa-linkedin"></i></a></div>
            <div className="link-element"><a href="https://www.github.com/lesurafel" target='_block'><i className="fa fa-github"></i></a></div>
            <div className="link-element"><a href="https://www.facebook.com/surafel.mehari.3" target='_block'><i className="fa fa-facebook-f"></i></a></div>
            <div className="link-element"><a href="/"><i className="fa fa-twitter"></i></a></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
