import React, { useState } from 'react';
import emailValidator from '../../utils/emailValidator'

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { target } = e;
        const inputName = target.name;
        const inputValue = target.value

        if (inputName === 'name') {
            setName(inputValue);
        } else if (inputName === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!name && !email && !message) {
            setError('All fields required for submission!')
        }
        if (!name) {
            setError('Enter your name to continue!')
        }
        if (!email && !emailValidator(email)) {
            setError('Enter a valid email to continue!')
        } 
        if (!message) {
            setError('Enter a message to continue!')
        }

        setName('');
        setEmail('');
        setMessage('');
    }

    return (
        <form>
            <fieldset>
                <div className='row justify-content-center'>
                    <div className='col-6'>
                        <div className="form-group">
                            <label name='name' class="col-form-label mt-4" for="inputDefault">Name:</label>
                            <input onChange={handleChange} type="text" className="form-control" placeholder="Enter your name" id="inputDefault" />
                        </div>
                        <div className="form-group">
                            <label for="inputEmail" className="form-label mt-4">Email address:</label>
                            <input name='email'onChange={handleChange} type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter your email address" />
                        </div>
                        <div class="form-group">
                            <label for="exampleTextarea" class="form-label mt-4">Message:</label>
                            <textarea name='message'onChange={handleChange} className="form-control" id="exampleTextarea" rows="3" placeholder='Enter your message'></textarea>
                        </div>
                        <button onClick={handleFormSubmit} type="button" className="btn btn-primary mt-4">Submit</button>
                    </div>
                </div>
                {error && (
                    <div className="row text-center">
                        <p>{error}</p>
                    </div>
                )}
            </fieldset>
        </form>
    );
}
