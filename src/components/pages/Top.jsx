import styled from "styled-components";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useHistory } from "react-router-dom";

export const Top = () => {
  const history = useHistory();

  const onClickAdmin = () => {
    history.push({ pathname: "/users", state: { isAdmin: true } });
  };
  const onClickGeneral = () => {
    history.push({ pathname: "/users", state: { isAdmin: false } });
  };

  return (
    <SContainer>
      <h2>This is Top page.</h2>
      <SecondaryButton onClick={onClickAdmin}>Admin</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>General</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
