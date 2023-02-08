import React from 'react';
import aboutPic from '../../assets/about_me_pic.jpg';

export default function About() {
    return (
        <div className='container'>
            <div className='row my-3 justify-content-center'>
                <div className='col-4 col-md-3 col-sm-12'>
                    <h2 className='ms-5'>About Me</h2>
                    <img className='rounded mt-3' src={aboutPic} alt="Me and my son" height={300}/>
                </div>
                <div className='col-6 mt-6'>
                    <p className='mt-6'>I am an aspiring full stack web developer looking to showcase what I have been able to accomplish so far in my coding bootcamp. I would love to speak with you about any project or employment. Just visit the contact page and leave me a message. You can also enjoy my portfolio and resume in the other pages. Thanks for stopping by and I hope to hear from you soon!</p>
                </div>
            </div>
        </div>
    );
}
