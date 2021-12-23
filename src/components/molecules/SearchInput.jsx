import styled from "styled-components";

import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { Input } from "../atoms/input/Input";

export const SearchInput = () => {
  return (
    <div>
      <StyleContainer>
        <Input placeholder="Search" />
        <StyleButtonWrapper>
          <PrimaryButton>Search</PrimaryButton>
        </StyleButtonWrapper>
      </StyleContainer>
      <StyleContainer>
        <Input placeholder="Search me" />
        <StyleButtonWrapper>
          <SecondaryButton>Search</SecondaryButton>
        </StyleButtonWrapper>
      </StyleContainer>
    </div>
  );
};

const StyleContainer = styled.div`
  display: flex;
  align-items: center;
`;
const StyleButtonWrapper = styled.div`
  padding-left: 8px;
`;
