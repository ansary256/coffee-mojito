Mojito Cafe & Restaurant Web Application
This project is a modern and responsive web application designed for "Mojito" Cafe & Restaurant. The system allows dine-in customers to scan a table QR code, access the digital menu, customize their order, add items to the shopping cart, and complete the checkout process seamlessly.

Key Features
1. Digital Menu & Ordering System
Food & Drink Categorization: Full menu listing with detailed descriptions, prices, and high-quality imagery.

Home Page: Features interactive GSAP animations highlighting top picks, daily specials, and featured restaurant deals.

Informational Pages: Dedicated "About Us" and "Contact Us" pages providing location details and restaurant story.

2. Cart & Checkout Page
Smart Shopping Cart Table: Complete order management with real-time quantity adjustments and item removal.

Fully Responsive Layout: Displays as a standard multi-column table on desktop screens and transforms into compact card stacks on mobile devices.

Full RTL Support: Native Right-to-Left layout optimization tailored for Persian language users.

Live Receipt Calculation: Real-time calculation of subtotal, tax, and final total amounts.

3. Authentication Flow
Interactive Login & Sign-Up Forms: Built using Formik and validated with Yup.

On-Submit Validation: Error messaging is suppressed during active typing and input blur, triggering strictly upon submit button click.

Animated Hero Banner & Vertical Navigation: Smooth transitions between Auth modes using Framer Motion alongside a customized vertical BottomNavigation bar.

Tech Stack
React.js - Core frontend library

Material-UI (MUI v6) - Base UI component toolkit and RTL layout engine

GSAP (GreenSock) - High-performance animations on the Home Page

Formik - Form state management

Yup - Schema-based form validation

Framer Motion - Page transitions and UI state animations