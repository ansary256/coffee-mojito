import React from 'react';
import { Box } from '@mui/material';

const CoffeeBeansBackground = ({ sx, ...props }) => {
  return (
    <Box
      component="svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 600"
      sx={{
        width: '100%',
        height: 'auto',
        display: 'block',
        pointerEvents: 'none',
        ...sx,
      }}
      {...props}
    >
      <defs>
        {/* گرادینت برای عمق دادن به دانه‌های قهوه */}
        <radialGradient id="beanGrad" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#8B5A2B" />
          <stop offset="50%" stopColor="#4A2511" />
          <stop offset="100%" stopColor="#210D04" />
        </radialGradient>
        <radialGradient id="beanGradLight" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#A0522D" />
          <stop offset="60%" stopColor="#5C2C16" />
          <stop offset="100%" stopColor="#2A1208" />
        </radialGradient>

        {/* سایه نرم زیر دانه‌ها */}
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000" floodOpacity="0.25" />
        </filter>

        {/* قالب پایه یک دانه قهوه */}
        <g id="single-bean">
          <path d="M -25,0 C -25,-35 25,-35 25,0 C 25,35 -25,35 -25,0 Z" fill="url(#beanGrad)" filter="url(#shadow)" />
          <path d="M -3,-28 C -8,-10 5,10 -2,28" stroke="#1A0A03" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M -1,-26 C -5,-10 7,10 0,26" stroke="#C48A58" strokeWidth="1" fill="none" opacity="0.6" strokeLinecap="round" />
        </g>

        <g id="single-bean-light">
          <path d="M -22,0 C -22,-30 22,-30 22,0 C 22,30 -22,30 -22,0 Z" fill="url(#beanGradLight)" filter="url(#shadow)" />
          <path d="M -2,-24 C -6,-8 4,8 -1,24" stroke="#1A0A03" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </g>
      </defs>

      {/* چیدمان دانه‌های قهوه */}
      <g id="coffee-beans-group">
        {/* تراکم بالا در بالا-راست */}
        <use href="#single-bean" transform="translate(650, 80) rotate(45) scale(1.2)" />
        <use href="#single-bean-light" transform="translate(710, 120) rotate(-20) scale(1.1)" />
        <use href="#single-bean" transform="translate(580, 100) rotate(15) scale(1.3)" />
        <use href="#single-bean-light" transform="translate(630, 160) rotate(80) scale(1)" />
        <use href="#single-bean" transform="translate(690, 200) rotate(-40) scale(1.25)" />
        <use href="#single-bean" transform="translate(540, 170) rotate(110) scale(1.1)" />
        <use href="#single-bean-light" transform="translate(590, 230) rotate(-10) scale(1.2)" />
        <use href="#single-bean" transform="translate(650, 270) rotate(60) scale(1.05)" />

        {/* پراکندگی به سمت مرکز و پایین-چپ */}
        <use href="#single-bean-light" transform="translate(480, 220) rotate(-65) scale(1.15)" />
        <use href="#single-bean" transform="translate(520, 300) rotate(35) scale(1)" />
        <use href="#single-bean" transform="translate(430, 290) rotate(140) scale(0.95)" />
        <use href="#single-bean-light" transform="translate(470, 370) rotate(-15) scale(1.1)" />
        <use href="#single-bean" transform="translate(370, 350) rotate(50) scale(0.9)" />

        {/* دانه‌های منفرد و دورتر */}
        <use href="#single-bean-light" transform="translate(300, 410) rotate(-80) scale(0.85)" />
        <use href="#single-bean" transform="translate(250, 320) rotate(25) scale(0.9)" />
        <use href="#single-bean-light" transform="translate(200, 460) rotate(105) scale(0.8)" />
        <use href="#single-bean" transform="translate(140, 500) rotate(-30) scale(0.75)" />
        <use href="#single-bean" transform="translate(320, 220) rotate(15) scale(0.8)" />
        <use href="#single-bean-light" transform="translate(210, 180) rotate(-50) scale(0.7)" />
      </g>
    </Box>
  );
};

export default CoffeeBeansBackground;