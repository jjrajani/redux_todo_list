import React from 'react';
import { ContactForm } from '../containers';

let handleSubmit = (values) => {
  console.log('submit form', values);
}

const ContactPage = () => (
  <ContactForm onSubmit={handleSubmit} />
);

export default ContactPage;
