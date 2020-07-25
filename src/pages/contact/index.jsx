import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
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
              <h3>placeholder</h3>

              <p className="m-0">
                This is just a placeholder text to fill up the space
                in the contact block. Placeholding text is very important
                from time to time.
              </p>

              <span className="title highlight">Contact me</span>
            </div>
          </div>
        </Col>
        <Col md={4}>
          <div className={clsx(classes.ContactBlock, 'rising-effect p-3')}>
            <div className={classes.Text}>
              <h3>placeholder</h3>

              <p className="m-0">
                This is just a placeholder text to fill up the space
                in the contact block. Placeholding text is very important
                from time to time.
              </p>

              <span className="title highlight">Contact me</span>
            </div>
          </div>
        </Col>
        <Col md={4}>
          <div className={clsx(classes.ContactBlock, 'rising-effect p-3')}>
            <div className={classes.Text}>
              <h3>placeholder</h3>

              <p className="m-0">
                This is just a placeholder text to fill up the space
                in the contact block. Placeholding text is very important
                from time to time.
              </p>

              <span className="title highlight">Contact me</span>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col md={6}>
          <a
            className={clsx(classes.ContactBlock, 'rising-effect p-3 d-block')}
            href="tel://+580000000000"
          >
            <div className={classes.Text}>
              <h3>You can also contact me through Whatsapp</h3>

              <span className="title highlight">At +58 000 000 0000</span>
            </div>
          </a>
        </Col>
        <Col md={6}>
          <a
            className={clsx(classes.ContactBlock, 'rising-effect p-3 d-block')}
            href="https://t.me/telegramusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={classes.Text}>
              <h3>Our send me a message through Telegram</h3>

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
