import { Box, Typography, Container, Paper, Grid, Button } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AdSense from './AdSense';

export default function Contact() {
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
        Contact Us
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
        Get in touch with our 24/7 support team for any questions about virtual numbers
      </Typography>

      <Grid container spacing={{ xs: 2, md: 4 }}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: { xs: 2, md: 4 }, mb: { xs: 2, md: 4 } }}>
            <Typography 
              variant="h4" 
              sx={{ 
                mb: { xs: 2, md: 3 }, 
                color: 'primary.main',
                fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
              }}
            >
              Get Instant Support
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                mb: { xs: 3, md: 4 }, 
                lineHeight: 1.8,
                fontSize: { xs: '0.9rem', md: '1rem' }
              }}
            >
              Our dedicated support team is available 24/7 to help you with any questions about our virtual number services. 
              Whether you need help with your order, have questions about our services, or need technical support, 
              we're here to assist you promptly.
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
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  '&:hover': {
                    borderColor: 'primary.dark',
                    backgroundColor: 'rgba(37, 99, 235, 0.04)',
                  }
                }}
                onClick={() => window.open('mailto:wertrends@gmail.com', '_blank')}
              >
                Email Support
              </Button>
            </Box>
          </Paper>

          <Paper sx={{ p: { xs: 2, md: 4 } }}>
            <Typography 
              variant="h4" 
              sx={{ 
                mb: { xs: 2, md: 3 }, 
                color: 'primary.main',
                fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
              }}
            >
              Common Support Topics
            </Typography>
            <Grid container spacing={{ xs: 1, sm: 2 }}>
              <Grid item xs={12} sm={6}>
                <Box sx={{ p: { xs: 1.5, md: 2 }, bgcolor: 'rgba(37, 99, 235, 0.04)', borderRadius: 2 }}>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      mb: 1, 
                      color: 'primary.main',
                      fontSize: { xs: '1rem', md: '1.25rem' }
                    }}
                  >
                    Order Issues
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'text.secondary',
                      fontSize: { xs: '0.8rem', md: '0.875rem' }
                    }}
                  >
                    Payment problems, delivery delays, or order modifications
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ p: { xs: 1.5, md: 2 }, bgcolor: 'rgba(37, 99, 235, 0.04)', borderRadius: 2 }}>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      mb: 1, 
                      color: 'primary.main',
                      fontSize: { xs: '1rem', md: '1.25rem' }
                    }}
                  >
                    Technical Support
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'text.secondary',
                      fontSize: { xs: '0.8rem', md: '0.875rem' }
                    }}
                  >
                    Virtual number setup, verification issues, or app integration
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ p: { xs: 1.5, md: 2 }, bgcolor: 'rgba(37, 99, 235, 0.04)', borderRadius: 2 }}>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      mb: 1, 
                      color: 'primary.main',
                      fontSize: { xs: '1rem', md: '1.25rem' }
                    }}
                  >
                    Service Questions
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'text.secondary',
                      fontSize: { xs: '0.8rem', md: '0.875rem' }
                    }}
                  >
                    Information about our services, pricing, or features
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ p: { xs: 1.5, md: 2 }, bgcolor: 'rgba(37, 99, 235, 0.04)', borderRadius: 2 }}>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      mb: 1, 
                      color: 'primary.main',
                      fontSize: { xs: '1rem', md: '1.25rem' }
                    }}
                  >
                    Bulk Orders
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'text.secondary',
                      fontSize: { xs: '0.8rem', md: '0.875rem' }
                    }}
                  >
                    Special pricing for large orders or business partnerships
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: { xs: 2, md: 4 }, mb: { xs: 2, md: 4 } }}>
            <Typography 
              variant="h5" 
              sx={{ 
                mb: { xs: 2, md: 3 }, 
                color: 'primary.main',
                fontSize: { xs: '1.25rem', md: '1.5rem' }
              }}
            >
              Contact Information
            </Typography>
            
            <Box sx={{ mb: { xs: 2, md: 3 } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <WhatsAppIcon sx={{ color: '#25D366', mr: 2, fontSize: { xs: '1.5rem', md: '2rem' } }} />
                <Box>
                  <Typography 
                    variant="h6"
                    sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}
                  >
                    WhatsApp
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'text.secondary',
                      fontSize: { xs: '0.8rem', md: '0.875rem' }
                    }}
                  >
                    24/7 Support Available
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box sx={{ mb: { xs: 2, md: 3 } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <EmailIcon sx={{ color: 'primary.main', mr: 2, fontSize: { xs: '1.5rem', md: '2rem' } }} />
                <Box>
                  <Typography 
                    variant="h6"
                    sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}
                  >
                    Email
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'text.secondary',
                      fontSize: { xs: '0.8rem', md: '0.875rem' }
                    }}
                  >
                    wertrends@gmail.com
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box sx={{ mb: { xs: 2, md: 3 } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <AccessTimeIcon sx={{ color: 'primary.main', mr: 2, fontSize: { xs: '1.5rem', md: '2rem' } }} />
                <Box>
                  <Typography 
                    variant="h6"
                    sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}
                  >
                    Business Hours
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'text.secondary',
                      fontSize: { xs: '0.8rem', md: '0.875rem' }
                    }}
                  >
                    24/7 Customer Support
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box sx={{ mb: { xs: 2, md: 3 } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LocationOnIcon sx={{ color: 'primary.main', mr: 2, fontSize: { xs: '1.5rem', md: '2rem' } }} />
                <Box>
                  <Typography 
                    variant="h6"
                    sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}
                  >
                    Location
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'text.secondary',
                      fontSize: { xs: '0.8rem', md: '0.875rem' }
                    }}
                  >
                    Online Service Provider
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Paper>

          <Paper sx={{ p: { xs: 2, md: 4 } }}>
            <Typography 
              variant="h5" 
              sx={{ 
                mb: { xs: 2, md: 3 }, 
                color: 'primary.main',
                fontSize: { xs: '1.25rem', md: '1.5rem' }
              }}
            >
              Response Time
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                mb: 2, 
                lineHeight: 1.6,
                fontSize: { xs: '0.9rem', md: '1rem' }
              }}
            >
              <strong>WhatsApp:</strong> Within 5 minutes
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                mb: 2, 
                lineHeight: 1.6,
                fontSize: { xs: '0.9rem', md: '1rem' }
              }}
            >
              <strong>Email:</strong> Within 2 hours
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                lineHeight: 1.6,
                fontSize: { xs: '0.9rem', md: '1rem' }
              }}
            >
              <strong>Emergency:</strong> Instant via WhatsApp
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      
      {/* Ad Section */}
      <Box sx={{ mt: 6 }}>
        <AdSense adSlot="5467675360" adFormat="auto" />
      </Box>
    </Container>
  );
} 