import emailjs from '@emailjs/browser';
import { useContext, useRef, useState } from 'react';
import NotificationContext from '../../../context/notificationContext';
import {
  ContactForm,
  FormContact,
  FormField,
  FormInput,
  FormLabel,
  FormMessage,
} from '../../../styles/components/Desktop/Contact/ContactForm';
import Button from '../UI/Button';

export default function Contact() {
  const notificationCtx = useContext(NotificationContext);
  const [allowSubmit, setAllowSubmit] = useState(true);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidMessage, setInvalidMessage] = useState(false);

  const form = useRef<HTMLFormElement>(null as any);
  const email = useRef<HTMLInputElement>(null as any);
  const message = useRef<HTMLTextAreaElement>(null as any);
  const emailCurrent = email.current;
  const messageCurrent = message.current;

  const sendEmail = (e: any) => {
    if (!allowSubmit) {
      notificationCtx.showNotification({
        title: 'Error',
        message: 'Message already sent',
        status: 'error',
      });
      return;
    }

    e.preventDefault();
    if (
      !emailCurrent?.value ||
      emailCurrent?.value.trim() === '' ||
      !emailCurrent?.value.includes('@')
    ) {
      notificationCtx.showNotification({
        title: 'Error',
        message: 'Please enter a valid email',
        status: 'error',
      });
      setInvalidEmail(true);
      return;
    }
    if (!messageCurrent?.value || messageCurrent?.value.trim() === '') {
      notificationCtx.showNotification({
        title: 'Error',
        message: 'Please enter a message',
        status: 'error',
      });
      setInvalidMessage(true);
      return;
    }

    notificationCtx.showNotification({
      title: 'Sending...',
      message: 'Please wait. Processing',
      status: 'Pending',
    });

    emailjs
      .sendForm(
        `${process.env.emailjs_serviceId}`,
        `${process.env.emailjs_templateId}`,
        form.current,
        `${process.env.emailjs_publicKey}`
      )
      .then((result) => {
        notificationCtx.showNotification({
          title: 'Success',
          message: 'Successfully sent message!',
          status: 'success',
        });
        setAllowSubmit(false);
      })
      .catch((error) => {
        console.log(error);
        notificationCtx.showNotification({
          title: 'Error',
          message: error.text || 'Something went wrong',
          status: 'error',
        });
      });
  };

  function changeHandler() {
    if (emailCurrent?.value.includes('@')) {
      setInvalidEmail(false);
    }
    if (messageCurrent?.value) {
      setInvalidMessage(false);
    }
  }

  return (
    <ContactForm ref={form} onSubmit={sendEmail}>
      <FormContact>
        <FormField>
          <FormLabel htmlFor="user_name">Name</FormLabel>
          <FormInput
            type="text"
            id="user_name"
            name="user_name"
            placeholder="Name"
            invalid={false}
          ></FormInput>
        </FormField>
        <FormField>
          <FormLabel htmlFor="user_email">Email</FormLabel>
          <FormInput
            type="text"
            id="user_email"
            name="user_email"
            placeholder="Email"
            ref={email}
            invalid={invalidEmail}
            onChange={changeHandler}
          ></FormInput>
        </FormField>
      </FormContact>
      <FormField>
        <FormLabel htmlFor="subject">Subject</FormLabel>
        <FormInput
          type="text"
          id="subject"
          name="subject"
          placeholder="Subject"
          invalid={false}
        ></FormInput>
      </FormField>
      <FormField>
        <FormLabel htmlFor="message">Message</FormLabel>
        <FormMessage
          id="message"
          name="message"
          placeholder="Message"
          rows={8}
          ref={message}
          invalid={invalidMessage}
          onChange={changeHandler}
        ></FormMessage>
      </FormField>
      <Button type="submit" value="Send" text={'Send Message'} />
    </ContactForm>
  );
}
