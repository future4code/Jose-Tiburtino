import styled from "styled-components";

export const PostDetailsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2vh;
  height: 100%;
  min-height: 100vh;
  background-color: #dbe0e6;
`;

export const CommentsSection = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #dbe0e6;
`;

export const PostComment = styled.form`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 575px;
  margin: 0px auto;
  justify-content: center;
  padding: 1em;
  background-color: white;
  border-radius: 3px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  @media screen and (min-device-width: 320px) and (max-device-width: 420px) {
    width: 100vw;
  }
  @media screen and (min-device-width: 421px) and (max-device-width: 800px) {
    width: 100vw;
  }
`;
