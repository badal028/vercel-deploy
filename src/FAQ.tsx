import { Box, Typography, Container, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
      answer: "Absolutely! Our virtual numbers are specifically designed for WhatsApp and Telegram verification. They can receive SMS codes and work seamlessly with both platforms. We offer both fresh accounts and aged accounts depending on your needs."
    },
    {
      question: "Do I need to create an account to purchase?",
      answer: "No registration required! You can purchase our services as a guest. Simply select your desired service, make the payment, and receive your virtual number instantly. This makes the process quick and hassle-free."
    },
    {
      question: "What's the difference between fresh and aged accounts?",
      answer: "Fresh accounts are newly created and perfect for immediate use. Aged accounts (1 year old) have been active longer and may have additional benefits like higher trust scores or fewer restrictions on certain platforms."
    },
    {
      question: "Is my personal information safe with you?",
      answer: "Yes, we take privacy seriously. We don't store unnecessary personal information, and all data is handled securely. We only collect the minimum information needed to process your order and provide customer support."
    },
    {
      question: "What if I need help with my virtual number?",
      answer: "Our 24/7 customer support is available via WhatsApp. Simply send us a message with your order details, and our team will assist you promptly. We're committed to ensuring you have a smooth experience with our services."
    },
    {
      question: "Can I buy multiple virtual numbers at once?",
      answer: "Yes! You can purchase multiple virtual numbers in a single order. We offer competitive pricing for bulk orders, and all numbers will be delivered together. Contact us for special pricing on large orders."
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h2" sx={{ mb: 4, textAlign: 'center', fontWeight: 700, color: 'primary.main' }}>
        Frequently Asked Questions
      </Typography>
      
      <Typography variant="h5" sx={{ mb: 4, textAlign: 'center', color: 'text.secondary' }}>
        Everything you need to know about virtual numbers and our services
      </Typography>

      <Box sx={{ maxWidth: 800, mx: 'auto' }}>
        {faqs.map((faq, index) => (
          <Accordion key={index} sx={{ mb: 2, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(37, 99, 235, 0.04)',
                }
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main' }}>
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" sx={{ lineHeight: 1.8, color: 'text.secondary' }}>
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      <Box sx={{ mt: 6, textAlign: 'center', p: 4, bgcolor: 'primary.main', color: 'white', borderRadius: 2 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Still have questions?
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Our 24/7 support team is here to help you with any questions about virtual numbers or our services.
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 600 }}>
          Contact us on WhatsApp for instant support!
        </Typography>
      </Box>
    </Container>
  );
} 