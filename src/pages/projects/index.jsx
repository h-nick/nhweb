import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import AnimatedChevron from '../../components/animated-chevron/animated-chevron';
import apiInstance from '../../utils/api-instance';
import ContactBlock from '../../components/contact-block/contact-block';
import Footer from '../../components/footer/footer';
import LoaderAnimation from '../../components/loader-animation/loader-animation';
import LoaderError from '../../components/loader-error/loader-error';
import Navbar from '../../components/navbar/navbar';
import ProjectBlock from '../../components/project-block/project-block';
import classes from './index.module.scss';

const Projects = () => {
  const [projects, setProjects] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(false);

  useEffect(() => {
    setLoading(true);

    (async () => {
      await apiInstance.get('/projects?_sort=id:DESC')
        .then((response) => {
          setProjects(response.data);
          setLoading(false);
          setLoadingError(false);
        })
        .catch(() => {
          setLoading(false);
          setLoadingError(true);
        });
    })();
  }, []);

  return (
    <>
      {
        loadingError && <LoaderError />
      }

      {
        <CSSTransition
          timeout={1000}
          in={loading}
          unmountOnExit
          classNames="loader-bg"
        >
          <div className="loader-bg">
            <LoaderAnimation />
          </div>
        </CSSTransition>
      }

      {
        !loading && (
          <>
            <div className={classes.Top}>
              <Navbar />

              <div className={classes.Cover} />

              <div className={classes.Content}>
                <h1 className="highlight-variation big-size">Project Portfolio</h1>

                <div>
                  <button type="button">PLACEHOLDER</button>
                </div>
              </div>

              <AnimatedChevron />
            </div>

            <Container className="py-5 my-5">
              <Row>
                <Col className="px-5">
                  <h4 className="text-center">
                    While most of my work nowadays is related to web design &amp; development,
                    I&apos;ve worked on several kind of projects before
                  </h4>
                  <h4 className="text-center">
                    All the projects shown here are work-related.
                    Personal projects can be found on my GitHub page
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
                    <Col xs={12} md={6} lg={4} key={project.id}>
                      <ProjectBlock
                        title={project.title}
                        slug={project.slug}
                        mainPhoto={project.main_photo.url}
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

            <ContactBlock />

            <Footer />
          </>
        )
      }
    </>
  );
};

export default Projects;
