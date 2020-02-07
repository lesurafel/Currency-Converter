import React from 'react';
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className = "container">
      <div className="row border-top p-2">
        <div className="col-12 col-md-6 my-2">
          <p><small class="text-secondary">Copyright © Surafel Seyoum. 2019. All Rights Reserved</small></p>
        </div>
        <div className="col-12 col-md-6 my-2">
          <div class="d-flex">
            <Link to="/"><p className='px-1'>facebook</p></Link>
            <Link to="/"><p className='px-1'>linkedin</p></Link>
            <Link to="/"><p className='px-1'>github</p></Link>
            <Link to="/"><p className='px-1'>twitter</p></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
