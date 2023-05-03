import companyLogo from './assets/images/logo.svg';
import navLogo from './assets/images/icon-menu.svg';
import blocksImg from './assets/images/image-web-3-mobile.jpg';
import blocksImg2 from './assets/images/image-web-3-desktop.jpg';
import pcImg from './assets/images/image-retro-pcs.jpg';
import keyboardImg from './assets/images/image-top-laptops.jpg';
import gamingImg from './assets/images/image-gaming-growth.jpg';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Offcanvas from 'react-bootstrap/Offcanvas'
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="app__container container">
      <Navbar expand="lg" className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#"><img src={companyLogo} alt="Company Logo (W)" /></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`}> <img src={navLogo} alt="Open Navigation Menu" /> </Navbar.Toggle>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#new">New</Nav.Link>
                  <Nav.Link href="#popular">Popular</Nav.Link>
                  <Nav.Link href="#trending">Trending</Nav.Link>
                  <Nav.Link href="#categories">Categories</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>

        <main className="main_info">
          <Row className='header_new_row'>
            <Col xs={12} lg={8}>
              <header className="news_header">
                <Row>
                  <Col xs={12}>
                    <picture className="header_img">
                      <source srcSet={blocksImg} media="(max-width: 991px)"/>
                      <source srcSet={blocksImg2} media="(min-wwidth: 992px)" />  
                      <img src={blocksImg2} alt="Coloured blocks" />  
                    </picture>
                  </Col>
                  <Col xs={12} lg={6}>       
                    <h1 className="header_title">The Bright Future of Web 3.0?</h1>
                  </Col>
                  <Col xs={12} lg={6} className='d-grid h-50'>
                    <p className="header_description">We dive into the next evolution of the web that claims to put the power of
                    the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                    <button className="header_button">Read More</button>
                  </Col>
                </Row>
              </header>
            </Col>
            <Col xs={12} lg={4}>
              <section className="new_articles">
                <h1 className="new_title">New</h1>

                <div className="new_article">
                  <h2 className="article_title">Hydrogen vs Electric Cars</h2>
                  <p className="article_description">Will hydrogen-fueled cars ever catch up to EVs?</p>
                </div>

                <div className="new_article">
                  <h2 className="article_title">The Downside of AI Artistry</h2>
                  <p className="article_description">What are the possible adverse effects of on-demand AI image generation?</p>
                </div>

                <div className="new_article">
                  <h2 className="article_title">Is VC Funding Drying Up?</h2>
                  <p className="article_description">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                </div>
              </section>
            </Col>
          </Row>

          <section className="featured_articles">
            <Row>
              <Col xs={12} lg={4} className="featured_article">
                <Row>
                  <Col xs={4}>
                    <img src={pcImg} alt="Retro Computers" />
                  </Col>
                  <Col xs={8}>
                    <h2 className="featured_number">01</h2>
                    <h3 className="featured_title">Reviving Retro PCs</h3>
                    <p className="featured_description">What happens when old PCs are given modern upgrades?</p>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} lg={4} className="featured_article">
                <Row>
                  <Col xs={4}>
                    <img src={keyboardImg} alt="Laptop Keyboard" />
                  </Col>
                  <Col xs={8}>
                    <h2 className="featured_number">02</h2>
                    <h3 className="featured_title">Top 10 Laptops of 2022</h3>
                    <p className="featured_description">Our best picks for various needs and budgets.</p>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} lg={4} className="featured_article">
                <Row>
                  <Col xs={4}>
                    <img src={gamingImg} alt="Controller being tossed" />
                  </Col>
                  <Col xs={8}>
                    <h2 className="featured_number">03</h2>
                    <h3 className="featured_title">The Growth of Gaming</h3>
                    <p className="featured_description">How the pandemic has sparked fresh opportunities.</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </section>
        </main>

        <footer className="attribution">
          <div className="frontend-mentor">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>
          </div>
          <div className="fin">
            Coded by <a href="https://www.fintatum.com" target='_blank' rel="noreferrer">Fin</a>
          </div>          
        </footer>
    </div>
  );
}

export default App;
