import { Box, Typography, Container, Paper, Grid, Button } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Contact() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h2" sx={{ mb: 4, textAlign: 'center', fontWeight: 700, color: 'primary.main' }}>
        Contact Us
      </Typography>
      
      <Typography variant="h5" sx={{ mb: 6, textAlign: 'center', color: 'text.secondary' }}>
        Get in touch with our 24/7 support team for any questions about virtual numbers
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 4, mb: 4 }}>
            <Typography variant="h4" sx={{ mb: 3, color: 'primary.main' }}>
              Get Instant Support
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              Our dedicated support team is available 24/7 to help you with any questions about our virtual number services. 
              Whether you need help with your order, have questions about our services, or need technical support, 
              we're here to assist you promptly.
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 3 }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<WhatsAppIcon />}
                sx={{
                  py: 2,
                  px: 4,
                  fontSize: '1.1rem',
                  borderRadius: '30px',
                  background: '#25D366',
                  '&:hover': {
                    background: '#128C7E',
                  }
                }}
                onClick={() => window.open('https://wa.me/your-whatsapp-number', '_blank')}
              >
                WhatsApp Support
              </Button>
              
              <Button
                variant="outlined"
                size="large"
                startIcon={<EmailIcon />}
                sx={{
                  py: 2,
                  px: 4,
                  fontSize: '1.1rem',
                  borderRadius: '30px',
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  '&:hover': {
                    borderColor: 'primary.dark',
                    backgroundColor: 'rgba(37, 99, 235, 0.04)',
                  }
                }}
                onClick={() => window.open('mailto:support@virtnumbers.com', '_blank')}
              >
                Email Support
              </Button>
            </Box>
          </Paper>

          <Paper sx={{ p: 4 }}>
            <Typography variant="h4" sx={{ mb: 3, color: 'primary.main' }}>
              Common Support Topics
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Box sx={{ p: 2, bgcolor: 'rgba(37, 99, 235, 0.04)', borderRadius: 2 }}>
                  <Typography variant="h6" sx={{ mb: 1, color: 'primary.main' }}>
                    Order Issues
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Payment problems, delivery delays, or order modifications
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ p: 2, bgcolor: 'rgba(37, 99, 235, 0.04)', borderRadius: 2 }}>
                  <Typography variant="h6" sx={{ mb: 1, color: 'primary.main' }}>
                    Technical Support
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Virtual number setup, verification issues, or app integration
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ p: 2, bgcolor: 'rgba(37, 99, 235, 0.04)', borderRadius: 2 }}>
                  <Typography variant="h6" sx={{ mb: 1, color: 'primary.main' }}>
                    Service Questions
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Information about our services, pricing, or features
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ p: 2, bgcolor: 'rgba(37, 99, 235, 0.04)', borderRadius: 2 }}>
                  <Typography variant="h6" sx={{ mb: 1, color: 'primary.main' }}>
                    Bulk Orders
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Special pricing for large orders or business partnerships
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 4, mb: 4 }}>
            <Typography variant="h5" sx={{ mb: 3, color: 'primary.main' }}>
              Contact Information
            </Typography>
            
            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <WhatsAppIcon sx={{ color: '#25D366', mr: 2 }} />
                <Box>
                  <Typography variant="h6">WhatsApp</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    24/7 Support Available
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <EmailIcon sx={{ color: 'primary.main', mr: 2 }} />
                <Box>
                  <Typography variant="h6">Email</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    support@virtnumbers.com
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <AccessTimeIcon sx={{ color: 'primary.main', mr: 2 }} />
                <Box>
                  <Typography variant="h6">Business Hours</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    24/7 Customer Support
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LocationOnIcon sx={{ color: 'primary.main', mr: 2 }} />
                <Box>
                  <Typography variant="h6">Location</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Online Service Provider
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Paper>

          <Paper sx={{ p: 4 }}>
            <Typography variant="h5" sx={{ mb: 3, color: 'primary.main' }}>
              Response Time
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
              <strong>WhatsApp:</strong> Within 5 minutes
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
              <strong>Email:</strong> Within 2 hours
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
              <strong>Emergency:</strong> Instant via WhatsApp
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
} 