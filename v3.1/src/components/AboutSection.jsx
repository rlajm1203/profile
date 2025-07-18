// src/components/AboutSection.jsx
import React from 'react';
import profileImg from '/static/profile-img.png'; // 실제 경로에 맞게 수정

export default function AboutSection() {
  return (
    <div className="container">
      <div className="semi-container !flex !flex-row !justify-between !gap-16">
        <div className="about-me-left flex flex-col items-center">
          <h2 className="title bebas-neue mb-6 text-[5dvw]">about me</h2>
          <img
            src={profileImg}
            alt="Profile"
            className="about-me-left-img w-[20dvw] h-[30dvw] object-cover"
            fetchPriority="high"
          />
        </div>

        <div className="about-me-right flex flex-col justify-start">
          <div className="mottos flex flex-col gap-4">
            <p className="motto text-[2dvw] font-normal text-white">
              저는 알 때까지 끊임 없이 파고들어 학습하는 백엔드 개발자입니다.
            </p>
            <p className="motto-explain text-[1.3dvw] font-light text-neutral-400">
              기술에 대한 이해도가 없으면, 안정적이고 신뢰할 수 있는 서비스를 관리하고
              운영할 수 없습니다. 저는 타고난 끈기와 인내심으로 기술을 깊이 있게 학습합니다.
            </p>
          </div>
          <div className="info-list grid grid-cols-2 grid-rows-3 gap-6">
            <div className="info flex flex-col gap-2">
              <h3 className="info-title text-[1.7dvw] font-medium text-neutral-400">학력</h3>
              <p className="info-content text-[1dvw] text-neutral-400">
                - 전남대학교 소프트웨어공학과 (2020.3 ~ 2026.2)
              </p>
            </div>
            <div className="info flex flex-col gap-2">
              <h3 className="info-title text-[1.7dvw] font-medium text-neutral-400">자격증</h3>
              <p className="info-content text-[1dvw] text-neutral-400">- SQLD</p>
              <p className="info-content text-[1dvw] text-neutral-400">- 네트워크 관리사 2급</p>
            </div>
            <div className="info flex flex-col gap-2">
              <h3 className="info-title text-[1.7dvw] font-medium text-neutral-400">수상내역</h3>
              <p className="info-content text-[1dvw] text-neutral-400">- 전남대학교 AI 산학 협력 해커톤 동상 (2023.8)</p>
              <p className="info-content text-[1dvw] text-neutral-400">- 전남대학교 프로그래밍 경진대회 장려상 (2025.6)</p>
              <p className="info-content text-[1dvw] text-neutral-400">- Programmers PCCP Level 2</p>
            </div>
            <div className="info flex flex-col gap-2">
              <h3 className="info-title text-[1.7dvw] font-medium text-neutral-400">대외활동</h3>
              <p className="info-content text-[1dvw] text-neutral-400">- 전남대학교 IT 개발동아리 에코노베이션 (2023.9 ~ 2025.6)</p>
              <p className="info-content text-[1dvw] text-neutral-400">- 전남대학교 IT 개발동아리 부회장 (2024.2 ~ 2025.1)</p>
              <p className="info-content text-[1dvw] text-neutral-400">- 우리에프아이에스 아카데미 5기</p>
            </div>
            <div className="info flex flex-col gap-2">
              <h3 className="info-title text-[1.7dvw] font-medium text-neutral-400">기술</h3>
              <p className="info-content text-[1dvw] text-neutral-400">- JAVA</p>
              <p className="info-content text-[1dvw] text-neutral-400">- Spring-Boot</p>
              <p className="info-content text-[1dvw] text-neutral-400">- Docker</p>
              <p className="info-content text-[1dvw] text-neutral-400">- AWS</p>
              <p className="info-content text-[1dvw] text-neutral-400">- Git/GitHub</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}