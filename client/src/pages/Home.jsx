import React from 'react';
import '../styles/home.css';
import {Container, Row, Col} from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png'
import Subtitle from '../shared/Subtitle';



const Home = () => {
  return <>
  {/* ======== hero section start ========= */}
   <section>
    <Container>
      <Row>
        <Col lg="6">
          <div className="hero__content">
            <div className="hero__subtitle d-flex align-items-center">
              <Subtitle subtitle={'Know Before You go'} />
              <img src={worldImg} alt="" />
            </div>
            <h1>Traveling opens the door to creating <span className='highlight'>
              memories</span></h1>
              <p>Description here....</p>
          </div>   
        </Col>

        <Col lg='2'>
          <div className="hero__img-box">
            <img src={heroImg} alt="" />
          </div>
          <div className="hero__img-box">
            <video src={heroVideo} alt="" controls/>
          </div>
          <div className="hero__img-box">
            <img src={heroImg02} alt="" />
          </div>
        </Col>
      </Row>
    </Container>
    </section> 
  </>
}

export default Home