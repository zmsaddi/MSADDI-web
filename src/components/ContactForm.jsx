import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import '../styles/main.css';

/**
 * مكون نموذج الاتصال مع التحقق من صحة المدخلات باستخدام React Hook Form و Yup
 */
const ContactForm = ({ language }) => {
  // محتوى متعدد اللغات
  const content = {
    ar: {
      title: "أرسل لنا رسالة",
      name: "الاسم",
      namePlaceholder: "أدخل اسمك الكامل",
      phone: "رقم الهاتف",
      phonePlaceholder: "أدخل رقم هاتفك",
      email: "البريد الإلكتروني (اختياري)",
      emailPlaceholder: "أدخل بريدك الإلكتروني",
      message: "الرسالة",
      messagePlaceholder: "اكتب رسالتك هنا...",
      attachment: "إرفاق ملف (اختياري)",
      attachmentPlaceholder: "اختر ملفاً للإرفاق",
      submit: "إرسال",
      required: "* حقل مطلوب",
      success: "تم إرسال رسالتك بنجاح!",
      error: "حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.",
      nameError: "يرجى إدخال اسمك الكامل",
      phoneError: "يرجى إدخال رقم هاتف صحيح",
      emailError: "يرجى إدخال بريد إلكتروني صحيح",
      messageError: "يرجى كتابة رسالتك",
      fileSizeError: "حجم الملف يجب أن يكون أقل من 5 ميجابايت"
    },
    en: {
      title: "Send Us a Message",
      name: "Name",
      namePlaceholder: "Enter your full name",
      phone: "Phone Number",
      phonePlaceholder: "Enter your phone number",
      email: "Email (Optional)",
      emailPlaceholder: "Enter your email",
      message: "Message",
      messagePlaceholder: "Write your message here...",
      attachment: "Attach File (Optional)",
      attachmentPlaceholder: "Choose a file to attach",
      submit: "Submit",
      required: "* Required field",
      success: "Your message has been sent successfully!",
      error: "An error occurred while sending the message. Please try again.",
      nameError: "Please enter your full name",
      phoneError: "Please enter a valid phone number",
      emailError: "Please enter a valid email address",
      messageError: "Please write your message",
      fileSizeError: "File size must be less than 5MB"
    }
  };

  const t = content[language];
  
  // إنشاء مخطط التحقق باستخدام Yup
  const schema = yup.object({
    name: yup.string().required(t.nameError).min(2, t.nameError),
    phone: yup.string()
      .required(t.phoneError)
      .matches(
        /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
        t.phoneError
      ),
    email: yup.string().email(t.emailError).notRequired(),
    message: yup.string().required(t.messageError).min(10, t.messageError),
    file: yup.mixed()
      .test('fileSize', t.fileSizeError, (value) => {
        if (!value || !value[0]) return true;
        return value[0].size <= 5 * 1024 * 1024; // 5MB
      })
      .notRequired()
  });
  
  // إعداد React Hook Form مع مخطط التحقق
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting }, 
    reset,
    watch
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange' // التحقق عند تغيير القيمة
  });
  
  const [submitStatus, setSubmitStatus] = React.useState(null);
  const fileInputRef = React.useRef(null);
  const selectedFile = watch('file');
  
  // معالجة إرسال النموذج
  const onSubmit = async (data) => {
    try {
      setSubmitStatus(null);
      
      // محاكاة إرسال البيانات إلى الخادم
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // في الحالة الفعلية، هنا سيتم إرسال البيانات إلى خادم أو خدمة بريد إلكتروني
      // لكن في هذا المثال، سنفتح تطبيق البريد الإلكتروني الافتراضي أو واتساب
      
      const subject = `${language === 'ar' ? 'رسالة من' : 'Message from'} ${data.name} - MSADDI`;
      const body = `
        ${language === 'ar' ? 'الاسم' : 'Name'}: ${data.name}
        ${language === 'ar' ? 'رقم الهاتف' : 'Phone'}: ${data.phone}
        ${language === 'ar' ? 'البريد الإلكتروني' : 'Email'}: ${data.email || (language === 'ar' ? 'غير محدد' : 'Not specified')}
        
        ${language === 'ar' ? 'الرسالة' : 'Message'}:
        ${data.message}
      `;
      
      // فتح واتساب أو البريد الإلكتروني حسب تفضيل المستخدم
      const useWhatsApp = true; // يمكن جعلها خيار للمستخدم
      
      if (useWhatsApp) {
        // إزالة أي رموز غير رقمية من رقم الهاتف
        const cleanNumber = "963944244604";
        const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(subject + '\n\n' + body)}`;
        window.open(whatsappUrl, '_blank');
      } else {
        const emailUrl = `mailto:ah.msaddi@hotmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = emailUrl;
      }
      
      // إعادة تعيين النموذج
      reset();
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      
      setSubmitStatus('success');
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    }
  };

  // عرض اسم الملف المختار
  const getSelectedFileName = () => {
    if (!selectedFile || !selectedFile[0]) return '';
    return selectedFile[0].name;
  };

  return (
    <div className="contact-form-container">
      <h2>{t.title}</h2>
      
      {submitStatus === 'success' && (
        <div className="alert alert-success" role="alert">
          {t.success}
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="alert alert-error" role="alert">
          {t.error}
        </div>
      )}
      
      <form onSubmit={handleSubmit(onSubmit)} className="contact-form" noValidate>
        <div className="form-group">
          <label htmlFor="name">
            {t.name} <span className="required-mark">{t.required}</span>
          </label>
          <input
            type="text"
            id="name"
            placeholder={t.namePlaceholder}
            className={errors.name ? 'error' : ''}
            disabled={isSubmitting}
            {...register('name')}
            aria-invalid={errors.name ? 'true' : 'false'}
          />
          {errors.name && <div className="error-message" role="alert">{errors.name.message}</div>}
        </div>
        
        <div className="form-group">
          <label htmlFor="phone">
            {t.phone} <span className="required-mark">{t.required}</span>
          </label>
          <input
            type="tel"
            id="phone"
            placeholder={t.phonePlaceholder}
            className={errors.phone ? 'error' : ''}
            disabled={isSubmitting}
            {...register('phone')}
            aria-invalid={errors.phone ? 'true' : 'false'}
          />
          {errors.phone && <div className="error-message" role="alert">{errors.phone.message}</div>}
        </div>
        
        <div className="form-group">
          <label htmlFor="email">{t.email}</label>
          <input
            type="email"
            id="email"
            placeholder={t.emailPlaceholder}
            className={errors.email ? 'error' : ''}
            disabled={isSubmitting}
            {...register('email')}
            aria-invalid={errors.email ? 'true' : 'false'}
          />
          {errors.email && <div className="error-message" role="alert">{errors.email.message}</div>}
        </div>
        
        <div className="form-group">
          <label htmlFor="message">
            {t.message} <span className="required-mark">{t.required}</span>
          </label>
          <textarea
            id="message"
            placeholder={t.messagePlaceholder}
            rows="5"
            className={errors.message ? 'error' : ''}
            disabled={isSubmitting}
            {...register('message')}
            aria-invalid={errors.message ? 'true' : 'false'}
          ></textarea>
          {errors.message && <div className="error-message" role="alert">{errors.message.message}</div>}
        </div>
        
        <div className="form-group">
          <label htmlFor="file">{t.attachment}</label>
          <div className="file-input-wrapper">
            <input
              type="file"
              id="file"
              ref={fileInputRef}
              className={errors.file ? 'error' : ''}
              disabled={isSubmitting}
              {...register('file')}
              aria-invalid={errors.file ? 'true' : 'false'}
            />
            {getSelectedFileName() && (
              <div className="selected-file">
                {getSelectedFileName()}
              </div>
            )}
          </div>
          {errors.file && <div className="error-message" role="alert">{errors.file.message}</div>}
        </div>
        
        <div className="form-actions">
          <button 
            type="submit" 
            className="btn btn-primary" 
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="loading-spinner" aria-hidden="true"></span>
            ) : (
              t.submit
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
