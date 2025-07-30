import { Box, Typography, Container, Paper } from '@mui/material';
import AdSense from './AdSense';

export default function Terms() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 3, md: 6 }, px: { xs: 2, md: 3 } }}>
      <Typography 
        variant="h2" 
        sx={{ 
          mb: { xs: 2, md: 4 }, 
          textAlign: 'center', 
          fontWeight: 700, 
          color: 'primary.main',
          fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
        }}
      >
        Terms of Service
      </Typography>
      
      <Typography 
        variant="h5" 
        sx={{ 
          mb: { xs: 3, md: 6 }, 
          textAlign: 'center', 
          color: 'text.secondary',
          fontSize: { xs: '1rem', sm: '1.25rem' }
        }}
      >
        Last updated: {new Date().toLocaleDateString()}
      </Typography>

      <Paper sx={{ p: { xs: 2, md: 4 }, mb: { xs: 2, md: 4 } }}>
        <Typography 
          variant="h4" 
          sx={{ 
            mb: { xs: 2, md: 3 }, 
            color: 'primary.main',
            fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
          }}
        >
          1. Acceptance of Terms
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            mb: { xs: 2, md: 3 }, 
            lineHeight: 1.8,
            fontSize: { xs: '0.9rem', md: '1rem' }
          }}
        >
          By accessing and using VirtNumbers.com ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. 
          If you do not agree to abide by the above, please do not use this service.
        </Typography>
      </Paper>

      <Paper sx={{ p: { xs: 2, md: 4 }, mb: { xs: 2, md: 4 } }}>
        <Typography 
          variant="h4" 
          sx={{ 
            mb: { xs: 2, md: 3 }, 
            color: 'primary.main',
            fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
          }}
        >
          2. Service Description
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            mb: { xs: 2, md: 3 }, 
            lineHeight: 1.8,
            fontSize: { xs: '0.9rem', md: '1rem' }
          }}
        >
          VirtNumbers provides virtual phone numbers and digital services including but not limited to:
        </Typography>
        <Box component="ul" sx={{ pl: { xs: 2, md: 3 }, mb: { xs: 2, md: 3 } }}>
          <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>Virtual phone numbers for WhatsApp and Telegram verification</Typography>
          <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>Social media accounts (Instagram, Gmail, LinkedIn)</Typography>
          <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>Subscription services (Netflix Premium, Canva Pro)</Typography>
          <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>Related digital services and support</Typography>
        </Box>
      </Paper>

      <Paper sx={{ p: { xs: 2, md: 4 }, mb: { xs: 2, md: 4 } }}>
        <Typography 
          variant="h4" 
          sx={{ 
            mb: { xs: 2, md: 3 }, 
            color: 'primary.main',
            fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
          }}
        >
          3. User Responsibilities
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            mb: { xs: 2, md: 3 }, 
            lineHeight: 1.8,
            fontSize: { xs: '0.9rem', md: '1rem' }
          }}
        >
          You agree to use our services responsibly and in compliance with all applicable laws and regulations:
        </Typography>
        <Box component="ul" sx={{ pl: { xs: 2, md: 3 }, mb: { xs: 2, md: 3 } }}>
          <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>Use virtual numbers only for legitimate purposes</Typography>
          <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>Comply with the terms of service of third-party platforms</Typography>
          <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>Not use our services for illegal activities or fraud</Typography>
          <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>Provide accurate information when placing orders</Typography>
          <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>Maintain the security of your purchased services</Typography>
        </Box>
      </Paper>

      <Paper sx={{ p: { xs: 2, md: 4 }, mb: { xs: 2, md: 4 } }}>
        <Typography 
          variant="h4" 
          sx={{ 
            mb: { xs: 2, md: 3 }, 
            color: 'primary.main',
            fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
          }}
        >
          4. Payment Terms
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            mb: { xs: 2, md: 3 }, 
            lineHeight: 1.8,
            fontSize: { xs: '0.9rem', md: '1rem' }
          }}
        >
          All prices are listed in Indian Rupees (₹) and are subject to change without notice. Payment must be completed before service delivery.
        </Typography>
        <Box component="ul" sx={{ pl: { xs: 2, md: 3 }, mb: { xs: 2, md: 3 } }}>
          <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>Payment is required in advance of service delivery</Typography>
          <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>We accept various digital payment methods</Typography>
          <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>All transactions are final once payment is confirmed</Typography>
          <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>Prices may vary based on service type and availability</Typography>
        </Box>
      </Paper>

      <Paper sx={{ p: { xs: 2, md: 4 }, mb: { xs: 2, md: 4 } }}>
        <Typography 
          variant="h4" 
          sx={{ 
            mb: { xs: 2, md: 3 }, 
            color: 'primary.main',
            fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
          }}
        >
          5. Delivery and Service
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            mb: { xs: 2, md: 3 }, 
            lineHeight: 1.8,
            fontSize: { xs: '0.9rem', md: '1rem' }
          }}
        >
          We strive to provide instant delivery for all services, but delivery times may vary:
        </Typography>
        <Box component="ul" sx={{ pl: { xs: 2, md: 3 }, mb: { xs: 2, md: 3 } }}>
          <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>Most services are delivered within minutes of payment confirmation</Typography>
          <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>Delivery is made via WhatsApp or email as specified</Typography>
          <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>Service availability is subject to stock and supplier availability</Typography>
          <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>We are not responsible for delays beyond our control</Typography>
        </Box>
      </Paper>

      <Paper sx={{ p: { xs: 2, md: 4 }, mb: { xs: 2, md: 4 } }}>
        <Typography 
          variant="h4" 
          sx={{ 
            mb: { xs: 2, md: 3 }, 
            color: 'primary.main',
            fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
          }}
        >
          6. Refund Policy
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            mb: { xs: 2, md: 3 }, 
            lineHeight: 1.8,
            fontSize: { xs: '0.9rem', md: '1rem' }
          }}
        >
          Our refund policy is designed to be fair to both customers and our business:
        </Typography>
        <Box component="ul" sx={{ pl: { xs: 2, md: 3 }, mb: { xs: 2, md: 3 } }}>
          <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>No refunds after service delivery unless service is defective</Typography>
          <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>Partial refunds may be offered for service issues</Typography>
          <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>Refunds are processed within 3-5 business days</Typography>
          <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>Service replacement is preferred over refunds when possible</Typography>
        </Box>
      </Paper>

      <Paper sx={{ p: { xs: 2, md: 4 }, mb: { xs: 2, md: 4 } }}>
        <Typography 
          variant="h4" 
          sx={{ 
            mb: { xs: 2, md: 3 }, 
            color: 'primary.main',
            fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
          }}
        >
          7. Privacy and Data Protection
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            mb: { xs: 2, md: 3 }, 
            lineHeight: 1.8,
            fontSize: { xs: '0.9rem', md: '1rem' }
          }}
        >
          We are committed to protecting your privacy and personal information:
        </Typography>
        <Box component="ul" sx={{ pl: { xs: 2, md: 3 }, mb: { xs: 2, md: 3 } }}>
          <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>We collect minimal personal information necessary for service delivery</Typography>
          <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>Your data is not shared with third parties without consent</Typography>
          <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>We use secure payment processing methods</Typography>
          <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>You can request deletion of your data at any time</Typography>
        </Box>
      </Paper>

      <Paper sx={{ p: { xs: 2, md: 4 }, mb: { xs: 2, md: 4 } }}>
        <Typography 
          variant="h4" 
          sx={{ 
            mb: { xs: 2, md: 3 }, 
            color: 'primary.main',
            fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
          }}
        >
          8. Limitation of Liability
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            mb: { xs: 2, md: 3 }, 
            lineHeight: 1.8,
            fontSize: { xs: '0.9rem', md: '1rem' }
          }}
        >
          VirtNumbers shall not be liable for any indirect, incidental, special, consequential, or punitive damages, 
          including but not limited to loss of profits, data, or use, incurred by you or any third party, 
          whether in an action in contract or tort, arising from your use of our services.
        </Typography>
      </Paper>

      <Paper sx={{ p: { xs: 2, md: 4 }, mb: { xs: 2, md: 4 } }}>
        <Typography 
          variant="h4" 
          sx={{ 
            mb: { xs: 2, md: 3 }, 
            color: 'primary.main',
            fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
          }}
        >
          9. Service Availability
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            mb: { xs: 2, md: 3 }, 
            lineHeight: 1.8,
            fontSize: { xs: '0.9rem', md: '1rem' }
          }}
        >
          We strive to maintain high service availability but cannot guarantee uninterrupted service:
        </Typography>
        <Box component="ul" sx={{ pl: { xs: 2, md: 3 }, mb: { xs: 2, md: 3 } }}>
          <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>Service availability depends on supplier stock</Typography>
          <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>We may temporarily suspend services for maintenance</Typography>
          <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>Force majeure events may affect service delivery</Typography>
          <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>We will notify customers of any significant service changes</Typography>
        </Box>
      </Paper>

      <Paper sx={{ p: { xs: 2, md: 4 }, mb: { xs: 2, md: 4 } }}>
        <Typography 
          variant="h4" 
          sx={{ 
            mb: { xs: 2, md: 3 }, 
            color: 'primary.main',
            fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
          }}
        >
          10. Contact Information
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            mb: { xs: 2, md: 3 }, 
            lineHeight: 1.8,
            fontSize: { xs: '0.9rem', md: '1rem' }
          }}
        >
          For questions about these terms or our services, please contact us:
        </Typography>
        <Box component="ul" sx={{ pl: { xs: 2, md: 3 }, mb: { xs: 2, md: 3 } }}>
          <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>WhatsApp: 24/7 Support Available</Typography>
          <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>Email: support@virtnumbers.com</Typography>
          <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>Website: www.virtnumbers.com</Typography>
        </Box>
      </Paper>

      <Box sx={{ 
        textAlign: 'center', 
        p: { xs: 2, md: 4 }, 
        bgcolor: 'primary.main', 
        color: 'white', 
        borderRadius: 2 
      }}>
        <Typography 
          variant="h5" 
          sx={{ 
            mb: { xs: 1, md: 2 },
            fontSize: { xs: '1.25rem', sm: '1.5rem' }
          }}
        >
          Questions About These Terms?
        </Typography>
        <Typography 
          variant="body1"
          sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}
        >
          Contact our support team for clarification on any part of these terms of service.
        </Typography>
      </Box>
      
      {/* Ad Section */}
      <Box sx={{ mt: 6 }}>
        <AdSense adSlot="6625177500" adFormat="auto" />
      </Box>
    </Container>
  );
} 