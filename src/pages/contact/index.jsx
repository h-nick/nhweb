import React, { useState } from 'react';
import clsx from 'clsx';
import Head from 'next/head';
import {
  Container, Row, Col, Modal,
} from 'react-bootstrap';
import AnimatedChevron from '../../components/animated-chevron/animated-chevron';
import ContactForm from '../../components/contact-form/contact-form';
import Footer from '../../components/footer/footer';
import Navbar from '../../components/navbar/navbar';
import classes from './index.module.scss';

const Projects = () => {
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  const modal = (
    <Modal show={show} onHide={() => setShow(false)} className={classes.Modal}>
      <Modal.Header closeButton className={classes.ModalHeader}>
        <Modal.Title>Send a message</Modal.Title>
      </Modal.Header>

      <Modal.Body className={classes.ModalBody}>
        <ContactForm />
      </Modal.Body>
    </Modal>
  );

  return (
    <>
      <Head>
        <title>Contact Me | Nicolas Hurtado</title>
        <meta
          name="description"
          content="A Computer Systems Engineer working as a full-stack web
          developer, creating awesome stuff to improve your business."
        />
      </Head>

      {modal}

      <div className={classes.Top}>
        <Navbar />

        <div className={classes.Cover} />

        <div className={classes.Content}>
          <h1 className="white big-size d-none d-md-block mb-3">
            Inquiries?
          </h1>
          <h1 className="white big-size d-none d-md-block mb-3">
            Problems?
          </h1>
          <h1 className="white big-size">
            <span className="highlight-variation big-size title">Contact</span>
            {' '}
            me today
          </h1>
        </div>

        <AnimatedChevron />
      </div>

      <Container className="p-5 my-5" fluid>
        <Row className="px-xl-5">
          <Col md={4}>
            <div
              className={clsx(classes.ContactBlock, 'hover-effect p-3')}
              onClick={showModal}
              onKeyPress={showModal}
              role="button"
              tabIndex="0"
            >
              <div className={classes.Text}>
                <h2 className="size-125">Hire me</h2>

                <p className="m-0">
                  Are you looking for a professional web developer or have a job offer?
                  Click here to submit your message and I&apos;ll get back to you.
                </p>

                <span className="title highlight">SEND INFO</span>
              </div>
            </div>
          </Col>
          <Col md={4} className="mt-3 mt-md-0">
            <div
              className={clsx(classes.ContactBlock, 'hover-effect p-3')}
              onClick={showModal}
              onKeyPress={showModal}
              role="button"
              tabIndex="0"
            >
              <div className={classes.Text}>
                <h2 className="size-125">Request support</h2>

                <p className="m-0">
                  Are you a client having problems with a service or product?
                  Click here to request support.
                </p>

                <span className="title highlight">REQUEST SUPPORT</span>
              </div>
            </div>
          </Col>
          <Col md={4} className="mt-3 mt-md-0">
            <div
              className={clsx(classes.ContactBlock, 'hover-effect p-3')}
              onClick={showModal}
              onKeyPress={showModal}
              role="button"
              tabIndex="0"
            >
              <div className={classes.Text}>
                <h2 className="size-125">General inquiries</h2>

                <p className="m-0">
                  Send me any questions you have about the services I offer, the process
                  or a friendly hello anytime you want.
                </p>

                <span className="title highlight">SUBMIT MESSAGE</span>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="mt-3 px-xl-5">
          <Col sm={6}>
            <a
              className={clsx(classes.ContactBlock, 'hover-effect p-3 d-block')}
              href="tel://+584249071142"
            >
              <div className={classes.Text}>
                <h2 className="size-125">Whatsapp contact</h2>

                <span className="title highlight">At +58 424 907 1142</span>
              </div>
            </a>
          </Col>
          <Col sm={6} className="mt-3 mt-sm-0">
            <a
              className={clsx(classes.ContactBlock, 'hover-effect p-3 d-block')}
              href="https://t.me/dhnik"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={classes.Text}>
                <h2 className="size-125">Telegram contact</h2>

                <span className="title highlight">At @dhnik</span>
              </div>
            </a>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Projects;
