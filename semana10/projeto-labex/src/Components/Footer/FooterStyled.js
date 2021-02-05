import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #26272b;
  color: white;
  bottom: 0;
  padding: 0 40px;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    flex-direction: column;
    height: 20vh;
  }
`;

export const SocialMedias = styled.a`
  color: white;
`;
