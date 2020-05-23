import React from 'react';
import clsx from 'clsx';
import { Container, Row, Col } from 'react-bootstrap';
import classes from './index.module.scss';

const Home = () => (
  <>
    <div className={classes.Top}>
      <div className={classes.ContentWrapper}>
        <div className={classes.Image}>
          <img src="https://via.placeholder.com/150" alt="" />
        </div>

        <div className={classes.Content}>
          <h1 className="white big-size">Hello!</h1>
          <h1 className="white big-size">I am Nicolas</h1>

          <div>
            <button type="button">PLACEHOLDER</button>
            <button type="button">PLACEHOLDER</button>
          </div>
        </div>
      </div>
    </div>

    <Container className={clsx(classes.Description, 'mt-5')}>
      <Row>
        <Col>
          <h3 className="px-md-5 text-center">
            I am a Computer Systems Engineer that does stuff and whatever
            after all, this is a sample text. So it&apos;s not like it matters what
            I write here.
          </h3>
        </Col>
      </Row>
    </Container>

    <Container className={clsx(classes.MidPart, 'my-5')}>
      <Row>
        <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}>
          <div className={clsx(classes.SkillsAndEducation, 'pr-md-5')}>
            <h2 className="text-center text-md-right highlight">Things I can do</h2>

            <div className={clsx(classes.Skills, 'my-4')}>
              {/* TODO: API INTEGRATION GOES HERE */}
              <h3 className="text-center text-md-right">Front-End Engineering</h3>
              <p className="text-center text-md-right">HTML5 / EJS / HBS</p>
              <p className="text-center text-md-right">CSS3 / Bootstrap / Material-UI</p>
              <p className="text-center text-md-right">JavaScript / TypeScript</p>
              <p className="text-center text-md-right">React + Redux + Redux Saga</p>
              <p className="text-center text-md-right">Next.js / Gatsby.js</p>
              <p className="text-center text-md-right">Figma</p>
              <p className="text-center text-md-right">Basic Photoshop</p>
              <p className="text-center text-md-right">Basic Video Editing</p>

              <h3 className="text-center text-md-right mt-5">Back-End Engineering</h3>
              <p className="text-center text-md-right">Node.js</p>
              <p className="text-center text-md-right">Express.js</p>
              <p className="text-center text-md-right">Adonis.js / NestJS</p>
              <p className="text-center text-md-right">MySQL / MongoDB</p>
              <p className="text-center text-md-right">Strapi CMS / Netlify CMS</p>
              <p className="text-center text-md-right">Prisma GraphQL</p>

              <h3 className="text-center text-md-right mt-5">Software Operations</h3>
              <p className="text-center text-md-right">Nginx deployment</p>
              <p className="text-center text-md-right">Apache deployment</p>
              <p className="text-center text-md-right">Docker containers</p>

              <h3 className="text-center text-md-right mt-5">Other Skills</h3>
              <p className="text-center text-md-right">C++</p>
              <p className="text-center text-md-right">Qt5 Framework</p>
              <p className="text-center text-md-right">Information Systems design & development</p>
              <p className="text-center text-md-right">Basic Routing & Switching with Cisco devices</p>
            </div>

            <div className={classes.Education}>
              <div className={clsx(classes.University, 'my-5', 'text-center', 'text-md-right')}>
                <h2 className="text-center text-md-right highlight">Education</h2>
                <h3 className="text-center text-md-right">Santiago Mariño University</h3>
                <h4 className="text-center text-md-right">Bachelor of Science</h4>
                <h4 className="text-center text-md-right">Computer Systems Engineering</h4>
                <p className="text-center text-md-right">Class of 2019 - Valedictorian</p>
              </div>
            </div>
          </div>
        </Col>

        <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }}>
          <div className={clsx(classes.WorkExperience, 'mb-5', 'mb-md-0', 'pl-md-5')}>
            <h2 className="text-center text-md-left highlight">Work experience</h2>
            {/* TODO: API INTEGRATION GOES HERE */}
            <div className={clsx(classes.Work, 'my-4')}>
              <h3>Place1</h3>
              <h4>Job position</h4>
              <p>Type of company</p>
              <ul className="pl-4">
                <li className="pr-lg-5 pr-xl-3 text-justify">
                  Nisi fugiat duis mollit ad aliquip ad. Cupidatat duis laboris sint quis aute nostrud Lorem
                  dolore commodo sit.
                </li>
                <li className="pr-lg-5 pr-xl-3 text-justify">
                  Nisi fugiat duis mollit ad aliquip ad. Cupidatat duis laboris sint quis aute nostrud Lorem
                  dolore commodo sit.
                </li>
                <li className="pr-lg-5 pr-xl-3 text-justify">
                  Nisi fugiat duis mollit ad aliquip ad. Cupidatat duis laboris sint quis aute nostrud Lorem
                  dolore commodo sit.
                </li>
              </ul>
            </div>
            <div className={clsx(classes.Work, 'my-4')}>
              <h3>Place1</h3>
              <h4>Job position</h4>
              <p>Type of company</p>
              <ul>
                <li className="pr-lg-5 pr-xl-3 text-justify">
                  Nisi fugiat duis mollit ad aliquip ad. Cupidatat duis laboris sint quis aute nostrud Lorem
                  dolore commodo sit.
                </li>
                <li className="pr-lg-5 pr-xl-3 text-justify">
                  Nisi fugiat duis mollit ad aliquip ad. Cupidatat duis laboris sint quis aute nostrud Lorem
                  dolore commodo sit.
                </li>
                <li className="pr-lg-5 pr-xl-3 text-justify">
                  Nisi fugiat duis mollit ad aliquip ad. Cupidatat duis laboris sint quis aute nostrud Lorem
                  dolore commodo sit.
                </li>
              </ul>
            </div>
            <div className={clsx(classes.Work, 'my-4')}>
              <h3>Place1</h3>
              <h4>Job position</h4>
              <p>Type of company</p>
              <ul>
                <li className="pr-lg-5 pr-xl-3 text-justify">
                  Nisi fugiat duis mollit ad aliquip ad. Cupidatat duis laboris sint quis aute nostrud Lorem
                  dolore commodo sit.
                </li>
                <li className="pr-lg-5 pr-xl-3 text-justify">
                  Nisi fugiat duis mollit ad aliquip ad. Cupidatat duis laboris sint quis aute nostrud Lorem
                  dolore commodo sit.
                </li>
                <li className="pr-lg-5 pr-xl-3 text-justify">
                  Nisi fugiat duis mollit ad aliquip ad. Cupidatat duis laboris sint quis aute nostrud Lorem
                  dolore commodo sit.
                </li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </Container>

    <div className={classes.Projects}>
      <Container className="py-5">
        <h2 className="white text-center">Check out some of my most recent projects</h2>

        <p className="px-md-5 white text-center">
          Nowadays I mostly work on webdev, but I&apos;ve done my fair share of other project.
          The most recent ones shown here. Filler text Filler text Filler text. There are also some
          vanity projects not shown here that can be found on my github page.
        </p>

        <Row className="my-5">
          {/* TODO: API INTEGRATION GOES HERE */}
          <Col xs={12} lg={4}>
            <div className={classes.Project}>
              <div className={classes.Data}>
                <h4 className="white text-center m-0">Project name</h4>
                <button type="button" className="mt-2 mx-auto d-block text-center">PLACEHOLDER</button>
              </div>
              <div className={classes.Cover} />
              <div className={classes.Image}>
                <img src="https://via.placeholder.com/150" alt="" />
              </div>
            </div>
          </Col>

          <Col xs={12} lg={4}>
            <div className={clsx(classes.Project, 'mt-4', 'mt-lg-0')}>
              <div className={classes.Data}>
                <h4 className="white text-center m-0">Project name</h4>
                <button type="button" className="mt-2 mx-auto d-block text-center">PLACEHOLDER</button>
              </div>
              <div className={classes.Cover} />
              <div className={classes.Image}>
                <img src="https://via.placeholder.com/150" alt="" />
              </div>
            </div>
          </Col>

          <Col xs={12} lg={4}>
            <div className={clsx(classes.Project, 'mt-4', 'mt-lg-0')}>
              <div className={classes.Data}>
                <h4 className="white text-center m-0">Project name</h4>
                <button type="button" className="mt-2 mx-auto d-block text-center">PLACEHOLDER</button>
              </div>
              <div className={classes.Cover} />
              <div className={classes.Image}>
                <img src="https://via.placeholder.com/150" alt="" />
              </div>
            </div>
          </Col>
        </Row>

        <button type="button" className="d-block mx-auto">PLACEHOLDER</button>
      </Container>
    </div>

    {/*
    TODO:
    <Container className={clsx(classes.Blog, 'py-5')}>
      <h2 className="text-center">My latest posts</h2>

      <Row>
        <Col xs={12} xl={4}>
          <a href="#." className={classes.Post}>
            <div className={classes.Image}>
              <img src="https://via.placeholder.com/150" alt="" />
            </div>

            <div className={classes.Data}>
              <p className={clsx(classes.Category, 'highlight')}>TEST CATEGORY</p>
              <p clasName={clsx(classes.PostName)}>TEST NAME</p>
            </div>
          </a>
        </Col>
      </Row>
    </Container> */}

    {/* TODO: MOVE TO OWN COMPONENT */}
    {/* <div className={classes.Contact} /> */}


  </>
);

export default Home;
