import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Business from "../../../Img/ImgBlurLabex.png";
import SocialMedia from "../../../Img/SocialMediaLabex.png";
import Office from "../../../Img/OfficeLabex.png";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { goToApplicationFormPage } from "../../Router/Coordinator";

const CarroselDiv = styled.div`
  padding: 2em 2em;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  margin-top: 2%;
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: hsl(236, 32%, 26%);
  overflow: hidden;
  transition: color 0.4s ease-in-out;

  :before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    background-color: #3cefff;
    transform-origin: center;
    transform: translate3d(-50%, -50%, 0) scale3d(0, 0, 0);
    transition: transform 0.45s ease-in-out;
  }

  :hover {
    cursor: pointer;
    color: #161616;
  }

  :hover::before {
    transform: translate3d(-50%, -50%, 0) scale3d(15, 15, 15);
  }
`;

const CarouselSistem = () => {
  const history = useHistory();

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
      <Button onClick={() => goToApplicationFormPage(history)}>
        INSCREVA-SE!
      </Button>
    </CarroselDiv>
  );
};

export default CarouselSistem;
