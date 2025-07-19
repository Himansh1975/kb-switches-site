import React, { useState } from 'react';
import { Phone, MapPin, Mail, Users, CheckCircle, MessageCircle } from 'lucide-react';
import { useForm } from '../utils/useForm';
import { contactFormRules } from '../utils/formValidation';
import { trackBusinessEvent } from '../utils/analytics';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormTextarea from './FormTextarea';

const Contact = React.memo(() => {
  const [submitStatus, setSubmitStatus] = useState('idle'); // idle, success, error
  const [submitMessage, setSubmitMessage] = useState('');

  const initialValues = {
    name: '',
    phone: '',
    email: '',
    productInterest: '',
    message: ''
  };

  const {
    values,
    errors,
    isSubmitting,
    handleSubmit,
    resetForm,
    getFieldProps
  } = useForm(initialValues, contactFormRules);

  const productOptions = [
    { value: 'switches', label: 'Smart Switches' },
    { value: 'lights', label: 'Smart Lighting' },
    { value: 'automation', label: 'Home Automation' },
    { value: 'bulk', label: 'Bulk/Dealership Inquiry' }
  ];

  const formatWhatsAppMessage = (formData) => {
    const productLabels = {
      'switches': 'Smart Switches',
      'lights': 'Smart Lighting',
      'automation': 'Home Automation',
      'bulk': 'Bulk/Dealership Inquiry'
    };

    let message = `🏠 *KB Switches Inquiry*\n\n`;
    message += `👤 *Name:* ${formData.name}\n`;
    message += `📞 *Phone:* ${formData.phone}\n`;
    
    if (formData.email) {
      message += `📧 *Email:* ${formData.email}\n`;
    }
    
    if (formData.productInterest) {
      message += `🔌 *Interest:* ${productLabels[formData.productInterest] || formData.productInterest}\n`;
    }
    
    message += `\n💬 *Message:*\n${formData.message}\n\n`;
    message += `---\n_Sent from kbswitches.in contact form_`;
    
    return message;
  };

  const handleFormSubmit = async (formData) => {
    setSubmitStatus('idle');
    
    try {
      // Track form submission
      trackBusinessEvent.contactFormSubmit(formData);
      
      // Format WhatsApp message
      const whatsappMessage = formatWhatsAppMessage(formData);
      const phoneNumber = '917990414919'; // +91 79904 14919
      
      // Create WhatsApp URL
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
      
      // Brief delay to show "Opening WhatsApp..." state
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Open WhatsApp
      window.open(whatsappUrl, '_blank');
      
      setSubmitStatus('success');
      setSubmitMessage('WhatsApp opened with your message! Please send it to complete your inquiry.');
      resetForm();
      
      // Reset success message after 8 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
        setSubmitMessage('');
      }, 8000);
      
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Sorry, there was an error. Please try contacting us directly via WhatsApp or phone.');
      console.error('WhatsApp redirect error:', error);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(handleFormSubmit);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 circuit-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Phone className="w-4 h-4" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Switch to Smart?</h2>
          <p className="text-xl text-gray-600">Contact us for quotations, bulk orders, and dealership inquiries</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                <MapPin className="w-6 h-6 text-blue-600" />
                <span>Visit Our Office</span>
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-700 mb-2 leading-relaxed">
                    KB Switches and Home Automation<br />
                    104 Dwarkesh Industrial Society, Opp Patidar Plywood,<br />
                    Near Navjivan Circle, Bhattar, Surat - 395017
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Business Hours:</p>
                  <p className="text-gray-600">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                <Phone className="w-6 h-6 text-blue-600" />
                <span>Quick Contact</span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <span className="text-gray-700 font-medium">Customer Care</span>
                  <a href="tel:7990414919" className="font-bold text-blue-600 hover:text-blue-700 transition-colors">7990414919</a>
                </div>
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-100">
                  <span className="text-gray-700 font-medium">Business Inquiries</span>
                  <a href="tel:9687637511" className="font-bold text-green-600 hover:text-green-700 transition-colors">9687637511</a>
                </div>
                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg border border-purple-100">
                  <span className="text-gray-700 font-medium">General Email</span>
                  <a href="mailto:kblights29@gmail.com" className="font-bold text-purple-600 hover:text-purple-700 transition-colors break-all">kblights29@gmail.com</a>
                </div>
                <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg border border-orange-100">
                  <span className="text-gray-700 font-medium">Support Email</span>
                  <a href="mailto:support@kbswitches.in" className="font-bold text-orange-600 hover:text-orange-700 transition-colors break-all">support@kbswitches.in</a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            
            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <p className="text-green-800 font-medium">Message Sent Successfully!</p>
                </div>
                <p className="text-green-700 mt-2 text-sm">{submitMessage}</p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-red-600" />
                  <p className="text-red-800 font-medium">Message Failed to Send</p>
                </div>
                <p className="text-red-700 mt-2 text-sm">{submitMessage}</p>
              </div>
            )}

            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormInput
                  label="Full Name"
                  placeholder="Your full name"
                  required
                  {...getFieldProps('name')}
                />
                <FormInput
                  label="Phone Number"
                  type="tel"
                  placeholder="10-digit phone number"
                  required
                  {...getFieldProps('phone')}
                />
              </div>
              
              <FormInput
                label="Email Address"
                type="email"
                placeholder="your@email.com (optional)"
                {...getFieldProps('email')}
              />
              
              <FormSelect
                label="Product Interest"
                placeholder="Select product category"
                options={productOptions}
                {...getFieldProps('productInterest')}
              />
              
              <FormTextarea
                label="Message"
                placeholder="Tell us about your requirements, project details, or questions..."
                required
                rows={4}
                maxLength={1000}
                {...getFieldProps('message')}
              />
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <MessageCircle className="w-5 h-5 animate-spin" />
                    <span>Opening WhatsApp...</span>
                  </>
                ) : (
                  <>
                    <MessageCircle className="w-5 h-5" />
                    <span>Send via WhatsApp</span>
                  </>
                )}
              </button>
              
              <p className="text-sm text-gray-500 text-center">
                Your message will open in WhatsApp - just click send to reach us instantly!
              </p>
            </form>
          </div>
        </div>

        {/* Dealer Network CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Become a KB Switches Dealer</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Join our growing network of dealers across India. Attractive margins, marketing support, and exclusive territories available.
          </p>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center space-x-2 shadow-lg">
            <Users className="w-5 h-5" />
            <span>Partner With Us</span>
          </button>
        </div>
      </div>
    </section>
  );
});

export default Contact;