import React, { useContext } from 'react';
import * as S from './Header.style';
import { LanguageContext } from 'App';
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
interface IPropsData {
  address: string;
}

const Header = (address: IPropsData) => {
  const navigate = useNavigate();
  const { language, setLanguage } = useContext(LanguageContext);
  const Nav = () => {
    if (address.address === 'main') {
      navigate('/');
    } else {
      navigate(-1);
    }
  };

  return (
    <S.Header>
      <S.Title onClick={Nav}>나만의 포켓몬 도감</S.Title>
      <S.Box langColor={language}>
        <LazyLoadImage src="/images/global.jpg" alt="글로벌" width={20} height={20} />
        <p onClick={() => setLanguage('ko')}>한국어</p>
        <p onClick={() => setLanguage('en')}>EN</p>
      </S.Box>
    </S.Header>
  );
};

export default Header;
