import React from 'react';
import { Box, Typography, Button, Paper, Stack } from '@mui/material';
import { BookmarkBorder, RestaurantMenu } from '@mui/icons-material';

const CoffeeHeroSection = () => {
    return (
        <Box
            sx={{
                width: '100%',
                minHeight: '80vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                pb: 10,
                px: { xs: 2, md: 6 }
            }}
        >
            <Paper
                elevation={0}
                sx={{
                    maxWidth: '1000px',
                    width: '100%',
                    p: { xs: 3, sm: 5, md: 8 },
                    borderRadius: 5,
                    background: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(231, 211, 147, 0.25)',
                    boxShadow: '0 30px 60px rgba(0, 0, 0, 0.5)',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* تیتر کوچک فرعی */}
                <Typography
                    variant="subtitle1"
                    sx={{
                        color: 'primary.main',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        fontSize: { xs: '0.9rem', md: '1.1rem' },
                        mb: 1.5,
                    }}
                >
                    به کافه موجیتو خوش آمدید
                </Typography>

                {/* تیتر اصلی */}
                <Typography
                    variant="h2"
                    component="h1"
                    sx={{
                        fontWeight: 900,
                        color: '#ffffff',
                        fontSize: { xs: '2rem', sm: '2.8rem', md: '3.6rem' },
                        lineHeight: 1.2,
                        mb: 3,
                    }}
                >
                    جایی که هر قطره، داستانی از <Box component="span" sx={{ color: 'primary.main' }}>عشق و طعم</Box> است
                </Typography>

                {/* متن توضیحات/داستان کافه */}
                <Typography
                    variant="body1"
                    sx={{
                        color: 'rgba(255, 255, 255, 0.85)',
                        fontSize: { xs: '0.95rem', md: '1.15rem' },
                        lineHeight: 1.9,
                        maxWidth: '750px',
                        mx: 'auto',
                        mb: 5,
                    }}
                >
                    ما در کافه موجیتو با ترکیب دانه‌های اصیل قهوه عربیکا، کیک‌های دست‌ساز روزانه و اتمسفری صمیمی، فضایی خلق کرده‌ایم تا لحظات فراغت شما به خاطره‌ای لذت‌بخش تبدیل شود. چه برای یک قرار دوستانه و چه برای کار با لپ‌تاپ، خانه دوم شما اینجاست.
                </Typography>

                {/* دکمه‌های اکشن */}
                <Stack
                    direction={{ xs: 'column', sm: 'row-reverse' }}
                    spacing={2.5}
                    sx={{
                        alignItems: "center",
                        justifyContent: 'center',
                    }}
                >
                    <Button
                        variant="contained"
                        size="large"
                        startIcon={<RestaurantMenu />}
                        sx={{
                            px: 4,
                            py: 1.5,
                            borderRadius: 3,
                            fontWeight: 700,
                            fontSize: '1rem',
                            boxShadow: '0 0 20px rgba(231, 211, 147, 0.3)',
                            '&:hover': {
                                boxShadow: '0 0 30px rgba(231, 211, 147, 0.5)',
                            },
                        }}
                    >
                        مشاهده منو
                    </Button>

                    <Button
                        variant="outlined"
                        size="large"
                        startIcon={<BookmarkBorder />}
                        sx={{
                            px: 4,
                            py: 1.5,
                            borderRadius: 3,
                            fontWeight: 700,
                            fontSize: '1rem',
                            color: 'primary.main',
                            borderColor: 'rgba(231, 211, 147, 0.5)',
                            '&:hover': {
                                borderColor: 'primary.main',
                                backgroundColor: 'rgba(231, 211, 147, 0.08)',
                            },
                        }}
                    >
                        رزرو آنلاین میز
                    </Button>
                </Stack>
            </Paper>
        </Box>
    );
};

export default CoffeeHeroSection;