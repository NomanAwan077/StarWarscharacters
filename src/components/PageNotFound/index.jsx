import React, { useState } from "react";
import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";
import { ExclamationTriangle, ArrowLeft } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <Container className="py-5 min-vh-100 d-flex align-items-center">
      <Row className="justify-content-center text-center w-100">
        <Col xs={12} md={8} lg={6}>
          <div className="mb-4 animate__animated animate__bounceIn d-flex justify-content-center">
            <ExclamationTriangle className="text-warning" size={80} />
          </div>
          <h1 className="display-1 fw-bold mb-4 animate__animated animate__fadeInDown">
            404
          </h1>
          <h2 className="mb-3 fs-1 fw-semibold text-secondary animate__animated animate__fadeInUp">
            Oops! Page Not Found
          </h2>
          <p className="mb-4 text-muted fs-5 animate__animated animate__fadeIn animate__delay-1s">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="d-flex justify-content-center gap-3 animate__animated animate__fadeIn animate__delay-2s">
            <Link to="/">
              <Button
                variant="primary"
                size="lg"
                className="d-flex align-items-center gap-2"
              >
                <ArrowLeft size={20} />
                Return Home
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
