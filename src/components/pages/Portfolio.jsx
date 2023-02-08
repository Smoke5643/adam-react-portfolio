import React from 'react';
import noteTaker from '../../assets/note_taker.png'
import weatherDashboard from '../../assets/weather_dashboard.png'
import sofaKing from '../../assets/sofa_king.png'
import socialMedia from '../../assets/social_media.gif'
import ecommerce from '../../assets/e-commerce.gif'
import employeeTracker from '../../assets/employee-tracker.gif'

export default function Portfolio() {
  return (
    <div className='container'>
      <div className='my-3'>
        <h2>My Portfolio</h2>
        <br />
        <br />
      </div>
      <div className='row my-3 justify-content-center'>
        <div className='col-4 my-2 me-2 card border border-secondary'>
          <a className='m-2' href="https://quiet-river-37193.herokuapp.com/" target='_blank' rel="noreferrer">Sofa King</a>
          <img src={sofaKing} alt="Note Taker app" />
          <div className='card-body'>
            <a href="https://github.com/kassrojas/sofa-king-cool" target='_blank' rel="noreferrer">GitHub Repository</a>
          </div>
        </div>
        <div className='col-4 my-2 card border border-secondary'>
          <a className='m-2' href="https://pacific-wildwood-35009.herokuapp.com/" target='_blank' rel="noreferrer">Note Taker</a>
          <img src={noteTaker} alt="Note Taker app" />
          <div className='card-body'>
            <a href="https://github.com/Smoke5643/note-taker" target='_blank' rel="noreferrer">GitHub Repository</a>
          </div>
        </div>
        <div className='col-4 my-2 card border border-secondary'>
          <a className='m-2' href="https://smoke5643.github.io/weather-dashboard/" target='_blank' rel="noreferrer">Weather Dashboard</a>
          <img src={weatherDashboard} alt="Note Taker app" />
          <div className='card-body'>
            <a href="https://github.com/Smoke5643/weather-dashboard" target='_blank' rel="noreferrer">GitHub Repository</a>
          </div>
        </div>
        <div className='col-4 my-2 card border border-secondary'>
          <a className='m-2' href="https://drive.google.com/file/d/1TejKQjwF-qJIXWneMWBSH9KkTvxl48Gd/view" target='_blank' rel="noreferrer">Social Media API Video Walkthrough</a>
          <img src={socialMedia} alt="Note Taker app" />
          <div className='card-body'>
            <a href="https://github.com/Smoke5643/social-media-api" target='_blank' rel="noreferrer">GitHub Repository</a>
          </div>
        </div>
        <div className='col-4 my-2 card border border-secondary'>
          <a className='m-2' href="https://drive.google.com/file/d/1a0494cENN64bKb94ctxINzm8sVgSX4Tf/view" target='_blank' rel="noreferrer">E-Commerce Backend Video Walkthrough</a>
          <img src={ecommerce} alt="Note Taker app" />
          <div className='card-body'>
            <a href="https://github.com/Smoke5643/e-commerce-backend" target='_blank' rel="noreferrer">GitHub Repository</a>
          </div>
        </div>
        <div className='col-4 my-2 card border border-secondary'>
          <a className='m-2' href="https://drive.google.com/file/d/12LTUjh2h-JAjHUPF92JPyocMNon-jYIv/view" target='_blank' rel="noreferrer">Employee Tracker Video Walkthrough</a>
          <img src={employeeTracker} alt="Note Taker app" />
          <div className='card-body'>
            <a href="https://github.com/Smoke5643/employee-tracker" target='_blank' rel="noreferrer">GitHub Repository</a>
          </div>
        </div>
      </div>
    </div>
  );
}
