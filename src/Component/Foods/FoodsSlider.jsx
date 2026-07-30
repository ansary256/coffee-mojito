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
    Pizza: [
        {
            id: 1,
            name: 'پیتزا مخلوط',
            title: 'ترکیب کامل و پرطرفدار فست‌فودی',
            description: 'ترکیبی از ژامبون، فلفل دلمه‌ای، قارچ، زیتون سیاه و پنیر پیتزای کش‌دار.',
            image: 'images/FoodsPizza-1.webp',
        },
        {
            id: 2,
            name: 'پیتزا پپرونی',
            title: 'طعم تند و اصیل پپرونی',
            description: 'اسلایس‌های پپرونی تنوری همراه با ادویه‌های مخصوص و پنیر مطبق.',
            image: 'images/FoodsPizza-2.webp',
        },
        {
            id: 3,
            name: 'پیتزا قارچ و گوشت',
            title: 'ترکیب لذیذ گوشت چرخ‌کرده و قارچ',
            description: 'گوشت طعم‌دار شده همراه با قارچ اسلایس شده و پنیر فراوان.',
            image: 'images/FoodsPizza-3.webp',
        },
        {
            id: 4,
            name: 'پیتزا مخصوص',
            title: 'پیشنهاد ویژه آشپز',
            description: 'ترکیب اختصاصی از بهترین مواد اولیه، فیله، ژامبون و مخلفات ویژه.',
            image: 'images/FoodsPizza-4.webp',
        },
    ],
    Burger: [
        {
            id: 5,
            name: 'برگر تنوری',
            title: 'عطر و طعم کباب تنوری اصیل',
            description: 'پتی برگر خالصی که روی زغال گریل و تنوری شده به همراه مخلفات تازه.',
            image: 'images/FoodsBurger-1.webp',
        },
        {
            id: 6,
            name: 'برگر دوبل',
            title: 'دو برابر لذت و انرژی',
            description: 'دو عدد پتی برگر گوشت ۱۰۰٪ به همراه لایه‌های پنیر و سس مخصوص.',
            image: 'images/FoodsBurger-2.webp',
        },
        {
            id: 7,
            name: 'چیز برگر',
            title: 'ترکیب کلاسیک برگر و پنیر گودا',
            description: 'برگر گوشت آبدار همراه با لایه ذوب شده پنیر گودا و گوجه و خیارشور.',
            image: 'images/FoodsBurger-3.webp',
        },
        {
            id: 8,
            name: 'برگر مخصوص',
            title: 'طعم متمایز با طعم‌دهنده‌های خاص',
            description: 'برگر دستی با سس مخصوص، قارچ، پنیر چدار و مخلفات ویژه.',
            image: 'images/FoodsBurger-1.webp',
        },
    ],
    Appetizer: [
        {
            id: 9,
            name: 'سالاد',
            title: 'ترکیب سبزیجات تازه و فصل',
            description: 'ترکیب کاهو، گوجه، خیار و سبزیجات تازه به همراه سس مخصوص.',
            image: 'images/FoodsAppetizer-1.webp',
        },
        {
            id: 10,
            name: 'سالاد ماکارونی',
            title: 'پیش‌غذای خنک و محبوب',
            description: 'پاستای فرمی به همراه ژامبون خرد شده، ذرت، خیارشور و سس مایونز.',
            image: 'images/FoodsAppetizer-2.webp',
        },
        {
            id: 11,
            name: 'سیب زمینی سرخ شده',
            title: 'ترد، طلایی و داغ',
            description: 'سیب‌زمینی‌های خلال شده ترد با ادویه مخصوص فرایز.',
            image: 'images/FoodsAppetizer-3.webp',
        },
        {
            id: 12,
            name: 'سالاد سزار',
            title: 'طعم اصیل سالاد با فیله مرغ',
            description: 'کاهو رسمی، فیله مرغ گریل شده، نان سیر تست شده، پنیر پارمزان و سس سزار.',
            image: 'images/FoodsAppetizer-4.webp',
        },
    ],
};

const FoodsSlider = ({ activeTab }) => {
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

export default FoodsSlider;