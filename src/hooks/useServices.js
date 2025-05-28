import { useState, useEffect } from 'react';
import servicesData from '../data/services.json';

/**
 * هوك مخصص لجلب بيانات الخدمات
 * يدعم تصفية الخدمات حسب المعرف وتغيير اللغة
 */
const useServices = (language = 'ar', serviceId = null) => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      // محاكاة جلب البيانات من API
      setTimeout(() => {
        // تحويل البيانات إلى الصيغة المطلوبة حسب اللغة المختارة
        const formattedServices = servicesData.map(service => ({
          id: service.id,
          images: service.images,
          title: service[language].title,
          description: service[language].description,
          features: service[language].features,
          materials: service[language].materials
        }));

        // تصفية حسب المعرف إذا تم تحديده
        if (serviceId) {
          const filteredService = formattedServices.find(service => service.id === serviceId);
          setServices(filteredService ? [filteredService] : []);
        } else {
          setServices(formattedServices);
        }
        
        setLoading(false);
      }, 300); // تأخير صغير لمحاكاة جلب البيانات
    } catch (err) {
      setError('حدث خطأ أثناء جلب بيانات الخدمات');
      setLoading(false);
    }
  }, [language, serviceId]);

  return { services, loading, error };
};

export default useServices;
