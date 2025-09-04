import { Box, Typography, Container, Paper, Grid, Button } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AdSense from './AdSense';

export default function Contact() {
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
          Contact Us
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
          Get in touch with our 24/7 support team for any questions about virtual numbers
        </Typography>

        <Grid container spacing={{ xs: 2, md: 4 }}>
          <Grid item xs={12} md={8}>
            <Paper sx={{ 
              p: { xs: 2, md: 4 },
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              borderRadius: 3,
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
            }}>
              <Typography 
                variant="h4" 
                sx={{ 
                  mb: { xs: 2, md: 3 }, 
                  color: '#667eea',
                  fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
                }}
              >
                Get Support
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: { xs: 2, md: 3 }, 
                  lineHeight: 1.8,
                  fontSize: { xs: '0.9rem', md: '1rem' }
                }}
              >
                Our dedicated support team is available 24/7 to help you with any questions about our virtual number services. 
                Whether you need help with payment, delivery, or technical issues, we're here to assist you.
              </Typography>

              <Box sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', sm: 'row' }, 
                gap: { xs: 2, sm: 3 },
                '& .MuiButton-root': {
                  width: { xs: '100%', sm: 'auto' }
                }
              }}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<WhatsAppIcon />}
                  sx={{
                    py: { xs: 1.5, md: 2 },
                    px: { xs: 3, md: 4 },
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    borderRadius: '30px',
                    background: '#25D366',
                    '&:hover': {
                      background: '#128C7E',
                    }
                  }}
                  onClick={() => window.open('https://wa.me/918154994406', '_blank')}
                >
                  WhatsApp Support
                </Button>
                
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<EmailIcon />}
                  sx={{
                    py: { xs: 1.5, md: 2 },
                    px: { xs: 3, md: 4 },
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    borderRadius: '30px',
                    borderColor: '#667eea',
                    color: '#667eea',
                    '&:hover': {
                      borderColor: '#764ba2',
                      backgroundColor: 'rgba(102, 126, 234, 0.04)',
                    }
                  }}
                  onClick={() => window.open('mailto:wertrends@gmail.com', '_blank')}
                >
                  Email Support
                </Button>
              </Box>
            </Paper>

            <Paper sx={{ 
              p: { xs: 2, md: 4 },
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              borderRadius: 3,
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
            }}>
              <Typography 
                variant="h4" 
                sx={{ 
                  mb: { xs: 2, md: 3 }, 
                  color: '#667eea',
                  fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
                }}
              >
                Contact Information
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <WhatsAppIcon sx={{ color: '#25D366', mr: 1.5, fontSize: '1.5rem' }} />
                    <Box>
                      <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 600, color: '#667eea' }}>
                        WhatsApp Support
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        24/7 Available
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <EmailIcon sx={{ color: '#667eea', mr: 1.5, fontSize: '1.5rem' }} />
                    <Box>
                      <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 600, color: '#667eea' }}>
                        Email Support
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        wertrends@gmail.com
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <AccessTimeIcon sx={{ color: '#667eea', mr: 1.5, fontSize: '1.5rem' }} />
                    <Box>
                      <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 600, color: '#667eea' }}>
                        Support Hours
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        24/7 Available
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <LocationOnIcon sx={{ color: '#667eea', mr: 1.5, fontSize: '1.5rem' }} />
                    <Box>
                      <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 600, color: '#667eea' }}>
                        Service Area
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Worldwide
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper sx={{ 
              p: { xs: 2, md: 4 },
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              borderRadius: 3,
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
            }}>
              <Typography 
                variant="h5" 
                sx={{ 
                  mb: { xs: 2, md: 3 }, 
                  color: '#667eea',
                  fontSize: { xs: '1.25rem', md: '1.5rem' }
                }}
              >
                Quick Support
              </Typography>
              <Box component="ul" sx={{ pl: { xs: 1.5, md: 2 } }}>
                <Typography component="li" sx={{ mb: 2, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                  💬 WhatsApp: Instant messaging support
                </Typography>
                <Typography component="li" sx={{ mb: 2, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                  📧 Email: Detailed inquiries
                </Typography>
                <Typography component="li" sx={{ mb: 2, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                  ⚡ Response Time: Within minutes
                </Typography>
                <Typography component="li" sx={{ mb: 2, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                  🌍 Language: English & Hindi
                </Typography>
                <Typography component="li" sx={{ mb: 2, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                  🔒 Secure: All communications encrypted
                </Typography>
              </Box>
            </Paper>

            <Paper sx={{ 
              p: { xs: 2, md: 4 },
              mt: { xs: 2, md: 3 },
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              borderRadius: 3,
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
            }}>
              <Typography 
                variant="h5" 
                sx={{ 
                  mb: { xs: 2, md: 3 }, 
                  color: '#667eea',
                  fontSize: { xs: '1.25rem', md: '1.5rem' }
                }}
              >
                Common Issues
              </Typography>
              <Box component="ul" sx={{ pl: { xs: 1.5, md: 2 } }}>
                <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                  🔧 Payment Issues
                </Typography>
                <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                  📱 Number Activation
                </Typography>
                <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                  ⏰ Delivery Delays
                </Typography>
                <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                  🔄 Refund Requests
                </Typography>
                <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                  💡 Technical Support
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
        
        {/* Ad Section */}
        <Box sx={{ mt: 6 }}>
          <AdSense adSlot="3760002040" adFormat="auto" />
        </Box>
      </Container>
    </Box>
  );
} 