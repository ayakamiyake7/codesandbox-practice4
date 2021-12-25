import React, { memo } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { userState } from "../../../store/userState";
// import { UserContext } from "../../../providers/UserProvider";

export const UserIconWithName = memo((props) => {
  console.log("userIconwithName");

  const { image, name } = props;
  // const { userInfo } = useContext(UserContext);
  const userInfo = useRecoilValue(userState);
  const isAdmin = userInfo ? userInfo.isAdmin : false;

  return (
    <StyleContainer>
      <StyleImage width={160} src={image} alt={name} />
      <Stylename>{name}</Stylename>
      {isAdmin && <SEdit>Edit</SEdit>}
    </StyleContainer>
  );
});

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
