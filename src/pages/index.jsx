import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import moment from 'moment';
import { Container, Row, Col } from 'react-bootstrap';
import AnimatedChevron from '../components/animated-chevron/animated-chevron';
import apiInstance from '../utils/api-instance';
import Button from '../components/button/button';
import ContactBlock from '../components/contact-block/contact-block';
import Footer from '../components/footer/footer';
import ImageLoader from '../components/image-loader/image-loader';
import LoaderAnimation from '../components/loader-animation/loader-animation';
import LoaderError from '../components/loader-error/loader-error';
import Navbar from '../components/navbar/navbar';
import ProjectBlock from '../components/project-block/project-block';
import classes from './index.module.scss';

const Home = () => {
  const [skills, setSkills] = useState(undefined);
  const [workExp, setWorkExp] = useState(undefined);
  const [resume, setResume] = useState(undefined);
  const [latestProjects, setLatestProjects] = useState(undefined);
  const [latestPosts, setLatestPosts] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);

      await axios.all([
        apiInstance.get('/skillsets'),
        apiInstance.get('/experiences?_limit=3&_sort=current:desc,start_date:desc,end_date:desc'),
        apiInstance.get('/resumes?_limit=1&_sort=id:DESC'),
        apiInstance.get('/projects?_limit=3&_sort=id:DESC'),
        axios.get('https://dev.to/api/articles?username=hniklass?per_page=3'),
      ])
        .then(axios.spread(
          (fetchedSkills, fetchedExperiences, fetchedResume, fetchedProjects, fetchedPosts) => {
            setSkills(fetchedSkills.data);
            setWorkExp(fetchedExperiences.data);
            setResume(fetchedResume.data[0]);
            setLatestProjects(fetchedProjects.data);
            setLatestPosts(fetchedPosts.data);
            setLoading(false);
            setLoadingError(false);
          },
        ))
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
        loading && (
          <div className="loader-bg">
            <LoaderAnimation />
          </div>
        )
      }

      {
        !loading && (
          <>
            <div className={classes.Top}>
              <Navbar />

              <div className={classes.Cover} />

              <div className={classes.BgVideo}>
                <video autoPlay muted loop>
                  <source src="/videos/video.webm" type="video/webm" />
                  <source src="/videos/video.mp4" type="video/mp4" />
                </video>
              </div>

              <div className={classes.ContentWrapper}>
                <ImageLoader
                  src="/images/profile.jpg"
                  alt="Photo of myself"
                  className={classes.Image}
                />

                <div className={classes.Content}>
                  <h1 className="highlight-variation big-size">Hello!</h1>
                  <h1 className="white big-size">I am Nicolas</h1>

                  <div className={classes.Buttons}>
                    <Button className="mr-2" href="/contact" title="CONTACT ME" />

                    {
                      resume
                      && resume.pdf
                      && resume.pdf.url && (
                        <Button
                          className="ml-2"
                          href={`https://api.nicolashurtado.dev${resume.pdf.url}`}
                          title="GET RESUME"
                          newTab
                        />
                      )
                    }
                  </div>
                </div>
              </div>

              <AnimatedChevron />
            </div>

            <Container className={clsx(classes.Description, 'my-5 py-5')}>
              <Row>
                <Col>
                  <h3 className="px-md-5 text-center">
                    I am a graduated Computer Systems Engineer who has worked as a
                    Full-Stack Web Developer for the past 2 years. As an engineer,
                    I have implemented multiple information systems to improve
                    business processes and generate strategic advantages
                  </h3>
                </Col>
              </Row>
            </Container>

            <Container className={classes.MidPart}>
              <Row>
                <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}>
                  <div className={clsx(classes.SkillsAndEducation, 'pr-md-5')}>
                    <h2 className="text-center text-md-right highlight">Things I can do</h2>

                    <div className={clsx(classes.Skills, 'my-4')}>
                      <h3 className="text-center text-md-right">Front-End Engineering</h3>
                      {
                        !loading
                        && skills
                        && skills.length > 0
                        && skills.filter((skill) => skill.type === 'front').map((skill) => (
                          <p key={skill.id} className="text-center text-md-right">{skill.skill}</p>
                        ))
                      }

                      <h3 className="text-center text-md-right mt-5">Back-End Engineering</h3>
                      {
                        !loading
                        && skills
                        && skills.length > 0
                        && skills.filter((skill) => skill.type === 'back').map((skill) => (
                          <p key={skill.id} className="text-center text-md-right">{skill.skill}</p>
                        ))
                      }

                      <h3 className="text-center text-md-right mt-5">Software Operations</h3>
                      {
                        !loading
                        && skills
                        && skills.length > 0
                        && skills.filter((skill) => skill.type === 'ops').map((skill) => (
                          <p key={skill.id} className="text-center text-md-right">{skill.skill}</p>
                        ))
                      }

                      <h3 className="text-center text-md-right mt-5">Other Skills</h3>
                      {
                        !loading
                        && skills
                        && skills.length > 0
                        && skills.filter((skill) => skill.type === 'other').map((skill) => (
                          <p key={skill.id} className="text-center text-md-right">{skill.skill}</p>
                        ))
                      }
                    </div>

                    <div className={classes.Education}>
                      <div className={clsx(classes.University, 'my-5', 'text-center', 'text-md-right')}>
                        <h2 className="text-center text-md-right highlight">Education</h2>
                        <h4 className="text-center text-md-right">BSc. Computer Systems Engineering</h4>
                        <p className="text-center text-md-right">
                          Santiago Mariño Polytechnic University Institute
                        </p>
                        <p className="text-center text-md-right">Class of 2019 - Valedictorian</p>
                      </div>
                    </div>

                    <div className="my-5">
                      <h2 className="text-center text-md-right highlight">Languages I speak</h2>
                      <p className="text-center text-md-right mb-0">
                        Spanish (Native)
                      </p>
                      <p className="text-center text-md-right mb-0">
                        English (Bilingual Proficiency)
                      </p>
                      <p className="text-center text-md-right mb-0">
                        German (Elementary Proficiency)
                      </p>
                    </div>
                  </div>
                </Col>

                <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }}>
                  <div className={clsx(classes.WorkExperience, 'mb-5', 'mb-md-0', 'pl-md-5')}>
                    <h2 className="text-center text-md-left highlight">Work experience</h2>

                    {
                      loading && <p>Loading...</p>
                    }

                    {
                      !loading && (!workExp || !workExp.length) && <p>No data...</p>
                    }

                    {
                      !loading
                      && workExp
                      && workExp.length
                      && workExp.slice(0, 3).map((experience) => (
                        <div key={experience.id} className={clsx(classes.Work, 'my-4')}>
                          <h3 className="text-center text-md-left">{experience.position}</h3>
                          <h4 className="text-center text-md-left">{experience.name}</h4>
                          <p className="m-0 text-center text-md-left">{`${experience.location}`}</p>
                          <p className="text-center text-md-left">
                            {
                              `(${moment(experience.start_date).format('YYYY/MM')} - `
                              + `${experience.current
                                ? 'Current'
                                : moment(experience.end_date).format('YYYY/MM')
                              })`
                            }
                          </p>
                          <ul className="pl-4">
                            {
                              experience.description.split('\n').map((value, index) => (
                                /* eslint-disable-next-line react/no-array-index-key */
                                <li key={index} className="pr-lg-5 pr-xl-3 text-justify">{value}</li>
                              ))
                            }
                          </ul>
                        </div>
                      ))
                    }
                  </div>
                </Col>
              </Row>
            </Container>

            <div className={clsx(classes.Projects, 'my-5')}>
              <Container className="py-5">
                <h2 className="highlight-variation text-center">
                  Check out some of my most recent projects
                </h2>

                <p className="px-md-5 white text-center">
                  While most of my work nowadays is related to web design &amp; development,
                  I&apos;ve worked on several kind of projects before. The most recent ones
                  are shown here. You can also visit my GitHub profile to check other personal
                  projects not shown here.
                </p>

                <Row className="mt-5 justify-content-center">
                  {
                    !loading && (!latestProjects || !latestProjects.length) && (
                      <Col>
                        <h3 className="white text-center">
                          Apparently there are no projects published :(
                        </h3>
                      </Col>
                    )
                  }

                  {
                    !loading
                    && latestProjects
                    && latestProjects.length > 0
                    && latestProjects.map((project, index) => (
                      <Col xs={12} md={6} lg={4} key={project.id}>
                        <ProjectBlock
                          title={project.title}
                          slug={project.slug}
                          mainPhoto={project.main_photo.url}
                          className={
                            `${index > 0 ? 'mt-4 mt-md-0' : ''}${index > 1 ? ' d-none d-lg-block' : ''}`
                          }
                        />
                      </Col>
                    ))
                  }
                </Row>

                {
                  !loading
                  && latestProjects
                  && latestProjects.length > 0
                  && (
                    <Button
                      className={clsx(classes.SectionButton, 'mt-4 mx-auto')}
                      href="/projects"
                      title="ALL MY PROJECTS"
                    />
                  )
                }
              </Container>
            </div>

            <Container className={clsx(classes.Blog, 'py-5')}>
              <h2 className="text-center">My latest posts</h2>

              <Row className="mt-5 justify-content-center">
                {/*
                  TODO: Fix blog dynamic data based on Dev.to API fetched object.
                */}

                {
                  !loading && (!latestPosts || !latestPosts.length) && (
                    <Col>
                      <h3 className="text-center">
                        Apparently there are no posts published :(
                      </h3>
                    </Col>
                  )
                }

                {
                  !loading
                  && latestPosts
                  && latestPosts.length > 0
                  && latestPosts.map((post, index) => (
                    <Col xs={12} md={6} lg={4}>
                      <div
                        className={
                          clsx(classes.Post, index > 0 && 'mt-4 mt-md-0', index > 1 && 'd-none d-lg-block')
                        }
                      >
                        <a href="#.">
                          <div className={classes.Image}>
                            <img src="https://picsum.photos/200" alt="" />
                          </div>

                          <div className={clsx(classes.Data, 'mt-4')}>
                            <small className="highlight text-center d-block">TEST CATEGORY</small>
                            <p className="text-center d-block">TEST SHORT NAME</p>
                          </div>
                        </a>
                      </div>
                    </Col>
                  ))
                }
              </Row>

              {
                !loading
                && latestPosts
                && latestPosts.length > 0
                && (
                  <Button
                    className={clsx(classes.SectionButton, 'mt-4 mx-auto')}
                    href="/projects"
                    title="MY DEV.TO PROFILE"
                    blackVariation
                  />
                )
              }
            </Container>

            <ContactBlock />

            <Footer />
          </>
        )
      }
    </>
  );
};

export default Home;
