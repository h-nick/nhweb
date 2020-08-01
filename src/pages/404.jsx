import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from '../components/button/button';

const Error = () => (
  <div>
    <Container className="p-5" style={{ height: '100vh' }}>
      <Row className="align-items-center h-100">
        <Col>
          <h1 className="big-size text-center">404</h1>
          <p className="text-center">
            Oops! Instead of finding the page you were looking for, you only found a dead Link.
          </p>

          <div className="w-75 mx-auto py-3">
            <img
              className="w-100 h-100 d-block"
              src="/images/404.png"
              alt="This link does not exist"
            />
          </div>

          <div className="mt-3 d-flex justify-content-center">
            <Button blackVariation href="/" title="RETURN" />
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Error;
