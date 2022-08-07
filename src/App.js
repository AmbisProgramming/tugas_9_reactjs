import React, { useState } from "react";
import { Container, Button, Collapse, Form, Nav, Navbar, NavDropdown, Row, Col, Breadcrumb, Table, ProgressBar, Pagination, Spinner, OverlayTrigger, Popover } from "react-bootstrap";

function App() {
  const [open, setOpen] = useState(false);
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Informasi Website</Popover.Header>
      <Popover.Body>
        Website ini dibuat untuk memudahkan <br></br> dalam pencarian informasi terkini <br></br>
        tentang berita olahraga
      </Popover.Body>
    </Popover>
  );
  return (
    <div>
      <Container fluid>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">Akses Sport</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Berita</Nav.Link>
                <Nav.Link href="#action3">Live Scores</Nav.Link>
                <NavDropdown title="Piala & Liga" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action4">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action5">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action6">Something else here</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#action7">Transfer Pemain</Nav.Link>
                <Nav.Link href="#action8">Pemain</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                <Button variant="outline-primary">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container>
          <Row className="justify-content-md-center">
            <Col md={{ span: 3, offset: 7 }} className="bg-light pt-3">
              <Breadcrumb>
                <Breadcrumb.Item href="#" active>
                  <text className="link-primary">Home</text>
                </Breadcrumb.Item>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/" active>
                  <text className="link-primary">Liga Inggris</text>
                </Breadcrumb.Item>
                <Breadcrumb.Item href="#" active>
                  Transfer Pemain
                </Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
          <br></br>
          <Row className="justify-content-md-center">
            <Col>
              <h4>Rumor Transfer Pemain</h4>
            </Col>
            <Col md={{ span: 2, offset: 12 }}>
              <Spinner animation="border" variant="success" />
              <Spinner animation="grow" variant="success" />
            </Col>
          </Row>
          <Row>
            <Nav justify variant="tabs" defaultActiveKey="/home">
              <Nav.Item>
                <Nav.Link href="/home" md={{ span: 4, offset: 4 }}>
                  Semua Transfer
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">Liga Primer Inggris</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">Serie A</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-3">Divisi Primera</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-4">Bundesliga</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-5">Liga 1 Indonesia</Nav.Link>
              </Nav.Item>
            </Nav>
          </Row>
          <Table hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Nama Pemain</th>
                <th>Tim</th>
                <th>Transfer</th>
                <th>Proses Transfer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>MAROUANE FELLAINI</td>
                <td>MANCHESTER UNITED</td>
                <td>SHANDONG LUNENG</td>
                <td>
                  <ProgressBar now={60} label="85%" />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>LUIS NANI</td>
                <td>SPORTING CP</td>
                <td>ORLANDO CITY</td>
                <td>
                  <ProgressBar now={55} label="55%" />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>MAREK HAMSIK</td>
                <td>NAPOLI</td>
                <td>DALIAN YIFANG</td>
                <td>
                  <ProgressBar now={95} label="95%" />
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>SARDAR AZMOUN</td>
                <td>RUBIN KAZAN</td>
                <td>ZENIT ST PETERSBURG</td>
                <td>
                  <ProgressBar now={100} label="100%" />
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>MICHY BATSHUAYI</td>
                <td>CHELSEA</td>
                <td>CRYSTAL PALACE</td>
                <td>
                  <ProgressBar now={50} label="50%" />
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>LUCAS PIAZON</td>
                <td>CHELSEA</td>
                <td>CHIEVO</td>
                <td>
                  <ProgressBar now={100} label="100%" />
                </td>
              </tr>
            </tbody>
          </Table>
          <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
          <Row>
            <Col>
              <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                <Button variant="primary">Informasi</Button>
              </OverlayTrigger>
              <Button onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>
                Versi Webstie{" "}
              </Button>
              <Collapse in={open}>
                <div id="example-collapse-text">Akses Sport V1.0</div>
              </Collapse>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default App;
