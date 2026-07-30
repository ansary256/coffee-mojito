import { Box, Typography } from "@mui/material";


const Foods = [
    { id: 'Pizza', label: 'پیتزا' },
    { id: 'Burger', label: 'برگر' },
    { id: 'Appetizer', label: 'پیش غذا' },
];


const FoodsTabs = ({ activeTab, setActiveTab }) => {

    return (
        <Box
            dir="rtl"
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: { xs: 2, sm: 4, md: 6 },
                flexWrap: 'wrap',
                py: 3,
            }}
        >
            {Foods.map((Food) => {
                const isActive = activeTab === Food.id;
                return (
                    <Box
                        key={Food.id}
                        onClick={() => setActiveTab(Food.id)}
                        sx={{
                            cursor: 'pointer',
                            textAlign: 'center',
                            pb: 1,
                            position: 'relative',
                            transition: 'all 0.3s ease',
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: isActive ? '100%' : '0%',
                                height: '1px',
                                backgroundColor: 'primary.main',
                                transition: 'width 0.3s ease',
                            },
                            '&:hover::after': {
                                width: '100%',
                            },
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: { xs: '1rem', sm: '1.2rem', md: '1.35rem' },
                                fontWeight: isActive ? 'bold' : 'normal',
                                color: 'text.primary',
                                opacity: isActive ? 1 : 0.4,
                                transition: 'opacity 0.3s ease',
                                '&:hover': {
                                    opacity: 1,
                                },
                            }}
                        >
                            {Food.label}
                        </Typography>
                    </Box>
                )
            })
            }
        </Box>
    )
}
export default FoodsTabs;