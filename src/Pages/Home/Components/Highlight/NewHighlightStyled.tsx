import styled from "styled-components";

import "../../../../styles/variable.scss";

export const HighComponentVideoBox: any = styled.div.attrs(
  ({ props }: any) => props
)`
  transition: 300ms;

  overflow: hidden;
  position: relative;
  height: 630px;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }
  cursor: pointer;
  &:hover {
    filter: brightness(115%);
  }
`;

export const HighComponentBox: any = styled.div.attrs(
  ({ props }: any) => props
)`
  position: relative;
  box-sizing: border-box;
  background: url(${(props: any) => props["image"]});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: 300ms;
  display: flex;
  flex-direction: column-reverse;

  cursor: pointer;
  &:hover {
    filter: brightness(115%);
  }
  .banner {
    height: 60px;
    margin: 0;
    background-color: rgba(0, 0, 0, 0.638);
    bottom: 0;
    color: transparent;
  }
`;

export const ContentBox = styled.div`
  box-sizing: border-box;
  border-radius: 6px !important;
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
    0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
`;

export const Content = styled.div`
  color: white;
  background-color: var(--blue);
  height: 100%;

  position: relative;

  padding: 30px;
  cursor: pointer;

  transition: 300ms;
  height: 630px;

  &:hover,
  &:active {
    background-color: var(--blue-hover);

    .ViewButton {
      background-color: var(--almost-white);
      color: --dark-red;
    }
  }
`;
