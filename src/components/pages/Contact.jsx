import React from 'react';

export default function About() {
    return (
        <form>
            <fieldset>
                <div className='row justify-content-center'>
                    <div className='col-6'>
                        <div class="form-group">
                            <label class="col-form-label mt-4" for="inputDefault">Name</label>
                            <input type="text" class="form-control" placeholder="Enter your name" id="inputDefault" />
                        </div>
                        <div className="form-group">
                            <label for="inputEmail" className="form-label mt-4">Email address</label>
                            <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter your email address" />
                        </div>
                        <div class="form-group">
                            <label for="exampleTextarea" class="form-label mt-4">Message</label>
                            <textarea class="form-control" id="exampleTextarea" rows="3" placeholder='Enter your message'></textarea>
                        </div>
                        <button type="button" class="btn btn-primary mt-4">Submit</button>
                    </div>
                </div>
            </fieldset>
        </form>
    );
}
