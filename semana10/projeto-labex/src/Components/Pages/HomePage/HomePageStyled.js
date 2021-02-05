import styled from "styled-components";

export const DivTrips = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(${(props) => props.lines}, 1fr);
  gap: 50px;
  column-gap: 100px;
  justify-content: center;
  padding: 15px;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    grid-template-columns: 1fr;
  }
`;

export const CardTrip = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;

export const ImageTrip = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img``;

export const Description = styled.div`
  width: 100%;
  padding: 0 10px;
  text-align: left;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonDetails = styled.button`
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.2em 1em;
  border-radius: 6px;
  outline: none;
  border: none;
  background-color: hsl(236, 32%, 26%);
  overflow: hidden;
  cursor: pointer;

  :after {
    content: "";
    z-index: -1;
    background-color: hsla(0, 0%, 100%, 0.2);
    position: absolute;
    top: -50%;
    bottom: -50%;
    width: 1.25em;
    transform: translate3d(-525%, 0, 0) rotate(35deg);
  }

  :hover::after {
    transition: transform 0.45s ease-in-out;
    transform: translate3d(200%, 0, 0) rotate(35deg);
  }
`;

export const FixButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CarroselDiv = styled.div`
  padding: 2em 2em;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
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
