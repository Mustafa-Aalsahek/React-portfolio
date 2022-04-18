import React from "react";
import styled from "styled-components";

const Section = styled.section`
  position: relative;
  min-height: 200vh;
  overflow: hidden;
`;

const Home = () => {
  return (
    <Section>
      <h1>Video</h1>
      <h1>Logo</h1>
      <h1>NavBar</h1>
    </Section>
  );
};

export default Home;
