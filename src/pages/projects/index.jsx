import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { Container, Row, Col } from 'react-bootstrap';
import moment from 'moment';
import apiInstance from '../../utils/api-instance';
import ProjectBlock from '../../components/project-block/project-block';
import classes from './index.module.scss';

const Projects = () => {
  const [projects, setProjects] = useState(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await axios.get('/projects')
        .then((response) => setProjects(response.data))
        .catch(() => setLoading(false));
    })();
  }, []);

  return (
    <>
      <div className={classes.Top}>
        <div className={classes.Content}>
          <h1 className="highlight-variation big-size">Some projects</h1>
          <h1 className="white big-size">I&apos;ve worked on</h1>

          <div>
            <button type="button">PLACEHOLDER</button>
          </div>
        </div>
      </div>

      <Container className="py-5 my-5">
        <Row>
          <Col className="px-5">
            <h4 className="text-center">
              Although nowadays I mostly work as a Full-Stack Web Developer, I have
              worked in a range of projects. This is a collection of both work and
              personal projects. Something something placeholdertext
            </h4>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          {
            /* eslint-disable no-nested-ternary */
            /* ESlint rule disabled for simplicity */

            /*
              Note for future self: Is the classname too messy?
              I think it's better than wasting time splitting the array
              and generating new rows.
            */
            [0, 1, 2, 3, 4, 5, 6, 7].map((_, index) => (
              <Col xs={12} md={6} lg={4}>
                <ProjectBlock
                  title="TÍTULO"
                  slug=""
                  mainPhoto="https://picsum.photos/200"
                  className={
                    `${index !== 0 && index === 1
                      ? 'mt-4 mt-md-0'
                      : index === 2
                        ? 'mt-4 mt-lg-0'
                        : index > 2
                          ? 'mt-4'
                          : ''
                    }`
                  }
                />
              </Col>
            ))
          }
        </Row>
      </Container>
    </>
  );
};

export default Projects;
