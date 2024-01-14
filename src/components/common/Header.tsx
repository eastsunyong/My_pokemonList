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

  const saveLanguage = (langType : string) => {
    if(langType === "ko"){
      localStorage.clear();
      localStorage.setItem("언어", "ko")
      setLanguage("ko")
    } else{
      localStorage.clear();
      localStorage.setItem("언어", "en")
      setLanguage("en")
    }
  }

  return (
    <S.Header>
      <S.Title onClick={Nav}>나만의 포켓몬 도감</S.Title>
      <S.Box $langColor={language}>
        <LazyLoadImage src="/images/global.jpg" alt="글로벌" width={20} height={20} />
        <p onClick={() => saveLanguage("ko")}>한국어</p>
        <p onClick={() => saveLanguage("en")}>EN</p>
      </S.Box>
    </S.Header>
  );
};

export default Header;
