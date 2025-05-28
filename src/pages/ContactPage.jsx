import React, { useState, useEffect } from 'react';
import '../styles/main.css';
import ContactForm from '../components/ContactForm';

function ContactPage({ language }) {
  const [contactMethod, setContactMethod] = useState('whatsapp'); // 'whatsapp' or 'map'
  
  // محتوى متعدد اللغات
  const content = {
    ar: {
      hero: {
        title: "اتصل بنا",
        subtitle: "نحن هنا لمساعدتك",
        description: "يسعدنا التواصل معك والإجابة على جميع استفساراتك. يمكنك الاتصال بنا مباشرة أو إرسال رسالة من خلال النموذج أدناه."
      },
      contactInfo: {
        title: "معلومات الاتصال",
        phone: "رقم الهاتف",
        phoneNumber: "+963 944244604",
        email: "البريد الإلكتروني",
        emailAddress: "ah.msaddi@hotmail.com",
        address: "العنوان",
        location: "سوريا - حلب - الشقيف الصناعية",
        workingHours: "ساعات العمل",
        days: {
          sunday: "الأحد",
          monday: "الإثنين",
          tuesday: "الثلاثاء",
          wednesday: "الأربعاء",
          thursday: "الخميس",
          friday: "الجمعة",
          saturday: "السبت"
        },
        times: {
          weekdays: "9:00 ص - 5:00 م",
          friday: "9:00 ص - 12:00 م",
          weekend: "مغلق"
        },
        socialMedia: "تابعنا على وسائل التواصل الاجتماعي",
        followUs: "تابعنا للحصول على آخر الأخبار والعروض"
      },
      contactMethods: {
        whatsapp: "تواصل عبر واتساب",
        map: "عرض الموقع على الخريطة",
        whatsappDescription: "تواصل معنا مباشرة عبر واتساب للحصول على استجابة سريعة",
        mapDescription: "زيارتنا في موقعنا"
      }
    },
    en: {
      hero: {
        title: "Contact Us",
        subtitle: "We're Here to Help",
        description: "We are happy to connect with you and answer all your inquiries. You can contact us directly or send a message through the form below."
      },
      contactInfo: {
        title: "Contact Information",
        phone: "Phone Number",
        phoneNumber: "+963 944244604",
        email: "Email",
        emailAddress: "ah.msaddi@hotmail.com",
        address: "Address",
        location: "Syria - Aleppo - Al-Shqaif Industrial Zone",
        workingHours: "Working Hours",
        days: {
          sunday: "Sunday",
          monday: "Monday",
          tuesday: "Tuesday",
          wednesday: "Wednesday",
          thursday: "Thursday",
          friday: "Friday",
          saturday: "Saturday"
        },
        times: {
          weekdays: "9:00 AM - 5:00 PM",
          friday: "9:00 AM - 12:00 PM",
          weekend: "Closed"
        },
        socialMedia: "Follow Us on Social Media",
        followUs: "Follow us for the latest news and offers"
      },
      contactMethods: {
        whatsapp: "Contact via WhatsApp",
        map: "View on Map",
        whatsappDescription: "Contact us directly via WhatsApp for a quick response",
        mapDescription: "Visit us at our location"
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
    <div className="page-container contact-page">
      {/* قسم البانر الرئيسي */}
      <div className="contact-hero">
        <div className="contact-hero-overlay">
          <div className="container">
            <h1>{t.hero.title}</h1>
            <h2>{t.hero.subtitle}</h2>
            <p>{t.hero.description}</p>
          </div>
        </div>
      </div>
      
      {/* قسم معلومات الاتصال والنموذج */}
      <div className="contact-main-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info-container">
              <h2>{t.contactInfo.title}</h2>
              
              <div className="contact-card">
                <div className="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="32" height="32">
                    <path fill="currentColor" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
                  </svg>
                </div>
                <div className="contact-info-content">
                  <h3>{t.contactInfo.phone}</h3>
                  <p dir="ltr">{t.contactInfo.phoneNumber}</p>
                  <a 
                    href={getWhatsAppUrl("963944244604")} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="contact-button whatsapp-button"
                  >
                    <span className="button-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20" height="20">
                        <path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                      </svg>
                    </span>
                    {t.contactMethods.whatsapp}
                  </a>
                </div>
              </div>
              
              <div className="contact-card">
                <div className="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="32" height="32">
                    <path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                  </svg>
                </div>
                <div className="contact-info-content">
                  <h3>{t.contactInfo.email}</h3>
                  <p>{t.contactInfo.emailAddress}</p>
                  <a 
                    href={getEmailUrl(t.contactInfo.emailAddress)} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="contact-button email-button"
                  >
                    <span className="button-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20">
                        <path fill="currentColor" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"/>
                      </svg>
                    </span>
                    {language === 'ar' ? 'إرسال بريد إلكتروني' : 'Send Email'}
                  </a>
                </div>
              </div>
              
              <div className="contact-card">
                <div className="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="32" height="32">
                    <path fill="currentColor" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
                  </svg>
                </div>
                <div className="contact-info-content">
                  <h3>{t.contactInfo.address}</h3>
                  <p>{t.contactInfo.location}</p>
                  <a 
                    href={getGoogleMapsUrl("7539+FHC, Aleppo, Syria")} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="contact-button map-button"
                  >
                    <span className="button-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="20" height="20">
                        <path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/>
                      </svg>
                    </span>
                    {t.contactMethods.map}
                  </a>
                </div>
              </div>
              
              <div className="working-hours info-box">
                <h3>{t.contactInfo.workingHours}</h3>
                <div className="hours-grid">
                  <div className="day">{t.contactInfo.days.sunday}</div>
                  <div className="time">{t.contactInfo.times.weekdays}</div>
                  
                  <div className="day">{t.contactInfo.days.monday}</div>
                  <div className="time">{t.contactInfo.times.weekdays}</div>
                  
                  <div className="day">{t.contactInfo.days.tuesday}</div>
                  <div className="time">{t.contactInfo.times.weekdays}</div>
                  
                  <div className="day">{t.contactInfo.days.wednesday}</div>
                  <div className="time">{t.contactInfo.times.weekdays}</div>
                  
                  <div className="day">{t.contactInfo.days.thursday}</div>
                  <div className="time">{t.contactInfo.times.weekdays}</div>
                  
                  <div className="day">{t.contactInfo.days.friday}</div>
                  <div className="time">{t.contactInfo.times.friday}</div>
                  
                  <div className="day">{t.contactInfo.days.saturday}</div>
                  <div className="time">{t.contactInfo.times.weekend}</div>
                </div>
              </div>
              
              <div className="social-media">
                <h3>{t.contactInfo.socialMedia}</h3>
                <p>{t.contactInfo.followUs}</p>
                <div className="social-icons">
                  <a href="#" className="social-icon" aria-label="Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="20" height="20">
                      <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                    </svg>
                  </a>
                  <a href="#" className="social-icon" aria-label="Instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20" height="20">
                      <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                    </svg>
                  </a>
                  <a href="#" className="social-icon" aria-label="Twitter">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20">
                      <path fill="currentColor" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="contact-form-section">
              {/* تبديل بين واتساب والخريطة */}
              <div className="contact-method-toggle">
                <div className="toggle-buttons">
                  <button 
                    className={`toggle-button ${contactMethod === 'whatsapp' ? 'active' : ''}`}
                    onClick={() => setContactMethod('whatsapp')}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20" height="20">
                      <path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                    </svg>
                    {t.contactMethods.whatsapp}
                  </button>
                  <button 
                    className={`toggle-button ${contactMethod === 'map' ? 'active' : ''}`}
                    onClick={() => setContactMethod('map')}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="20" height="20">
                      <path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/>
                    </svg>
                    {t.contactMethods.map}
                  </button>
                </div>
              </div>
              
              {/* عرض نموذج الاتصال أو الخريطة حسب الاختيار */}
              <div className="contact-method-content">
                {contactMethod === 'whatsapp' ? (
                  <div className="whatsapp-contact">
                    <div className="contact-method-description">
                      <p>{t.contactMethods.whatsappDescription}</p>
                    </div>
                    <ContactForm language={language} />
                  </div>
                ) : (
                  <div className="map-container">
                    <div className="contact-method-description">
                      <p>{t.contactMethods.mapDescription}</p>
                    </div>
                    <div className="google-map">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3217.7887258966156!2d37.1324!3d36.2125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDEyJzQ1LjAiTiAzN8KwMDcnNTYuNiJF!5e0!3m2!1sen!2sus!4v1621234567890!5m2!1sen!2sus" 
                        width="100%" 
                        height="450" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="MSADDI Location"
                      ></iframe>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* زر واتساب ثابت */}
      <a 
        href={getWhatsAppUrl("963944244604")} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-whatsapp-button"
        aria-label={t.contactMethods.whatsapp}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="28" height="28">
          <path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
        </svg>
      </a>
    </div>
  );
}

export default ContactPage;
