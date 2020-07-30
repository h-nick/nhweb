import React from 'react';
import clsx from 'clsx';
import { Container, Row, Col } from 'react-bootstrap';
import AnimatedChevron from '../../components/animated-chevron/animated-chevron';
import apiInstance from '../../utils/api-instance';
import Button from '../../components/button/button';
import Footer from '../../components/footer/footer';
import Navbar from '../../components/navbar/navbar';
import classes from './index.module.scss';

const Project = (project) => (
  <>
    <div className={classes.Top}>
      <Navbar />

      <div className={classes.Cover} />

      <div className={classes.BgImg}>
        <img
          src={`https://api.nicolashurtado.dev${project.main_photo.url}`}
          alt="Project screen capture"
        />
      </div>

      <div className={classes.Content}>
        <h1 className="highlight-variation big-size">{project.title}</h1>
      </div>

      <AnimatedChevron />
    </div>

    <Container className="my-5">
      <Row>
        <Col>
          <h2>Project description</h2>

          {
            project.description.split('\n').map((item, index) => (
              /* eslint-disable-next-line react/no-array-index-key */
              <p className="text-justify" key={index}>
                {item}
              </p>
            ))
          }
        </Col>
      </Row>

      <Row className="mt-3">
        <Col>
          <h2>Technologies used</h2>
          <p>{project.technologies}</p>

          <div
            className={
              clsx(classes.Buttons, (project.repository_link || project.public_link) && 'mb-1')
            }
          >
            {
              project.public_link && (
                <Button
                  className={classes.Button}
                  href={project.public_link}
                  title="CHECK WEBSITE"
                  newTab
                  blackVariation
                />
              )
            }

            {
              project.repository_link && (
                <Button
                  className={clsx(classes.Button, 'ml-0 ml-lg-1 mt-1 mt-lg-0')}
                  href={project.repository_link}
                  title="CHECK REPOSITORY"
                  newTab
                  blackVariation
                />
              )
            }
          </div>
        </Col>
      </Row>

      <Row className="mt-3">
        {
          project.gallery.length > 0 && (
            <Col className="mt-3">
              <h2>Screen captures</h2>
            </Col>
          )
        }

        {
          project.gallery.map((img, index) => (
            <Col className={`${index > 0 ? 'my-5' : ''}`} xs={12} key={img.id}>
              <img
                className={classes.GalleryImg}
                src={`https://api.nicolashurtado.dev${img.url}`}
                alt="Project screen capture"
              />
            </Col>
          ))
        }
      </Row>
    </Container>

    <Footer />
  </>
);

export async function getServerSideProps(ctx) {
  const { slug } = ctx.query;

  const data = (await apiInstance.get(`/projects?slug=${slug}`)).data[0];

  if (!data) {
    ctx.res.statusCode = 404;
    ctx.res.end();
    return;
  }

  /* eslint-disable-next-line consistent-return */
  return {
    props: data,
  };
}

export default Project;
