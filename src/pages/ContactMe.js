import React, {useState} from 'react';
import { validateEmail } from '../utils/helpers.js';

function ContactForm() {

    const [formState, setFormState] = useState({name: '', email: '', message: ''});

    const {name, email, message} = formState;

    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);

            if (! isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }

        } else {
            if (! e.target.value.length) {
                setErrorMessage(`${
                    e.target.name
                } is required.`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({
                ...formState,
                [e.target.name]: e.target.value
            });
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }


    return (


        <section className= "contact-page">
            <div className= "contact-title">
            <h1>Contact</h1>
        </div>
            <div className = "contact-boxes">
            <form id="contact-form"
                onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name"
                        defaultValue={""}
                        onBlur
                        ={handleChange}/>
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email"
                        defaultValue={email}
                        onBlur
                        ={handleChange}/>
                </div>
                <div>
                    <div htmlFor="message"></div>
                    <textarea name="message" rows="5"
                        defaultValue={message}
                        onBlur
                        ={handleChange}/>
                </div>
                <button className= "submitButton" type="submit">Submit</button>
                {
                errorMessage && (
                    <div>
                        <p className="error-text">
                            {errorMessage}</p>
                    </div>
                )
            } </form>
            </div>
        </section>
    )
}

export default ContactForm;
