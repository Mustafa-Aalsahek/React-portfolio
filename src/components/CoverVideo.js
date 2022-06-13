import React from "react";
import styled from "styled-components";
import MainVideo from "../assets/Walking Girl.mp4";
import { motion } from "framer-motion";

const VideoContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.7)`};
`;
const Title = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.text};

  div {
    display: flex;
    flex-direction: row;
  }
  h1 {
    font-family: "Kaushan Script";
    font-size: ${(props) => props.theme.fontBig};
    text-shadow: 5px 5px 5px ${(props) => props.theme.body};
  }
  h2 {
    font-family: "Sirin Stencil";
    font-size: ${(props) => props.theme.fontlg};
    text-shadow: 2px 2px 2px ${(props) => props.theme.body};
    font-weight: 300;
    text-transform: capitalize;
  }
`;
const container = {
  hidden: {
    opacity: 0,
  },

  show: {
    opacity: 1,

    transition: {
      delayChildren: 2,
      staggerChildren: 0.3,
    },
  },
};
const item = {
  hidden: {
    opacity: 0,
  },

  show: {
    opacity: 1,
  },
};

const CoverVideo = () => {
  return (
    <VideoContainer>
      <DarkOverlay />
      <Title variants={container} initial="hidden" animate="show">
        <div>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.13"
            data-scroll-speed="4"
          >
            Mus
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.11"
            data-scroll-speed="4"
          >
            ta
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.12"
            data-scroll-speed="4"
          >
            fa
          </motion.h1>
          <h2 data-scroll data-scroll-delay="0.11" data-scroll-speed="2">
            Inspire. Create. Belive
          </h2>
        </div>
      </Title>
      <video src={MainVideo} type="video/mp4" autoPlay muted loop />
    </VideoContainer>
  );
};

export default CoverVideo;
