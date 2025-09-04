import { Box, Typography, Container, Paper, Button } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import AdSense from './AdSense';

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Virtual Numbers & Digital Services | VirtNumbers</title>
        <meta name="description" content="Read our privacy policy to understand how VirtNumbers collects, uses, and protects your personal information when using our virtual number and digital services." />
        <meta name="keywords" content="privacy policy, data protection, virtual numbers privacy, personal information security, data collection policy" />
        <link rel="canonical" href="https://virtnumbers.com/privacy-policy" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://virtnumbers.com/privacy-policy" />
        <meta property="og:title" content="Privacy Policy - Virtual Numbers & Digital Services | VirtNumbers" />
        <meta property="og:description" content="Read our privacy policy to understand how VirtNumbers collects, uses, and protects your personal information when using our virtual number and digital services." />
        <meta property="og:image" content="/logo.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://virtnumbers.com/privacy-policy" />
        <meta property="twitter:title" content="Privacy Policy - Virtual Numbers & Digital Services | VirtNumbers" />
        <meta property="twitter:description" content="Read our privacy policy to understand how VirtNumbers collects, uses, and protects your personal information when using our virtual number and digital services." />
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
            Privacy Policy
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
            How we collect, use, and protect your personal information
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
              Buy Virtual Numbers
            </Button>
            <Button
              component={Link}
              to="/terms"
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
              Terms of Service
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
              Contact Support
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
                <Link to="#introduction" style={{ color: '#667eea', textDecoration: 'none' }}>1. Introduction</Link>
              </Typography>
              <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                <Link to="#collection" style={{ color: '#667eea', textDecoration: 'none' }}>2. Information We Collect</Link>
              </Typography>
              <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                <Link to="#usage" style={{ color: '#667eea', textDecoration: 'none' }}>3. How We Use Your Information</Link>
              </Typography>
              <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                <Link to="#security" style={{ color: '#667eea', textDecoration: 'none' }}>4. Data Security</Link>
              </Typography>
              <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                <Link to="#cookies" style={{ color: '#667eea', textDecoration: 'none' }}>5. Cookies and Tracking</Link>
              </Typography>
              <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                <Link to="#rights" style={{ color: '#667eea', textDecoration: 'none' }}>6. Your Privacy Rights</Link>
              </Typography>
            </Box>
          </Paper>

          <Box id="introduction">
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
                1. Introduction
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: { xs: 2, md: 3 }, 
                  lineHeight: 1.8,
                  fontSize: { xs: '0.9rem', md: '1rem' }
                }}
              >
                At VirtNumbers, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our website and services.
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  lineHeight: 1.8,
                  fontSize: { xs: '0.9rem', md: '1rem' }
                }}
              >
                This policy applies to all users of our virtual number services, including WhatsApp verification, Telegram numbers, Instagram accounts, and other digital services we provide.
              </Typography>
            </Paper>
          </Box>

          <Box id="collection">
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
                2. Information We Collect
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: { xs: 2, md: 3 }, 
                  lineHeight: 1.8,
                  fontSize: { xs: '0.9rem', md: '1rem' }
                }}
              >
                We may collect personal information such as your name, email address, phone number, and payment details when you place an order or contact our support team. We also collect non-personal information such as browser type, device information, and IP address for analytics and security purposes.
              </Typography>
              <Typography 
                variant="h4" 
                sx={{ 
                  mb: { xs: 1, md: 2 }, 
                  color: '#667eea',
                  fontSize: { xs: '1.1rem', sm: '1.25rem' }
                }}
              >
                Types of Information We Collect:
              </Typography>
              <Box component="ul" sx={{ pl: { xs: 2, md: 3 } }}>
                <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>Contact information (name, email, phone number)</Typography>
                <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>Payment information (processed securely)</Typography>
                <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>Usage data and analytics</Typography>
                <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>Device and browser information</Typography>
              </Box>
            </Paper>
          </Box>

          <Box id="usage">
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
                3. How We Use Your Information
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: { xs: 2, md: 3 }, 
                  lineHeight: 1.8,
                  fontSize: { xs: '0.9rem', md: '1rem' }
                }}
              >
                We use the information we collect to process your orders, provide customer support, improve our services, and communicate with you about your account and our services. We do not sell, trade, or otherwise transfer your personal information to third parties without your consent.
              </Typography>
            </Paper>
          </Box>

          <Box id="security">
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
                4. Data Security
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: { xs: 2, md: 3 }, 
                  lineHeight: 1.8,
                  fontSize: { xs: '0.9rem', md: '1rem' }
                }}
              >
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. We use secure payment processing methods and encrypt sensitive data during transmission.
              </Typography>
            </Paper>
          </Box>

          <Box id="cookies">
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
                5. Cookies and Tracking
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: { xs: 2, md: 3 }, 
                  lineHeight: 1.8,
                  fontSize: { xs: '0.9rem', md: '1rem' }
                }}
              >
                We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand where our visitors are coming from. You can control cookie settings through your browser preferences.
              </Typography>
            </Paper>
          </Box>

          <Box id="rights">
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
                6. Your Privacy Rights
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: { xs: 2, md: 3 }, 
                  lineHeight: 1.8,
                  fontSize: { xs: '0.9rem', md: '1rem' }
                }}
              >
                You have the right to access, update, or delete your personal information. You can also opt out of marketing communications at any time. To exercise these rights, please contact us through our support channels.
              </Typography>
              <Button
                component={Link}
                to="/contact"
                variant="contained"
                sx={{
                  backgroundColor: '#667eea',
                  '&:hover': { backgroundColor: '#5a67d8' }
                }}
              >
                Contact Support
              </Button>
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
              Our Services
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
                  '&:hover': { backgroundColor: '#5a67d8' }
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
                  '&:hover': { backgroundColor: '#5a67d8' }
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
                  '&:hover': { backgroundColor: '#5a67d8' }
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
              Questions About Privacy?
            </Typography>
            <Typography 
              variant="body1"
              sx={{ 
                mb: { xs: 2, md: 3 },
                fontSize: { xs: '0.9rem', md: '1rem' }
              }}
            >
              Contact our support team for any questions about our privacy practices or to exercise your privacy rights.
            </Typography>
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              sx={{
                backgroundColor: '#667eea',
                '&:hover': { backgroundColor: '#5a67d8' }
              }}
            >
              Contact Support Team
            </Button>
          </Box>
        
          {/* Ad Section */}
          <Box sx={{ mt: 6 }}>
            <AdSense adSlot="1720002040" adFormat="auto" />
          </Box>
        </Container>
      </Box>
    </>
  );
} 