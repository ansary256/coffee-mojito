import React, { useRef } from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Umbrella from './Umbrella';
import GlassMojito from './GlassMojito';
import MocktailList from './MocktailList';
import FoodList from './FoodList';
import HeaderHeroTexts from './HeaderHeroTexts';
import ListPriceInMobile from './ListPriceInMobile';


const HeroSectionHomePage = () => {
    const heroRef = useRef(null);

    useGSAP(() => {
        // ۱. ساخت ابزار matchMedia
        let mm = gsap.matchMedia();

        // ۲. تعریف مقادیر برای سایزهای مختلف (Media Queries)
        mm.add({
            // موبایل (تا ۶۰۰ پیکسل)
            isMobile: "(max-width: 599px)",
            // تبلت (از ۶۰۰ تا ۹۰۰ پیکسل)
            isTablet: "(min-width: 600px) and (max-width: 899px)",
            // دسکتاپ کوچک (از ۹۰۰ تا ۱۲۰۰ پیکسل)
            isDesktopSm: "(min-width: 900px) and (max-width: 1199px)",
            // دسکتاپ بزرگ (از ۱۲۰۰ پیکسل به بالا - lg)
            isDesktopLg: "(min-width: 1200px)"
        }, (context) => {
            let { isMobile, isTablet, isDesktopSm, isDesktopLg } = context.conditions;

            let targetTop = "165vh";
            let targetUmbrella = "15%";
            let targetIce = "30%";
            if (isMobile) targetTop = "190vh";
            else if (isTablet) targetTop = "190vh";
            else if (isDesktopSm) targetTop = "180vh";

            if (isMobile) targetUmbrella = "20%";
            else if (isTablet) targetUmbrella = "20%";
            else if (isDesktopSm) targetUmbrella = "20%";

            if (isMobile) targetIce = "35%";
            else if (isTablet) targetIce = "35%";
            else if (isDesktopSm) targetIce = "35%";

            // انیمیشن برگ سمت راست موقع اسکرول
            gsap.to(".leaf-right", {
                y: targetTop,
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1.5,
                }
            });


            gsap.to(".Umbrella", {
                top: targetUmbrella,
                rotate: "-30deg",
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "top+=150 top",
                    scrub: 1,
                }
            });
            gsap.to(".Ice", {
                top: targetIce,
                rotate: "360",
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "top+=150 top",
                    scrub: 1,
                }
            });
        });

        // انیمیشن برگ سمت چپ
        gsap.to(".leaf-left", {
            y: "150vh",
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top+20% top",
                end: "bottom top",
                scrub: 1.5,
            }
        });

        // 🌊 ۱. فرورفتگی عمیق مایع موقع فرود یخ
        gsap.to(".mojito-liquid-path", {
            attr: { d: "M 90 130 Q 250 210 410 130 L 250 360 Z" },
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "top+=150 top",
                scrub: 1,
            }
        });

        // 💥 ۲. انیمیشن فوران زبانه‌های مایع و قطرات معلق (ظهور و پرتاب شعاعی)
        let epicSplashTl = gsap.timeline({
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "top+=180 top",
                scrub: 0.8,
            }
        });

        epicSplashTl
            // ۱. ظاهر شدن کل لایه پاشش
            .to(".epic-splash", { opacity: 1, duration: 0.1 })

            // ۲. فوران زبانه‌های مایع سمت چپ و راست (باز شدن و کشیده شدن)
            .fromTo(".splash-jet-left",
                { scale: 0.2, transformOrigin: "right bottom" },
                { scale: 1.2, x: -20, y: 10, duration: 0.5, ease: "power2.out" }, 0)

            .fromTo(".splash-jet-left-high",
                { scale: 0.1, transformOrigin: "bottom center" },
                { scale: 1.3, x: -30, y: -40, duration: 0.5, ease: "power2.out" }, 0)

            .fromTo(".splash-jet-right",
                { scale: 0.2, transformOrigin: "left bottom" },
                { scale: 1.2, x: 20, y: 10, duration: 0.5, ease: "power2.out" }, 0)

            // ۳. شلیک قطرات معلق در هوا (پرتاب به اطراف دقیقاً مثل رفرنس)
            .fromTo(".d1", { y: 0, x: 0 }, { y: 40, x: -40, ease: "power3.out" }, 0)
            .fromTo(".d2", { y: 0, x: 0 }, { y: 60, x: -50, ease: "power3.out" }, 0)
            .fromTo(".d3", { y: 0, x: 0 }, { y: 80, x: -20, ease: "power3.out" }, 0)
            .fromTo(".d4", { y: 0, x: 0 }, { y: -50, x: -30, ease: "power3.out" }, 0)
            .fromTo(".d5", { y: 0, x: 0 }, { y: 40, x: 40, ease: "power3.out" }, 0)
            .fromTo(".d6", { y: 0, x: 0 }, { y: 20, x: 60, ease: "power3.out" }, 0)
            .fromTo(".d7", { y: 0, x: 0 }, { y: 70, x: 30, ease: "power3.out" }, 0)
            .fromTo(".d8", { y: 0, x: 0 }, { y: -80, x: -10, ease: "power3.out" }, 0)
            .fromTo(".d9", { y: 0, x: 0 }, { y: -75, x: 15, ease: "power3.out" }, 0)

            // ۴. محو شدن و فروکش کردن پاشش پس از انتهای اسکرول
            .to(".epic-splash", { opacity: 0, duration: 0.4, ease: "power1.in" }, 0.6);


        // موهیتو
        gsap.to(".mojito-box", {
            y: "90vh",
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "+=80%",
                scrub: 1,
            }
        });

    }, { scope: heroRef });

    return (
        <Box
            ref={heroRef}
            id="hero"
            sx={{
                position: 'relative',
                width: '100%',
                height: "210vh",
                minHeight: '210vh',
                pb: 6,
                overflow: "hidden"
            }}
        >
            {/* ==================== ۱. لایه المان‌های شناور (Absolute) ==================== */}
            <Box sx={{
                position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1,
                overflow: 'hidden'
            }}
            >
                {/* برگ سمت راست */}
                <Box
                    component="img"
                    src="images/vibrant-green-leaf.png"
                    className="leaf-right"
                    sx={{
                        position: 'absolute', top: { xs: "0%", sm: "-3%", md: "-5%", lg: "0%" },
                         right: '0%',
                        width: { xs: "40px", sm: '80px', md: '150px' }
                    }}
                />

                {/* برگ سمت چپ */}
                <Box
                    component="img"
                    src="images/vibrant-green-right.png"
                    className="leaf-left"
                    sx={{
                        position: 'absolute', top: { xs: "7%", sm: "10%", md: "12%", lg: "20%" }, left: '0%',
                        width: { xs: "40px", sm: '80px', md: '150px' }
                    }}
                />


                {/* عکس اصلی کوکتیل / لیوان / یخ / لیمو وسط */}
                <Box className='mojito-box' component="div" sx={{
                    width: "100%",
                    height: "100vh",
                    opacity: { lg: "1", xs: "0.2", sm: "0.2", md: "0.2" }
                }}>
                    <Box className='Umbrella' component="div" sx={{
                        width: "200px",
                        height: "200px",
                        position: "absolute",
                        top: { xs: "-8%", sm: "-8%", md: "-8%", lg: "-8%" },
                        left: { xs: "30%", sm: "37%", md: "40%", lg: "43%" },
                        rotate: "-20deg",
                        zIndex: "-2",
                        transform: "translateX(-50%)"
                    }}>
                        <Umbrella />
                    </Box>
                    <Box component="div" sx={{
                        position: "absolute",
                        width: "600px",
                        height: "600px",
                        bottom: "-10%",
                        left: "50%",
                        transform: "translateX(-50%)"
                    }}>
                        <GlassMojito />
                    </Box>
                    <Box className='Ice' component="img" sx={{
                        width: "200px",
                        position: "absolute",
                        top: "-3%",
                        left: "50%",
                        transform: "translateX(-50%)",
                        zIndex: "-1"
                    }} src='images/Steel-Ice.png' />
                </Box>
            </Box>

            <HeaderHeroTexts />

            <ListPriceInMobile isMobile={false} />
        </Box>
    );
};

export default HeroSectionHomePage;