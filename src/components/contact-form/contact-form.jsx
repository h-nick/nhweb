import React, { useState } from 'react';
import { yupResolver } from '@hookform/resolvers';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import apiInstance from '../../utils/api-instance';
import classes from './component.module.scss';

const ContactForm = () => {
  const schema = yup.object().shape({
    firstName: yup.string().required('Required!').min(2, 'Too short!').max(15, 'Too long!'),
    lastName: yup.string().required('Required!').min(2, 'Too short!').max(15, 'Too long!'),
    email: yup.string().email('Not a valid email!').required('Required!').min(3, 'Too short!')
      .max(34, 'Too long!'),
    found: yup.string().required('Required!'),
    subject: yup.string().required('Required!').min(5, 'Too short!').max(100, 'Too long!'),
    message: yup.string().required('Required!').min(10, 'Too short!'),
  });

  const {
    register,
    handleSubmit,
    errors,
  } = useForm({ resolver: yupResolver(schema) });

  const [isSubmitting, setSubmitting] = useState(false);

  /* eslint-disable no-alert */
  const onSubmit = (data) => {
    setSubmitting(true);

    /* eslint-disable-next-line no-console */
    console.log('Sending contact message');

    apiInstance.post('/contact/sendmsg', {
      contactemail: data.email,
      subject: data.subject,
      message: (
        `
              ${data.firstName} ${data.lastName}
              Found you via: ${data.found}
      
              ${data.message}
            `
      ),
    })
      .then(() => {
        alert('Message sent successfully!');
        setSubmitting(false);
      })
      .catch(() => {
        alert('Message could not be sent. Please try again later.');
        setSubmitting(false);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={clsx(classes.Form, 'mx-auto')}>
      <div className={classes.Input}>
        <label htmlFor="firstName">
          First Name *

          <input
            name="firstName"
            id="firstName"
            defaultValue=""
            ref={register}
          />

          <small>{errors.firstName?.message}</small>
        </label>
      </div>

      <div className={classes.Input}>
        <label htmlFor="lastName">
          Last Name *

          <input
            name="lastName"
            id="lastName"
            defaultValue=""
            ref={register}
          />

          <small>{errors.lastName?.message}</small>
        </label>
      </div>

      <div className={classes.Input}>
        <label htmlFor="email">
          Email *

          <input
            name="email"
            id="email"
            type="email"
            defaultValue=""
            ref={register}
          />

          <small>{errors.email?.message}</small>
        </label>
      </div>

      <div className={classes.Input}>
        <label htmlFor="found">
          How did you find about me? *

          <select name="found" ref={register}>
            <option value="google" defaultValue>Google Search</option>
            <option value="linkedin">LinkedIn</option>
            <option value="github">GitHub Jobs</option>
            <option value="referral">Referral by a friend</option>
            <option value="work">Worked with you before</option>
            <option value="internet">Randomly on the Internet</option>
          </select>

          <small>{errors.found?.message}</small>
        </label>
      </div>

      <div className={classes.Input}>
        <label htmlFor="subject">
          Subject *

          <input
            name="subject"
            id="subject"
            defaultValue=""
            ref={register}
          />

          <small>{errors.subject?.message}</small>
        </label>
      </div>

      <div className={classes.Input}>
        <label htmlFor="message">
          Message *

          <textarea
            name="message"
            id="message"
            defaultValue=""
            ref={register}
          />

          <small>{errors.message?.message}</small>
        </label>
      </div>

      <div className={classes.Submit}>
        <input
          disabled={isSubmitting}
          className={
            clsx(
              isSubmitting && classes.ButtonOff,
              'btn',
            )
          }
          type="submit"
        />
      </div>
    </form>
  );
};

export default ContactForm;
