import { Container, Typography, Paper } from '@mui/material';

export default function PrivacyPolicy() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 3, md: 6 }, px: { xs: 2, md: 3 } }}>
      <Typography variant="h2" sx={{ mb: { xs: 2, md: 4 }, textAlign: 'center', fontWeight: 700, color: 'primary.main', fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' } }}>
        Privacy Policy
      </Typography>
      <Paper sx={{ p: { xs: 2, md: 4 }, mb: { xs: 2, md: 4 } }}>
        <Typography variant="h4" sx={{ mb: { xs: 2, md: 3 }, color: 'primary.main', fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' } }}>
          1. Introduction
        </Typography>
        <Typography variant="body1" sx={{ mb: { xs: 2, md: 3 }, lineHeight: 1.8, fontSize: { xs: '0.9rem', md: '1rem' } }}>
          At VirtNumbers, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our website and services.
        </Typography>
      </Paper>
      <Paper sx={{ p: { xs: 2, md: 4 }, mb: { xs: 2, md: 4 } }}>
        <Typography variant="h4" sx={{ mb: { xs: 2, md: 3 }, color: 'primary.main', fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' } }}>
          2. Information We Collect
        </Typography>
        <Typography variant="body1" sx={{ mb: { xs: 2, md: 3 }, lineHeight: 1.8, fontSize: { xs: '0.9rem', md: '1rem' } }}>
          We may collect personal information such as your name, email address, phone number, and payment details when you place an order or contact our support team. We also collect non-personal information such as browser type, device information, and IP address for analytics and security purposes.
        </Typography>
      </Paper>
      <Paper sx={{ p: { xs: 2, md: 4 }, mb: { xs: 2, md: 4 } }}>
        <Typography variant="h4" sx={{ mb: { xs: 2, md: 3 }, color: 'primary.main', fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' } }}>
          3. Use of Cookies and Tracking Technologies
        </Typography>
        <Typography variant="body1" sx={{ mb: { xs: 2, md: 3 }, lineHeight: 1.8, fontSize: { xs: '0.9rem', md: '1rem' } }}>
          We use cookies and similar tracking technologies to enhance your experience, analyze site usage, and deliver personalized content and ads. By using our site, you consent to our use of cookies in accordance with this policy.
        </Typography>
      </Paper>
      <Paper sx={{ p: { xs: 2, md: 4 }, mb: { xs: 2, md: 4 } }}>
        <Typography variant="h4" sx={{ mb: { xs: 2, md: 3 }, color: 'primary.main', fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' } }}>
          4. Third-Party Advertising and Analytics
        </Typography>
        <Typography variant="body1" sx={{ mb: { xs: 2, md: 3 }, lineHeight: 1.8, fontSize: { xs: '0.9rem', md: '1rem' } }}>
          We use third-party services such as Google AdSense and Google Analytics to serve ads and analyze website traffic. These third parties may use cookies, web beacons, and similar technologies to collect information about your interactions with our site and other websites. You can learn more about how Google uses data at <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">How Google uses data when you use our partners’ sites or apps</a>.
        </Typography>
      </Paper>
      <Paper sx={{ p: { xs: 2, md: 4 }, mb: { xs: 2, md: 4 } }}>
        <Typography variant="h4" sx={{ mb: { xs: 2, md: 3 }, color: 'primary.main', fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' } }}>
          5. Data Security
        </Typography>
        <Typography variant="body1" sx={{ mb: { xs: 2, md: 3 }, lineHeight: 1.8, fontSize: { xs: '0.9rem', md: '1rem' } }}>
          We implement industry-standard security measures to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
        </Typography>
      </Paper>
      <Paper sx={{ p: { xs: 2, md: 4 }, mb: { xs: 2, md: 4 } }}>
        <Typography variant="h4" sx={{ mb: { xs: 2, md: 3 }, color: 'primary.main', fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' } }}>
          6. Your Rights and Choices
        </Typography>
        <Typography variant="body1" sx={{ mb: { xs: 2, md: 3 }, lineHeight: 1.8, fontSize: { xs: '0.9rem', md: '1rem' } }}>
          You have the right to access, update, or delete your personal information. You can also opt out of personalized ads by visiting <a href="https://www.aboutads.info/choices" target="_blank" rel="noopener noreferrer">www.aboutads.info/choices</a>.
        </Typography>
      </Paper>
      <Paper sx={{ p: { xs: 2, md: 4 } }}>
        <Typography variant="h4" sx={{ mb: { xs: 2, md: 3 }, color: 'primary.main', fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' } }}>
          7. Changes to This Policy
        </Typography>
        <Typography variant="body1" sx={{ mb: { xs: 2, md: 3 }, lineHeight: 1.8, fontSize: { xs: '0.9rem', md: '1rem' } }}>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: { xs: '0.9rem', md: '1rem' } }}>
          If you have any questions or concerns about our privacy practices, please contact us at <a href="mailto:wertrends@gmail.com">wertrends@gmail.com</a>.
        </Typography>
      </Paper>
    </Container>
  );
} 