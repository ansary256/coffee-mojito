import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
    Box,
    TextField,
    Button,
    Typography,
    InputAdornment,
    Link
} from '@mui/material';
import { EmailOutlined, LockOutlined } from '@mui/icons-material';

const validationSchema = yup.object({
    email: yup
        .string('ایمیل را وارد کنید')
        .email('فرمت ایمیل نامعتبر است')
        .required('ایمیل الزامی است'),
    password: yup
        .string('رمز عبور را وارد کنید')
        .min(6, 'رمز عبور باید حداقل ۶ کاراکتر باشد')
        .required('رمز عبور الزامی است'),
});

const LoginForm = ({ onSwitchToSignUp }) => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        validateOnChange: false,
        validateOnBlur: false,

        onSubmit: (values) => {
            console.log('اطلاعات فرم:', values);
        },
    });

    return (
        <Box
            component="form"
            onSubmit={formik.handleSubmit}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: "space-around",
                width: '100%',
                height: "100%",
                maxWidth: '400px',
                margin: '0 auto',
                padding: 3,
                boxSizing: 'border-box'
            }}
        >
            {/* ورودی ایمیل */}
            <TextField
                fullWidth
                id="email"
                name="email"
                placeholder="ایمیل"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.email)}
                helperText={formik.errors.email}
                slotProps={{
                    input: {
                        endAdornment: (
                            <InputAdornment position="end">
                                <EmailOutlined sx={{ color: 'text.secondary', fontSize: 20 }} />
                            </InputAdornment>
                        ),
                    },
                }}
                sx={{
                    mb: 2,
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '12px',
                        backgroundColor: 'primary.main2',
                        '& fieldset': { border: 'none' },
                    },
                }}
            />

            {/* ورودی رمز عبور */}
            <TextField
                fullWidth
                id="password"
                name="password"
                type="password"
                placeholder="رمز عبور"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.password)}
                helperText={formik.errors.password}
                slotProps={{
                    input: {
                        endAdornment: (
                            <InputAdornment position="end">
                                <LockOutlined sx={{ color: 'text.secondary', fontSize: 20 }} />
                            </InputAdornment>
                        ),
                    },
                }}
                sx={{
                    mb: 3,
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '12px',
                        backgroundColor: 'primary.main2',
                        '& fieldset': { border: 'none' },
                    },
                }}
            />

            {/* دکمه اصلی ورود */}
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                    py: 1.5,
                    borderRadius: '12px',
                    textTransform: 'none',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    boxShadow: 'none',
                    backgroundColor: '#000008',
                    color: "text.primary",
                    '&:hover': {
                        backgroundColor: 'primary.main2',
                        boxShadow: 'none',
                    },
                }}
            >
                Sign In
            </Button>
        </Box>
    );
};

export default LoginForm;