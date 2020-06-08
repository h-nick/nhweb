import React from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faDev } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import classes from './component.module.scss';

/* eslint-disable jsx-a11y/anchor-is-valid */
/*
  ESLint rule disabled since Next generates proper anchor elements anyway.
*/

const Footer = () => (
  <div className={classes.Footer}>
    <Container className="px-5 py-5">
      <Row className="align-items-center">
        <Col xs={12} lg={{ span: 2, offset: 2 }} className="">
          <div className={classes.ImgWrapper}>
            <a href="/">
              <img src="/images/logo_amber.png" alt="Website logo" />
            </a>
          </div>
        </Col>

        <Col xs={12} lg={7}>
          <div className={clsx(classes.LinksWrapper, 'mb-3 mb-lg-0')}>
            <div className={clsx(classes.Links, 'mb-0 mb-md-3 mr-3')}>
              <Link href="/"><a className="white">HOME</a></Link>
              <Link href="/projects"><a className="white ml-0 ml-md-3">PROJECTS</a></Link>
              <Link href="/contact"><a className="white ml-0 ml-md-3">CONTACT</a></Link>
            </div>

            <div className={clsx(classes.Links, 'mb-0 mb-md-3 ml-3 ml-md-0')}>
              <a
                href="http://dev.to/hniklass"
                target="_blank"
                rel="noopener noreferrer"
                className="white"
              >
                DEV.TO
              </a>

              <a
                href="https://github.com/hniklass"
                target="_blank"
                rel="noopener noreferrer"
                className="white ml-0 ml-md-3"
              >
                GITHUB
              </a>

              <a
                href="https://linkedin.com/in/nicolashd"
                target="_blank"
                rel="noopener noreferrer"
                className="white ml-0 ml-md-3"
              >
                LINKEDIN
              </a>
            </div>
          </div>

          <div className={clsx(classes.Copyright, 'text-center text-lg-left')}>
            <span className="highlight">
              © 2019 Nicolas Hurtado
            </span>

            <span className="highlight">
              Repository available on
              {' '}
              <a
                className="highlight"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/hniklass/nhweb"
              >
                GitHub
              </a>
            </span>
          </div>
        </Col>
      </Row>

      <Row className="mt-3 mt-lg-0">
        <Col xs={12} lg={{ span: 7, offset: 4 }} />
      </Row>
    </Container>
  </div>
);

export default Footer;
