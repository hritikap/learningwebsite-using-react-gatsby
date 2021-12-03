import { Link } from 'gatsby';
import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { menuData } from '../data/Menudata';
import MenuButton from './buttons/Menubutton';
import Menutooltip from './tooltips/MenuTooltip';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  const tootltipref = useRef();

  const handleClick = (event) => {
    setIsOpen(!isOpen);
    event.preventDefault();
  };
  const handleClickOutside = (e) => {
    if (
      ref.current &&
      !ref.current.contains(e.target) &&
      !tootltipref.current.contains(e.target)
    ) {
      console.log('document is clicked');
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <Wrapper>
      <Link to='/'>
        <img src='/images/logos/logo.svg' />
      </Link>
      <Menuwrapper count={menuData.length} ref={ref}>
        {menuData.map((item, index) =>
          item.link === '/account' ? (
            <MenuButton
              item={item}
              key={index}
              onClick={(event) => handleClick(event)}
            />
          ) : (
            <MenuButton item={item} key={index} />
          ),
        )}
        <Hamburgerwrapper>
          <MenuButton
            item={{ title: '', icon: '/images/icons/hamburger.svg', link: '/' }}
            onClick={(event) => handleClick(event)}
          />
        </Hamburgerwrapper>
      </Menuwrapper>
      <div ref={tootltipref}>
        <Menutooltip isOpen={isOpen} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  display: grid;
  top: 60px;
  grid-template-columns: 44px auto;
  width: 100%;
  justify-content: space-between;
  padding: 0 30px;
  align-items: center;
`;
const Menuwrapper = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(${(props) => props.count}, auto);
  @media (max-width: 768px) {
    > a {
      display: none;
    }
    grid-template-columns: auto;
  }
`;
const Hamburgerwrapper = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

export default Header;
