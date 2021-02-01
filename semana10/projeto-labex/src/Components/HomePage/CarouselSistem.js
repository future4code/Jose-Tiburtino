import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Business from "../../Img/ImgBlurLabex.png";
import SocialMedia from "../../Img/SocialMediaLabex.png";
import Office from "../../Img/OfficeLabex.png";
import styled from "styled-components";

const CarroselDiv = styled.div`
  padding: 4em 2em;
  background-color: #f2f2f2;
`;

const CarouselSistem = () => {
  return (
    <CarroselDiv>
      <Container>
        <Row>
          <Col md={12}>
            <Carousel nextLabel="" prevLabel="">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Business}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>Encontre as melhores viagens espaciais!</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={SocialMedia}
                  alt="Third slide"
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={Office} alt="Third slide" />
                <Carousel.Caption>
                  <h3>Contate-nos.</h3>
                  <p>
                    Caso queira nos contatar, sinta-se livre estamos sempre a
                    disposição, pode encontrar nosso contato logo abaixo ao fim
                    da página.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </CarroselDiv>
  );
};

export default CarouselSistem;
