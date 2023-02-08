import React from 'react';

export default function Resume() {
    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-6 justify-content-center'>
                    <h2>Resume</h2>
                    <br />
                    <br />
                    <p>You can view my resume <a href="https://docs.google.com/document/d/1qoQ_GSvTO1DmPxkwRE2vOqC5c2KeA4fFeHdY5FflaUM/edit?usp=sharing" target={'_blank'}>here</a> on Google Docs</p>
                    <br />
                    <h4>Front-End Knowledge</h4>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Front End Frameworks</li>
                        <li>Javascript</li>
                        <li>Javascript Frameworks</li>
                        <li>RESTful Services/APIs</li>
                    </ul>
                    <h4>Back-End Knowledge</h4>
                    <ul>
                        <li>MySQL + Sequellize</li>
                        <li>NoSQL</li>
                        <li>MongoDB + Mongoose</li>
                        <li>ExpressJS</li>
                        <li>NodeJS</li>
                        <li>Apollo Server</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
