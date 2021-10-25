import React, {useState} from 'react'
import { ContactFormh1, ContactFromWrapper, ContactLabel, ContactForm, ContactInput, ContactTextArea, ContactButton } from './ContactMeElements'
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';


const serviceId = process.env.REACT_APP_SERVICE_ID ;
const templateId = process.env.REACT_APP_TEMPLATE_ID;
const userId = process.env.REACT_APP_USER_ID;



const Contact = () => {
    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(serviceId, templateId, e.target, userId)
          .then((result) => {
            console.log(result.text);
            Swal.fire({
              icon: 'success',
              title: 'Message Sent Successfully'
            })
          }, (error) => {
            console.log(error.text);
            Swal.fire({
              icon: 'error',
              title: 'Ooops, something went wrong',
              text: error.text,
            })
          });
        e.target.reset()
        
      };
    return (
        <ContactFromWrapper id="contact">
          <ContactFormh1>Contact Form</ContactFormh1>
            <ContactForm onSubmit={handleOnSubmit}>
              
                <label htmlFor="name">Name:</label>
                <ContactInput 
                    type="text"
                    name="from_name"
                    id="from_name"
                    required
                />
                <label htmlFor="Email">Email:</label>
                <ContactInput 
                    type="email"
                    name="email"
                    required
                />
                <label htmlFor="Message">Message:</label>
                <ContactTextArea 
                    name="message"
                    id="message"
                    required
                />
                <ContactButton type="submit">Send Message</ContactButton>
            </ContactForm>
        </ContactFromWrapper>
    )
}

export default Contact
