import React from 'react';
import clsx from 'clsx';
import { Container, Row, Col } from 'react-bootstrap';
import AnimatedChevron from '../../components/animated-chevron/animated-chevron';
import Footer from '../../components/footer/footer';
import Navbar from '../../components/navbar/navbar';
import classes from './index.module.scss';

const Projects = () => (
  <>
    <div className={classes.Top}>
      <Navbar />

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
      <Row>
        <Col md={4}>
          <div className={clsx(classes.ContactBlock, 'rising-effect p-3')}>
            <div className={classes.Text}>
              <h4>Hire me</h4>

              <p className="m-0">
                Are you looking for a professional web developer or have a job offer?
                Submit your message and I&apos;ll get back to you.
              </p>

              <span className="title highlight">SEND INFO</span>
            </div>
          </div>
        </Col>
        <Col md={4} className="mt-3 mt-md-0">
          <div className={clsx(classes.ContactBlock, 'rising-effect p-3')}>
            <div className={classes.Text}>
              <h4>Support request</h4>

              <p className="m-0">
                Are you a client having problems with a service or product?
                Send a message and I will respond as soon as possible.
              </p>

              <span className="title highlight">REQUEST SUPPORT</span>
            </div>
          </div>
        </Col>
        <Col md={4} className="mt-3 mt-md-0">
          <div className={clsx(classes.ContactBlock, 'rising-effect p-3')}>
            <div className={classes.Text}>
              <h4>General inquiry</h4>

              <p className="m-0">
                Send me any question you have about the services I offer, the development process
                or a friendly hello anytime you want.
              </p>

              <span className="title highlight">SUBMIT MESSAGE</span>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col sm={6}>
          <a
            className={clsx(classes.ContactBlock, 'rising-effect p-3 d-block')}
            href="tel://+580000000000"
          >
            <div className={classes.Text}>
              <h4>Contact me through Whatsapp</h4>

              <span className="title highlight">At +58 000 000 0000</span>
            </div>
          </a>
        </Col>
        <Col sm={6} className="mt-3 mt-sm-0">
          <a
            className={clsx(classes.ContactBlock, 'rising-effect p-3 d-block')}
            href="https://t.me/telegramusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={classes.Text}>
              <h4>Or through Telegram</h4>

              <span className="title highlight">At @telegramusername</span>
            </div>
          </a>
        </Col>
      </Row>
    </Container>
    <Footer />
  </>
);

export default Projects;
