import React from 'react';

export default function HeroSection({ onContactClick }) {
  return (
    <section id="contact" className="body semi-container">
      <div className="body-left">
        <h1 className="title bebas-neue">BELLMIN</h1>
        <p className="body-left-content">
          알 때까지 파고드는 개발자 김종민입니다.
        </p>
        <div className="social">
          <button onClick={onContactClick} className="social-button">
            <img fetchPriority="high" src="static/button.svg" alt="Contact" />
          </button>
          {/* 나머지 버튼도 마찬가지 */}
        </div>
      </div>
      <div className="body-right-img">
        <img fetchPriority="high" src="static/body-img.png" alt="" />
      </div>
    </section>
  );
}