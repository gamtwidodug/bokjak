import styled from 'styled-components';

export const AboutWrap = styled.div`
  .no-padding {
    padding: 0 !important;
  }
  width: 100%;
  .inner {
    padding: 0;
  }

  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden; /* 가로 스크롤 방지 */
  }
  section {
    background: #111111;
    width: 100vw;
    overflow-x: hidden;
    margin: 0 auto;
    display: block;
  }

  h1 {
    font-size: 55px; /* 기본 크기 (데스크톱) */
  }

  @media (max-width: 768px) {
    /* 태블릿 크기 */
    h1 {
      font-size: 50px;
    }
  }

  @media (max-width: 390px) {
    /* 모바일 크기 */
    h1 {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-size: large;
      padding-left: 15%;
    }
  }

  h2 {
    font-size: xx-large;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: x-large;
    }
  }

  @media (max-width: 390px) {
    h2 {
      font-size: large;
    }
  }

  h3 {
    font-size: medium;
  }

  h4 {
    font-size: xx-small;
  }
  h5 {
    font-size: large;
  }
  h6 {
    text-align: center;

    font-size: x-large;
  }
  @media (max-width: 768px) {
    h6 {
      text-align: center;
      font-size: large;
    }
  }
  @media (max-width: 390px) {
    h6 {
      font-size: xx-small;
    }
  }
  section::-webkit-scrollbar {
    display: none;
  }

  @keyframes scroll-left {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  .scroll-section {
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    gap: 15px;
    overflow-x: auto;
    white-space: nowrap;
    animation: scroll-left 10s linear infinite;
  }

  .hover\\:scale-105:hover {
    transform: scale(1.05);
  }
`;
