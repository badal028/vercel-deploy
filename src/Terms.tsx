import { Box, Typography, Container, Paper } from '@mui/material';

export default function Terms() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h2" sx={{ mb: 4, textAlign: 'center', fontWeight: 700, color: 'primary.main' }}>
        Terms of Service
      </Typography>
      
      <Typography variant="h5" sx={{ mb: 6, textAlign: 'center', color: 'text.secondary' }}>
        Last updated: {new Date().toLocaleDateString()}
      </Typography>

      <Paper sx={{ p: 4, mb: 4 }}>
        <Typography variant="h4" sx={{ mb: 3, color: 'primary.main' }}>
          1. Acceptance of Terms
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
          By accessing and using VirtNumbers.com ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. 
          If you do not agree to abide by the above, please do not use this service.
        </Typography>
      </Paper>

      <Paper sx={{ p: 4, mb: 4 }}>
        <Typography variant="h4" sx={{ mb: 3, color: 'primary.main' }}>
          2. Service Description
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
          VirtNumbers provides virtual phone numbers and digital services including but not limited to:
        </Typography>
        <Box component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" sx={{ mb: 1 }}>Virtual phone numbers for WhatsApp and Telegram verification</Typography>
          <Typography component="li" sx={{ mb: 1 }}>Social media accounts (Instagram, Gmail, LinkedIn)</Typography>
          <Typography component="li" sx={{ mb: 1 }}>Subscription services (Netflix Premium, Canva Pro)</Typography>
          <Typography component="li" sx={{ mb: 1 }}>Related digital services and support</Typography>
        </Box>
      </Paper>

      <Paper sx={{ p: 4, mb: 4 }}>
        <Typography variant="h4" sx={{ mb: 3, color: 'primary.main' }}>
          3. User Responsibilities
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
          You agree to use our services responsibly and in compliance with all applicable laws and regulations:
        </Typography>
        <Box component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" sx={{ mb: 1 }}>Use virtual numbers only for legitimate purposes</Typography>
          <Typography component="li" sx={{ mb: 1 }}>Comply with the terms of service of third-party platforms</Typography>
          <Typography component="li" sx={{ mb: 1 }}>Not use our services for illegal activities or fraud</Typography>
          <Typography component="li" sx={{ mb: 1 }}>Provide accurate information when placing orders</Typography>
          <Typography component="li" sx={{ mb: 1 }}>Maintain the security of your purchased services</Typography>
        </Box>
      </Paper>

      <Paper sx={{ p: 4, mb: 4 }}>
        <Typography variant="h4" sx={{ mb: 3, color: 'primary.main' }}>
          4. Payment Terms
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
          All prices are listed in Indian Rupees (₹) and are subject to change without notice. Payment must be completed before service delivery.
        </Typography>
        <Box component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" sx={{ mb: 1 }}>Payment is required in advance of service delivery</Typography>
          <Typography component="li" sx={{ mb: 1 }}>We accept various digital payment methods</Typography>
          <Typography component="li" sx={{ mb: 1 }}>All transactions are final once payment is confirmed</Typography>
          <Typography component="li" sx={{ mb: 1 }}>Prices may vary based on service type and availability</Typography>
        </Box>
      </Paper>

      <Paper sx={{ p: 4, mb: 4 }}>
        <Typography variant="h4" sx={{ mb: 3, color: 'primary.main' }}>
          5. Delivery and Service
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
          We strive to provide instant delivery for all services, but delivery times may vary:
        </Typography>
        <Box component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" sx={{ mb: 1 }}>Most services are delivered within minutes of payment confirmation</Typography>
          <Typography component="li" sx={{ mb: 1 }}>Delivery is made via WhatsApp or email as specified</Typography>
          <Typography component="li" sx={{ mb: 1 }}>Service availability is subject to stock and supplier availability</Typography>
          <Typography component="li" sx={{ mb: 1 }}>We are not responsible for delays beyond our control</Typography>
        </Box>
      </Paper>

      <Paper sx={{ p: 4, mb: 4 }}>
        <Typography variant="h4" sx={{ mb: 3, color: 'primary.main' }}>
          6. Refund Policy
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
          Our refund policy is designed to be fair to both customers and our business:
        </Typography>
        <Box component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" sx={{ mb: 1 }}>No refunds after service delivery unless service is defective</Typography>
          <Typography component="li" sx={{ mb: 1 }}>Partial refunds may be offered for service issues</Typography>
          <Typography component="li" sx={{ mb: 1 }}>Refunds are processed within 3-5 business days</Typography>
          <Typography component="li" sx={{ mb: 1 }}>Service replacement is preferred over refunds when possible</Typography>
        </Box>
      </Paper>

      <Paper sx={{ p: 4, mb: 4 }}>
        <Typography variant="h4" sx={{ mb: 3, color: 'primary.main' }}>
          7. Privacy and Data Protection
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
          We are committed to protecting your privacy and personal information:
        </Typography>
        <Box component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" sx={{ mb: 1 }}>We collect minimal personal information necessary for service delivery</Typography>
          <Typography component="li" sx={{ mb: 1 }}>Your data is not shared with third parties without consent</Typography>
          <Typography component="li" sx={{ mb: 1 }}>We use secure payment processing methods</Typography>
          <Typography component="li" sx={{ mb: 1 }}>You can request deletion of your data at any time</Typography>
        </Box>
      </Paper>

      <Paper sx={{ p: 4, mb: 4 }}>
        <Typography variant="h4" sx={{ mb: 3, color: 'primary.main' }}>
          8. Limitation of Liability
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
          VirtNumbers shall not be liable for any indirect, incidental, special, consequential, or punitive damages, 
          including but not limited to loss of profits, data, or use, incurred by you or any third party, 
          whether in an action in contract or tort, arising from your use of our services.
        </Typography>
      </Paper>

      <Paper sx={{ p: 4, mb: 4 }}>
        <Typography variant="h4" sx={{ mb: 3, color: 'primary.main' }}>
          9. Service Availability
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
          We strive to maintain high service availability but cannot guarantee uninterrupted service:
        </Typography>
        <Box component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" sx={{ mb: 1 }}>Service availability depends on supplier stock</Typography>
          <Typography component="li" sx={{ mb: 1 }}>We may temporarily suspend services for maintenance</Typography>
          <Typography component="li" sx={{ mb: 1 }}>Force majeure events may affect service delivery</Typography>
          <Typography component="li" sx={{ mb: 1 }}>We will notify customers of any significant service changes</Typography>
        </Box>
      </Paper>

      <Paper sx={{ p: 4, mb: 4 }}>
        <Typography variant="h4" sx={{ mb: 3, color: 'primary.main' }}>
          10. Contact Information
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
          For questions about these terms or our services, please contact us:
        </Typography>
        <Box component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" sx={{ mb: 1 }}>WhatsApp: 24/7 Support Available</Typography>
          <Typography component="li" sx={{ mb: 1 }}>Email: support@virtnumbers.com</Typography>
          <Typography component="li" sx={{ mb: 1 }}>Website: www.virtnumbers.com</Typography>
        </Box>
      </Paper>

      <Box sx={{ textAlign: 'center', p: 4, bgcolor: 'primary.main', color: 'white', borderRadius: 2 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Questions About These Terms?
        </Typography>
        <Typography variant="body1">
          Contact our support team for clarification on any part of these terms of service.
        </Typography>
      </Box>
    </Container>
  );
} 