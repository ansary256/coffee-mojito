import React from 'react';
import { Box, Typography, Stack } from '@mui/material';

const Foods = [
    { id: 1, name: 'پیتزا مرغ', subtitle: 'دو نفره', price: '$100,000' },
    { id: 2, name: 'پیتزا سبزیجات', subtitle: 'تک نفره', price: '$150,000' },
    { id: 3, name: 'پیتزا مخلوط', subtitle: 'سه نفره', price: '$80,000' },
    { id: 4, name: 'پیتزا پپرونی', subtitle: 'دو نفره', price: '$90,000' },
];

const FoodList = () => {
    return (
        <Box sx={{ width: '100%', color: 'text.primary', py: 10 }}>
            {/* عنوان اصلی بالای لیست */}
            <Typography
                variant="h6"
                sx={{
                    mb: 3,
                    fontSize: '1.1rem',
                    fontWeight: 900,
                    color: "text.primary",
                }}
            >
                : محبوب ترین پیتزا ها
            </Typography>

            {/* لیست آیتم‌ها */}
            <Stack spacing={3.5}>
                {Foods.map((item) => (
                    <Box
                        key={item.id}
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            transition: 'transform 0.2s ease',
                            '&:hover': {
                                transform: 'translateX(5px)', // افکت هور ملایم
                            },
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                color: '#F5F2EB',
                                fontWeight: 500,
                                fontSize: { xs: '1.2rem', sm: '1.4rem' },
                                whiteSpace: 'nowrap',
                            }}
                        >
                            {item.price}
                        </Typography>
                        <Box>
                            <Typography
                                variant="h5"
                                sx={{
                                    color: 'primary.main', // رنگ طلایی تم شما (#e7d393)
                                    fontFamily: '"Modern Negra", "Playfair Display", serif', // فونت Serif لوکس
                                    fontWeight: 700,
                                    fontSize: { xs: '1.3rem', sm: '1.5rem' },
                                    lineHeight: 1.2,
                                    mb: 0.5,
                                }}
                            >
                                {item.name}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    color: 'text.secondary',
                                    fontSize: '0.85rem',
                                    letterSpacing: '0.05em',
                                }}
                            >
                                {item.subtitle}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Stack>
        </Box>
    );
};

export default FoodList;