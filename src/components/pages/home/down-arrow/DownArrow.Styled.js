import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledDownArrow = styled(motion.div)`
  width: 100%;
  margin-top: auto;
  padding-bottom: 2rem;

  .arrow-img {
    width: 100px;
    margin: 0 auto;
    filter: invert(60%) sepia(91%) saturate(1258%) hue-rotate(179deg)
      brightness(102%) contrast(87%);
  }
`;
