import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './BuyPage.css';

interface ServiceOption {
  id: string;
  name: string;
  price: number;
  icon?: string;
  duration?: string;
  oldPrice?: number;
}

const telegramOptions: ServiceOption[] = [
  { id: 'fresh', name: 'Fresh Account', price: 500 },
  { id: '1year', name: '1 Year Old Account', price: 1000 },
];

const whatsappOptions: ServiceOption[] = [
  { id: 'poland', name: 'Poland WhatsApp', price: 800, icon: '🇵🇱' },
  { id: 'fresh', name: 'Fresh WhatsApp', price: 1000, icon: '🆕' },
  { id: 'poland2', name: 'Poland WhatsApp (Premium)', price: 1350, icon: '🇵🇱' },
  { id: 'georgia', name: 'Georgia WhatsApp', price: 1500, icon: '🇬🇪' },
  { id: 'thailand', name: 'Thailand WhatsApp', price: 1500, icon: '🇹🇭' },
  { id: 'germany', name: 'Germany WhatsApp', price: 2000, icon: '🇩🇪' },
  { id: 'hongkong', name: 'Hong Kong WhatsApp', price: 2000, icon: '🇭🇰' },
];

const instagramOptions: ServiceOption[] = [
  { id: 'account', name: 'Instagram Account', price: 180 },
];

const gmailOptions: ServiceOption[] = [
  { id: 'account', name: 'Gmail Account', price: 200 },
];

const linkedinOptions: ServiceOption[] = [
  { id: 'old', name: '1-3 Week Old LinkedIn', price: 500 },
  { id: 'followers', name: '500 LinkedIn Followers & Connections (Real)', price: 4000 },
];

const canvaOptions: ServiceOption[] = [
  { id: 'pro_2year', name: 'Canva Pro 2 Year Subscription', price: 3000 },
  { id: 'pro_1year', name: 'Canva Pro 1 Year Subscription', price: 2500 },
  { id: 'pro_1month', name: 'Canva Pro One Month to Your Account', price: 450 },
  { id: 'trusted', name: 'Canva Trusted Account with Email', price: 400 }
];

const netflixOptions: ServiceOption[] = [
  { id: 'netflix-lifetime', name: 'Lifetime Netflix Premium + Amazon Prime', price: 100, duration: 'lifetime' },
];

const serviceOptions = [
  { id: 'telegram', name: 'Telegram', icon: '📱', options: telegramOptions },
  { id: 'whatsapp', name: 'WhatsApp', icon: '💬', options: whatsappOptions },
  { id: 'instagram', name: 'Instagram', icon: '📷', options: instagramOptions },
  { id: 'gmail', name: 'Gmail', icon: '✉️', options: gmailOptions },
  { id: 'linkedin', name: 'LinkedIn', icon: '💼', options: linkedinOptions },
  { id: 'canva', name: 'Canva', icon: '🎨', options: canvaOptions },
  { id: 'netflix', name: 'Netflix', icon: '🎬', options: netflixOptions },
];

const cryptoOptions = [
  { id: 'bitcoin', name: 'Bitcoin (BTC)', address: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh' },
  { id: 'ethereum', name: 'Ethereum (ETH)', address: '0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6' },
  { id: 'usdt', name: 'USDT (TRC20)', address: 'TQn9Y2khDD95J42FQtQTdwVVRzQyVqJqCz' },
];

export default function BuyPage() {
  const [selectedService, setSelectedService] = useState('telegram');
  const [selectedOption, setSelectedOption] = useState<ServiceOption | null>(telegramOptions[0]);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>('');
  const [selectedCrypto, setSelectedCrypto] = useState<string>('');
  const [showQR, setShowQR] = useState(false);
  const [paymentDone, setPaymentDone] = useState(false);

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
    const service = serviceOptions.find(s => s.id === serviceId);
    if (service && service.options.length > 0) {
      setSelectedOption(service.options[0]);
    }
    setShowQR(false);
    setPaymentDone(false);
    setSelectedPaymentMethod('');
  };

  const handleOptionSelect = (optionId: string) => {
    const service = getCurrentService();
    if (service) {
      const option = service.options.find(opt => opt.id === optionId);
      if (option) {
        setSelectedOption(option);
      }
    }
    setShowQR(false);
    setPaymentDone(false);
    setSelectedPaymentMethod('');
  };

  const handlePaymentMethodSelect = (method: string) => {
    setSelectedPaymentMethod(method);
    setShowQR(true);
    setPaymentDone(false);
  };

  const handlePayment = () => {
    setPaymentDone(true);
  };

  const handleCryptoSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCrypto(event.target.value);
  };

  const convertToUSD = (inrAmount: number, includeFee: boolean = false) => {
    const usdRate = 0.012; // Approximate INR to USD rate
    const amount = inrAmount * usdRate;
    return includeFee ? (amount + 1).toFixed(2) : amount.toFixed(2);
  };

  const getCurrentService = () => {
    return serviceOptions.find(s => s.id === selectedService);
  };

  const getCurrentOptions = () => {
    const service = getCurrentService();
    return service ? service.options : [];
  };

  return (
    <>
      <Helmet>
        <title>Buy Virtual Numbers & Digital Services | Premium WhatsApp, Telegram, Instagram | VirtNumbers</title>
        <meta name="description" content="Buy premium virtual numbers for WhatsApp, Telegram, Instagram verification. Canva Pro and Netflix Premium accounts. Instant delivery, secure payments, 24/7 support." />
        <meta name="keywords" content="buy virtual numbers, WhatsApp verification, Telegram numbers, Instagram accounts, Canva Pro, Netflix Premium, digital services, instant delivery" />
        <link rel="canonical" href="https://virtnumbers.com/buy" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://virtnumbers.com/buy" />
        <meta property="og:title" content="Buy Virtual Numbers & Digital Services | Premium WhatsApp, Telegram, Instagram | VirtNumbers" />
        <meta property="og:description" content="Buy premium virtual numbers for WhatsApp, Telegram, Instagram verification. Canva Pro and Netflix Premium accounts. Instant delivery, secure payments, 24/7 support." />
        <meta property="og:image" content="/logo.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://virtnumbers.com/buy" />
        <meta property="twitter:title" content="Buy Virtual Numbers & Digital Services | Premium WhatsApp, Telegram, Instagram | VirtNumbers" />
        <meta property="twitter:description" content="Buy premium virtual numbers for WhatsApp, Telegram, Instagram verification. Canva Pro and Netflix Premium accounts. Instant delivery, secure payments, 24/7 support." />
        <meta property="twitter:image" content="/logo.png" />
      </Helmet>

      <div className="buy-page">
        <div className="buy-container">
          <div className="buy-header">
            <h1>Buy Virtual Numbers & Digital Services</h1>
            <h2>Premium WhatsApp, Telegram, Instagram Verification</h2>
            <p className="buy-subtitle">Get Premium Virtual Numbers with Instant Delivery and Secure Payments</p>
          </div>

          {/* Internal Navigation Links */}
          <div className="buy-navigation">
            <Link to="/faq" className="buy-nav-link">View FAQ</Link>
            <Link to="/contact" className="buy-nav-link">Contact Support</Link>
            <Link to="/about" className="buy-nav-link">About Us</Link>
            <Link to="/terms" className="buy-nav-link">Terms of Service</Link>
          </div>

          <div className="buy-main-content">
            <div className="buy-services-section">
              <h3>Choose Your Service</h3>
              <p className="buy-services-description">
                Select from our premium virtual number services. All services include instant delivery, 
                24/7 support, and money-back guarantee. Perfect for WhatsApp verification, Telegram accounts, 
                Instagram verification, and digital services.
              </p>
              
              <div className="buy-services-grid">
                {serviceOptions.map((service) => (
                  <div
                    key={service.id}
                    className={`buy-service-item ${selectedService === service.id ? 'active' : ''}`}
                    onClick={() => handleServiceSelect(service.id)}
                  >
                    <div className="buy-service-icon">{service.icon}</div>
                    <div className="buy-service-name">{service.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {getCurrentOptions().length > 1 && (
              <div className="buy-options-section">
                <h4>Select Your Option</h4>
                <p className="buy-options-description">
                  Choose the specific option that best fits your needs. Each option includes different 
                  features and pricing to suit various requirements.
                </p>
                <div className="buy-options-grid">
                  {getCurrentOptions().map((option) => (
                    <div
                      key={option.id}
                      className={`buy-option-item ${selectedOption?.id === option.id ? 'active' : ''}`}
                      onClick={() => handleOptionSelect(option.id)}
                    >
                      <div className="buy-option-name">{option.name}</div>
                      <div className="buy-option-price">₹{option.price}</div>
                      {option.oldPrice && (
                        <div className="buy-option-old-price">₹{option.oldPrice}</div>
                      )}
                      {option.duration && (
                        <div className="buy-option-duration">{option.duration}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="buy-purchase-section">
              <div className="buy-product-card">
                <h4 className="buy-product-title">
                  {selectedOption?.name} - {getCurrentService()?.name}
                </h4>
                <div className="buy-product-price">
                  ₹{selectedOption?.price} <span className="buy-product-currency">INR</span>
                </div>
                {selectedOption?.oldPrice && (
                  <div className="buy-product-old-price">₹{selectedOption.oldPrice}</div>
                )}
              </div>

              <div className="buy-features-list">
                <h4>What's Included</h4>
                <p className="buy-features-description">
                  Every purchase includes comprehensive features to ensure you get the best value 
                  and support for your virtual number needs.
                </p>
                <div className="buy-features-grid">
                  <div className="buy-feature-item">Instant delivery within 5 minutes</div>
                  <div className="buy-feature-item">High-quality premium numbers</div>
                  <div className="buy-feature-item">24/7 customer support</div>
                  <div className="buy-feature-item">Money-back guarantee</div>
                  <div className="buy-feature-item">No recurring charges</div>
                  <div className="buy-feature-item">Works globally</div>
                </div>
              </div>

              {!showQR ? (
                <div className="buy-payment-methods">
                  <h4>Choose Payment Method</h4>
                  <p className="buy-payment-description">
                    Select your preferred payment method. All payments are secure and processed 
                    instantly to ensure quick delivery of your virtual numbers.
                  </p>
                  
                  <button 
                    className="buy-payment-btn buy-upi-btn" 
                    onClick={() => handlePaymentMethodSelect('upi')}
                  >
                    <span className="buy-payment-icon">🏦</span>
                    Pay with UPI - Instant & Secure
                  </button>
                  
                  <button 
                    className="buy-payment-btn buy-paypal-btn" 
                    onClick={() => handlePaymentMethodSelect('paypal')}
                  >
                    <span className="buy-payment-icon">💳</span>
                    Pay with PayPal - International
                  </button>
                  
                  <button 
                    className="buy-payment-btn buy-crypto-btn" 
                    onClick={() => handlePaymentMethodSelect('crypto')}
                  >
                    <span className="buy-payment-icon">₿</span>
                    Pay with Crypto - Anonymous
                  </button>
                </div>
              ) : (
                <div className="buy-payment-details">
                  {selectedPaymentMethod === 'upi' && (
                    <div className="buy-payment-section">
                      <h4>Pay ₹{selectedOption?.price} via UPI</h4>
                      <p className="buy-payment-note">
                        Scan the QR code below to make instant payment via UPI. 
                        Your virtual number will be delivered immediately after payment confirmation.
                      </p>
                      <div className="buy-qr-container">
                        <img
                          src="https://wertrends.s3.eu-north-1.amazonaws.com/photo_6269573399781164029_y.jpg"
                          alt="UPI QR Code"
                          className="buy-qr-code"
                        />
                      </div>
                    </div>
                  )}

                  {selectedPaymentMethod === 'paypal' && (
                    <div className="buy-payment-section">
                      <h4>Pay ${convertToUSD(selectedOption?.price || 0, true)} via PayPal</h4>
                      <p className="buy-payment-note">(Includes $1 processing fee)</p>
                      <p className="buy-payment-description">
                        Click the button below to open PayPal and complete your payment securely. 
                        International payments are processed instantly.
                      </p>
                      <button 
                        className="buy-payment-btn buy-paypal-btn"
                        onClick={() => window.open('https://paypal.me/BadalPrajapati?country.x=IN&locale.x=en_GB', '_blank')}
                      >
                        <span className="buy-payment-icon">💳</span>
                        Open PayPal
                      </button>
                    </div>
                  )}

                  {selectedPaymentMethod === 'crypto' && (
                    <div className="buy-payment-section">
                      <h4>Pay via Cryptocurrency</h4>
                      <p className="buy-payment-note">
                        Amount: ₹{selectedOption?.price} (≈ ${convertToUSD(selectedOption?.price || 0, true)})
                      </p>
                      <p className="buy-payment-note">(Includes $1 processing fee)</p>
                      
                      <div className="buy-crypto-alert">
                        Note: Network fees and deductions will be handled by you. We need to receive the exact amount mentioned above to process your order.
                      </div>

                      <select 
                        value={selectedCrypto} 
                        onChange={handleCryptoSelect}
                        className="buy-crypto-select"
                      >
                        <option value="">Select Cryptocurrency</option>
                        {cryptoOptions.map((option) => (
                          <option key={option.id} value={option.id}>
                            {option.name}
                          </option>
                        ))}
                      </select>

                      {selectedCrypto && (
                        <div className="buy-crypto-address">
                          <p>Send {cryptoOptions.find(opt => opt.id === selectedCrypto)?.name} to:</p>
                          <div className="buy-address-box">
                            {cryptoOptions.find(opt => opt.id === selectedCrypto)?.address}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {!paymentDone ? (
                    <button 
                      className="buy-payment-btn buy-upi-btn buy-payment-confirm-btn"
                      onClick={handlePayment}
                    >
                      I Have Made Payment
                    </button>
                  ) : (
                    <div className="buy-payment-alert">
                      Please send the payment proof to the WhatsApp number. You will receive your virtual number shortly.
                    </div>
                  )}
                </div>
              )}

              <div className="buy-trust-indicators">
                <h4>Why Choose VirtNumbers?</h4>
                <p className="buy-trust-description">
                  Join thousands of satisfied customers who trust us for their virtual number needs. 
                  Our commitment to quality and customer satisfaction sets us apart.
                </p>
                <div className="buy-trust-grid">
                  <div className="buy-trust-item">
                    <span className="buy-trust-number">50,000+</span>
                    <div>Happy Customers</div>
                  </div>
                  <div className="buy-trust-item">
                    <span className="buy-trust-number">99.9%</span>
                    <div>Success Rate</div>
                  </div>
                  <div className="buy-trust-item">
                    <span className="buy-trust-number">24/7</span>
                    <div>Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Services Section */}
          <div className="buy-related-services">
            <h3>Explore Our Services</h3>
            <p className="buy-related-description">
              Discover our complete range of virtual number and digital services. 
              Each service is designed to meet specific verification and digital needs.
            </p>
            <div className="buy-related-grid">
              <Link to="/faq" className="buy-related-link">Frequently Asked Questions</Link>
              <Link to="/contact" className="buy-related-link">Contact Support Team</Link>
              <Link to="/about" className="buy-related-link">Learn About VirtNumbers</Link>
              <Link to="/terms" className="buy-related-link">Terms of Service</Link>
            </div>
          </div>

          <div className="buy-support-section">
            <h3>Need Help? We're Here for You!</h3>
            <p className="buy-support-text">
              Having trouble with payment or have questions about our service? Our support team is ready to assist you 
              with any questions about virtual numbers, payment methods, or service delivery.
            </p>
            <button 
              className="buy-support-btn" 
              onClick={() => window.open('https://wa.me/918154994406?text=I%20need%20help%20with%20payment', '_blank')}
            >
              Get Support
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
