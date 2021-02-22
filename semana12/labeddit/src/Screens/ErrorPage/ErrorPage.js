import ImageErrorEddit from "../../Assets/ErrorImage.png";
import { goToHome } from "../../Router/Coordinator";
import { useHistory } from "react-router-dom";
import { ErrorContainer, ErrorMain, ImageError, Button } from "./styled";

const ErrorPage = () => {
  const history = useHistory();

  return (
    <>
      <ErrorMain>
        <ErrorContainer>
          <ImageError src={ImageErrorEddit} alt="Erro" />
          <Button onClick={() => goToHome(history)}>
            VOLTE A PÁGINA INICIAL
          </Button>
        </ErrorContainer>
      </ErrorMain>
    </>
  );
};

export default ErrorPage;
