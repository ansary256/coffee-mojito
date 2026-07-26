import React from 'react';
import { Box } from '@mui/material';

const Umbrella = ({ width = "150px", height = "150px", sx = {}, ...props }) => {
    return (
        <Box
            component="svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 500"
            sx={{
                width: width,
                height: height,
                display: 'block',
                overflow: 'hidden',
                ...sx,
            }}
            className="cocktail-umbrella-svg"
            {...props}
        >
            <defs>
                {/* سایه‌روشن و بافت برای چتر */}
                <radialGradient id="umbrellaShade" cx="50%" cy="30%" r="70%">
                    <stop offset="0%" stopColor="#73e6a3" />
                    <stop offset="60%" stopColor="#2bb673" />
                    <stop offset="100%" stopColor="#197a4a" />
                </radialGradient>

                {/* گرادینت چوب */}
                <linearGradient id="stickGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#e0c088" />
                    <stop offset="50%" stopColor="#c4a163" />
                    <stop offset="100%" stopColor="#a07e43" />
                </linearGradient>
            </defs>

            {/* گروه اصلی کل چتر */}
            <g id="cocktail-umbrella" className="umbrella-wrapper">
                {/* ۱. پایه / چوب خلال دندان */}
                <polygon
                    points="245,200 255,200 252,480 248,480"
                    fill="url(#stickGradient)"
                    className="umbrella-stick"
                />

                {/* ۲. بخش بالایی چتر (کاپ/سقف چتر) */}
                <g id="canopy" className="umbrella-canopy">
                    {/* بدنه اصلی پارچه‌ای چتر */}
                    <path
                        d="M 50,220 
               Q 120,230 180,240 
               Q 215,220 250,200 
               Q 285,220 320,240 
               Q 380,230 450,220 
               Q 370,140 250,80 
               Q 130,140 50,220 Z"
                        fill="url(#umbrellaShade)"
                        stroke="#1d613e"
                        strokeWidth="2"
                        className="umbrella-body"
                    />

                    {/* خطوط چین‌خورده (پره‌های چتر) */}
                    <g
                        stroke="#1a5838"
                        strokeWidth="2"
                        opacity="0.6"
                        fill="none"
                        className="umbrella-ribs"
                    >
                        <path d="M 250,80 Q 150,160 50,220" />
                        <path d="M 250,80 Q 200,170 180,240" />
                        <path d="M 250,80 L 250,200" />
                        <path d="M 250,80 Q 300,170 320,240" />
                        <path d="M 250,80 Q 350,160 450,220" />
                    </g>

                    {/* طرح‌های گل‌دار روی چتر */}
                    <g fill="#9b2d47" opacity="0.85" className="umbrella-patterns">
                        {/* طرح سمت چپ */}
                        <path d="M 130,170 C 120,150 140,140 150,155 C 160,140 175,150 165,165 C 150,175 135,180 130,170 Z" />
                        <path
                            d="M 110,185 Q 125,175 135,185"
                            stroke="#9b2d47"
                            strokeWidth="3"
                            fill="none"
                        />

                        {/* طرح سمت راست */}
                        <path d="M 330,165 C 320,150 335,140 345,155 C 355,140 370,150 360,165 C 345,175 335,180 330,165 Z" />
                        <path
                            d="M 365,185 Q 350,175 340,185"
                            stroke="#9b2d47"
                            strokeWidth="3"
                            fill="none"
                        />
                    </g>

                    {/* نوک چرمی/کاغذی بالای چتر */}
                    <path
                        d="M 242,85 C 242,65 258,65 258,85 Z"
                        fill="#e3dbcb"
                        stroke="#b8af9e"
                        strokeWidth="2"
                        className="umbrella-top-tip"
                    />
                </g>
            </g>
        </Box>
    );
};

export default Umbrella;