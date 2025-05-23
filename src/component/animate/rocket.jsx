import React from 'react';
import styled from 'styled-components';

const Rocket = () => {
  return (
    <StyledWrapper>
      <div className="rocket">
        <div className="rocket-body">
          <div className="body" />
          <div className="fin fin-left" />
          <div className="fin fin-right" />
          <div className="window" />
        </div>
        <div className="exhaust-flame" />
        <ul className="exhaust-fumes">
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
        <ul className="star">
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .rocket {
    width: 80px;
    top: -20px;
    position: relative;
    left: calc(50% - 40px);
    transform: scale(.33);
  }

  .rocket .rocket-body {
    width: 80px;
    left: calc(50% - 50px);
    animation: bounce 0.5s infinite;
  }

  .rocket .rocket-body .body {
    background-color: #dadada;
    height: 190px;
    left: calc(50% - 50px);
    border-top-right-radius: 100%;
    border-top-left-radius: 100%;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    border-top: 5px solid #f5f5f5;
  }

  .rocket .rocket-body:before {
    content: '';
    position: absolute;
    left: calc(50% - 24px);
    width: 48px;
    height: 13px;
    bottom: -13px;
    background-color: #554842;
    border-bottom-right-radius: 60%;
    border-bottom-left-radius: 60%;
  }

  .rocket .window {
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background-color: #0075c3;
    left: calc(50% - 25px);
    top: 40px;
    border: 5px solid #b4b2b2;
  }

  .rocket .fin {
    position: absolute;
    z-index: -100;
    height: 55px;
    width: 50px;
    background-color: #0075c3;
  }

  .rocket .fin-left {
    left: -30px;
    top: calc(100% - 55px);
    border-top-left-radius: 80%;
    border-bottom-left-radius: 20%;
  }

  .rocket .fin-right {
    right: -30px;
    top: calc(100% - 55px);
    border-top-right-radius: 80%;
    border-bottom-right-radius: 20%;
  }

  .rocket .exhaust-flame {
    position: absolute;
    top: 90%;
    width: 28px;
    background: linear-gradient(to bottom, transparent 10%, #f5f5f5 100%);
    height: 150px;
    left: calc(50% - 14px);
    animation: exhaust 0.2s infinite;
  }

  .rocket .exhaust-fumes li {
    width: 60px;
    height: 60px;
    background-color: #f5f5f5;
    list-style: none;
    position: absolute;
    border-radius: 100%;
  }

  .rocket .exhaust-fumes li:first-child {
    width: 200px;
    height: 200px;
    bottom: -300px;
    animation: fumes 5s infinite;
  }

  .rocket .exhaust-fumes li:nth-child(2) {
    width: 150px;
    height: 150px;
    left: -120px;
    top: 260px;
    animation: fumes 3.2s infinite;
  }

  .rocket .exhaust-fumes li:nth-child(3) {
    width: 120px;
    height: 120px;
    left: -40px;
    top: 330px;
    animation: fumes 3s 1s infinite;
  }

  .rocket .exhaust-fumes li:nth-child(4) {
    width: 100px;
    height: 100px;
    left: -170px;
    animation: fumes 4s 2s infinite;
    top: 380px;
  }

  .rocket .exhaust-fumes li:nth-child(5) {
    width: 130px;
    height: 130px;
    left: -120px;
    top: 350px;
    animation: fumes 5s infinite;
  }

  .rocket .exhaust-fumes li:nth-child(6) {
    width: 200px;
    height: 200px;
    left: -60px;
    top: 280px;
    animation: fumes2 10s infinite;
  }

  .rocket .exhaust-fumes li:nth-child(7) {
    width: 100px;
    height: 100px;
    left: -100px;
    top: 320px;
  }

  .rocket .exhaust-fumes li:nth-child(8) {
    width: 110px;
    height: 110px;
    left: 70px;
    top: 340px;
  }

  .rocket .exhaust-fumes li:nth-child(9) {
    width: 90px;
    height: 90px;
    left: 200px;
    top: 380px;
    animation: fumes 20s infinite;
  }

  .star li {
    list-style: none;
    position: absolute;
  }

  .star li:before, .star li:after {
    content: '';
    position: absolute;
    background-color: #f5f5f5;
  }

  .star li:before {
    width: 12px;
    height: 2px;
    border-radius: 50%;
  }

  .star li:after {
    height: 9px;
    width: 3px;
    left: 4px;
    top: -3px;
  }

  .star li:first-child {
    top: -30px;
    left: -210px;
    animation: twinkle 0.4s infinite;
  }

  .star li:nth-child(2) {
    top: 0;
    left: 100px;
    animation: twinkle 0.5s infinite;
  }

  .star li:nth-child(2):before {
    height: 1px;
    width: 5px;
  }

  .star li:nth-child(2):after {
    width: 1px;
    height: 5px;
    top: -2px;
    left: 2px;
  }

  .star li:nth-child(3) {
    left: 270px;
    top: 210px;
    animation: twinkle 1s infinite;
  }

  .star li:nth-child(4) {
    left: -190px;
    top: 200px;
    animation: twinkle 0.5s ease infinite;
  }
  
  .star li:nth-child(5) {
    left: 190px;
    top: 120px;
    animation: twinkle 0.4s ease infinite;
  }

  .star li:nth-child(6) {
    top: 120px;
    left: -79px;
    animation: twinkle 0.2s infinite;
  }

  .star li:nth-child(6):before {
    height: 1px;
    width: 5px;
  }

  .star li:nth-child(6):after {
    width: 1px;
    height: 5px;
    top: -2px;
    left: 2px;
  }

  @keyframes fumes {
    50% {
      transform: scale(1.5);
      background-color: transparent;
    }

    51% {
      transform: scale(0.8);
    }

    100% {
      background-color: #f5f5f5;
      transform: scale(1);
    }
  }

  @keyframes bounce {
    0% {
      transform: translate3d(0px, 0px, 0);
    }

    50% {
      transform: translate3d(0px, -4px, 0);
    }

    100% {
      transform: translate3d(0px, 0px, 0);
    }
  }

  @keyframes exhaust {
    0% {
      background: linear-gradient(to bottom, transparent 10%, #f5f5f5 100%);
    }

    50% {
      background: linear-gradient(to bottom, transparent 8%, #f5f5f5 100%);
    }

    75% {
      background: linear-gradient(to bottom, transparent 12%, #f5f5f5 100%);
    }
  }

  @keyframes fumes2 {
    50% {
      transform: scale(1.1);
    }
  }

  @keyframes twinkle {
    80% {
      transform: scale(1.1);
      opacity: 0.7;
    }
  }`;

export default Rocket;
