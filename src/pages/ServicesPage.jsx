import React, { useState, useEffect, useRef } from 'react';
import '../styles/main.css';
import useServices from '../hooks/useServices';
import ServiceCard from '../components/ServiceCard';

function ServicesPage({ language }) {
  const { services, loading, error } = useServices(language);
  const [activeService, setActiveService] = useState(null);
  const serviceRefs = useRef({});

  // محتوى متعدد اللغات للعناصر الثابتة
  const content = {
    ar: {
      hero: {
        title: "خدماتنا",
        subtitle: "خدمات تصنيع الصفائح المعدنية",
        description: "نقدم مجموعة متكاملة من خدمات تصنيع الصفائح المعدنية بأعلى معايير الجودة والدقة، باستخدام أحدث التقنيات والمعدات المتطورة."
      },
      features: {
        title: "مميزات خدماتنا",
        description: "نحن ملتزمون بتقديم أفضل خدمات تصنيع الصفائح المعدنية مع التركيز على الجودة والدقة والسرعة في التنفيذ."
      },
      contact: {
        title: "هل تحتاج إلى مساعدة؟",
        description: "فريقنا جاهز للإجابة على استفساراتك وتقديم المساعدة الفنية.",
        button: "تواصل معنا"
      },
      loading: "جاري تحميل الخدمات...",
      error: "حدث خطأ أثناء تحميل الخدمات. يرجى المحاولة مرة أخرى.",
      features_section: "المميزات",
      materials_section: "المواد"
    },
    en: {
      hero: {
        title: "Our Services",
        subtitle: "Sheet Metal Fabrication Services",
        description: "We provide a comprehensive range of sheet metal fabrication services with the highest standards of quality and precision, using the latest technologies and advanced equipment."
      },
      features: {
        title: "Features of Our Services",
        description: "We are committed to providing the best sheet metal fabrication services with a focus on quality, precision, and speed in execution."
      },
      contact: {
        title: "Need Help?",
        description: "Our team is ready to answer your inquiries and provide technical assistance.",
        button: "Contact Us"
      },
      loading: "Loading services...",
      error: "An error occurred while loading services. Please try again.",
      features_section: "Features",
      materials_section: "Materials"
    }
  };

  const t = content[language];
  
  // التمرير إلى الخدمة المحددة عند تغيير الهاش
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash && serviceRefs.current[hash]) {
        serviceRefs.current[hash].scrollIntoView({ behavior: 'smooth' });
        setActiveService(hash);
      }
    };

    // تنفيذ عند تحميل الصفحة وعند تغيير الهاش
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [services]);

  // مقدمة الخدمات - مفاهيم مثل الخبرة الصناعية، التكنولوجيا المتقدمة، إلخ
  const servicesIntroduction = {
    ar: [
      {
        title: "خبرة صناعية",
        description: "نمتلك خبرة واسعة في مجال تصنيع الصفائح المعدنية تمتد لسنوات طويلة."
      },
      {
        title: "تكنولوجيا متقدمة",
        description: "نستخدم أحدث التقنيات والمعدات المتطورة لضمان أعلى مستويات الدقة والجودة."
      },
      {
        title: "مراقبة الجودة",
        description: "نطبق أنظمة صارمة لمراقبة الجودة في جميع مراحل التصنيع."
      },
      {
        title: "مرونة التصميم",
        description: "نقدم حلولاً مخصصة تناسب احتياجات كل عميل مع مرونة في التصميم والتنفيذ."
      },
      {
        title: "هندسة تعاونية",
        description: "نعمل بشكل وثيق مع عملائنا لتطوير أفضل الحلول الهندسية لمشاريعهم."
      }
    ],
    en: [
      {
        title: "Industry Expertise",
        description: "We have extensive experience in sheet metal fabrication extending over many years."
      },
      {
        title: "Advanced Technology",
        description: "We use the latest technologies and advanced equipment to ensure the highest levels of precision and quality."
      },
      {
        title: "Quality Control",
        description: "We apply strict quality control systems at all stages of manufacturing."
      },
      {
        title: "Design Flexibility",
        description: "We provide customized solutions that meet the needs of each client with flexibility in design and implementation."
      },
      {
        title: "Collaborative Engineering",
        description: "We work closely with our clients to develop the best engineering solutions for their projects."
      }
    ]
  };

  return (
    <div className="page-container services-page">
      {/* قسم البانر الرئيسي */}
      <div className="services-hero">
        <div className="services-hero-overlay">
          <div className="container">
            <h1>{t.hero.title}</h1>
            <h2>{t.hero.subtitle}</h2>
            <p>{t.hero.description}</p>
          </div>
        </div>
      </div>
      
      {/* مقدمة الخدمات */}
      <div className="services-introduction">
        <div className="container">
          <div className="services-intro-grid">
            {servicesIntroduction[language].map((item, index) => (
              <div className="intro-item" key={index}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* قسم الخدمات الرئيسية */}
      <div className="main-services-section">
        <div className="container">
          {loading ? (
            <div className="loading-indicator">{t.loading}</div>
          ) : error ? (
            <div className="error-message">{t.error}</div>
          ) : (
            services.map((service) => (
              <div 
                className={`service-detail-card ${activeService === service.id ? 'active' : ''}`} 
                key={service.id}
                ref={el => serviceRefs.current[service.id] = el}
                id={service.id}
              >
                <div className="service-image">
                  <img 
                    src={service.images.main} 
                    alt={service.title} 
                    className="service-main-image" 
                  />
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  
                  <div className="service-features info-box">
                    <h4>{t.features_section}</h4>
                    <ul>
                      {service.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="service-materials info-box">
                    <h4>{t.materials_section}</h4>
                    <p>{service.materials}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      
      {/* قسم مميزات الخدمات */}
      <div className="key-features-section">
        <div className="container">
          <div className="section-header">
            <h2>{t.features.title}</h2>
            <p>{t.features.description}</p>
          </div>
          
          <div className="key-features-grid">
            {/* عرض الخدمات كبطاقات مميزات */}
            {!loading && !error && services.slice(0, 6).map((service, index) => (
              <ServiceCard key={index} service={service} language={language} />
            ))}
          </div>
        </div>
      </div>
      
      {/* قسم الاتصال */}
      <div className="services-contact-section">
        <div className="container">
          <div className="services-contact-content">
            <h2>{t.contact.title}</h2>
            <p>{t.contact.description}</p>
            <a href="/contact" className="btn btn-primary">{t.contact.button}</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
