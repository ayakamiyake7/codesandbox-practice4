import React from "react";
import styled from "styled-components";

export const UserIconWithName = (props) => {
  const { image, name, isAdmin } = props;
  return (
    <StyleContainer>
      <StyleImage width={160} src={image} alt={name} />
      <Stylename>{name}</Stylename>
      {isAdmin && <SEdit>Edit</SEdit>}
    </StyleContainer>
  );
};

const StyleContainer = styled.div`
  text-align: center;
`;
const StyleImage = styled.img`
  border-radius: 9999px;
`;
const Stylename = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;
const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
