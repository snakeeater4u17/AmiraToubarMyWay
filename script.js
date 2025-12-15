// Language Translation System
const translations = {
    ar: {
        'page-title': 'شركة ماي واي أميرة طوبار - منتجات عطور ومنظفات والعناية',
        'logo': 'ماي واي أميرة طوبار',
        'nav-home': 'الرئيسية',
        'nav-products': 'المنتجات',
        'nav-about': 'من نحن',
        'nav-contact': 'اتصل بنا',
        'hero-title': 'ماي واي أميرة طوبار',
        'hero-subtitle': 'جودة استثنائية في كل منتج',
        'hero-cta': 'اكتشف منتجاتنا',
        'products-title': 'منتجاتنا',
        'perfumes-title': 'عطور فاخرة',
        'perfumes-desc': 'مجموعة مميزة من العطور الفاخرة التي تعكس أناقتك وتميزك',
        'detergents-title': 'منظفات عالية الجودة',
        'detergents-desc': 'منظفات فعالة وآمنة لجميع احتياجات التنظيف اليومية',
        'blenders-title': 'خلاطات طعام احترافية',
        'blenders-desc': 'خلاطات قوية ومتعددة الاستخدامات لتحضير أطباق صحية ولذيذة',
        'skincare-title': 'العناية بالبشرة والجسم',
        'skincare-desc': 'منتجات طبيعية للعناية بالبشرة والجسم للحصول على إشراقة صحية',
        'order-now': 'اطلب الآن',
        'about-title': 'من نحن',
        'about-text1': 'شركة ماي واي أميرة طوبار هي شركة رائدة في مجال توزيع وتسويق المنتجات عالية الجودة. نقدم مجموعة واسعة من العطور الفاخرة، المنظفات الفعالة، خلاطات الطعام الاحترافية، ومنتجات العناية بالبشرة والجسم.',
        'about-text2': 'نسعى دائماً لتقديم أفضل المنتجات وأعلى معايير الجودة لعملائنا الكرام، مع ضمان خدمة عملاء متميزة وتوصيل سريع وآمن.',
        'contact-title': 'اتصل بنا',
        'form-name': 'الاسم',
        'form-email': 'البريد الإلكتروني',
        'form-phone': 'رقم الهاتف',
        'form-message': 'رسالتك',
        'form-submit': 'إرسال',
        'whatsapp': 'واتساب',
        'facebook': 'فيسبوك',
        'telegram': 'تيليجرام',
        'footer-tagline': 'جودة استثنائية في كل منتج',
        'footer-quick-links': 'روابط سريعة',
        'footer-contact': 'تواصل معنا',
        'footer-copyright': '© 2024 شركة ماي واي أميرة طوبار. جميع الحقوق محفوظة.',
        'form-success': 'تم إرسال الرسالة بنجاح! سيتم فتح بريدك الإلكتروني.'
    },
    en: {
        'page-title': 'My Way Amira Toubar Company - Perfumes, Detergents & Care Products',
        'logo': 'My Way Amira Toubar',
        'nav-home': 'Home',
        'nav-products': 'Products',
        'nav-about': 'About Us',
        'nav-contact': 'Contact Us',
        'hero-title': 'My Way Amira Toubar',
        'hero-subtitle': 'Exceptional Quality in Every Product',
        'hero-cta': 'Discover Our Products',
        'products-title': 'Our Products',
        'perfumes-title': 'Luxury Perfumes',
        'perfumes-desc': 'A distinguished collection of luxury perfumes that reflect your elegance and distinction',
        'detergents-title': 'High-Quality Detergents',
        'detergents-desc': 'Effective and safe detergents for all daily cleaning needs',
        'blenders-title': 'Professional Food Blenders',
        'blenders-desc': 'Powerful and versatile blenders for preparing healthy and delicious dishes',
        'skincare-title': 'Skincare & Body Care',
        'skincare-desc': 'Natural products for skincare and body care to achieve a healthy glow',
        'order-now': 'Order Now',
        'about-title': 'About Us',
        'about-text1': 'My Way Amira Toubar Company is a leading company in the field of distribution and marketing of high-quality products. We offer a wide range of luxury perfumes, effective detergents, professional food blenders, and skincare and body care products.',
        'about-text2': 'We always strive to provide the best products and highest quality standards for our valued customers, with guaranteed excellent customer service and fast, secure delivery.',
        'contact-title': 'Contact Us',
        'form-name': 'Name',
        'form-email': 'Email',
        'form-phone': 'Phone Number',
        'form-message': 'Your Message',
        'form-submit': 'Send',
        'whatsapp': 'WhatsApp',
        'facebook': 'Facebook',
        'telegram': 'Telegram',
        'footer-tagline': 'Exceptional Quality in Every Product',
        'footer-quick-links': 'Quick Links',
        'footer-contact': 'Contact Us',
        'footer-copyright': '© 2024 My Way Amira Toubar Company. All rights reserved.',
        'form-success': 'Message sent successfully! Your email client will open.'
    }
};

let currentLang = localStorage.getItem('language') || 'ar';

// Language Switcher Function
function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Update HTML direction
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);
    
    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            element.setAttribute('placeholder', translations[lang][key]);
        }
    });
    
    // Update page title
    const titleElement = document.querySelector('title[data-i18n]');
    if (titleElement) {
        document.title = translations[lang]['page-title'];
    } else {
        document.title = translations[lang]['page-title'];
    }
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update form email subject
    updateFormEmailSubject();
}

// Update form email subject based on language
function updateFormEmailSubject() {
    // This will be handled in form submission
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    switchLanguage(currentLang);
    
    // Add event listeners to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });
    
    // Initialize gallery
    loadGalleryImages();
});

// Navigation Scroll Effect
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe product categories
document.querySelectorAll('.product-category').forEach(category => {
    observer.observe(category);
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value
    };

    // Create mailto link
    const subjectText = currentLang === 'ar' ? 'رسالة من موقع ماي واي أميرة طوبار' : 'Message from My Way Amira Toubar Website';
    const nameLabel = currentLang === 'ar' ? 'الاسم' : 'Name';
    const emailLabel = currentLang === 'ar' ? 'البريد الإلكتروني' : 'Email';
    const phoneLabel = currentLang === 'ar' ? 'رقم الهاتف' : 'Phone';
    const messageLabel = currentLang === 'ar' ? 'الرسالة' : 'Message';
    
    const subject = encodeURIComponent(subjectText);
    const body = encodeURIComponent(
        `${nameLabel}: ${formData.name}\n` +
        `${emailLabel}: ${formData.email}\n` +
        `${phoneLabel}: ${formData.phone}\n\n` +
        `${messageLabel}:\n${formData.message}`
    );
    
    const mailtoLink = `mailto:Amiratoubar@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    const successMsg = translations[currentLang]['form-success'] || 'Message sent successfully!';
    showNotification(successMsg, 'success');
    
    // Reset form
    contactForm.reset();
});

// Notification Function
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#25D366' : '#f5576c'};
        color: white;
        padding: 20px 30px;
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease;
        font-weight: 600;
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Video Fallback (if video doesn't exist, use gradient background)
const heroVideo = document.querySelector('.hero-video');
if (heroVideo) {
    heroVideo.addEventListener('error', function() {
        this.style.display = 'none';
        const videoContainer = document.querySelector('.video-container');
        if (videoContainer) {
            videoContainer.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        }
    });
}

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector('.hero-section');
    if (heroSection && scrolled < window.innerHeight) {
        heroSection.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroSection.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Product Image Hover Effects
document.querySelectorAll('.product-image').forEach(image => {
    image.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.02)';
        this.style.transition = 'transform 0.5s ease';
    });
    
    image.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Add placeholder text to image placeholders
document.querySelectorAll('.image-placeholder').forEach((placeholder, index) => {
    const texts = ['عطور فاخرة', 'منظفات عالية الجودة', 'خلاطات طعام', 'العناية بالبشرة'];
    if (texts[index]) {
        placeholder.textContent = texts[index];
    }
});

// WhatsApp Button Animation
const whatsappFloat = document.querySelector('.whatsapp-float');
if (whatsappFloat) {
    whatsappFloat.addEventListener('mouseenter', function() {
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = 'pulse 1s infinite';
        }, 10);
    });
}

// Lazy Loading for Images (if you add real images later)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add active state to navigation links
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add active class styling
const activeStyle = document.createElement('style');
activeStyle.textContent = `
    .nav-menu a.active {
        color: var(--accent-color);
    }
    .nav-menu a.active::after {
        width: 100%;
    }
`;
document.head.appendChild(activeStyle);

// Image Gallery Loading and Categorization
const imageFiles = [
    'WhatsApp Image 2025-12-16 at 12.02.14 AM (1).jpeg',
    'WhatsApp Image 2025-12-16 at 12.02.14 AM.jpeg',
    'WhatsApp Image 2025-12-16 at 12.02.15 AM (1).jpeg',
    'WhatsApp Image 2025-12-16 at 12.02.15 AM (2).jpeg',
    'WhatsApp Image 2025-12-16 at 12.02.15 AM (3).jpeg',
    'WhatsApp Image 2025-12-16 at 12.02.15 AM.jpeg',
    'WhatsApp Image 2025-12-16 at 12.02.16 AM (1).jpeg',
    'WhatsApp Image 2025-12-16 at 12.02.16 AM (2).jpeg',
    'WhatsApp Image 2025-12-16 at 12.02.16 AM.jpeg',
    'WhatsApp Image 2025-12-16 at 12.02.17 AM (1).jpeg',
    'WhatsApp Image 2025-12-16 at 12.02.17 AM (2).jpeg',
    'WhatsApp Image 2025-12-16 at 12.02.17 AM (3).jpeg',
    'WhatsApp Image 2025-12-16 at 12.02.17 AM.jpeg',
    'WhatsApp Image 2025-12-16 at 12.02.18 AM (1).jpeg',
    'WhatsApp Image 2025-12-16 at 12.02.18 AM (2).jpeg',
    'WhatsApp Image 2025-12-16 at 12.02.18 AM (3).jpeg',
    'WhatsApp Image 2025-12-16 at 12.02.18 AM.jpeg',
    'WhatsApp Image 2025-12-16 at 12.02.19 AM (1).jpeg',
    'WhatsApp Image 2025-12-16 at 12.02.19 AM (2).jpeg',
    'WhatsApp Image 2025-12-16 at 12.02.19 AM.jpeg',
    'WhatsApp Image 2025-12-16 at 12.02.20 AM (1).jpeg',
    'WhatsApp Image 2025-12-16 at 12.02.20 AM (2).jpeg',
    'WhatsApp Image 2025-12-16 at 12.02.20 AM.jpeg',
    'WhatsApp Image 2025-12-16 at 12.02.21 AM (1).jpeg',
    'WhatsApp Image 2025-12-16 at 12.02.21 AM (2).jpeg',
    'WhatsApp Image 2025-12-16 at 12.02.21 AM (3).jpeg',
    'WhatsApp Image 2025-12-16 at 12.02.21 AM.jpeg',
    'WhatsApp Image 2025-12-16 at 12.02.22 AM (1).jpeg',
    'WhatsApp Image 2025-12-16 at 12.02.22 AM (2).jpeg',
    'WhatsApp Image 2025-12-16 at 12.02.22 AM (3).jpeg',
    'WhatsApp Image 2025-12-16 at 12.02.22 AM.jpeg',
    'WhatsApp Image 2025-12-16 at 12.02.23 AM (1).jpeg',
    'WhatsApp Image 2025-12-16 at 12.02.23 AM (2).jpeg',
    'WhatsApp Image 2025-12-16 at 12.02.23 AM (3).jpeg',
    'WhatsApp Image 2025-12-16 at 12.02.23 AM.jpeg',
    'WhatsApp Image 2025-12-16 at 12.02.24 AM (1).jpeg',
    'WhatsApp Image 2025-12-16 at 12.02.24 AM (2).jpeg',
    'WhatsApp Image 2025-12-16 at 12.02.24 AM (3).jpeg',
    'WhatsApp Image 2025-12-16 at 12.02.24 AM.jpeg',
    'WhatsApp Image 2025-12-16 at 12.02.25 AM (1).jpeg',
    'WhatsApp Image 2025-12-16 at 12.02.25 AM (2).jpeg',
    'WhatsApp Image 2025-12-16 at 12.02.25 AM.jpeg',
    'WhatsApp Image 2025-12-16 at 12.02.26 AM (1).jpeg',
    'WhatsApp Image 2025-12-16 at 12.02.26 AM (2).jpeg',
    'WhatsApp Image 2025-12-16 at 12.02.26 AM (3).jpeg',
    'WhatsApp Image 2025-12-16 at 12.02.26 AM.jpeg',
    'WhatsApp Image 2025-12-16 at 12.02.27 AM (1).jpeg',
    'WhatsApp Image 2025-12-16 at 12.02.27 AM (2).jpeg',
    'WhatsApp Image 2025-12-16 at 12.02.27 AM.jpeg',
    'WhatsApp Image 2025-12-16 at 12.02.28 AM (1).jpeg',
    'WhatsApp Image 2025-12-16 at 12.02.28 AM (2).jpeg',
    'WhatsApp Image 2025-12-16 at 12.02.28 AM (3).jpeg',
    'WhatsApp Image 2025-12-16 at 12.02.28 AM.jpeg',
    'WhatsApp Image 2025-12-16 at 12.02.29 AM (1).jpeg',
    'WhatsApp Image 2025-12-16 at 12.02.29 AM (2).jpeg',
    'WhatsApp Image 2025-12-16 at 12.02.29 AM (3).jpeg',
    'WhatsApp Image 2025-12-16 at 12.02.29 AM.jpeg',
    'WhatsApp Image 2025-12-16 at 12.02.30 AM (1).jpeg',
    'WhatsApp Image 2025-12-16 at 12.02.30 AM (2).jpeg',
    'WhatsApp Image 2025-12-16 at 12.02.30 AM (3).jpeg',
    'WhatsApp Image 2025-12-16 at 12.02.30 AM.jpeg',
    'WhatsApp Image 2025-12-16 at 12.02.31 AM (1).jpeg',
    'WhatsApp Image 2025-12-16 at 12.02.31 AM.jpeg',
    'WhatsApp Image 2025-12-16 at 12.02.32 AM.jpeg'
];

// Distribute images evenly across 4 categories
function distributeImages(images, categories) {
    const distribution = {};
    categories.forEach(cat => distribution[cat] = []);
    
    images.forEach((img, index) => {
        const categoryIndex = index % categories.length;
        distribution[categories[categoryIndex]].push(img);
    });
    
    return distribution;
}

// Load images into galleries
function loadGalleryImages() {
    const categories = ['perfumes', 'detergents', 'blenders', 'skincare'];
    const imageDistribution = distributeImages(imageFiles, categories);
    
    categories.forEach(category => {
        const gallery = document.getElementById(`gallery-${category}`);
        if (!gallery) return;
        
        const images = imageDistribution[category];
        images.forEach((imageFile, index) => {
            const imgContainer = document.createElement('div');
            imgContainer.className = 'gallery-item';
            imgContainer.setAttribute('data-index', index);
            
            const img = document.createElement('img');
            img.src = imageFile;
            img.alt = `منتج ${category} ${index + 1}`;
            img.loading = 'lazy';
            
            // Handle image load errors
            img.addEventListener('error', function() {
                this.style.display = 'none';
            });
            
            // Make image clickable - open in new window/page on single click
            img.style.cursor = 'pointer';
            img.setAttribute('title', currentLang === 'ar' ? 'انقر لفتح الصورة' : 'Click to open image');
            
            // Open image in new window/page on click
            img.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                openImageInNewPage(imageFile);
            });
            
            // Also make container clickable
            imgContainer.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                openImageInNewPage(imageFile);
            });
            
            imgContainer.appendChild(img);
            gallery.appendChild(imgContainer);
        });
    });
}

// Open image in new page/window
function openImageInNewPage(imageSrc) {
    // Create a new window with the image
    const newWindow = window.open('', '_blank', 'width=1200,height=800,scrollbars=yes,resizable=yes');
    
    // Create HTML content for the new page
    const htmlContent = `
        <!DOCTYPE html>
        <html lang="${currentLang}" dir="${currentLang === 'ar' ? 'rtl' : 'ltr'}">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${currentLang === 'ar' ? 'ماي واي أميرة طوبار - عرض الصورة' : 'My Way Amira Toubar - View Image'}</title>
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                body {
                    background: #0d1b2a;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    min-height: 100vh;
                    padding: 20px;
                    font-family: 'Cairo', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                }
                .image-container {
                    max-width: 100%;
                    max-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                }
                .image-container img {
                    max-width: 100%;
                    max-height: 95vh;
                    width: auto;
                    height: auto;
                    object-fit: contain;
                    border-radius: 10px;
                    box-shadow: 0 10px 60px rgba(0, 0, 0, 0.5);
                    animation: fadeIn 0.5s ease;
                }
                .close-btn {
                    position: fixed;
                    top: 20px;
                    ${currentLang === 'ar' ? 'left' : 'right'}: 20px;
                    background: rgba(255, 255, 255, 0.2);
                    color: white;
                    border: none;
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    font-size: 30px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                    z-index: 1000;
                    backdrop-filter: blur(10px);
                }
                .close-btn:hover {
                    background: rgba(255, 255, 255, 0.3);
                    transform: scale(1.1);
                }
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: scale(0.9);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                @media (max-width: 768px) {
                    .image-container img {
                        max-height: 90vh;
                    }
                    .close-btn {
                        top: 10px;
                        ${currentLang === 'ar' ? 'left' : 'right'}: 10px;
                        width: 40px;
                        height: 40px;
                        font-size: 24px;
                    }
                }
            </style>
        </head>
        <body>
            <button class="close-btn" onclick="window.close()">&times;</button>
            <div class="image-container">
                <img src="${imageSrc}" alt="${currentLang === 'ar' ? 'صورة المنتج' : 'Product Image'}" />
            </div>
            <script>
                // Close on Escape key
                document.addEventListener('keydown', function(e) {
                    if (e.key === 'Escape') {
                        window.close();
                    }
                });
                
                // Close on click outside image
                document.addEventListener('click', function(e) {
                    if (e.target.tagName !== 'IMG' && e.target.className !== 'close-btn') {
                        window.close();
                    }
                });
            </script>
        </body>
        </html>
    `;
    
    newWindow.document.write(htmlContent);
    newWindow.document.close();
}


