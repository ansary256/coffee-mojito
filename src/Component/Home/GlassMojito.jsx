import React from 'react';
import { Box } from '@mui/material';

const GlassMojito = ({ width = "100%", height = "100%", sx = {}, ...props }) => {
    return (
        <Box
            component="svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 800"
            sx={{
                width: width,
                height: height,
                display: 'block', 
                overflow: 'hidden',
                ...sx,
            }}
            className="glass-mojito-svg"
            {...props}
        >
            <defs>
                {/* گرادینت سبز درخشان موهیتو */}
                <linearGradient id="mojitoLiquidGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#55e077" stopOpacity="0.9" />
                    <stop offset="50%" stopColor="#2cb855" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#126329" stopOpacity="1" />
                </linearGradient>

                {/* هایلایت شیشه‌ای روی پاشش مایع */}
                <linearGradient id="splashShine" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                    <stop offset="30%" stopColor="#6ee88d" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#1c7836" stopOpacity="0.9" />
                </linearGradient>

                {/* گرادینت شیشه و پایه */}
                <linearGradient id="glassRim" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#ffffff" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient id="bowlShineLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0.0" />
                </linearGradient>
                <linearGradient id="bowlShineRight" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0.0" />
                </linearGradient>
                <linearGradient id="stemGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="#ffffff" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0.2" />
                </linearGradient>
            </defs>

            <g id="glass-wrapper">
                <g id="glass-bowl">
                    {/* 🧪 ۱. لایه مایع درون لیوان */}
                    <g id="liquid-layer">
                        <path
                            className="mojito-liquid-path"
                            d="M 90 130 Q 250 130 410 130 L 250 360 Z"
                            fill="url(#mojitoLiquidGrad)"
                        />
                    </g>

                    {/* ۲. شیشه پشت مایع */}
                    <path d="M 60 80 L 250 360 L 220 360 L 85 80 Z" fill="url(#bowlShineLeft)" />
                    <path d="M 440 80 L 250 360 L 280 360 L 415 80 Z" fill="url(#bowlShineRight)" />

                    {/* 🌊 ۳. زبانه‌ها و پاشش بزرگ مایع (Dynamic Liquid Splash Stream) - دقیقاً مثل عکس */}
                    <g className="epic-splash" opacity="0">
                        {/* شاخه بزرگ پاشش سمت چپ که روی لبه بیرون می‌زنه */}
                        <path
                            className="splash-jet-left"
                            d="M 120 130 C 80 110, 40 160, 50 220 C 60 250, 85 220, 80 180 C 75 150, 100 140, 140 135 Z"
                            fill="url(#splashShine)"
                        />

                        {/* شاخه دوم پاشش سمت چپ (باریک‌تر به سمت بالا) */}
                        <path
                            className="splash-jet-left-high"
                            d="M 150 130 C 120 70, 70 80, 85 130 C 95 150, 120 140, 160 135 Z"
                            fill="url(#splashShine)"
                        />

                        {/* شاخه پاشش سمت راست */}
                        <path
                            className="splash-jet-right"
                            d="M 360 130 C 400 110, 440 170, 420 220 C 400 240, 380 200, 385 170 C 390 145, 360 140, 340 135 Z"
                            fill="url(#splashShine)"
                        />

                        {/* قطرات معلق دور تا دور لیوان (مثل عکس) */}
                        <g className="splash-droplets" fill="url(#splashShine)">
                            <circle className="droplet d1" cx="45" cy="240" r="7" />
                            <circle className="droplet d2" cx="30" cy="270" r="5" />
                            <circle className="droplet d3" cx="65" cy="290" r="8" />
                            <circle className="droplet d4" cx="75" cy="110" r="6" />
                            <circle className="droplet d5" cx="430" cy="240" r="7" />
                            <circle className="droplet d6" cx="450" cy="210" r="5" />
                            <circle className="droplet d7" cx="390" cy="270" r="6" />
                            <circle className="droplet d8" cx="210" cy="90" r="8" />
                            <circle className="droplet d9" cx="290" cy="85" r="7" />
                        </g>
                    </g>

                    {/* لبه شیشه */}
                    <g id="glass-rim">
                        <ellipse cx="250" cy="80" rx="190" ry="22" fill="none" stroke="url(#glassRim)" strokeWidth="3" />
                    </g>
                </g>

                {/* پایه و کفی لیوان */}
                <g id="glass-stem">
                    <path d="M 243 362 C 243 390, 246 430, 246 620 C 246 645, 220 670, 140 685 L 360 685 C 280 670, 254 645, 254 620 C 254 430, 257 390, 257 362 Z" fill="url(#stemGradient)" />
                </g>
                <g id="glass-base">
                    <ellipse cx="250" cy="690" rx="120" ry="18" fill="none" stroke="#ffffff" strokeOpacity="0.8" strokeWidth="2" />
                </g>
            </g>
        </Box>
    );
};

export default GlassMojito;