import { Box, Typography, Container, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AdSense from './AdSense';

export default function FAQ() {
  const faqs = [
    {
      question: "What are virtual numbers and how do they work?",
      answer: "Virtual numbers are phone numbers that work over the internet instead of being tied to a physical phone line. They can receive SMS messages and calls, making them perfect for verification purposes, business communications, or maintaining privacy. Our virtual numbers work with popular messaging apps like WhatsApp and Telegram."
    },
    {
      question: "How quickly will I receive my virtual number after payment?",
      answer: "We provide instant delivery! Once your payment is confirmed, you'll receive your virtual number within minutes. Our automated system ensures fast processing, and our 24/7 support team is always ready to help if you need assistance."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various secure payment methods including UPI, Google Pay, PhonePe, Paytm, and other digital payment options. All payments are processed securely, and we provide payment confirmation immediately after successful transactions."
    },
    {
      question: "Are your virtual numbers guaranteed to work?",
      answer: "Yes! We only provide premium quality virtual numbers that are tested and verified. If you encounter any issues with your virtual number, our 24/7 support team will help you resolve it or provide a replacement at no extra cost."
    },
    {
      question: "Can I use these numbers for WhatsApp and Telegram verification?",
      answer: "Absolutely! Our virtual numbers are specifically designed to work with WhatsApp and Telegram verification. They are tested and guaranteed to work with these platforms. You can use them for creating new accounts or verifying existing ones."
    },
    {
      question: "Do you offer refunds if the number doesn't work?",
      answer: "Yes, we offer a full refund guarantee. If your virtual number doesn't work as expected, we'll either provide you with a replacement number or give you a full refund. Your satisfaction is our top priority."
    },
    {
      question: "How long do these virtual numbers remain active?",
      answer: "Our virtual numbers are designed to remain active for extended periods. However, we recommend using them within 24-48 hours of purchase for optimal results. Our support team can help you with any activation issues."
    },
    {
      question: "Can I use these numbers for business purposes?",
      answer: "Yes, many of our customers use virtual numbers for business communications, customer support, and marketing purposes. They provide a professional way to maintain communication without revealing your personal number."
    }
  ];

  return (
    <Box sx={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      py: { xs: 3, md: 6 },
      position: 'relative'
    }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 3 } }}>
        <Typography 
          variant="h2" 
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
          variant="h5" 
          sx={{ 
            mb: { xs: 3, md: 6 }, 
            textAlign: 'center', 
            color: 'rgba(255,255,255,0.9)',
            fontSize: { xs: '1rem', sm: '1.25rem' }
          }}
        >
          Find answers to common questions about our virtual number services
        </Typography>

        <Box sx={{ mb: { xs: 4, md: 6 } }}>
          {faqs.map((faq, index) => (
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
                  variant="h6" 
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
            variant="h5" 
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
            Our 24/7 support team is here to help you with any questions about virtual numbers or our services.
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              fontWeight: 600,
              fontSize: { xs: '0.9rem', md: '1rem' },
              color: '#667eea'
            }}
          >
            Contact us on WhatsApp for instant support!
          </Typography>
        </Box>
        
        {/* Ad Section */}
        <Box sx={{ mt: 6 }}>
          <AdSense adSlot="2841512028" adFormat="auto" />
        </Box>
      </Container>
    </Box>
  );
} 