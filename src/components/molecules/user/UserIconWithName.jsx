import styled from "styled-components";

export const UserIconWithName = (props) => {
  const { image, name } = props;
  return (
    <StyleContainer>
      <StyleImage width={160} src={image} alt={name} />
      <Stylename>{name}</Stylename>
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
