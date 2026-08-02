import React, { useState } from "react";
import {
    Box,
    Container,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Button,
    Divider,
    Stack,
    Link,
    Grid,
} from "@mui/material";

// داده‌های نمونه برای سبد خرید
const initialCartItems = [
    {
        id: 1,
        name: "Red Printed T-Shirt",
        price: 50.0,
        quantity: 1,
        image: "images/FoodsBurger-2.webp",
    },
    {
        id: 2,
        name: "Red Printed T-Shirt",
        price: 50.0,
        quantity: 1,
        image: "images/FoodsBurger-3.webp",
    },

];

const CartPage = () => {
    const [cartItems, setCartItems] = useState(initialCartItems);
    const taxRate = 0.175; // نرخ مالیات نمونه (۱۷.۵٪)

    // مدیریت تغییر تعداد محصولات
    const handleQuantityChange = (id, newQuantity) => {
        const qty = Math.max(1, parseInt(newQuantity) || 1);
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: qty } : item
            )
        );
    };

    // حذف محصول از سبد خرید
    const handleRemove = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    // محاسبات مالی
    const subtotal = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );
    const tax = subtotal * taxRate;
    const total = subtotal + tax;

    const PRIMARY_COLOR = "primary.main2";

    return (
        <Container maxWidth="lg" sx={{ py: 12 }}>
            <TableContainer component={Box} sx={{ boxShadow: "none", mb: 4 }}>
                <Table sx={{ minWidth: 250 }}>
                    {/* هدر جدول (راست به چپ) */}
                    <TableHead>
                        <TableRow sx={{ backgroundColor: PRIMARY_COLOR }}>
                            <TableCell align="right" sx={{ color: "#fff", fontWeight: "bold" }}>
                                محصولات خریداری شده
                            </TableCell>
                            <TableCell align="center" sx={{
                                color: "#fff", fontWeight: "bold", display: {
                                    xs: "none", md: "table-cell"
                                }
                            }}>
                                تعداد
                            </TableCell>
                            <TableCell align="left" sx={{
                                color: "#fff", fontWeight: "bold", display: {
                                    xs: "none", md: "table-cell"
                                }
                            }}>
                                جمع کل
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    {/* بدنه جدول (راست به چپ) */}
                    <TableBody>
                        {cartItems.map((item) => (
                            <TableRow key={item.id} sx={{
                                "& td": { border: 0 },
                            }}>
                                {/* ستون راست: عکس و مشخصات محصول */}
                                <TableCell align="right" component="th" scope="row">
                                    <Stack direction="row-reverse" spacing={2} alignItems="center">
                                        <Box
                                            component="img"
                                            src={item.image}
                                            alt={item.name}
                                            sx={{
                                                width: { xs: 60, sm: 80 },
                                                height: { xs: 60, sm: 80 },
                                                objectFit: "cover",
                                                borderRadius: "4px",
                                            }}
                                        />
                                        <Box sx={{ textAlign: "right" }}>
                                            <Typography
                                                variant="body1"
                                                fontWeight="600"
                                                sx={{
                                                    display: { xs: "none", sm: "block" },
                                                    color: "#c5c5c5",
                                                }}
                                            >
                                                {item.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                قیمت: ${item.price.toFixed(2)}
                                            </Typography>
                                            <Link
                                                component="button"
                                                variant="body2"
                                                underline="none"
                                                onClick={() => handleRemove(item.id)}
                                                sx={{
                                                    color: PRIMARY_COLOR,
                                                    cursor: "pointer",
                                                    mt: 0.5,
                                                    display: "inline-block",
                                                }}
                                            >
                                                حذف
                                            </Link>
                                        </Box>
                                    </Stack>
                                    <TextField
                                        type="number"
                                        value={item.quantity}
                                        onChange={(e) =>
                                            handleQuantityChange(item.id, e.target.value)
                                        }
                                        slotProps={{
                                            htmlInput: {
                                                min: 1,
                                                style: {
                                                    textAlign: "center",
                                                    padding: "6px 8px",
                                                    width: "100px",
                                                },
                                            },
                                        }}
                                        sx={{
                                            display: { xs: "block", md: "none" },
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: "4px",
                                            },
                                        }}
                                    />
                                    <Typography sx={{
                                        fontWeight: "500", color: "#555", display: {
                                            xs: "block", md: "none"
                                        }
                                    }}>
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </Typography>
                                </TableCell>

                                {/* ستون وسط: تعداد */}
                                <TableCell align="center" sx={{
                                    display: { xs: "none", md: "table-cell" },
                                    p: { xs: 1, md: 2 },
                                }}>
                                    <TextField
                                        type="number"
                                        value={item.quantity}
                                        onChange={(e) =>
                                            handleQuantityChange(item.id, e.target.value)
                                        }
                                        slotProps={{
                                            htmlInput: {
                                                min: 1,
                                                style: {
                                                    textAlign: "center",
                                                    padding: "6px 8px",
                                                    width: "40px",
                                                },
                                            },
                                        }}
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: "4px",
                                            },
                                        }}
                                    />
                                </TableCell>

                                {/* ستون چپ: قیمت کل */}
                                <TableCell
                                    align="left"
                                    sx={{
                                        display: { xs: "none", md: "table-cell" },

                                    }}
                                >
                                    ${(item.price * item.quantity).toFixed(2)}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Divider
                sx={{
                    borderColor: PRIMARY_COLOR,
                    borderBottomWidth: 2,
                    mb: 2,
                }}
            />
            {/* بخش خلاصه فاکتور و فینال (سمت راست در دسکتاپ، وسط در موبایل) */}
            <Container>
                <Grid container>
                    <Grid size={{ xs: 12, sm: 12, md: 4 }} spacing={1.5} sx={{
                        display: "flex", justifyContent: "center"
                    }}>
                        <Stack direction="column">
                            <Typography variant="body1" color="text.secondary">
                                :جمع کل
                            </Typography>
                            <Typography variant="body1" fontWeight="bold" color="#555">
                                ${total.toFixed(2)}
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 12, md: 4 }} spacing={1.5} sx={{
                        display: "flex", justifyContent: "center"
                    }}>
                        <Stack direction="column">
                            <Typography variant="body1" fontWeight="bold" color="#555">
                                :مالیات
                            </Typography>
                            <Typography variant="body1" fontWeight="bold" color="#555">
                                ${tax.toFixed(2)}
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 12, md: 4 }} spacing={1.5} sx={{
                        display: "flex", justifyContent: "center"
                    }}>
                        <Stack direction="column">
                            <Typography variant="body1" fontWeight="bold" color="#555">
                                :جمع غذا
                            </Typography>
                            <Typography variant="body1" fontWeight="bold" color="#555">
                                ${subtotal.toFixed(2)}
                            </Typography>
                        </Stack>
                    </Grid>

                </Grid>
                <Grid container>
                    <Button
                        variant="contained"
                        fullWidth
                        sx={{
                            mt: 4,
                            mx: "auto",
                            py: 1.2,
                            backgroundColor: PRIMARY_COLOR,
                            maxWidth: "400px",
                            borderRadius: "30px",
                            textTransform: "none",
                            fontSize: "1rem",
                            fontWeight: "500",
                            boxShadow: "none",
                            "&:hover": {
                                backgroundColor: "text.primary",
                                boxShadow: "none",
                            },
                        }}
                    >
                        پرداخت &#8594;
                    </Button>
                </Grid>
            </Container>
        </Container >
    );
};

export default CartPage;