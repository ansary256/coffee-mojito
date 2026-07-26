import React, { useState } from 'react';
import { Box, Grid, Typography, Paper, IconButton, Stack } from '@mui/material';
import { Instagram, LocationOnRounded, PhoneInTalk, Share, Telegram, WhatsApp } from '@mui/icons-material';

const contactData = [
    {
        id: 1,
        title: 'تماس تلفنی',
        image3d: '/images/لوگو تماس تلفنی',
        fallbackIcon: <PhoneInTalk sx={{ fontSize: 80, color: 'primary.main' }} />,
        content: (
            <Typography
                variant="h6"
                sx={{
                    fontWeight: 700,
                    color: 'text.primary',
                    direction: 'ltr',
                    fontSize: { xs: '1.1rem', md: '1.3rem' },
                    letterSpacing: 1,
                }}
            >
                021-82345976
            </Typography>
        ),
    },
    {
        id: 2,
        title: 'آدرس ما',
        image3d: '/images/لوگو آدرس',
        fallbackIcon: <LocationOnRounded sx={{ fontSize: 80, color: 'primary.main' }} />,
        content: (
            <Box sx={{ textAlign: 'center', color: 'text.primary', fontWeight: 700 }}>
                <Typography variant="body1" sx={{ fontWeight: 800, fontSize: '1.1rem', mb: 0.5 }}>
                    تهران جردن برج کیان  طبقه ۱۵
                </Typography>
            </Box>
        ),
    },
    {
        id: 3,
        title: 'شبکه‌های',
        image3d: '/images/لوگو شبکه های اجتمایی',
        fallbackIcon: <Share sx={{ fontSize: 80, color: 'primary.main' }} />,
        content: (
            <Grid container spacing={1.5} sx={{
                justifyContent: 'center',
                alignItems: 'center',
                width: "100%"
            }}>
                <Grid size={{ xs: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <IconButton
                        component="a"
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            backgroundColor: 'rgba(255, 255, 255, 0.15)',
                            color: '#ffffff',
                            width: 45,
                            height: 45,
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            backdropFilter: 'blur(4px)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                                transform: 'translateY(-3px)',
                            },
                        }}
                    >
                        <Instagram fontSize="small" />
                    </IconButton>
                </Grid>

                <Grid size={{ xs: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <IconButton
                        component="a"
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            backgroundColor: 'rgba(255, 255, 255, 0.15)',
                            color: '#ffffff',
                            width: 45,
                            height: 45,
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            backdropFilter: 'blur(4px)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                                transform: 'translateY(-3px)',
                            },
                        }}
                    >
                        <WhatsApp fontSize="small" />
                    </IconButton>
                </Grid>

                <Grid size={{ xs: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <IconButton
                        component="a"
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            backgroundColor: 'rgba(255, 255, 255, 0.15)',
                            color: '#ffffff',
                            width: 45,
                            height: 45,
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            backdropFilter: 'blur(4px)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                                transform: 'translateY(-3px)',
                            },
                        }}
                    >
                        <Telegram fontSize="small" />
                    </IconButton>
                </Grid>
            </Grid>
        ),
    },
];

// کامپوننت هوشمند برای نمایش تصویر یا آیکون جایگزین
const CardIcon = ({ image3d, fallbackIcon, title }) => {
    const [imgError, setImgError] = useState(false);

    if (image3d && !imgError) {
        return (
            <Box
                component="img"
                src={image3d}
                alt={title}
                onError={() => setImgError(true)}
                sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                }}
            />
        );
    }

    return fallbackIcon;
};

const ContactUsCards = () => {
    return (
        contactData.map((card) => (
            <Grid size={{ xs: 12, md: 4 }} key={card.id}>
                <Paper
                    elevation={6}
                    sx={{
                        borderRadius: 5,
                        position: 'relative',
                        background: 'none',
                        minHeight: 280,
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    {/* ۱. بخش بالایی برش‌خورده */}
                    <Box
                        sx={{
                            height: 130,
                            backgroundColor: "text.primary",
                            clipPath: 'polygon(0 100%, 0 100%, 100% 100%, 100% -10%)',
                            position: 'relative',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            pr: 3,
                            pt: 1,
                        }}
                    >
                        <Typography variant="h5" sx={{ fontWeight: 800, color: 'background.default', zIndex: 2 }}>
                            {card.title}
                        </Typography>
                    </Box>

                    {/* آیکون ۳ بعدی با قابلیت سوئیچ خودکار به فال‌بک */}
                    <Box
                        sx={{
                            position: 'absolute',
                            top: { xs: 15, sm: 30 },
                            left: { xs: 25, sm: 70 },
                            zIndex: 10,
                            width: 80,
                            height: 80,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            filter: 'drop-shadow(0px 8px 12px rgba(0,0,0,0.4))',
                        }}
                    >
                        <CardIcon
                            image3d={card.image3d}
                            fallbackIcon={card.fallbackIcon}
                            title={card.title}
                        />
                    </Box>

                    {/* ۲. بخش بدنه پایین */}
                    <Box
                        sx={{
                            flexGrow: 1,
                            background: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            p: 3,
                            pt: 2,
                        }}
                    >
                        {card.content}
                    </Box>
                </Paper>
            </Grid>
        ))
    );
};

export default ContactUsCards;