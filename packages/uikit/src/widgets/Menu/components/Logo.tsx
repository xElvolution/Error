import React, { useContext } from "react";
import styled from "styled-components";
import Flex from "../../../components/Box/Flex";
import { MenuContext } from "../context";

interface Props {
  href: string;
}

const StyledLink = styled("a")`
  display: flex;
  .mobile-icon {
    width: 55px;
    ${({ theme }) => theme.mediaQueries.lg} {
      display: none;
    }
  }
  .desktop-icon {
    width: 140px;
    display: none;
    ${({ theme }) => theme.mediaQueries.lg} {
      display: block;
    }
  }
`;

const Logo: React.FC<React.PropsWithChildren<Props>> = ({ href }) => {
  const { linkComponent, themeMode } = useContext(MenuContext); // Assuming you have access to the theme mode via the MenuContext

  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
    <>
      <img
        alt="logo mobile"
        className="mobile-icon"
        src={
          themeMode === "light" ? "/images/logo-light.png" : "/images/logo-dark.png"
        }
      />
      <img
        alt="logo desktop"
        className="desktop-icon"
        src={
          themeMode === "light" ? "/images/logo-desktop-light.png" : "/images/logo-desktop-dark.png"
        }
      />
    </>
  );

  return (
    <Flex alignItems="center">
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="Zodiac home page">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink href={href} as={linkComponent} aria-label="Zodiac home page">
          {innerLogo}
        </StyledLink>
      )}
    </Flex>
  );
};

export default React.memo(Logo);
