import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// استيراد الصفحات بشكل كسول
const HomePage = lazy(() => import('../pages/HomePage'));
const ServicesPage = lazy(() => import('../pages/ServicesPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));

// مكون التحميل
const LoadingFallback = ({ language }) => {
  const text = language === 'ar' ? 'جاري التحميل...' : 'Loading...';
  return (
    <div className="page-loading">
      <div className="loading-spinner"></div>
      <p>{text}</p>
    </div>
  );
};

/**
 * تعريف مسارات التطبيق
 * يتم استخدام هذا المكون في App.jsx
 */
const AppRoutes = ({ language }) => {
  return (
    <Suspense fallback={<LoadingFallback language={language} />}>
      <Routes>
        <Route path="/" element={<HomePage language={language} />} />
        <Route path="/services" element={<ServicesPage language={language} />} />
        <Route path="/contact" element={<ContactPage language={language} />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
