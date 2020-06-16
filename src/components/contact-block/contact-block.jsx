import React from 'react';
import clsx from 'clsx';
import { Container, Row, Col } from 'react-bootstrap';
import classes from './component.module.scss';

const ContactBlock = () => (
  <div className={clsx(classes.Contact, 'mt-5')}>
    <div className={classes.Cover} />

    <Container className={clsx(classes.Container, 'py-5')}>
      <Row>
        <Col>
          <h2 className="text-center highlight-variation">Need to contact me? Send me a message!</h2>

          <h3 className="text-center white px-md-5 my-3">
            Send me a message and I&apos;ll get back to you as soon as possible.
            Whether it is to say hello, ask for a quote, an inquiry or anything else.
          </h3>
        </Col>
      </Row>

      <button type="button" className="d-block mx-auto mt-3">PLACEHOLDER</button>
    </Container>
  </div>
);

export default ContactBlock;
