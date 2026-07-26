import React, { useEffect, useRef, useState } from 'react';
import { Box, Grid, Typography, Paper } from '@mui/material';
import { CakeOutlined, CoffeeMakerOutlined, PeopleOutlined, StarBorder } from '@mui/icons-material';

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const statsData = [
    {
        id: 1,
        icon: <CoffeeMakerOutlined sx={{ fontSize: { xs: 32, md: 40 }, color: 'primary.main' }} />,
        targetValue: 50000,
        prefix: '+',
        decimals: 0,
        title: 'فنجان قهوه سرو شده',
    },
    {
        id: 2,
        icon: <CakeOutlined sx={{ fontSize: { xs: 32, md: 40 }, color: 'primary.main' }} />,
        targetValue: 30,
        prefix: '+',
        decimals: 0,
        title: 'نوع کیک و دسر دست‌ساز',
    },
    {
        id: 3,
        icon: <PeopleOutlined sx={{ fontSize: { xs: 32, md: 40 }, color: 'primary.main' }} />,
        targetValue: 10000,
        prefix: '+',
        decimals: 0,
        title: 'مشتری راضی',
    },
    {
        id: 4,
        icon: <StarBorder sx={{ fontSize: { xs: 32, md: 40 }, color: 'primary.main' }} />,
        targetValue: 4.9,
        prefix: '',
        decimals: 1,
        title: 'امتیاز رضایت‌مندی',
    },
];

// کامپوننت اختصاصی شمارنده متحرک
const AnimatedNumber = ({ value, decimals, prefix, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const elementRef = useRef(null);
    const hasAnimatedRef = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimatedRef.current) {
                    hasAnimatedRef.current = true;

                    let startTime = null;
                    const animate = (currentTime) => {
                        if (!startTime) startTime = currentTime;
                        const progress = Math.min((currentTime - startTime) / duration, 1);

                        const easeOutProgress = 1 - Math.pow(1 - progress, 3);
                        const currentVal = easeOutProgress * value;

                        setCount(currentVal);

                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        }
                    };
                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.2 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, [value, duration]);

    const formattedValue = count.toLocaleString('fa-IR', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
    });

    return <span ref={elementRef}>{prefix}{formattedValue}</span>;
};

const StatsSection = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1, // وقتی ۱۰٪ بخش دیده شد شروع کن
    });

    return (
        <Box ref={ref} sx={{ width: '100%', pt: 8, px: { xs: 2, md: 6 } }}>
            <Paper
                elevation={0}
                sx={{
                    p: { xs: 3, md: 5 },
                    borderRadius: 4,
                    background: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(16px)',
                    border: '1px solid rgba(231, 211, 147, 0.2)',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                <Grid container spacing={{ xs: 4, md: 2 }} sx={{ alignItems: "center" }}>
                    {statsData.map((item) => (
                        <Grid
                            key={item.id}
                            size={{ xs: 12, sm: 6, md: 3 }}
                            sx={{ 
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                position: 'relative',
                            }}
                        >
                            {/* آیکون */}
                            <Box
                                sx={{
                                    width: { xs: 60, md: 70 },
                                    height: { xs: 60, md: 70 },
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: 'rgba(231, 211, 147, 0.08)',
                                    border: '1px solid rgba(231, 211, 147, 0.25)',
                                    mb: 2,
                                    boxShadow: '0 0 15px rgba(231, 211, 147, 0.1)',
                                }}
                            >
                                {item.icon}
                            </Box>

                            {/* مقدار عددی متحرک */}
                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: 800,
                                    color: 'primary.main',
                                    fontSize: { xs: '1.8rem', md: '2.2rem' },
                                    mb: 0.5,
                                    minHeight: '2.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    direction: 'ltr', // برای نمایش دقیق اعداد و علامت + در کنار هم
                                }}
                            >
                                {/* {item.prefix} */}
                                <AnimatedNumber
                                    value={item.targetValue}
                                    decimals={item.decimals}
                                    prefix={item.prefix}
                                />
                            </Typography>

                            {/* عنوان */}
                            <Typography
                                variant="body1"
                                sx={{
                                    color: 'text.secondary',
                                    fontWeight: 500,
                                    fontSize: { xs: '0.9rem', md: '1rem' },
                                }}
                            >
                                {item.title}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            </Paper>
        </Box>
    );
};

export default StatsSection;