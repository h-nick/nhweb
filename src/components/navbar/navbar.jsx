import React from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faDev } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
import classes from './component.module.scss';

/* eslint-disable jsx-a11y/anchor-is-valid */
/*
  ESLint rule disabled since Next generates proper anchor elements anyway.
*/

const Navbar = () => (
  <div className={classes.Navbar}>
    <BootstrapNavbar
      className={clsx(classes.Content, 'py-sm-2 justify-content-between content')}
      expand="sm"
    >
      <BootstrapNavbar.Brand className={clsx(classes.Logo, 'p-0 m-0')} href="/">
        <img src="/images/logo_white.png" alt="Logo" />
      </BootstrapNavbar.Brand>

      <Nav className={clsx(classes.SocialNetworks, 'flex-row mr-auto')}>
        <a
          href="https://github.com/hniklass"
          className="white mr-3"
          target="_blank"
          rel="noopener noreferrer"
          title="Link to GitHub"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>

        <a
          href="https://linkedin.com/in/nicolashd"
          className="white mr-3"
          target="_blank"
          rel="noopener noreferrer"
          title="Link to LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>

        {/* <a
            href="http://dev.to/hniklass"
            className="white"
            target="_blank"
            rel="noopener noreferrer"
            title="Link to DEV Community"
          >
            <FontAwesomeIcon icon={faDev} />
          </a>
        */}
      </Nav>

      <BootstrapNavbar.Toggle
        className={classes.Button}
        aria-controls="basic-BootstrapNavbar-nav"
      />

      <BootstrapNavbar.Collapse id="basic-BootstrapNavbar-nav">
        <Nav className="pl-3 pl-sm-5 ml-sm-auto">
          <Link href="/" passHref><Nav.Link className="mr-2">HOME</Nav.Link></Link>
          <Link href="/projects" passHref><Nav.Link className="mr-2">PROJECTS</Nav.Link></Link>
          <Link href="/contact" passHref><Nav.Link>CONTACT</Nav.Link></Link>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  </div>
);

export default Navbar;
