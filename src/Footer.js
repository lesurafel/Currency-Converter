import React from 'react';
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className = "container">
      <div className="row border-top p-2">
        <div className="col-12 col-md-6 my-2">
          <p><small class="text-secondary">Copyright © Surafel Seyoum. 2020. All Rights Reserved</small></p>
        </div>
        <div className="col-12 col-md-6 my-md-2 ">
          <div class="d-flex justify-content-md-end">
            <div class="link-element"><a href="https://www.linkedin.com/in/lesurafel/" target='_block'><i class="fa fa-linkedin"></i></a></div>
            <div class="link-element"><a href="https://www.github.com/lesurafel" target='_block'><i class="fa fa-github"></i></a></div>
            <div class="link-element"><a href="https://www.facebook.com/surafel.mehari.3" target='_block'><i class="fa fa-facebook-f"></i></a></div>
            <div class="link-element"><a href="/"><i class="fa fa-twitter"></i></a></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
