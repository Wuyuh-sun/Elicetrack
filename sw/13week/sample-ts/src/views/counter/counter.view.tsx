import React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  flex: 1 auto;
  background: var(--bg, #0d0c27);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;
`;

const Title = styled.h1`
  color: #ffb23e;
  font-size: 32px;
`;

const Count = styled.h3`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const ButtonGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  background: var(--white, #fff);
  width: 180px;
  border-radius: 32px;
  align-items: center;
  height: 58px;
`;

const Button = styled.button`
  position: absolute;
  left: 4px;
  border: none;
  background-color: hsla(225, 100%, 56%, 1);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: rgba(255, 255, 255, 1);

  &:last-of-type {
    left: initial;
    right: 4px;
  }

  &:hover {
    background-color: hsla(225, 100%, 66%, 1);
  }

  &:active {
    background-color: hsla(225, 100%, 46%, 1);
  }

  &:disabled {
    background: var(--simentic-surf-container-highest, #d0d2d5);
  }
`;

const ToggleSwitch = styled.div`
  position: relative;
  width: 72px;
  background: var(--white, #fff);
  height: 24px;
  border-radius: 24px;
  cursor: pointer;
  box-sizing: content-box;
  padding: 4px 0;
`;

const Circle = styled.div<{ checked: boolean }>`
  position: absolute;
  width: 40%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  left: 4px;
  top: 50%;
  transform: translateY(-50%);
  background-color: skyblue;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ checked }) =>
    checked
      ? css`
          left: calc(100% - 4px);
          transform: translate(-100%, -50%);
          background-color: #102c57;
        `
      : css``}
`;

const Moon = styled.div`
  position: relative;
  background-color: yellow;
  width: 50%;
  height: 50%;
  border-radius: 50%;
  transform: rotate(15deg);

  &::after {
    position: absolute;
    content: "";
    width: 75%;
    height: 75%;
    right: 0;
    top: 0;
    border-radius: 50%;
    background-color: #102c57;
  }
`;

const Sun = styled.div`
  width: 50%;
  height: 50%;
  background-color: orange;
  border-radius: 50%;
`;

const Shine = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  box-shadow: 0 0 3px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #0ba9ca,
    0 0 70px #0ba9ca, 0 0 80px #0ba9ca;
`;

const Icon = styled.p<{ url: string }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: ${({ url }) => `url(${url})`};
`;

export const CounterView = () => {
  const [count, setCount] = React.useState(0);
  const [darkMode, setDarkMode] = React.useState(false);
  const [onState, setOnState] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const target = e.target as HTMLElement;
    const action = target.dataset.action;
    switch (action) {
      case "plus":
        setCount((prevCount) => prevCount + 1);
        break;
      case "minus":
        setCount((prevCount) => prevCount - 1);
        break;
      default:
        return false;
    }
  };

  return (
    <Wrapper>
      <Title>Counter</Title>
      <ButtonGroup onClick={handleClick}>
        <Button data-action={"minus"} disabled={count <= 0}>
          -
        </Button>

        <Count>{count}</Count>
        <Button data-action={"plus"} disabled={count >= 10}>
          +
        </Button>
      </ButtonGroup>

      <ToggleSwitch onClick={() => setDarkMode((prev) => !prev)}>
        <Circle checked={darkMode}>
          {darkMode ? (
            <Moon />
          ) : (
            // <Icon url={"/moon.png"} />
            <Sun>
              <Shine />
            </Sun>
            // <Icon url={"/sun.png"} />
          )}
        </Circle>
      </ToggleSwitch>
    </Wrapper>
  );
};
