import React, { useState } from 'react';
import { Box, Typography, IconButton, Button } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FastForwardSharp, ShoppingBag } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/navigation';

import { useCart } from '../../Contexts/CartContext';

const menuData = {
    Espresso: [
        {
            id: 1,
            name: 'اسپرسو سینگل',
            title: 'طعم خالص و اصیل قهوه',
            description: 'تهیه شده از دانه‌های ۱۰۰٪ عربیکا با عصاره‌گیری استاندارد و کرمای عالی.',
            image: 'images/DrinkEspresso-1.webp',
        },
        {
            id: 2,
            name: 'اسپرسو دبل',
            title: 'انرژی مضاعف برای روز شما',
            description: 'دو شات اسپرسوی غلیظ با طعم‌یادهای شکلات تلخ و آجیلی.',
            image: 'images/DrinkEspresso-1.webp',
        },
        {
            id: 3,
            name: 'آمریکانو',
            title: 'طعم ملایم و کشیده اسپرسو',
            description: 'ترکیب شات اسپرسوی تازه با آب جوش، مناسب برای علاقه‌مندان به قهوه سیاه و سبک.',
            image: 'images/DrinkEspresso-2.webp',
        },
        {
            id: 4,
            name: 'لاته',
            title: 'ترکیب مخملی شیر و اسپرسو',
            description: 'یک شات اسپرسو به همراه شیر گرم بخار داده شده و لایه نازکی از فوم شیر.',
            image: 'images/DrinkEspresso-3.webp',
        },
        {
            id: 5,
            name: 'نسکافه',
            title: 'طعم آشنا و محبوب قهوه فوری',
            description: 'ترکیب قهوه فوری با کیفیت بالا به همراه شیر گرم و کمی شکر با عطر دلپذیر.',
            image: 'images/DrinkEspresso-4.webp',
        },
    ],
    Cocktel: [
        {
            id: 6,
            name: 'موهیتو ساده',
            title: 'طراوت خالص نعنا و لیموی تازه',
            description: 'ترکیب کلاسیک لیموترش تازه، برگ‌های نعنای کوبیده‌شده، سودا و یخ فراوان؛ خنک‌کننده‌ای اصیل و بی‌نظیر.',
            image: 'images/DrinkCocktels-1.webp',
        },
        {
            id: 7,
            name: 'موهیتو کوراسائو',
            title: 'طعم استوایی با ظاهری جذاب و آبی',
            description: 'ترکیب هیجان‌انگیز شربت بلو کوراسائو، عصاره مرکبات و سودا که حسی مانند نسیم اقیانوسی را به شما می‌دهد.',
            image: 'images/GlassLeftArtSection.webp',
        },
        {
            id: 8,
            name: 'نسیم بنفش',
            title: 'عطر رؤیایی گل‌ها و مرکبات',
            description: 'نوشیدنی شیک و متفاوت با عصاره پنیرک یا گلاو و لیمو که با تغییر رنگ جادویی، طعمی ملایم و دلپذیر می‌سازد.',
            image: 'images/GlassRightArtSection.webp',
        },
        {
            id: 9,
            name: 'موهیتو تمشک',
            title: 'ترکیب ترش و شیرین میوه‌های قرمز',
            description: 'طعم فوق‌العاده تمشک تازه و له شده در کنار نعنا و لیمو؛ یک کوکتل پرانرژی با رنگ و طعمی هیجان‌انگیز.',
            image: 'images/DrinkCocktels-2.webp',
        },
    ],
    Shake: [
        {
            id: 10,
            name: 'شیک شکلات',
            title: 'غلیظ، پرانرژی و خوش‌طعم',
            description: 'بستنی شکلاتی غلیظ همراه با شیر تازه و سس شکلات تلخ و خامه.',
            image: 'images/DrinksShake-1.webp',
        },
        {
            id: 11,
            name: 'شیک قهوه',
            title: 'ترکیب خنک بستنی و اسپرسو',
            description: 'یک شات اسپرسوی غلیظ به همراه بستنی وانیلی و شیر، مناسب برای علاقه‌مندان به طعم قهوه خنک.',
            image: 'images/DrinksShake-2.webp',
        },
        {
            id: 12,
            name: 'شیک کارامل',
            title: 'طعم شیرین و کاراملی دلپذیر',
            description: 'بستنی وانیلی خامی‌ای همراه با سس کارامل نمکی و شیر خنک، با عطر و طعمی ماندگار.',
            image: 'images/DrinksShake-3.webp',
        },
        {
            id: 13,
            name: 'شیک نوتلا',
            title: 'طعم اصیل شکلات فندقی',
            description: 'ترکیب بستنی وانیلی، شکلات نوتلای واقعی و مغز فندق خرد شده برای علاقه‌مندان به طعم فندق.',
            image: 'images/DrinksShake-4.webp',
        },
    ],
    Tee: [
        {
            id: 14,
            name: 'چای ماسالا',
            title: 'عطر گرم ادویه‌جات هندی',
            description: 'ترکیب اصیل چای سیاه، شیر، هل، دارچین، زنجبیل و میخک؛ نوشیدنی گرم، پرانرژی و معطر.',
            image: 'images/DrinkTea-1.webp',
        },
    ],
};

const DrinksSlider = ({ activeTab }) => {
    const { addToCart } = useCart();
    const currentProducts = menuData[activeTab] || [];

    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const [animatingImg, setAnimatingImg] = useState(null);

    const handleAddToCart = (product) => {
        setAnimatingImg(product.image);
        addToCart(product);
        setTimeout(() => {
            setAnimatingImg(null);
        }, 850);
    };

    return (
        <Box sx={{ position: 'relative', width: '100%', py: 4 }}>
            <AnimatePresence>
                {animatingImg && (
                    <motion.img
                        src={animatingImg}
                        alt="Flying item"
                        initial={{
                            position: 'fixed',
                            bottom: "50vh",
                            left: '50vw',
                            width: '150px',
                            height: '150px',
                            transform: 'translateY(50%)',
                            opacity: 0,
                            scale: 0.3,
                            zIndex: 9999,
                            pointerEvents: 'none',
                        }}
                        animate={{
                            bottom: ["50vh", '90vh'],
                            left: ['50vw', '0vw'],
                            opacity: [0, 1, 1, 0],
                            scale: [0.3, 0.8, 0.2],
                            rotate: [0, -15, 10, 0],
                        }}
                        transition={{
                            duration: 0.8,
                            ease: 'easeInOut',
                        }}
                    />
                )}
            </AnimatePresence>

            <IconButton
                className="custom-prev"
                disabled={isBeginning}
                sx={{
                    position: 'absolute',
                    right: { xs: 0, md: 20 },
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 10,
                    color: 'primary.main',
                    opacity: isBeginning ? 0.25 : 1,
                    pointerEvents: isBeginning ? 'none' : 'auto',
                    transition: 'all 0.3s ease',
                }}
            >
                <FastForwardSharp sx={{ fontSize: 60 }} />
            </IconButton>

            <IconButton
                className="custom-next"
                disabled={isEnd}
                sx={{
                    position: 'absolute',
                    left: { xs: 0, md: 20 },
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 10,
                    color: 'primary.main',
                    opacity: isEnd ? 0.25 : 1,
                    pointerEvents: isEnd ? 'none' : 'auto',
                    transition: 'all 0.3s ease',
                }}
            >
                <FastForwardSharp sx={{ fontSize: 60, transform: 'scaleX(-1)' }} />
            </IconButton>

            <Swiper
                key={activeTab}
                dir="rtl"
                modules={[Navigation]}
                navigation={{
                    prevEl: '.custom-prev',
                    nextEl: '.custom-next',
                }}
                spaceBetween={30}
                slidesPerView={1}
                onInit={(swiper) => {
                    setIsBeginning(swiper.isBeginning);
                    setIsEnd(swiper.isEnd);
                }}
                onSlideChange={(swiper) => {
                    setIsBeginning(swiper.isBeginning);
                    setIsEnd(swiper.isEnd);
                }}
            >
                {currentProducts.map((product) => (
                    <SwiperSlide key={product.id}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', md: 'row' },
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 4,
                                px: { xs: 2, md: 8 },
                            }}
                        >
                            <Box
                                component="img"
                                src={product.image}
                                alt={product.name}
                                sx={{
                                    Width: { xs: '160px', sm: "200px", md: '380px' },
                                    height: { xs: '160px', sm: "200px", md: '380px' },
                                    objectFit: 'cover',
                                    filter: 'drop-shadow(0px 15px 25px rgba(0,0,0,0.5))',
                                }}
                            />

                            <Box sx={{ maxWidth: '450px', textAlign: { xs: 'center', md: 'right' } }}>
                                <Typography variant="body2" sx={{ color: 'primary.main', mb: 1 }}>
                                    طرز تهیه / ترکیبات:
                                </Typography>

                                <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, color: '#fff' }}>
                                    {product.name}
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 500, mb: 1, color: '#ddd' }}>
                                    {product.title}
                                </Typography>

                                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 3 }}>
                                    {product.description}
                                </Typography>

                                <Button
                                    variant="contained"
                                    color="primary"
                                    startIcon={<ShoppingBag sx={{ ml: 1, mr: -0.5 }} />}
                                    onClick={() => handleAddToCart(product)}
                                    sx={{
                                        py: 1.2,
                                        px: 4,
                                        borderRadius: '28px',
                                        fontSize: '1rem',
                                        fontWeight: 'bold',
                                        boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
                                        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                                        '&:hover': {
                                            transform: 'translateY(-3px)',
                                            boxShadow: '0 12px 24px rgba(0,0,0,0.4)',
                                        },
                                        '&:active': {
                                            transform: 'translateY(0)',
                                        },
                                    }}
                                >
                                    خریدن
                                </Button>
                            </Box>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

export default DrinksSlider;