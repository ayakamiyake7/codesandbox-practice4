import { memo } from "react";
import styled from "styled-components";

import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";

export const SearchInput = memo(() => {
  console.log("searchInput");

  return (
    <div>
      <StyleContainer>
        <Input placeholder="Search" />
        <StyleButtonWrapper>
          <PrimaryButton>Search</PrimaryButton>
        </StyleButtonWrapper>
      </StyleContainer>
    </div>
  );
});

const StyleContainer = styled.div`
  display: flex;
  align-items: center;
`;
const StyleButtonWrapper = styled.div`
  padding-left: 8px;
`;
