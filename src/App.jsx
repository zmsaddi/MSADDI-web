import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/variables.css';
import './styles/main.css';
import './styles/responsive.css';
import './styles/accessibility.css';
import AppRoutes from './routes';
import MainLayout from './layouts/MainLayout';

function App() {
  const [language, setLanguage] = useState('ar');
  const [theme, setTheme] = useState('light');

  // تبديل السمة بين الوضع الفاتح والداكن
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <Router>
      <div className={`theme-${theme}`}>
        {/* إضافة رابط تخطي للمحتوى لتحسين إمكانية الوصول */}
        <a href="#main-content" className="skip-to-content">
          {language === 'ar' ? 'تخطي إلى المحتوى الرئيسي' : 'Skip to main content'}
        </a>
        <MainLayout language={language} setLanguage={setLanguage} toggleTheme={toggleTheme} currentTheme={theme}>
          <main id="main-content" tabIndex="-1">
            <AppRoutes language={language} />
          </main>
        </MainLayout>
      </div>
    </Router>
  );
}

export default App;
