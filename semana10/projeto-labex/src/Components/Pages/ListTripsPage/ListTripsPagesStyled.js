import styled from "styled-components";
import DeleteIcon from "@material-ui/icons/Delete";

export const TripPageContainer = styled.div`
  display: flex;
`;

export const DeleteItem = styled(DeleteIcon)`
  transform: scale(1.5);
  margin-left: 150px;
  margin-bottom: 10px;
  cursor: pointer;
  color: red;
`;

export const DivTrips = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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

  @media (min-device-width: 320px) and (max-device-width: 420px) {
    width: 200px;
  }
`;

export const ImageTrip = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    width: 200px;
  }
`;

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

export const ProductAsideContainer = styled.div`
  width: 300px;
  height: 88.6vh;
  display: flex;
  flex-direction: column;
  background-color: #26272b;
  align-items: center;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    width: 150px;
  }
`;

export const TitleAside = styled.h1`
  margin-top: 40px;
  color: white;
`;

export const Button = styled.button`
  width: 200px;
  margin: 20px 20px 20px 20px;
  z-index: 1;
  font-size: inherit;
  font-family: inherit;
  color: black;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: #f2f2f2;
  border-radius: 6px;

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

  @media (min-device-width: 320px) and (max-device-width: 420px) {
    width: 100px;
  }
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

export const Loader = styled.div`
  position: relative;
`;

export const Outer = styled.div`
  border: 3px solid transparent;
  border-top-color: #3cefff;
  border-right-color: #3cefff;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 3.5em;
  height: 3.5em;
  margin-left: -1.75em;
  margin-top: -1.75em;
  animation: spin 2s linear infinite;
`;

export const Middle = styled.div`
  border: 3px solid transparent;
  border-top-color: #3cefff;
  border-right-color: #3cefff;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 2.1em;
  height: 2.1em;
  margin-left: -1.05em;
  margin-top: -1.05em;
  animation: spin 1.75s linear reverse infinite;
`;

export const Inner = styled.div`
  border: 3px solid transparent;
  border-top-color: #3cefff;
  border-right-color: #3cefff;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0.8em;
  height: 0.8em;
  margin-left: -0.4em;
  margin-top: -0.4em;
  animation: spin 1.5s linear infinite;
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
