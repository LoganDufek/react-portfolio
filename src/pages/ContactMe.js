import React, { useState, useRef } from 'react';
import { validateEmail } from '../utils/helpers.js';
import emailjs from 'emailjs-com';
import { message, Button, Space } from 'antd';

function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', content: '' });

    const form = useRef();

    const { name, email, content } = formState;

    const [errorMessage, setErrorMessage] = useState('');


    const sendEmail = (e) => {
        e.preventDefault();


        emailjs.sendForm('service_u1dv389', 'template_mrr4jtf', form.current, 'user_bCupGVL86VJCKlMVY47Vl')
            .then((result) => {
                console.log(result.text);
                alert("Your email has been sucessfully sent! Thank you!")
                window.location.replace("https://logandufek.github.io/react-portfolio/")


            }, (error) => {
                console.log(error.text);
            });
    };

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);

            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }

        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name
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




    return (


        <section className="contact-page">
            <div className="contact-title">
                <h1>Contact</h1>
            </div>
            <div className="contact-boxes">
                <form ref={form} id="contact-form"

                >
                    <div>
                        <label for="name">Name:</label>
                        <input type="text" name="name"
                            defaultValue={name}
                            onBlur={handleChange} />
                    </div>
                    <div>
                        <label for="from_email">Email address:</label>
                        <input type="email" name="email"
                            defaultValue={email}
                            onBlur={handleChange} />
                    </div>
                    <div>
                        <div for="content"></div>
                        <textarea name="content" rows="5"
                            defaultValue={content}
                            onBlur={handleChange} />
                    </div>
                    <a className="submitButton" type="button" href="/" onClick={sendEmail} >Submit</a>
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
