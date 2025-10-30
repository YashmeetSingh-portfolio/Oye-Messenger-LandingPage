import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container, FlexRow, Button } from './CommonComponents';
import { FiMenu, FiX } from 'react-icons/fi';
import { renderIcon } from '../../utils/iconUtils';

const HeaderWrapper = styled.header<{ isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  padding: ${({ isScrolled }) => (isScrolled ? '0.75rem 0' : '1.25rem 0')};
  background-color: ${({ isScrolled, theme }) =>
    isScrolled ? theme.colors.background : 'transparent'};
  box-shadow: ${({ isScrolled, theme }) =>
    isScrolled ? theme.shadows.small : 'none'};
  transition: ${({ theme }) => theme.transitions.default};
  backdrop-filter: ${({ isScrolled }) => (isScrolled ? 'blur(10px)' : 'none')};
`;

const Logo = styled.div`
  font-size: 1.75rem;
  font-weight: 800;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.gradientStart} 0%,
    ${({ theme }) => theme.colors.gradientEnd} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const NavLink = styled.a<{ isActive?: boolean }>`
  font-weight: 500;
  position: relative;
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.primary : theme.colors.text};
  transition: ${({ theme }) => theme.transitions.default};

  &:after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: ${({ isActive }) => (isActive ? '100%' : '0')};
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: ${({ theme }) => theme.transitions.default};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};

    &:after {
      width: 100%;
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

const MobileMenu = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 75%;
  max-width: 300px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: ${({ theme }) => theme.shadows.large};
  padding: 2rem;
  transform: ${({ isOpen }) =>
    isOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease-in-out;
  z-index: 200;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const MobileNavLink = styled(NavLink)`
  font-size: 1.25rem;
  padding: 0.5rem 0;
`;

const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
  z-index: 150;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  background: none;
  border: none;
  cursor: pointer;
`;

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLinkClick = (linkName: string) => {
    setActiveLink(linkName);
    closeMenu();
  };

  return (
    <>
      <HeaderWrapper isScrolled={isScrolled}>
        <Container>
          <FlexRow justify="space-between">
            <Logo>Oye Messenger</Logo>
            <Nav>
              <NavLink
                href="#home"
                isActive={activeLink === 'home'}
                onClick={() => handleLinkClick('home')}
              >
                Home
              </NavLink>
              <NavLink
                href="#features"
                isActive={activeLink === 'features'}
                onClick={() => handleLinkClick('features')}
              >
                Features
              </NavLink>
              <NavLink
                href="#testimonials"
                isActive={activeLink === 'testimonials'}
                onClick={() => handleLinkClick('testimonials')}
              >
                Testimonials
              </NavLink>
              <NavLink
                href="#faq"
                isActive={activeLink === 'faq'}
                onClick={() => handleLinkClick('faq')}
              >
                FAQ
              </NavLink>
              <Button variant="primary" as="a" href={`https://github.com/YashmeetSingh-portfolio/Oye-Messenger/releases/download/Oye.V1/Oye.apk`} download>Download Now</Button>
            </Nav>
            <MobileMenuButton onClick={toggleMenu}>
              {renderIcon(FiMenu, { size: 24 })}
            </MobileMenuButton>
          </FlexRow>
        </Container>
      </HeaderWrapper>

      <Overlay isOpen={isMenuOpen} onClick={closeMenu} />

      <MobileMenu isOpen={isMenuOpen}>
        <CloseButton onClick={closeMenu}>
          {renderIcon(FiX, { size: 24 })}
        </CloseButton>
        <Logo>Oye Messenger</Logo>
        <MobileNavLink
          href="#home"
          isActive={activeLink === 'home'}
          onClick={() => handleLinkClick('home')}
        >
          Home
        </MobileNavLink>
        <MobileNavLink
          href="#features"
          isActive={activeLink === 'features'}
          onClick={() => handleLinkClick('features')}
        >
          Features
        </MobileNavLink>
        <MobileNavLink
          href="#testimonials"
          isActive={activeLink === 'testimonials'}
          onClick={() => handleLinkClick('testimonials')}
        >
          Testimonials
        </MobileNavLink>
        <MobileNavLink
          href="#faq"
          isActive={activeLink === 'faq'}
          onClick={() => handleLinkClick('faq')}
        >
          FAQ
        </MobileNavLink>
        <Button variant="primary" as="a" href={`https://github.com/YashmeetSingh-portfolio/Oye-Messenger/releases/download/Oye.V1/Oye.apk`} download>Download Now</Button>
      </MobileMenu>
    </>
  );
};

export default Header;
