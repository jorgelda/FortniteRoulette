import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  z-index: 100;
  .parent-container {
    width: 600px;
    height: 600px;
    @media (max-width: 900px) {
      width: 300px;
      height: 300px;
    }
    > div {
      height: 100%;
      width: 100%;
      max-height: unset;
      max-width: unset;
    }

    display: flex;
    align-items: center;
    justify-content: center;

    > button {
      cursor: pointer;
      width: fit-content;
      height: fit-content;
      border-radius: 100%;
      outline: none;
      border: none;
      background-color: transparent;
      position: absolute;
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;
      z-index: 999;

      :hover {
        filter: brightness(150%);
        animation: rotate-scale-up 0.65s infinite;
        @keyframes rotate-scale-up {
          0% {
            transform: scale(1) rotateZ(0);
          }
          50% {
            transform: scale(2) rotateZ(180deg);
          }
          100% {
            transform: scale(1) rotateZ(360deg);
          }
        }
      }

      > img {
        width: 100px;
        height: 100px;
        @media (max-width: 900px) {
          width: 50px;
          height: 50px;
        }
      }
    }
  }
`

export const WheelContainer = styled.div``
