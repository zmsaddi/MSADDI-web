import { useState } from 'react';
import '../App.css';
import '../styles/images.css';
import heroBg from '../assets/hero-bg.png';

function HomePage({ language }) {
  const content = {
    ar: {
      hero: {
        title: "مؤسسة مسدي",
        subtitle: "خدمات تصنيع الصفائح المعدنية",
        description: "نقدم خدمات متكاملة في مجال تصنيع الصفائح المعدنية بأعلى معايير الجودة والدقة، باستخدام أحدث التقنيات والمعدات المتطورة.",
        contactButton: "تواصل معنا",
        servicesButton: "خدماتنا"
      },
      promo: {
        specialPrices: "أسعار خاصة للعملاء الجدد",
        delivery: "توصيل سريع",
        quality: "جودة عالية مضمونة"
      },
      keyFeatures: {
        title: "لماذا تختار مؤسسة مسدي؟",
        description: "نحن ملتزمون بتقديم أفضل خدمات تصنيع الصفائح المعدنية مع التركيز على الجودة والدقة والسرعة في التنفيذ.",
        features: [
          {
            title: "جودة عالية",
            description: "نستخدم أفضل المواد والتقنيات لضمان جودة استثنائية لجميع المنتجات."
          },
          {
            title: "دقة متناهية",
            description: "تضمن معداتنا المتطورة دقة عالية في القياسات والتنفيذ."
          },
          {
            title: "سرعة في التنفيذ",
            description: "نلتزم بالمواعيد المحددة مع الحفاظ على جودة العمل."
          },
          {
            title: "خدمة متميزة",
            description: "فريقنا المتخصص جاهز لتقديم الدعم والمشورة الفنية."
          }
        ]
      },
      services: {
        title: "خدماتنا",
        description: "نقدم مجموعة متكاملة من خدمات تصنيع الصفائح المعدنية لتلبية احتياجات عملائنا في مختلف المجالات.",
        services: [
          {
            title: "قطع الليزر",
            description: "قطع دقيق للصفائح المعدنية باستخدام أحدث تقنيات الليزر."
          },
          {
            title: "الثني",
            description: "تشكيل الصفائح المعدنية بزوايا دقيقة حسب المواصفات المطلوبة."
          },
          {
            title: "البلص",
            description: "تشكيل الصفائح المعدنية على قوالب مخصصة لإنتاج أشكال دائرية ومخروطية."
          }
        ],
        viewMore: "عرض المزيد"
      },
      contact: {
        title: "معلومات الاتصال",
        phone: "رقم الهاتف",
        phoneNumber: "+963 944244604",
        email: "البريد الإلكتروني",
        emailAddress: "ah.msaddi@hotmail.com",
        address: "العنوان",
        location: "سوريا - حلب - الشقيف الصناعية",
        whatsapp: "تواصل عبر واتساب",
        sendEmail: "إرسال بريد إلكتروني",
        viewMap: "عرض الموقع على الخريطة"
      }
    },
    en: {
      hero: {
        title: "MSADDI Foundation",
        subtitle: "Sheet Metal Fabrication Services",
        description: "We provide comprehensive sheet metal fabrication services with the highest standards of quality and precision, using the latest technologies and advanced equipment.",
        contactButton: "Contact Us",
        servicesButton: "Our Services"
      },
      promo: {
        specialPrices: "Special Prices for New Customers",
        delivery: "Fast Delivery",
        quality: "Guaranteed High Quality"
      },
      keyFeatures: {
        title: "Why Choose MSADDI?",
        description: "We are committed to providing the best sheet metal fabrication services with a focus on quality, precision, and speed in execution.",
        features: [
          {
            title: "High Quality",
            description: "We use the best materials and technologies to ensure exceptional quality for all products."
          },
          {
            title: "Extreme Precision",
            description: "Our advanced equipment ensures high accuracy in measurements and execution."
          },
          {
            title: "Fast Execution",
            description: "We adhere to deadlines while maintaining work quality."
          },
          {
            title: "Excellent Service",
            description: "Our specialized team is ready to provide technical support and advice."
          }
        ]
      },
      services: {
        title: "Our Services",
        description: "We offer a comprehensive range of sheet metal fabrication services to meet the needs of our customers in various fields.",
        services: [
          {
            title: "Laser Cutting",
            description: "Precise cutting of metal sheets using the latest laser technologies."
          },
          {
            title: "Bending",
            description: "Forming metal sheets with precise angles according to required specifications."
          },
          {
            title: "Spinning",
            description: "Forming metal sheets on custom molds to produce circular and conical shapes."
          }
        ],
        viewMore: "View More"
      },
      contact: {
        title: "Contact Information",
        phone: "Phone Number",
        phoneNumber: "+963 944244604",
        email: "Email",
        emailAddress: "ah.msaddi@hotmail.com",
        address: "Address",
        location: "Syria - Aleppo - Al-Shqaif Industrial Zone",
        whatsapp: "Contact via WhatsApp",
        sendEmail: "Send Email",
        viewMap: "View on Map"
      }
    }
  };

  const t = content[language];
  
  // رابط واتساب للتواصل
  const getWhatsAppUrl = (phoneNumber) => {
    // إزالة أي رموز غير رقمية من رقم الهاتف
    const cleanNumber = phoneNumber.replace(/\D/g, '');
    return `https://wa.me/${cleanNumber}`;
  };
  
  // رابط البريد الإلكتروني
  const getEmailUrl = (email) => {
    return `mailto:${email}`;
  };
  
  // رابط خرائط جوجل للعنوان
  const getGoogleMapsUrl = (locationCode) => {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(locationCode)}`;
  };

  return (
    <div className="page-container home-page">
      {/* قسم البانر الرئيسي - تم تحديث العناصر لتغطية عرض الشاشة بالكامل */}
      <div className="hero-banner-wrapper">
        <div className="hero-banner" style={{ backgroundImage: `url(${heroBg})` }}>
          <div className="hero-overlay">
            <div className="container">
              <div className="hero-content-wrapper">
                <div className="hero-text">
                  <h1 className="hero-title">{t.hero.title}</h1>
                  <h2 className="hero-subtitle">{t.hero.subtitle}</h2>
                  <p className="hero-description">{t.hero.description}</p>
                  <div className="hero-buttons">
                    <a href="/contact" className="btn btn-primary">{t.hero.contactButton}</a>
                    <a href="/services" className="btn btn-secondary">{t.hero.servicesButton}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* قسم العروض الترويجية */}
      <div className="promo-section">
        <div className="container">
          <div className="promo-container">
            <div className="promo-item">
              <div className="promo-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="24" height="24">
                  <path fill="currentColor" d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm64 320H64V320c35.3 0 64 28.7 64 64zM64 192V128h64c0 35.3-28.7 64-64 64zM448 384c0-35.3 28.7-64 64-64v64H448zm64-192c-35.3 0-64-28.7-64-64h64v64zM288 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/>
                </svg>
              </div>
              <div className="promo-text">{t.promo.specialPrices}</div>
            </div>
            <div className="promo-item">
              <div className="promo-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="24" height="24">
                  <path fill="currentColor" d="M112 0C85.5 0 64 21.5 64 48V96H16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 272c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 48c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 240c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 208c8.8 0 16 7.2 16 16s-7.2 16-16 16H64V416c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H112zM544 237.3V256H416V160h50.7L544 237.3zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48zm368-48c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48z"/>
                </svg>
              </div>
              <div className="promo-text">{t.promo.delivery}</div>
            </div>
            <div className="promo-item">
              <div className="promo-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24">
                  <path fill="currentColor" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/>
                </svg>
              </div>
              <div className="promo-text">{t.promo.quality}</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* قسم الخدمات */}
      <div className="services-section">
        <div className="container">
          <div className="section-header">
            <h2>{t.services.title}</h2>
            <p>{t.services.description}</p>
          </div>
          
          <div className="services-grid">
            {t.services.services.map((service, index) => (
              <div className="service-card" key={index}>
                <div className="service-icon">
                  {index === 0 && (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="64" height="64">
                      <path fill="currentColor" d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm64 64V416H224V160H64zm384 0H288V416H448V160z"/>
                    </svg>
                  )}
                  {index === 1 && (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="64" height="64">
                      <path fill="currentColor" d="M438.6 150.6c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.7 96 32 96C14.3 96 0 110.3 0 128s14.3 32 32 32l306.7 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96zm-333.3 352c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 416 416 416c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96z"/>
                    </svg>
                  )}
                  {index === 2 && (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="64" height="64">
                      <path fill="currentColor" d="M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z"/>
                    </svg>
                  )}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="/services" className="service-link">{t.services.viewMore}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* قسم المميزات الرئيسية */}
      <div className="key-features-section">
        <div className="container">
          <div className="section-header">
            <h2>{t.keyFeatures.title}</h2>
            <p>{t.keyFeatures.description}</p>
          </div>
          
          <div className="key-features-grid">
            {t.keyFeatures.features.map((feature, index) => (
              <div className="key-feature" key={index}>
                <div className="key-feature-icon">
                  {index === 0 && (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="64" height="64">
                      <path fill="currentColor" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/>
                    </svg>
                  )}
                  {index === 1 && (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="64" height="64">
                      <path fill="currentColor" d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z"/>
                    </svg>
                  )}
                  {index === 2 && (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="64" height="64">
                      <path fill="currentColor" d="M112 0C85.5 0 64 21.5 64 48V96H16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 272c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 48c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 240c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 208c8.8 0 16 7.2 16 16s-7.2 16-16 16H64V416c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H112zM544 237.3V256H416V160h50.7L544 237.3zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48zm368-48c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48z"/>
                    </svg>
                  )}
                  {index === 3 && (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="64" height="64">
                      <path fill="currentColor" d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352h117.4C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"/>
                    </svg>
                  )}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* قسم معلومات الاتصال */}
      <div className="contact-info-section">
        <div className="container">
          <div className="section-header">
            <h2>{t.contact.title}</h2>
          </div>
          
          <div className="contact-info-grid">
            <div className="contact-info-card">
              <div className="contact-info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="32" height="32">
                  <path fill="currentColor" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
                </svg>
              </div>
              <h3>{t.contact.phone}</h3>
              <p>{t.contact.phoneNumber}</p>
              <a 
                href={getWhatsAppUrl(t.contact.phoneNumber)} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-button whatsapp-button"
              >
                <span className="button-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="16" height="16">
                    <path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                  </svg>
                </span>
                {t.contact.whatsapp}
              </a>
            </div>
            
            <div className="contact-info-card">
              <div className="contact-info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="32" height="32">
                  <path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                </svg>
              </div>
              <h3>{t.contact.email}</h3>
              <p>{t.contact.emailAddress}</p>
              <a 
                href={getEmailUrl(t.contact.emailAddress)} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-button email-button"
              >
                <span className="button-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16">
                    <path fill="currentColor" d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/>
                  </svg>
                </span>
                {t.contact.sendEmail}
              </a>
            </div>
            
            <div className="contact-info-card">
              <div className="contact-info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="32" height="32">
                  <path fill="currentColor" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
                </svg>
              </div>
              <h3>{t.contact.address}</h3>
              <p>{t.contact.location}</p>
              <a 
                href={getGoogleMapsUrl(t.contact.location)} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-button map-button"
              >
                <span className="button-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16" height="16">
                    <path fill="currentColor" d="M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152V422.8c0 9.8-6 18.6-15.1 22.3L416 503V200.4zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6V451.8L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77V504.3L192 449.4V255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/>
                  </svg>
                </span>
                {t.contact.viewMap}
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* زر واتساب ثابت */}
      <a 
        href={getWhatsAppUrl(t.contact.phoneNumber)} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-whatsapp-button"
        aria-label={t.contact.whatsapp}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24">
          <path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
        </svg>
      </a>
    </div>
  );
}

export default HomePage;
