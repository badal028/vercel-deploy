import { Box, Typography, Container, Paper, Button } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import AdSense from './AdSense';

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Virtual Numbers Policy | VirtNumbers</title>
        <meta name="description" content="Read our terms of service for virtual numbers and digital services. Clear policies on payments, delivery, and refunds." />
        <meta name="keywords" content="terms of service, virtual numbers terms, WhatsApp verification policy, Telegram number terms, digital services agreement, payment terms, refund policy" />
        <link rel="canonical" href="https://virtnumbers.com/terms" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://virtnumbers.com/terms" />
        <meta property="og:title" content="Terms of Service - Virtual Numbers Policy | VirtNumbers" />
        <meta property="og:description" content="Read our terms of service for virtual numbers and digital services. Clear policies on payments, delivery, and refunds." />
        <meta property="og:image" content="/logo.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://virtnumbers.com/terms" />
        <meta property="twitter:title" content="Terms of Service - Virtual Numbers Policy | VirtNumbers" />
        <meta property="twitter:description" content="Read our terms of service for virtual numbers and digital services. Clear policies on payments, delivery, and refunds." />
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
            Terms of Service
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
            Please read these <strong>terms carefully</strong> before using our <strong>virtual number and digital services</strong>
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
              to="/faq"
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
              Browse FAQ Section
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

          {/* Table of Contents */}
          <Paper sx={{ 
            p: { xs: 2, md: 4 }, 
            mb: { xs: 3, md: 6 },
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            borderRadius: 3,
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
          }}>
            <Typography 
              variant="h3" 
              sx={{ 
                mb: { xs: 2, md: 3 }, 
                color: '#667eea',
                fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
              }}
            >
              Table of Contents
            </Typography>
            <Box component="ul" sx={{ pl: { xs: 2, md: 3 } }}>
              <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                <Link to="#acceptance" style={{ color: '#667eea', textDecoration: 'none' }}>1. Acceptance of Terms</Link>
              </Typography>
              <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                <Link to="#services" style={{ color: '#667eea', textDecoration: 'none' }}>2. Service Description</Link>
              </Typography>
              <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                <Link to="#payment" style={{ color: '#667eea', textDecoration: 'none' }}>3. Payment Terms</Link>
              </Typography>
              <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                <Link to="#delivery" style={{ color: '#667eea', textDecoration: 'none' }}>4. Delivery Policy</Link>
              </Typography>
              <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                <Link to="#refund" style={{ color: '#667eea', textDecoration: 'none' }}>5. Refund Policy</Link>
              </Typography>
              <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                <Link to="#privacy" style={{ color: '#667eea', textDecoration: 'none' }}>6. Privacy & Data Protection</Link>
              </Typography>
              <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                <Link to="#liability" style={{ color: '#667eea', textDecoration: 'none' }}>7. Limitation of Liability</Link>
              </Typography>
            </Box>
          </Paper>

          <Box id="acceptance">
            <Paper sx={{ 
              p: { xs: 2, md: 4 }, 
              mb: { xs: 2, md: 4 },
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              borderRadius: 3,
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
            }}>
              <Typography 
                variant="h3" 
                sx={{ 
                  mb: { xs: 2, md: 3 }, 
                  color: '#667eea',
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
                By accessing and using <strong>VirtNumbers services</strong>, you accept and agree to be bound by the <strong>terms and provision of this agreement</strong>. 
                If you do not agree to abide by the above, please do not use this service.
              </Typography>
            </Paper>
          </Box>

          <Box id="services">
            <Paper sx={{ 
              p: { xs: 2, md: 4 }, 
              mb: { xs: 2, md: 4 },
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              borderRadius: 3,
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
            }}>
              <Typography 
                variant="h3" 
                sx={{ 
                  mb: { xs: 2, md: 3 }, 
                  color: '#667eea',
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
                VirtNumbers provides <strong>virtual phone numbers</strong> for various purposes including but not limited to <strong>WhatsApp verification</strong>, 
                <strong>Telegram verification</strong>, <strong>social media account creation</strong>, and <strong>business communications</strong>. Our services are <strong>delivered digitally</strong> 
                and are subject to availability.
              </Typography>
              <Typography 
                variant="h4" 
                sx={{ 
                  mb: { xs: 1, md: 2 }, 
                  color: '#667eea',
                  fontSize: { xs: '1.1rem', sm: '1.25rem' }
                }}
              >
                Our Services Include:
              </Typography>
              <Box component="ul" sx={{ pl: { xs: 2, md: 3 } }}>
                <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}><strong>Virtual Numbers for WhatsApp Verification</strong></Typography>
                <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}><strong>Telegram Number Services</strong></Typography>
                <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}><strong>Canva Pro Accounts</strong></Typography>
                <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}><strong>Netflix Premium Subscriptions</strong></Typography>
                <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}><strong>Instagram Verification Services</strong></Typography>
              </Box>
            </Paper>
          </Box>

          <Box id="payment">
            <Paper sx={{ 
              p: { xs: 2, md: 4 }, 
              mb: { xs: 2, md: 4 },
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              borderRadius: 3,
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
            }}>
              <Typography 
                variant="h3" 
                sx={{ 
                  mb: { xs: 2, md: 3 }, 
                  color: '#667eea',
                  fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
                }}
              >
                3. Payment Terms
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: { xs: 2, md: 3 }, 
                  lineHeight: 1.8,
                  fontSize: { xs: '0.9rem', md: '1rem' }
                }}
              >
                All payments must be made <strong>in advance before service delivery</strong>. We accept various <strong>payment methods</strong> including <strong>UPI</strong>, 
                <strong>digital wallets</strong>, and other <strong>secure payment options</strong>. Prices are subject to change without prior notice.
              </Typography>
            </Paper>
          </Box>

          <Box id="delivery">
            <Paper sx={{ 
              p: { xs: 2, md: 4 }, 
              mb: { xs: 2, md: 4 },
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              borderRadius: 3,
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
            }}>
              <Typography 
                variant="h3" 
                sx={{ 
                  mb: { xs: 2, md: 3 }, 
                  color: '#667eea',
                  fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
                }}
              >
                4. Delivery Policy
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: { xs: 2, md: 3 }, 
                  lineHeight: 1.8,
                  fontSize: { xs: '0.9rem', md: '1rem' }
                }}
              >
                We strive to deliver <strong>virtual numbers within minutes</strong> of payment confirmation. However, <strong>delivery times may vary</strong> 
                depending on <strong>service type and current demand</strong>. We are not responsible for delays caused by <strong>third-party services</strong> 
                or <strong>technical issues beyond our control</strong>.
              </Typography>
            </Paper>
          </Box>

          <Box id="refund">
            <Paper sx={{ 
              p: { xs: 2, md: 4 }, 
              mb: { xs: 2, md: 4 },
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              borderRadius: 3,
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
            }}>
              <Typography 
                variant="h3" 
                sx={{ 
                  mb: { xs: 2, md: 3 }, 
                  color: '#667eea',
                  fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
                }}
              >
                5. Refund Policy
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: { xs: 2, md: 3 }, 
                  lineHeight: 1.8,
                  fontSize: { xs: '0.9rem', md: '1rem' }
                }}
              >
                We offer <strong>refunds only in cases where we are unable to deliver the service as promised</strong>. Once a <strong>virtual number 
                has been delivered and is working</strong>, no refunds will be provided. <strong>Refund requests must be made within 24 hours</strong> 
                of purchase.
              </Typography>
            </Paper>
          </Box>

          <Box id="privacy">
            <Paper sx={{ 
              p: { xs: 2, md: 4 }, 
              mb: { xs: 2, md: 4 },
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              borderRadius: 3,
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
            }}>
              <Typography 
                variant="h3" 
                sx={{ 
                  mb: { xs: 2, md: 3 }, 
                  color: '#667eea',
                  fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
                }}
              >
                6. Privacy & Data Protection
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: { xs: 2, md: 3 }, 
                  lineHeight: 1.8,
                  fontSize: { xs: '0.9rem', md: '1rem' }
                }}
              >
                We are <strong>committed to protecting your privacy</strong>. Your <strong>personal information is collected, used, and protected</strong> 
                in accordance with our <strong>Privacy Policy</strong>. We do not share your information with <strong>third parties without 
                your explicit consent</strong>.
              </Typography>
              <Button
                component={Link}
                to="/privacy-policy"
                variant="text"
                sx={{
                  color: '#667eea',
                  textDecoration: 'underline',
                  '&:hover': {
                    backgroundColor: 'rgba(102, 126, 234, 0.1)'
                  }
                }}
              >
                Review Our Privacy Policy
              </Button>
            </Paper>
          </Box>

          <Box id="liability">
            <Paper sx={{ 
              p: { xs: 2, md: 4 }, 
              mb: { xs: 2, md: 4 },
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              borderRadius: 3,
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
            }}>
              <Typography 
                variant="h3" 
                sx={{ 
                  mb: { xs: 2, md: 3 }, 
                  color: '#667eea',
                  fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
                }}
              >
                7. Limitation of Liability
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: { xs: 2, md: 3 }, 
                  lineHeight: 1.8,
                  fontSize: { xs: '0.9rem', md: '1rem' }
                }}
              >
                VirtNumbers shall not be liable for any <strong>indirect, incidental, special, consequential, or punitive damages</strong> 
                resulting from your use of our services. Our <strong>total liability shall not exceed the amount paid</strong> for the 
                <strong>specific service in question</strong>.
              </Typography>
            </Paper>
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
              Questions About These Terms?
            </Typography>
            <Typography 
              variant="body1"
              sx={{ 
                mb: { xs: 2, md: 3 },
                fontSize: { xs: '0.9rem', md: '1rem' }
              }}
            >
              Contact our <strong>support team</strong> for clarification on any part of these <strong>terms of service</strong>.
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
            <AdSense adSlot="6625177500" adFormat="auto" />
          </Box>
        </Container>
      </Box>
    </>
  );
} 