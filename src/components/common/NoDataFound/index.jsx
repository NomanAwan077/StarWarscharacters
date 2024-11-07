import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function NoDataFound({ message = "No data found" }) {
  return (
    <Container className="py-5 w-full">
      <Row className="justify-content-center text-center">
        <Col xs={12} md={6}>
          <h2 className="mb-2 fs-3 fw-semibold text-secondary whitespace-nowrap">
            {message}
          </h2>
        </Col>
      </Row>
    </Container>
  );
}
