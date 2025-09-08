import { Box, Typography, Container, Paper, Grid, Button } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AdSense from './AdSense';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Support - Virtual Numbers Help | VirtNumbers</title>
        <meta name="description" content="Get 24/7 support for virtual numbers and digital services. Contact our expert team via WhatsApp or email for instant assistance." />
        <meta name="keywords" content="contact support, virtual numbers help, WhatsApp verification support, Telegram number assistance, digital services contact, 24/7 customer support" />
        <link rel="canonical" href="https://virtnumbers.com/contact" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://virtnumbers.com/contact" />
        <meta property="og:title" content="Contact Support - Virtual Numbers Help | VirtNumbers" />
        <meta property="og:description" content="Get 24/7 support for virtual numbers and digital services. Contact our expert team via WhatsApp or email for instant assistance." />
        <meta property="og:image" content="/logo.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://virtnumbers.com/contact" />
        <meta property="twitter:title" content="Contact Support - Virtual Numbers Help | VirtNumbers" />
        <meta property="twitter:description" content="Get 24/7 support for virtual numbers and digital services. Contact our expert team via WhatsApp or email for instant assistance." />
        <meta property="twitter:image" content="/logo.png" />
      </Helmet>

      <Box sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        py: { xs: 4, md: 8 },
        position: 'relative'
      }}>
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 } }}>
          {/* Main H1 Heading */}
          <Typography 
            variant="h1" 
            sx={{ 
              mb: { xs: 3, md: 5 }, 
              textAlign: 'center', 
              fontWeight: 700, 
              color: 'white',
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              letterSpacing: '0.5px'
            }}
          >
            Contact Us
          </Typography>
          
          <Typography 
            variant="h2" 
            sx={{ 
              mb: { xs: 4, md: 7 }, 
              textAlign: 'center', 
              color: 'rgba(255,255,255,0.9)',
              fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
              fontWeight: 400,
              lineHeight: 1.6,
              maxWidth: '800px',
              mx: 'auto'
            }}
          >
            Get in touch with our 24/7 support team for any questions about virtual numbers and digital services
          </Typography>

          {/* Internal Navigation Links */}
          <Box sx={{ 
            mb: { xs: 6, md: 8 },
            display: 'flex',
            flexWrap: 'wrap',
            gap: 3,
            justifyContent: 'center'
          }}>
            <Button
              component={Link}
              to="/buy"
              variant="outlined"
              size="large"
              sx={{
                color: 'white',
                borderColor: 'rgba(255,255,255,0.6)',
                borderWidth: '2px',
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 600,
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  transform: 'translateY(-2px)',
                  transition: 'all 0.3s ease'
                }
              }}
            >
              Purchase Virtual Numbers
            </Button>
            <Button
              component={Link}
              to="/faq"
              variant="outlined"
              size="large"
              sx={{
                color: 'white',
                borderColor: 'rgba(255,255,255,0.6)',
                borderWidth: '2px',
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 600,
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  transform: 'translateY(-2px)',
                  transition: 'all 0.3s ease'
                }
              }}
            >
              Browse FAQ Section
            </Button>
            <Button
              component={Link}
              to="/about"
              variant="outlined"
              size="large"
              sx={{
                color: 'white',
                borderColor: 'rgba(255,255,255,0.6)',
                borderWidth: '2px',
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 600,
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  transform: 'translateY(-2px)',
                  transition: 'all 0.3s ease'
                }
              }}
            >
              Learn About VirtNumbers
            </Button>
          </Box>

          <Grid container spacing={{ xs: 4, md: 6 }}>
            <Grid item xs={12} md={8}>
              <Paper sx={{ 
                p: { xs: 4, md: 6 },
                mb: { xs: 4, md: 6 },
                background: 'rgba(255, 255, 255, 0.98)',
                backdropFilter: 'blur(15px)',
                borderRadius: 4,
                boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>
                <Typography 
                  variant="h3" 
                  sx={{ 
                    mb: { xs: 3, md: 4 }, 
                    color: '#667eea',
                    fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
                    fontWeight: 700,
                    letterSpacing: '0.5px'
                  }}
                >
                  Get Support
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    mb: { xs: 3, md: 4 }, 
                    lineHeight: 1.8,
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    color: '#333',
                    fontWeight: 400
                  }}
                >
                  Our <strong>dedicated support team</strong> is available <strong>24/7</strong> to help you with any questions about our virtual number services. 
                  Whether you need help with <strong>payment</strong>, <strong>delivery</strong>, or <strong>technical issues</strong>, we're here to assist you.
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    mb: { xs: 4, md: 5 }, 
                    lineHeight: 1.8,
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    color: '#555',
                    fontWeight: 400
                  }}
                >
                  We provide <strong>comprehensive support</strong> for all our services including <strong>WhatsApp verification numbers</strong>, <strong>Telegram numbers</strong>, <strong>Instagram accounts</strong>, 
                  <strong>Canva Pro subscriptions</strong>, and <strong>Netflix Premium accounts</strong>. Our team is <strong>trained to handle all types of inquiries</strong> 
                  and <strong>technical issues</strong> you may encounter.
                </Typography>

                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: { xs: 'column', sm: 'row' }, 
                  gap: { xs: 3, sm: 4 },
                  '& .MuiButton-root': {
                    width: { xs: '100%', sm: 'auto' },
                    minWidth: { sm: '200px' }
                  }
                }}>
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<WhatsAppIcon />}
                    sx={{
                      py: { xs: 2, md: 2.5 },
                      px: { xs: 4, md: 5 },
                      fontSize: { xs: '1.1rem', md: '1.2rem' },
                      fontWeight: 600,
                      borderRadius: '50px',
                      background: '#25D366',
                      boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)',
                      '&:hover': {
                        background: '#128C7E',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 6px 20px rgba(37, 211, 102, 0.4)',
                        transition: 'all 0.3s ease'
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
                      py: { xs: 2, md: 2.5 },
                      px: { xs: 4, md: 5 },
                      fontSize: { xs: '1.1rem', md: '1.2rem' },
                      fontWeight: 600,
                      borderRadius: '50px',
                      borderColor: '#667eea',
                      borderWidth: '2px',
                      color: '#667eea',
                      '&:hover': {
                        borderColor: '#5a67d8',
                        backgroundColor: 'rgba(102, 126, 234, 0.08)',
                        transform: 'translateY(-2px)',
                        transition: 'all 0.3s ease'
                      }
                    }}
                    onClick={() => window.open('mailto:wertrends@gmail.com', '_blank')}
                  >
                    Email Support
                  </Button>
                </Box>
              </Paper>

              <Paper sx={{ 
                p: { xs: 4, md: 6 },
                mb: { xs: 4, md: 6 },
                background: 'rgba(255, 255, 255, 0.98)',
                backdropFilter: 'blur(15px)',
                borderRadius: 4,
                boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>
                <Typography 
                  variant="h3" 
                  sx={{ 
                    mb: { xs: 3, md: 4 }, 
                    color: '#667eea',
                    fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
                    fontWeight: 700,
                    letterSpacing: '0.5px'
                  }}
                >
                  Contact Information
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      p: 3,
                      borderRadius: 3,
                      backgroundColor: 'rgba(102, 126, 234, 0.05)',
                      border: '1px solid rgba(102, 126, 234, 0.1)'
                    }}>
                      <WhatsAppIcon sx={{ color: '#25D366', mr: 2, fontSize: '2rem' }} />
                      <Box>
                        <Typography variant="h6" sx={{ 
                          fontSize: '1.1rem', 
                          fontWeight: 700, 
                          color: '#667eea',
                          mb: 0.5
                        }}>
                          WhatsApp Support
                        </Typography>
                        <Typography variant="body2" sx={{ 
                          color: '#666',
                          fontWeight: 500
                        }}>
                          24/7 Available
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      p: 3,
                      borderRadius: 3,
                      backgroundColor: 'rgba(102, 126, 234, 0.05)',
                      border: '1px solid rgba(102, 126, 234, 0.1)'
                    }}>
                      <EmailIcon sx={{ color: '#667eea', mr: 2, fontSize: '2rem' }} />
                      <Box>
                        <Typography variant="h6" sx={{ 
                          fontSize: '1.1rem', 
                          fontWeight: 700, 
                          color: '#667eea',
                          mb: 0.5
                        }}>
                          Email Support
                        </Typography>
                        <Typography variant="body2" sx={{ 
                          color: '#666',
                          fontWeight: 500
                        }}>
                          wertrends@gmail.com
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      p: 3,
                      borderRadius: 3,
                      backgroundColor: 'rgba(102, 126, 234, 0.05)',
                      border: '1px solid rgba(102, 126, 234, 0.1)'
                    }}>
                      <AccessTimeIcon sx={{ color: '#667eea', mr: 2, fontSize: '2rem' }} />
                      <Box>
                        <Typography variant="h6" sx={{ 
                          fontSize: '1.1rem', 
                          fontWeight: 700, 
                          color: '#667eea',
                          mb: 0.5
                        }}>
                          Support Hours
                        </Typography>
                        <Typography variant="body2" sx={{ 
                          color: '#666',
                          fontWeight: 500
                        }}>
                          24/7 Available
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      p: 3,
                      borderRadius: 3,
                      backgroundColor: 'rgba(102, 126, 234, 0.05)',
                      border: '1px solid rgba(102, 126, 234, 0.1)'
                    }}>
                      <LocationOnIcon sx={{ color: '#667eea', mr: 2, fontSize: '2rem' }} />
                      <Box>
                        <Typography variant="h6" sx={{ 
                          fontSize: '1.1rem', 
                          fontWeight: 700, 
                          color: '#667eea',
                          mb: 0.5
                        }}>
                          Service Area
                        </Typography>
                        <Typography variant="body2" sx={{ 
                          color: '#666',
                          fontWeight: 500
                        }}>
                          Worldwide
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Paper>

              {/* Services We Support Section */}
              <Paper sx={{ 
                p: { xs: 4, md: 6 },
                background: 'rgba(255, 255, 255, 0.98)',
                backdropFilter: 'blur(15px)',
                borderRadius: 4,
                boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>
                <Typography 
                  variant="h3" 
                  sx={{ 
                    mb: { xs: 3, md: 4 }, 
                    color: '#667eea',
                    fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
                    fontWeight: 700,
                    letterSpacing: '0.5px'
                  }}
                >
                  Services We Support
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    mb: { xs: 3, md: 4 }, 
                    lineHeight: 1.8,
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    color: '#333',
                    fontWeight: 400
                  }}
                >
                  Our <strong>support team is trained</strong> to help you with all our services. Whether you need assistance with <strong>virtual numbers</strong>, 
                  <strong>digital services</strong>, or <strong>account management</strong>, we're here to help.
                </Typography>
                <Box sx={{ 
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 3
                }}>
                  <Button
                    component={Link}
                    to="/buy"
                    variant="contained"
                    size="large"
                    sx={{
                      backgroundColor: '#667eea',
                      px: 4,
                      py: 1.5,
                      fontSize: '1rem',
                      fontWeight: 600,
                      borderRadius: '25px',
                      '&:hover': { 
                        backgroundColor: '#5a67d8',
                        transform: 'translateY(-2px)',
                        transition: 'all 0.3s ease'
                      }
                    }}
                  >
                    Virtual Numbers
                  </Button>
                  <Button
                    component={Link}
                    to="/buy"
                    variant="contained"
                    size="large"
                    sx={{
                      backgroundColor: '#667eea',
                      px: 4,
                      py: 1.5,
                      fontSize: '1rem',
                      fontWeight: 600,
                      borderRadius: '25px',
                      '&:hover': { 
                        backgroundColor: '#5a67d8',
                        transform: 'translateY(-2px)',
                        transition: 'all 0.3s ease'
                      }
                    }}
                  >
                    Canva Pro
                  </Button>
                  <Button
                    component={Link}
                    to="/buy"
                    variant="contained"
                    size="large"
                    sx={{
                      backgroundColor: '#667eea',
                      px: 4,
                      py: 1.5,
                      fontSize: '1rem',
                      fontWeight: 600,
                      borderRadius: '25px',
                      '&:hover': { 
                        backgroundColor: '#5a67d8',
                        transform: 'translateY(-2px)',
                        transition: 'all 0.3s ease'
                      }
                    }}
                  >
                    Netflix Premium
                  </Button>
                </Box>
              </Paper>
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper sx={{ 
                p: { xs: 4, md: 5 },
                mb: { xs: 4, md: 6 },
                background: 'rgba(255, 255, 255, 0.98)',
                backdropFilter: 'blur(15px)',
                borderRadius: 4,
                boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    mb: { xs: 3, md: 4 }, 
                    color: '#667eea',
                    fontSize: { xs: '1.4rem', md: '1.6rem' },
                    fontWeight: 700,
                    letterSpacing: '0.5px'
                  }}
                >
                  Quick Support
                </Typography>
                <Box component="ul" sx={{ 
                  pl: { xs: 2, md: 3 },
                  '& li': {
                    mb: 3,
                    fontSize: { xs: '1rem', md: '1.05rem' },
                    color: '#333',
                    fontWeight: 500,
                    lineHeight: 1.6
                  }
                }}>
                  <Typography component="li" sx={{ mb: 3, fontSize: { xs: '1rem', md: '1.05rem' }, color: '#333', fontWeight: 500 }}>
                    💬 WhatsApp: Instant messaging support
                  </Typography>
                  <Typography component="li" sx={{ mb: 3, fontSize: { xs: '1rem', md: '1.05rem' }, color: '#333', fontWeight: 500 }}>
                    📧 Email: Detailed inquiries
                  </Typography>
                  <Typography component="li" sx={{ mb: 3, fontSize: { xs: '1rem', md: '1.05rem' }, color: '#333', fontWeight: 500 }}>
                    ⚡ Response Time: Within minutes
                  </Typography>
                  <Typography component="li" sx={{ mb: 3, fontSize: { xs: '1rem', md: '1.05rem' }, color: '#333', fontWeight: 500 }}>
                    🌍 Language: English & Hindi
                  </Typography>
                  <Typography component="li" sx={{ mb: 3, fontSize: { xs: '1rem', md: '1.05rem' }, color: '#333', fontWeight: 500 }}>
                    🔒 Secure: All communications encrypted
                  </Typography>
                </Box>
              </Paper>

              <Paper sx={{ 
                p: { xs: 4, md: 5 },
                mb: { xs: 4, md: 6 },
                background: 'rgba(255, 255, 255, 0.98)',
                backdropFilter: 'blur(15px)',
                borderRadius: 4,
                boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    mb: { xs: 3, md: 4 }, 
                    color: '#667eea',
                    fontSize: { xs: '1.4rem', md: '1.6rem' },
                    fontWeight: 700,
                    letterSpacing: '0.5px'
                  }}
                >
                  Common Issues
                </Typography>
                <Box component="ul" sx={{ 
                  pl: { xs: 2, md: 3 },
                  '& li': {
                    mb: 2,
                    fontSize: { xs: '1rem', md: '1.05rem' },
                    color: '#333',
                    fontWeight: 500,
                    lineHeight: 1.6
                  }
                }}>
                  <Typography component="li" sx={{ mb: 2, fontSize: { xs: '1rem', md: '1.05rem' }, color: '#333', fontWeight: 500 }}>
                    🔧 Payment Issues
                  </Typography>
                  <Typography component="li" sx={{ mb: 2, fontSize: { xs: '1rem', md: '1.05rem' }, color: '#333', fontWeight: 500 }}>
                    📱 Number Activation
                  </Typography>
                  <Typography component="li" sx={{ mb: 2, fontSize: { xs: '1rem', md: '1.05rem' }, color: '#333', fontWeight: 500 }}>
                    ⏰ Delivery Delays
                  </Typography>
                  <Typography component="li" sx={{ mb: 2, fontSize: { xs: '1rem', md: '1.05rem' }, color: '#333', fontWeight: 500 }}>
                    🔄 Refund Requests
                  </Typography>
                  <Typography component="li" sx={{ mb: 2, fontSize: { xs: '1rem', md: '1.05rem' }, color: '#333', fontWeight: 500 }}>
                    💡 Technical Support
                  </Typography>
                </Box>
              </Paper>

              {/* Quick Links Section */}
              <Paper sx={{ 
                p: { xs: 4, md: 5 },
                background: 'rgba(255, 255, 255, 0.98)',
                backdropFilter: 'blur(15px)',
                borderRadius: 4,
                boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    mb: { xs: 3, md: 4 }, 
                    color: '#667eea',
                    fontSize: { xs: '1.4rem', md: '1.6rem' },
                    fontWeight: 700,
                    letterSpacing: '0.5px'
                  }}
                >
                  Quick Links
                </Typography>
                <Box sx={{ 
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2
                }}>
                  <Button
                    component={Link}
                    to="/faq"
                    variant="text"
                    size="large"
                    sx={{
                      color: '#667eea',
                      justifyContent: 'flex-start',
                      textTransform: 'none',
                      fontSize: '1rem',
                      fontWeight: 600,
                      py: 1.5,
                      px: 2,
                      borderRadius: 2,
                      '&:hover': { 
                        backgroundColor: 'rgba(102, 126, 234, 0.08)',
                        transform: 'translateX(5px)',
                        transition: 'all 0.3s ease'
                      }
                    }}
                  >
                    Frequently Asked Questions
                  </Button>
                  <Button
                    component={Link}
                    to="/terms"
                    variant="text"
                    size="large"
                    sx={{
                      color: '#667eea',
                      justifyContent: 'flex-start',
                      textTransform: 'none',
                      fontSize: '1rem',
                      fontWeight: 600,
                      py: 1.5,
                      px: 2,
                      borderRadius: 2,
                      '&:hover': { 
                        backgroundColor: 'rgba(102, 126, 234, 0.08)',
                        transform: 'translateX(5px)',
                        transition: 'all 0.3s ease'
                      }
                    }}
                  >
                    Terms of Service
                  </Button>
                  <Button
                    component={Link}
                    to="/privacy-policy"
                    variant="text"
                    size="large"
                    sx={{
                      color: '#667eea',
                      justifyContent: 'flex-start',
                      textTransform: 'none',
                      fontSize: '1rem',
                      fontWeight: 600,
                      py: 1.5,
                      px: 2,
                      borderRadius: 2,
                      '&:hover': { 
                        backgroundColor: 'rgba(102, 126, 234, 0.08)',
                        transform: 'translateX(5px)',
                        transition: 'all 0.3s ease'
                      }
                    }}
                  >
                    Privacy Policy
                  </Button>
                </Box>
              </Paper>
            </Grid>
          </Grid>

          {/* Call to Action Section */}
          <Box sx={{ 
            mt: { xs: 6, md: 8 },
            p: { xs: 5, md: 7 },
            background: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(15px)',
            borderRadius: 4,
            boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
            border: '1px solid rgba(255,255,255,0.2)',
            textAlign: 'center'
          }}>
            <Typography 
              variant="h3" 
              sx={{ 
                mb: { xs: 3, md: 4 },
                fontSize: { xs: '1.8rem', md: '2.5rem' },
                color: '#667eea',
                fontWeight: 700,
                letterSpacing: '0.5px'
              }}
            >
              Ready to Get Started?
            </Typography>
            <Typography 
              variant="body1"
              sx={{ 
                mb: { xs: 4, md: 5 },
                fontSize: { xs: '1rem', md: '1.1rem' },
                color: '#333',
                fontWeight: 400,
                lineHeight: 1.8,
                maxWidth: '600px',
                mx: 'auto'
              }}
            >
              Browse our <strong>services</strong> and get the <strong>virtual numbers</strong> or <strong>digital services</strong> you need. Our <strong>team is ready to help you</strong> every step of the way.
            </Typography>
            <Box sx={{ 
              display: 'flex',
              flexWrap: 'wrap',
              gap: 3,
              justifyContent: 'center'
            }}>
              <Button
                component={Link}
                to="/buy"
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: '#667eea',
                  px: 5,
                  py: 2,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderRadius: '50px',
                  '&:hover': { 
                    backgroundColor: '#5a67d8',
                    transform: 'translateY(-3px)',
                    boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)',
                    transition: 'all 0.3s ease'
                  }
                }}
              >
                Explore Our Services
              </Button>
              <Button
                component={Link}
                to="/faq"
                variant="outlined"
                size="large"
                sx={{
                  borderColor: '#667eea',
                  borderWidth: '2px',
                  color: '#667eea',
                  px: 5,
                  py: 2,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderRadius: '50px',
                  '&:hover': {
                    borderColor: '#5a67d8',
                    backgroundColor: 'rgba(102, 126, 234, 0.08)',
                    transform: 'translateY(-3px)',
                    transition: 'all 0.3s ease'
                  }
                }}
              >
                Find Answers in FAQ
              </Button>
            </Box>
          </Box>
        
          {/* Ad Section */}
          <Box sx={{ mt: 8 }}>
            <AdSense adSlot="3760002040" adFormat="auto" />
          </Box>
        </Container>
      </Box>
    </>
  );
} 