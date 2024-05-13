import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Row,
  Navbar,
  Nav,
  Card,
  Form,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FcHome } from "react-icons/fc";
const HomeEvent = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.predicthq.com/v1/eventsHTTP/1.1Accept:application/jsonAuthorization:BearerfNmMC0qznqLKN0X2tfT_jfN0YqKstEBfBqmPTRfA"
    )
      .then((res) => res.json())
      .then((response) => setData(response));
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Navbar expand="lg">
            <Container fluid>
              <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  variant="underline"
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Nav.Item>
                    <Nav.Link href="/HomeEvent">Events</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-1">Nearby Event</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-2">Closed Event</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search Events"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <div></div>
        </Row>
      </Container>

      <Container>
        <Row>
          <div>
            <Card body>
              <div>
                <div class="d-flex justify-content-around">
                  <div>
                    <h3>Carnaval de São Paulo</h3>
                    <p>Birigui, São Paulo, Brazil</p>
                    <p>Fri, 9 Feb 2024-Wed, 14 Feb 2024-0300 (6-days)</p>
                    <div>
                      <p>
                        <FcHome className="me-2" />
                        FESTIVALS
                      </p>
                    </div>
                  </div>
                  <div>
                    <pre>$480,005,100</pre>
                    <pre>Predicted Event Spend (Usd) </pre>
                  </div>
                  <div>
                    <pre>150,0000</pre>
                    <pre>PHQ Attendance</pre>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};
export default HomeEvent;
