import React from 'react';
import { ContactForm } from '../containers';

export default class ContactPage extends React.Component {
  submit = (values) => {
    console.log('submit form', values);
  }
  render() {
    return (
      <ContactForm onSubmit={this.submit} />
    )
  }
}
