import React from 'react';
import { Box } from '@mui/material';

const GlassBackgroundOrbs = () => {
    return (
        <Box
            sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                zIndex: 0, // پشت تمام محتوای اصلی قرار می‌گیرد
                pointerEvents: 'none', // مانع کلیک روی عناصر زیرین نمی‌شود
            }}
        >
            {/* دایره شیشه‌ای اول - بالا سمت چپ (تم طلایی ملایم) */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '-10%',
                    left: '-5%',
                    width: { xs: '250px', sm: '400px', md: '500px' },
                    height: { xs: '250px', sm: '400px', md: '500px' },
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(231, 211, 147, 0.15) 0%, rgba(231, 211, 147, 0.02) 70%, transparent 100%)',
                    backdropFilter: 'blur(40px)',
                    animation: 'floatSlow 12s ease-in-out infinite alternate',
                }}
            />

            {/* دایره شیشه‌ای دوم - وسط سمت راست (با افکت شیشه‌ای بوردردار) */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '35%',
                    right: '-8%',
                    width: { xs: '200px', sm: '350px', md: '450px' },
                    height: { xs: '200px', sm: '350px', md: '450px' },
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(25px)',
                    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)',
                    animation: 'floatReverse 15s ease-in-out infinite alternate',
                }}
            />

            {/* دایره شیشه‌ای سوم - پایین سمت چپ (تم طلایی بسیار کم‌رنگ) */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '5%',
                    left: '10%',
                    width: { xs: '180px', sm: '280px', md: '380px' },
                    height: { xs: '180px', sm: '280px', md: '380px' },
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(231, 211, 147, 0.1) 0%, transparent 80%)',
                    backdropFilter: 'blur(50px)',
                    animation: 'floatSlow 10s ease-in-out infinite alternate',
                }}
            />

            {/* Keyframes برای انیمیشن شناوری ملایم */}
            <style>
                {`
                    @keyframes floatSlow {
                        0% { transform: translateY(0px) scale(1); }
                        100% { transform: translateY(-130px) scale(2); }
                    }
                    @keyframes floatReverse {
                        0% { transform: translateY(0px) scale(1); }
                        100% { transform: translateY(135px) scale(0.2); }
                    }
                `}
            </style>
        </Box>
    );
};

export default GlassBackgroundOrbs;