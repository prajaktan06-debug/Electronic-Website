# ElectroMart - Electronics E-commerce Website

A modern, responsive e-commerce website for Shree Ganesh Electronic Kasara, featuring a complete shopping experience with user authentication, product catalog, and cart functionality.

## 🚀 Features

### Core Functionality
- **User Authentication**: Login and registration system with form validation
- **Product Catalog**: Browse electronics and home appliances
- **Shopping Cart**: Add/remove items with persistent storage
- **Responsive Design**: Mobile-friendly interface
- **Modern UI**: Clean, professional design with smooth animations

### Authentication Features
- User registration with comprehensive form validation
- Secure login with password strength checking
- Remember me functionality
- Social login placeholders (Google, Facebook)
- Password visibility toggle
- Real-time form validation

### Shopping Features
- Product grid with images and pricing
- Add to cart functionality
- Cart management (view, remove items)
- Customer details form for orders
- WhatsApp integration for order placement
- Search functionality

## 📁 Project Structure

```
shop.html/
├── index.html                 # Home page
├── assets/                    # Static assets
│   ├── css/
│   │   └── style.css         # Main stylesheet
│   ├── js/
│   │   ├── auth.js           # Authentication logic
│   │   └── SCR.js            # Shopping cart logic
│   └── images/               # Product and logo images
│       ├── Logo.jpg
│       ├── LED TV.webp
│       ├── Oven.jpg
│       ├── washing.jpg.jpg
│       ├── mp.jpg.jpg
│       ├── laptop.jpg
│       ├── refrigerator.jpg
│       └── ... (other product images)
├── pages/                     # Additional pages
│   ├── products.html         # Product catalog
│   ├── cart.html            # Shopping cart
│   ├── About.html           # About page
│   ├── login.html           # User login
│   └── register.html        # User registration
├── generate_invoice.py       # Python invoice generator
├── shop.py                   # Python backend (if needed)
├── shop.docx                 # Documentation
└── README.md                 # This file
```

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with modern design patterns
- **Icons**: Font Awesome 6.4.0
- **Storage**: LocalStorage for cart and user data
- **Backend**: Python (optional invoice generation)

## 🎨 Design Features

### Color Scheme
- Primary: Blue gradient (#3b82f6 to #1d4ed8)
- Secondary: Dark slate (#0f172a, #1e293b)
- Accent: Light blue (#60a5fa)
- Background: Light gray (#f4f6f8)

### UI Components
- Modern card-based layout
- Gradient backgrounds
- Smooth hover animations
- Responsive grid system
- Professional typography

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔐 Authentication System

### Registration
- First name and last name
- Email validation
- Phone number validation
- Password strength checking
- Address information
- Terms and conditions agreement

### Login
- Email and password authentication
- Remember me functionality
- Form validation
- Error handling

### Security Features
- Client-side validation
- Password strength indicators
- XSS protection
- Secure form handling

## 🛒 Shopping Cart

### Features
- Add products to cart
- Remove individual items
- Clear entire cart
- Persistent storage using LocalStorage
- Real-time cart count updates
- Customer details form

### Order Process
1. Browse products
2. Add items to cart
3. Review cart contents
4. Fill customer details
5. Place order via WhatsApp

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for development)

### Installation
1. Clone or download the project files
2. Open `index.html` in your web browser
3. For development, use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   ```

### Usage
1. **Browse Products**: Visit the home page and click "Shop Now"
2. **Register**: Create an account using the registration form
3. **Login**: Sign in with your credentials
4. **Shop**: Add products to your cart
5. **Checkout**: Review cart and place order

## 📞 Contact Integration

### WhatsApp Integration
- Direct WhatsApp contact for orders
- Pre-filled message with cart contents
- Customer details included in message

### Store Information
- Business name: Shree Ganesh Electronic Kasara
- Location: Kasara
- Google Maps integration
- Contact details in About page

## 🔧 Customization

### Adding Products
1. Add product images to `assets/images/`
2. Update `pages/products.html` with new product entries
3. Ensure proper image paths and pricing

### Styling
- Modify `assets/css/style.css` for design changes
- Update color variables for theme changes
- Add new CSS classes as needed

### Functionality
- Extend `assets/js/auth.js` for authentication features
- Modify `assets/js/SCR.js` for cart functionality
- Add new JavaScript modules as needed

## 📋 Future Enhancements

### Planned Features
- Backend integration for user management
- Payment gateway integration
- Order tracking system
- Product reviews and ratings
- Admin dashboard
- Email notifications
- Advanced search and filtering

### Technical Improvements
- Database integration
- API development
- Progressive Web App (PWA) features
- Performance optimization
- SEO improvements

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is created for Shree Ganesh Electronic Kasara. All rights reserved.

## 📞 Support

For support or questions:
- WhatsApp: +91 8149549341
- Visit the store: Shree Ganesh Electronic, Kasara
- Check the About page for more details

---

**Built with ❤️ for Shree Ganesh Electronic Kasara**
