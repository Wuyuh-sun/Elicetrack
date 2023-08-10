import React from "react";
import styled, { css } from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import { GoNumber } from "react-icons/go";
import { RiTodoLine } from "react-icons/ri";
import Link from "next/link";
import { useRouter } from "next/router";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1 auto;
  background-color: green;
`;
const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 12px 16px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuButton = styled.button`
  padding: 8px;
  border-radius: 50%;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const MenuBoard = styled.div`
  margin-left: auto;
  position: relative;
  width: max-content;
`;

const Menu = styled.div<{ visible?: boolean }>`
  position: absolute;
  top: calc(100% + 16px);
  right: -40px;
  width: 100vw;
  max-width: 450px;
  padding: 24px 16px;
  background-color: #393e46;
  border: 8px solid #222831;
  border-radius: 24px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, max-content));
  grid-gap: 16px;
  max-height: 300px;
  overflow: auto;

  @media screen and (min-width: 768px) {
  }

  ${({ visible }) =>
    visible
      ? css`
          visibility: visible;
        `
      : css`
          visibility: hidden;
        `}

  /* width */
  &::-webkit-scrollbar {
    width: 4px;
    background: transparent;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    // box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
    margin: 0 4px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.6);
    border-radius: 10px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.4);
  }
`;

const Footer = styled.footer`
  background-color: #fafafa;
  color: #9e9e9e;
  padding: 12px 16px;
  text-align: center;
`;

const CopyRight = styled.span`
  text-transform: uppercase;
  font-size: 9px;
  font-weight: 300;
  line-height: 12px;
`;

const UserThumbnail = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #ffffff;
  margin-left: 8px;
`;

const MenuItem = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: #ffffff;
  text-decoration: none;
  width: 50px;
  text-align: center;

  span {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
`;

export const RootLayout = (props: React.PropsWithChildren) => {
  const { children } = props;
  const FOOTER_TITLE = "copyright Ⓒ Elice S/W Tract 5.All Rights reserved";
  const [visibleMenu, setVisibleMenu] = React.useState(false);
  const router = useRouter();

  const MENUS = [
    {
      href: "/counter",
      label: "카운터",
      id: "counter",
      icon: <GoNumber />,
    },
    {
      href: "/todo",
      label: "할일",
      id: "todo",
      icon: <RiTodoLine />,
    },
  ];

  React.useEffect(() => {
    setVisibleMenu(false);
  }, [router]);

  return (
    <Container>
      <Header>
        <MenuBoard>
          <MenuButton onClick={() => setVisibleMenu((prev) => !prev)}>
            <AiOutlineMenu color={"#ffffff"} size={24} />
          </MenuButton>
          <Menu visible={visibleMenu}>
            {MENUS.map((menu, idx) => {
              const Icon = React.cloneElement(menu.icon, {
                size: 36,
                color: "#ffffff",
              });
              return (
                <MenuItem href={menu.href} key={menu.id + idx}>
                  {Icon}
                  <span>{menu.label}</span>
                </MenuItem>
              );
            })}
          </Menu>
        </MenuBoard>
        <UserThumbnail src={"https://picsum.photos/100/100"} />
      </Header>
      <Main>{children}</Main>
      <Footer>{<CopyRight>{FOOTER_TITLE}</CopyRight>}</Footer>
    </Container>
  );
};
