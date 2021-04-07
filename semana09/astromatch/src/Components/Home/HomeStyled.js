import styled from "styled-components";

export const DivProfiles = styled.div`
  text-align: center;
  display: grid;
  grid-template-rows: 400px 1fr;
  padding: 20px 20px 0px;
`;

export const DivHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const ImgBlur = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${(props) => props.image});
  filter: blur(10px);
  z-index: 1;
  position: absolute;
`;

export const ImgProfile = styled.img`
  max-width: 100%;
  max-height: 100%;
  z-index: 2;
`;

export const DivStatus = styled.div`
  height: 25%;
  width: 100%;
  position: absolute;
  left: 3%;
  bottom: 5px;
  z-index: 3;
  color: white;
  text-align: left;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
`;

export const ProfileName = styled.p`
  margin: 0;
  display: inline-block;
  font-weight: bold;
  font-size: 24px;
`;

export const Age = styled.p`
  margin: 0 8px;
  display: inline-block;
  font-size: 20px;
`;

export const Description = styled.p`
  margin: 10px 0;
  font-size: 1.2em;
`;

export const DivChoiceClick = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const ButtonHeart = styled.button`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  border: 1px solid green;
  outline: none;
  color: green;
  font-size: 50px;
  transform: scale(0.7);
  transition: all 0.2s ease 0s;
  position: relative;
  box-shadow: rgb(205 205 205 / 73%) 0px 0px 15px 0px;
  overflow: hidden;

  :hover {
    cursor: pointer;
    animation: jelly 0.5s;
  }

  @keyframes jelly {
    0%,
    100% {
      transform: scale(1, 1);
    }
    25% {
      transform: scale(0.9, 1.1);
    }
    50% {
      transform: scale(1.1, 0.9);
    }
    75% {
      transform: scale(0.95, 1.05);
    }
  }
`;

export const ButtonClose = styled.button`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  border: 1px solid red;
  color: red;
  outline: none;
  font-size: 50px;
  transform: scale(0.7);
  transition: all 0.2s ease 0s;
  position: relative;
  box-shadow: rgb(205 205 205 / 73%) 0px 0px 15px 0px;
  overflow: hidden;

  :hover {
    cursor: pointer;
    animation: jelly 0.5s;
  }

  @keyframes jelly {
    0%,
    100% {
      transform: scale(1, 1);
    }
    25% {
      transform: scale(0.9, 1.1);
    }
    50% {
      transform: scale(1.1, 0.9);
    }
    75% {
      transform: scale(0.95, 1.05);
    }
  }
`;

export const Heart = styled.div``;

export const HeartAnimation = styled.div`
  position: relative;
  width: 100px;
  height: 90px;
  animation: heartbeat 1s infinite;
  margin: 0 auto;
  :before,
  :after {
    position: absolute;
    content: "";
    left: 50px;
    top: 0;
    width: 50px;
    height: 80px;
    background: #762d93;
    -moz-border-radius: 50px 50px 0 0;
    border-radius: 50px 50px 0 0;
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-transform-origin: 0 100%;
    -moz-transform-origin: 0 100%;
    -ms-transform-origin: 0 100%;
    -o-transform-origin: 0 100%;
    transform-origin: 0 100%;
  }
  :after {
    left: 0;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-transform-origin: 100% 100%;
    -moz-transform-origin: 100% 100%;
    -ms-transform-origin: 100% 100%;
    -o-transform-origin: 100% 100%;
    transform-origin: 100% 100%;
  }

  @keyframes heartbeat {
    0% {
      transform: scale(0.75);
    }
    20% {
      transform: scale(1);
    }
    40% {
      transform: scale(0.75);
    }
    60% {
      transform: scale(1);
    }
    80% {
      transform: scale(0.75);
    }
    100% {
      transform: scale(0.75);
    }
  }
`;
