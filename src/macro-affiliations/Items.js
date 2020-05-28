// Components==============
import { UnderlineButton } from "components-react-lib";
import React from "react";
import styled from "styled-components";
import Block from "../micro-components/Block";
import { Container } from "../style/Mixins";
// =========================

const Wrapper = styled.div`
  text-align: center;
  margin: 0 auto;
  max-width: 750px;
`;

const Pointer = styled.div`
  position: absolute;
  top: -100px;
`;

const Logo = styled.img`
  max-width: 250px;
  margin: 0 auto;
  margin-bottom: ${({ theme: { spacing } }) => spacing[5]};
`;

const Name = styled.p`
  ${({ theme: { fontSize } }) => fontSize.xl}
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.heavy};
  margin-bottom: ${({ theme: { spacing } }) => spacing[0]};
`;

const Subtitle = styled.p`
    ${({ theme: { fontSize } }) => fontSize.xl}
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};

    margin-bottom: ${({ theme: { spacing } }) => spacing[4]};
`;

const Flex = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: ${({ theme: { spacing } }) => spacing[13]};
  margin-top: ${({ theme: { spacing } }) => spacing[4]};
`;

export default function Items({ content }) {
  const items = content.map((e, index) => {
    const image = e?.logo?.asset?.url;
    const name = e?.name;
    const subtitle = e?.subtitle;
    const text = e?._rawText;
    const website = e?.website;
    const location = e?.location;

    return (
      <div key={index} style={{ position: "relative" }}>
        <Pointer id={name?.toLowerCase().replace(/\s/g, "")} />
        <Logo src={image} alt={name} />
        <Name>{name}</Name>
        <Subtitle>{subtitle}</Subtitle>
        <Block content={text} />
        <Flex>
          <a href={website} target="_blank" rel="noreferrer">
            <UnderlineButton>Visit website</UnderlineButton>
          </a>
          {location && <div style={{ margin: "0 0.5em" }}>|</div>}
          <p>{location}</p>
        </Flex>
      </div>
    );
  });

  return (
    <Container>
      <Wrapper>{items}</Wrapper>
    </Container>
  );
}
