import styled from "styled-components";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";

export const DivContent = styled.div`
  display: flex;
`;

export const DivToFix = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  margin-left: 30%;
  margin-top: 3%;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    margin-left: 15%;
  }
`;

export const DivCandidates = styled.div`
  margin: 15px;
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 20px 20px 20px 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

export const ItemCandidate = styled.span`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid grey;
  height: 50px;
  padding: 8px;
  cursor: pointer;
  :hover {
    background-color: #dedede;
  }
`;

export const ListCandidates = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Icons = styled.span`
  ${(props) =>
    props.show === "aguardando" ? { display: "flex" } : { display: "none" }}
  align-items: center;
`;

export const Approved = styled(ThumbUpAltIcon)`
  color: green;
  cursor: pointer;
  margin: 15px;
  transform: scale(1.5);
`;

export const Declined = styled(ThumbDownIcon)`
  color: red;
  cursor: pointer;
  margin: 15px;
  transform: scale(1.5);
`;

export const ButtonCand = styled.button`
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: hsl(236, 32%, 26%);
  :before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fc2f70;
    transform-origin: center left;
    transform: scaleX(0);
    transition: transform 0.25s ease-in-out;
  }
  :hover {
    cursor: pointer;
  }

  :hover::before {
    transform-origin: center right;
    transform: scaleX(1);
  }

  @media (min-device-width: 320px) and (max-device-width: 420px) {
    width: 200px;
  }
`;
