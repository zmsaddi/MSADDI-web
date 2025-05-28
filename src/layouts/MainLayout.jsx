import { Link } from 'react-router-dom';
import LanguageSwitcher from '../components/LanguageSwitcher';
import ThemeToggle from '../components/ThemeToggle';
import { useState, useEffect } from 'react';
// استيراد الشعار بشكل صحيح من المسار المطلق في src/assets
import logoImage from '../assets/logo-updated.png';

/**
 * التخطيط الرئيسي للتطبيق
 * يتضمن الهيدر والفوتر والقائمة الرئيسية
 */
const MainLayout = ({ children, language, setLanguage, toggleTheme, currentTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // محتوى متعدد اللغات
  const content = {
    ar: {
      home: "الرئيسية",
      services: "خدماتنا",
      contact: "اتصل بنا",
      footer: "جميع الحقوق محفوظة",
      logoText: "مؤسسة مسدي",
      menuToggle: "القائمة"
    },
    en: {
      home: "Home",
      services: "Services",
      contact: "Contact",
      footer: "All Rights Reserved",
      logoText: "MSADDI Foundation",
      menuToggle: "Menu"
    }
  };

  const t = content[language];

  // تتبع التمرير لإضافة تأثيرات للهيدر
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // إغلاق القائمة المتنقلة عند النقر على رابط
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className={`app-container ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <header className={scrolled ? 'scrolled' : ''}>
        <div className="header-container">
          <div className="logo-container">
            <Link to="/" onClick={closeMobileMenu}>
              <img src={logoImage} alt="MSADDI Logo" className="logo-image" />
            </Link>
            <div className="logo-text">{t.logoText}</div>
          </div>
          
          {/* قائمة التنقل للشاشات الكبيرة */}
          <div className="main-nav desktop-nav">
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/" className="nav-link">{t.home}</Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link">{t.services}</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">{t.contact}</Link>
              </li>
            </ul>
            <div className="nav-actions">
              <LanguageSwitcher language={language} setLanguage={setLanguage} />
              <ThemeToggle currentTheme={currentTheme} toggleTheme={toggleTheme} language={language} />
            </div>
          </div>

          {/* زر القائمة للشاشات الصغيرة */}
          <div className="mobile-menu-toggle">
            <button 
              className="hamburger-button" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={t.menuToggle}
              aria-expanded={isMobileMenuOpen}
            >
              <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
              <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
              <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* قائمة التنقل للشاشات الصغيرة */}
        <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-list">
            <li className="mobile-nav-item">
              <Link to="/" className="mobile-nav-link" onClick={closeMobileMenu}>{t.home}</Link>
            </li>
            <li className="mobile-nav-item">
              <Link to="/services" className="mobile-nav-link" onClick={closeMobileMenu}>{t.services}</Link>
            </li>
            <li className="mobile-nav-item">
              <Link to="/contact" className="mobile-nav-link" onClick={closeMobileMenu}>{t.contact}</Link>
            </li>
            <li className="mobile-nav-item mobile-theme-toggle">
              <ThemeToggle currentTheme={currentTheme} toggleTheme={toggleTheme} language={language} />
            </li>
            <li className="mobile-nav-item mobile-language-switcher">
              <LanguageSwitcher language={language} setLanguage={setLanguage} />
            </li>
          </ul>
        </div>
      </header>
      
      <main>
        {children}
      </main>
      
      <footer>
        <p>© 2025 MSADDI - {t.footer}</p>
      </footer>
    </div>
  );
};

export default MainLayout;
