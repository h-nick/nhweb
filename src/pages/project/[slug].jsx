import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import apiInstance from '../../utils/api-instance';
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

          <button type="button" className="d-block mb-1">PLACEHOLDER BUTTON TO WEBSITE</button>
          <button type="button" className="d-block">PLACEHOLDER BUTTON TO REPOSITORY</button>
        </Col>
      </Row>

      <Row>
        {
          project.gallery.map((img) => (
            <Col className="my-3" xs={12} key={img.id}>
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

  return {
    props: data,
  };
}

export default Project;
