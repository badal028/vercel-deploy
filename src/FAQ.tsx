import { Box, Typography, Container, Accordion, AccordionSummary, AccordionDetails, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import AdSense from './AdSense';

export default function FAQ() {
  const faqs = [
    {
      question: "What are virtual numbers and how do they work?",
      answer: "Virtual numbers are <strong>phone numbers that work over the internet</strong> instead of being tied to a physical phone line. They can receive <strong>SMS messages and calls</strong>, making them perfect for <strong>verification purposes</strong>, <strong>business communications</strong>, or <strong>maintaining privacy</strong>. Our virtual numbers work with popular messaging apps like <strong>WhatsApp and Telegram</strong>."
    },
    {
      question: "How quickly will I receive my virtual number after payment?",
      answer: "We provide <strong>instant delivery</strong>! Once your payment is confirmed, you'll receive your virtual number <strong>within minutes</strong>. Our <strong>automated system</strong> ensures <strong>fast processing</strong>, and our <strong>24/7 support team</strong> is always ready to help if you need assistance."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various <strong>secure payment methods</strong> including <strong>UPI</strong>, <strong>Google Pay</strong>, <strong>PhonePe</strong>, <strong>Paytm</strong>, and other <strong>digital payment options</strong>. All payments are <strong>processed securely</strong>, and we provide <strong>payment confirmation immediately</strong> after successful transactions."
    },
    {
      question: "Are your virtual numbers guaranteed to work?",
      answer: "Yes! We only provide <strong>premium quality virtual numbers</strong> that are <strong>tested and verified</strong>. If you encounter any issues with your virtual number, our <strong>24/7 support team</strong> will help you resolve it or provide a <strong>replacement at no extra cost</strong>."
    },
    {
      question: "Can I use these numbers for WhatsApp and Telegram verification?",
      answer: "Absolutely! Our virtual numbers are <strong>specifically designed to work with WhatsApp and Telegram verification</strong>. They are <strong>tested and guaranteed to work</strong> with these platforms. You can use them for <strong>creating new accounts</strong> or <strong>verifying existing ones</strong>."
    },
    {
      question: "Do you offer refunds if the number doesn't work?",
      answer: "Yes, we offer a <strong>full refund guarantee</strong>. If your virtual number doesn't work as expected, we'll either provide you with a <strong>replacement number</strong> or give you a <strong>full refund</strong>. Your <strong>satisfaction is our top priority</strong>."
    },
    {
      question: "How long do these virtual numbers remain active?",
      answer: "Our virtual numbers are <strong>designed to remain active for extended periods</strong>. However, we recommend using them <strong>within 24-48 hours of purchase</strong> for <strong>optimal results</strong>. Our <strong>support team</strong> can help you with any <strong>activation issues</strong>."
    },
    {
      question: "Can I use these numbers for business purposes?",
      answer: "Yes, many of our customers use virtual numbers for <strong>business communications</strong>, <strong>customer support</strong>, and <strong>marketing purposes</strong>. They provide a <strong>professional way to maintain communication</strong> without revealing your <strong>personal number</strong>."
    },
    {
      question: "What services do you offer besides virtual numbers?",
      answer: "We offer a <strong>comprehensive range of digital services</strong> including <strong>Canva Pro accounts</strong>, <strong>Netflix Premium subscriptions</strong>, <strong>Instagram verification</strong>, <strong>Gmail accounts</strong>, and <strong>LinkedIn services</strong>. All our services come with <strong>instant delivery</strong> and <strong>24/7 support</strong>."
    },
    {
      question: "How secure is your payment system?",
      answer: "Our payment system uses <strong>industry-standard encryption</strong> and <strong>security protocols</strong>. We <strong>never store your payment information</strong>, and all transactions are <strong>processed through secure payment gateways</strong>. Your <strong>privacy and security are our top priorities</strong>."
    }
  ];

  return (
    <>
      <Helmet>
        <title>FAQ - Virtual Numbers Help & Support | VirtNumbers</title>
        <meta name="description" content="Get answers to frequently asked questions about virtual numbers, WhatsApp verification, and digital services. 24/7 support available." />
        <meta name="keywords" content="virtual numbers FAQ, WhatsApp verification questions, Telegram number help, Canva Pro support, Netflix Premium FAQ, digital services questions" />
        <link rel="canonical" href="https://virtnumbers.com/faq" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://virtnumbers.com/faq" />
        <meta property="og:title" content="FAQ - Virtual Numbers Help & Support | VirtNumbers" />
        <meta property="og:description" content="Get answers to frequently asked questions about virtual numbers, WhatsApp verification, and digital services. 24/7 support available." />
        <meta property="og:image" content="/logo.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://virtnumbers.com/faq" />
        <meta property="twitter:title" content="FAQ - Virtual Numbers Help & Support | VirtNumbers" />
        <meta property="twitter:description" content="Get answers to frequently asked questions about virtual numbers, WhatsApp verification, and digital services. 24/7 support available." />
        <meta property="twitter:image" content="/logo.png" />
      </Helmet>

      <Box sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        py: { xs: 3, md: 6 },
        position: 'relative'
      }}>
        <Container maxWidth="lg" sx={{ px: { xs: 2, md: 3 } }}>
          {/* Main H1 Heading */}
          <Typography 
            variant="h1" 
            sx={{ 
              mb: { xs: 2, md: 4 }, 
              textAlign: 'center', 
              fontWeight: 700, 
              color: 'white',
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            Frequently Asked Questions
          </Typography>
          
          <Typography 
            variant="h2" 
            sx={{ 
              mb: { xs: 3, md: 6 }, 
              textAlign: 'center', 
              color: 'rgba(255,255,255,0.9)',
              fontSize: { xs: '1rem', sm: '1.25rem' },
              fontWeight: 400
            }}
          >
            Find answers to <strong>common questions</strong> about our <strong>virtual number services</strong> and <strong>digital solutions</strong>
          </Typography>

          {/* Internal Navigation Links */}
          <Box sx={{ 
            mb: { xs: 4, md: 6 },
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
            justifyContent: 'center'
          }}>
            <Button
              component={Link}
              to="/buy"
              variant="outlined"
              sx={{
                color: 'white',
                borderColor: 'rgba(255,255,255,0.5)',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255,255,255,0.1)'
                }
              }}
            >
              Purchase Virtual Numbers
            </Button>
            <Button
              component={Link}
              to="/about"
              variant="outlined"
              sx={{
                color: 'white',
                borderColor: 'rgba(255,255,255,0.5)',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255,255,255,0.1)'
                }
              }}
            >
              Learn About VirtNumbers
            </Button>
            <Button
              component={Link}
              to="/contact"
              variant="outlined"
              sx={{
                color: 'white',
                borderColor: 'rgba(255,255,255,0.5)',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255,255,255,0.1)'
                }
              }}
            >
              Get Customer Support
            </Button>
          </Box>

          {/* FAQ Categories */}
          <Box sx={{ mb: { xs: 4, md: 6 } }}>
            <Typography 
              variant="h3" 
              sx={{ 
                mb: 3,
                color: 'white',
                fontSize: { xs: '1.5rem', md: '2rem' },
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
              }}
            >
              Virtual Number Services
            </Typography>
            
            {faqs.slice(0, 5).map((faq, index) => (
              <Accordion 
                key={index}
                sx={{ 
                  mb: 2,
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 3,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                  '&:before': { display: 'none' },
                  '&.Mui-expanded': {
                    margin: '16px 0'
                  }
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: '#667eea' }} />}
                  sx={{
                    '& .MuiAccordionSummary-content': {
                      margin: '16px 0'
                    }
                  }}
                >
                  <Typography 
                    variant="h4" 
                    sx={{ 
                      fontWeight: 600,
                      color: '#667eea',
                      fontSize: { xs: '1rem', md: '1.1rem' }
                    }}
                  >
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      lineHeight: 1.7,
                      fontSize: { xs: '0.9rem', md: '1rem' }
                    }}
                  >
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>

          <Box sx={{ mb: { xs: 4, md: 6 } }}>
            <Typography 
              variant="h3" 
              sx={{ 
                mb: 3,
                color: 'white',
                fontSize: { xs: '1.5rem', md: '2rem' },
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
              }}
            >
              Payment & Support
            </Typography>
            
            {faqs.slice(5).map((faq, index) => (
              <Accordion 
                key={index + 5}
                sx={{ 
                  mb: 2,
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 3,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                  '&:before': { display: 'none' },
                  '&.Mui-expanded': {
                    margin: '16px 0'
                  }
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: '#667eea' }} />}
                  sx={{
                    '& .MuiAccordionSummary-content': {
                      margin: '16px 0'
                    }
                  }}
                >
                  <Typography 
                    variant="h4" 
                    sx={{ 
                      fontWeight: 600,
                      color: '#667eea',
                      fontSize: { xs: '1rem', md: '1.1rem' }
                    }}
                  >
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      lineHeight: 1.7,
                      fontSize: { xs: '0.9rem', md: '1rem' }
                    }}
                  >
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>

          {/* Related Services Section */}
          <Box sx={{ 
            mb: { xs: 4, md: 6 },
            p: { xs: 2, md: 4 },
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            borderRadius: 3,
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
          }}>
            <Typography 
              variant="h3" 
              sx={{ 
                mb: 3,
                fontSize: { xs: '1.5rem', md: '2rem' },
                color: '#667eea',
                textAlign: 'center'
              }}
            >
              Explore Our Services
            </Typography>
            <Box sx={{ 
              display: 'flex',
              flexWrap: 'wrap',
              gap: 2,
              justifyContent: 'center'
            }}>
              <Button
                component={Link}
                to="/buy"
                variant="contained"
                sx={{
                  backgroundColor: '#667eea',
                  '&:hover': {
                    backgroundColor: '#5a67d8'
                  }
                }}
              >
                Virtual Numbers
              </Button>
              <Button
                component={Link}
                to="/buy"
                variant="contained"
                sx={{
                  backgroundColor: '#667eea',
                  '&:hover': {
                    backgroundColor: '#5a67d8'
                  }
                }}
              >
                Canva Pro
              </Button>
              <Button
                component={Link}
                to="/buy"
                variant="contained"
                sx={{
                  backgroundColor: '#667eea',
                  '&:hover': {
                    backgroundColor: '#5a67d8'
                  }
                }}
              >
                Netflix Premium
              </Button>
            </Box>
          </Box>

          <Box sx={{ 
            mt: { xs: 4, md: 6 }, 
            textAlign: 'center', 
            p: { xs: 2, md: 4 }, 
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            borderRadius: 3,
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
          }}>
            <Typography 
              variant="h4" 
              sx={{ 
                mb: { xs: 1, md: 2 },
                fontSize: { xs: '1.25rem', sm: '1.5rem' },
                color: '#667eea'
              }}
            >
              Still have questions?
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                mb: { xs: 2, md: 3 },
                fontSize: { xs: '0.9rem', md: '1rem' }
              }}
            >
              Our <strong>24/7 support team</strong> is here to help you with any questions about <strong>virtual numbers</strong> or our <strong>services</strong>.
            </Typography>
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              sx={{
                backgroundColor: '#667eea',
                '&:hover': {
                  backgroundColor: '#5a67d8'
                }
              }}
            >
              Get Customer Support
            </Button>
          </Box>
          
          {/* Ad Section */}
          <Box sx={{ mt: 6 }}>
            <AdSense adSlot="2841512028" adFormat="auto" />
          </Box>
        </Container>
      </Box>
    </>
  );
} 