import { memo } from "react";
import styled from "styled-components";
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";

export const UserCard = memo((props) => {
  console.log("usercard");

  const { user } = props;
  return (
    <Card>
      <UserIconWithName image={user.image} name={user.name} />
      <StyleDl>
        <dt>Email</dt>
        <dd>{user.email}</dd>
        <dt>TEL</dt>
        <dd>{user.phone}</dd>
        <dt>Company</dt>
        <dd>{user.company.name}</dd>
        <dt>WEB</dt>
        <dd>{user.website}</dd>
      </StyleDl>
    </Card>
  );
});

const StyleDl = styled.dl`
  text-align: left;
  margin: 0;
  dt {
    font-weight: bold;
    float: left;
  }
  dd {
    padding-left: 56px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`;
