import styled from "styled-components";

import { Layout } from "antd";

const { Content } = Layout;

export const StyledContent = styled(Content)`
  content: "";
  width: 115px;
  max-width: 115px;
  height: 112px;
  border: dashed 1px #a6a6a6;
  border-radius: 100%;

  /* display: flex;
  justify-content: center;
  align-items: center; */
  /* left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%); */
`;

export const StyledContent2 = styled(Content)`
  width: 96px;
  height: 96px;
  background: #ffd300;
  border-radius: 100%;
  position: relative;
  margin: 0 auto 15px;
  border: solid 8px #fff;
`;

export const StyledContent3 = styled(Content)`
  /* content: "";
  display: block;
  width: 100%;
  height: 1px;
  border-top: dashed 1px #a6a6a6;

  top: 45px;
  right: 50%;
  z-index: -1; */
`;

/* styles.css or your main CSS file */

// export const FadeInFooter = styled.footer`
//   opacity: 0;
//   transition: opacity 1s ease-in-out;

//   &.visible {
//     opacity: 1;
//   }
// `;

export const FadeInComponent = styled.div`
  opacity: 0;
  transition: opacity 2s ease-in-out;

  &.visible {
    opacity: 1;
  }
`;
