import React from 'react';
const Footer = () => {
  return (
    <div className = "container">
      <div className="row border-top p-2">
        <div className="col-12 col-md-6 my-2">
          <p><small class="text-secondary">Copyright © Surafel Seyoum. 2019. All Rights Reserved</small></p>
        </div>
        <div className="col-12 col-md-6 my-2">
          <div class="d-flex">
            /*<div class="link-element ml-0"><a href="https://www.linkedin.com/in/lesurafel/"><i class="fab fa-linkedin"></i></a></div>
            <div class="link-element"><a href="https://www.github.com/lesurafel"><i class="fab fa-github"></i></a></div>
            <div class="link-element"><a href="https://www.facebook.com/surafel.mehari.3"><i class="fab fa-facebook-f"></i></a></div>
            <div class="link-element mr-4"><a href="#"><i class="fab fa-twitter"></i></a></div>*/
            <p>facebook</p>
            <p>linkedin</p>
            <p>github</p>
            <p>twitter</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
