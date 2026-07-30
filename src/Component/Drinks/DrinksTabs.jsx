import { Box, Typography } from "@mui/material";


const drinks = [
    { id: 'Espresso', label: 'نوشیدنی گرم' },
    { id: 'Cocktel', label: 'نوشیدنی سرد' },
    { id: 'Shake', label: 'شیک' },
    { id: 'Tee', label: 'چای و دمنوش' },
];


const DrinksTabs = ({ activeTab, setActiveTab }) => {

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
            {drinks.map((drink) => {
                const isActive = activeTab === drink.id;
                return (
                    <Box
                        key={drink.id}
                        onClick={() => setActiveTab(drink.id)}
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
                            {drink.label}
                        </Typography>
                    </Box>
                )
            })
            }
        </Box>
    )
}
export default DrinksTabs;