import React from 'react';
import noteTaker from '../../assets/note_taker.png'
import weatherDashboard from '../../assets/weather_dashboard.png'

export default function Portfolio() {
  return (
    <div className='container'>
      <div className='row  my-3 justify-content-center'>
        <h2>My Portfolio</h2>
        <br />
        <br />
        <div className='col-4 card border border-secondary'>
          <a className='m-2' href="https://pacific-wildwood-35009.herokuapp.com/" target='_blank' rel="noreferrer">Deployed Application</a>
          <img src={noteTaker} alt="Note Taker app" />
          <div className='card-body'>
            <a href="https://github.com/Smoke5643/note-taker" target='_blank' rel="noreferrer">GitHub Repository</a>
          </div>
        </div>
        <div className='col-4 card border border-secondary'>
          <a className='m-2' href="https://smoke5643.github.io/weather-dashboard/" target='_blank' rel="noreferrer">Deployed Application</a>
          <img src={weatherDashboard} alt="Note Taker app" />
          <div className='card-body'>
            <a href="https://github.com/Smoke5643/weather-dashboard" target='_blank' rel="noreferrer">GitHub Repository</a>
          </div>
        </div>
        <div className='col-4 card border border-secondary'>
          <a className='m-2' href="https://pacific-wildwood-35009.herokuapp.com/" target='_blank' rel="noreferrer">Deployed Application</a>
          <img src={noteTaker} alt="Note Taker app" />
          <div className='card-body'>
            <a href="https://github.com/Smoke5643/note-taker" target='_blank' rel="noreferrer">GitHub Repository</a>
          </div>
        </div>
        <div className='col-4 card border border-secondary'>
          <a className='m-2' href="https://pacific-wildwood-35009.herokuapp.com/" target='_blank' rel="noreferrer">Deployed Application</a>
          <img src={noteTaker} alt="Note Taker app" />
          <div className='card-body'>
            <a href="https://github.com/Smoke5643/note-taker" target='_blank' rel="noreferrer">GitHub Repository</a>
          </div>
        </div>
        <div className='col-4 card border border-secondary'>
          <a className='m-2' href="https://pacific-wildwood-35009.herokuapp.com/" target='_blank' rel="noreferrer">Deployed Application</a>
          <img src={noteTaker} alt="Note Taker app" />
          <div className='card-body'>
            <a href="https://github.com/Smoke5643/note-taker" target='_blank' rel="noreferrer">GitHub Repository</a>
          </div>
        </div>
        <div className='col-4 card border border-secondary'>
          <a className='m-2' href="https://pacific-wildwood-35009.herokuapp.com/" target='_blank' rel="noreferrer">Deployed Application</a>
          <img src={noteTaker} alt="Note Taker app" />
          <div className='card-body'>
            <a href="https://github.com/Smoke5643/note-taker" target='_blank' rel="noreferrer">GitHub Repository</a>
          </div>
        </div>
      </div>
    </div>
  );
}
