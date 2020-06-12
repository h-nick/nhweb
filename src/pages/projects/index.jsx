import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import apiInstance from '../../utils/api-instance';
import Navbar from '../../components/navbar/navbar';
import ProjectBlock from '../../components/project-block/project-block';
import classes from './index.module.scss';

const Projects = () => {
  const [projects, setProjects] = useState(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await apiInstance.get('/projects')
        .then((response) => {
          setProjects(response.data);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    })();
  }, []);

  return (
    <>
      <Navbar />

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

      <Container className="mb-5">
        <Row>
          {
            !loading && (!projects || !projects.length) && (
              <Col>
                <h3 className="text-center">
                  Apparently there are no projects published :(
                </h3>
              </Col>
            )
          }

          {
            /* eslint-disable no-nested-ternary */
            /* ESlint rule disabled for simplicity */

            /*
              Note for future self: Is the classname too messy?
              I think it's better than wasting time splitting the array
              and generating new rows.
            */
          }

          {
            !loading
            && projects
            && projects.length > 0
            && projects.map((project, index) => (
              <Col xs={12} md={6} lg={4}>
                <ProjectBlock
                  title={project.title}
                  slug={project.slug}
                  mainPhoto={project.main_photo}
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
