import React from 'react';
import clsx from 'clsx';
import { Container, Row, Col } from 'react-bootstrap';
import Button from '../button/button';
import classes from './component.module.scss';

const ContactBlock = () => (
  <div className={clsx(classes.Contact)}>
    <div className={classes.Cover} />

    <Container className={clsx(classes.Container, 'py-5')}>
      <Row>
        <Col>
          <h1 className="size-200 text-center highlight-variation">
            Need to contact me? Send a message!
          </h1>

          <p className="title size-150 text-center white px-md-5 my-3">
            Send me a message and I&apos;ll get back to you as soon as possible.
            Whether it is to say hello, ask for a quote, an inquiry, a job offer
            or anything else
          </p>
        </Col>
      </Row>

      <Button
        className={clsx(classes.Button, 'mt-3 mx-auto')}
        href="/contact"
        title="CONTACT ME"
      />
    </Container>
  </div>
);

export default ContactBlock;
