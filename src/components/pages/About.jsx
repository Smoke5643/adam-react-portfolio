import React from 'react';
import aboutPic from '../../assets/about_me_pic.jpg';

export default function About() {
    return (
        <div className='container'>
            <div className='row my-3'>
                <div className='col-4 col-sm-12'>
                    <h2>About Me</h2>
                    <img className='rounded' src={aboutPic} alt="Me and my son" height={300}/>
                </div>
                <div className='col-6 col-sm-12'>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum nemo natus eligendi earum aliquam libero possimus eaque nulla pariatur eos ad sit temporibus corporis beatae laboriosam, perspiciatis rerum, provident sed?</p>
                </div>
            </div>
        </div>
    );
}
