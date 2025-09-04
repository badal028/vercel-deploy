import { Box, Typography, Container, Paper, Grid, Button } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import AdSense from './AdSense';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us - Virtual Numbers & Digital Services | VirtNumbers</title>
        <meta name="description" content="Learn about VirtNumbers - your trusted provider of virtual numbers for WhatsApp, Telegram, Instagram verification. Premium digital services with instant delivery and 24/7 support." />
        <meta name="keywords" content="about VirtNumbers, virtual numbers company, WhatsApp verification service, Telegram numbers provider, digital services company" />
        <link rel="canonical" href="https://virtnumbers.com/about" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://virtnumbers.com/about" />
        <meta property="og:title" content="About Us - Virtual Numbers & Digital Services | VirtNumbers" />
        <meta property="og:description" content="Learn about VirtNumbers - your trusted provider of virtual numbers for WhatsApp, Telegram, Instagram verification. Premium digital services with instant delivery and 24/7 support." />
        <meta property="og:image" content="/logo.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://virtnumbers.com/about" />
        <meta property="twitter:title" content="About Us - Virtual Numbers & Digital Services | VirtNumbers" />
        <meta property="twitter:description" content="Learn about VirtNumbers - your trusted provider of virtual numbers for WhatsApp, Telegram, Instagram verification. Premium digital services with instant delivery and 24/7 support." />
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
            About VirtNumbers
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
            Your trusted provider of premium virtual numbers and digital services
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
              Frequently Asked Questions
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
        
          <Grid container spacing={{ xs: 2, md: 4 }}>
            <Grid item xs={12} md={8}>
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
                  What Are Virtual Numbers?
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    mb: { xs: 2, md: 3 }, 
                    lineHeight: 1.8,
                    fontSize: { xs: '0.9rem', md: '1rem' }
                  }}
                >
                  Virtual numbers are phone numbers that aren't tied to a specific physical phone line. 
                  They work over the internet and can be used for various purposes like:
                </Typography>
                <Box component="ul" sx={{ pl: { xs: 2, md: 3 }, mb: { xs: 2, md: 3 } }}>
                  <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>WhatsApp and Telegram verification</Typography>
                  <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>Business communications</Typography>
                  <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>Privacy protection</Typography>
                  <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>International calling</Typography>
                  <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>Account verification for various services</Typography>
                </Box>
                <Button
                  component={Link}
                  to="/buy"
                  variant="contained"
                  sx={{
                    backgroundColor: '#667eea',
                    '&:hover': { backgroundColor: '#5a67d8' }
                  }}
                >
                  Get Virtual Numbers
                </Button>
              </Paper>

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
                  Our Mission
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    mb: { xs: 2, md: 3 }, 
                    lineHeight: 1.8,
                    fontSize: { xs: '0.9rem', md: '1rem' }
                  }}
                >
                  At VirtNumbers, we believe everyone deserves access to reliable, affordable virtual numbers. 
                  Our mission is to provide premium virtual numbers with instant delivery, 24/7 support, 
                  and competitive pricing to meet all your digital communication needs.
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    mb: { xs: 2, md: 3 },
                    lineHeight: 1.8,
                    fontSize: { xs: '0.9rem', md: '1rem' }
                  }}
                >
                  Whether you need a number for social media verification, business purposes, or privacy protection, 
                  we've got you covered with our wide range of services including WhatsApp, Telegram, Instagram, 
                  Gmail, LinkedIn, Netflix, and Canva Pro accounts.
                </Typography>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    mb: { xs: 1, md: 2 }, 
                    color: '#667eea',
                    fontSize: { xs: '1.1rem', sm: '1.25rem' }
                  }}
                >
                  Our Commitment to Quality
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    lineHeight: 1.8,
                    fontSize: { xs: '0.9rem', md: '1rem' }
                  }}
                >
                  We are committed to providing the highest quality virtual numbers and digital services. 
                  Our team works tirelessly to ensure every customer receives reliable, tested numbers 
                  that work perfectly with their intended platforms.
                </Typography>
              </Paper>

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
                  Customer Support Excellence
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    mb: { xs: 2, md: 3 }, 
                    lineHeight: 1.8,
                    fontSize: { xs: '0.9rem', md: '1rem' }
                  }}
                >
                  Our dedicated support team is available 24/7 to assist you with any questions or issues. 
                  We believe in providing exceptional customer service and ensuring your complete satisfaction 
                  with our virtual number services.
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
              </Paper>
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper sx={{ 
                p: { xs: 2, md: 4 }, 
                mb: { xs: 2, md: 4 },
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
                    fontSize: { xs: '1.25rem', md: '1.5rem' }
                  }}
                >
                  Why Choose VirtNumbers?
                </Typography>
                <Box component="ul" sx={{ pl: { xs: 1.5, md: 2 } }}>
                  <Typography component="li" sx={{ mb: 2, fontSize: { xs: '0.9rem', md: '1rem' } }}>✅ Instant delivery within minutes</Typography>
                  <Typography component="li" sx={{ mb: 2, fontSize: { xs: '0.9rem', md: '1rem' } }}>✅ 24/7 customer support</Typography>
                  <Typography component="li" sx={{ mb: 2, fontSize: { xs: '0.9rem', md: '1rem' } }}>✅ Secure payment options</Typography>
                  <Typography component="li" sx={{ mb: 2, fontSize: { xs: '0.9rem', md: '1rem' } }}>✅ Premium quality numbers</Typography>
                  <Typography component="li" sx={{ mb: 2, fontSize: { xs: '0.9rem', md: '1rem' } }}>✅ No registration required</Typography>
                  <Typography component="li" sx={{ mb: 2, fontSize: { xs: '0.9rem', md: '1rem' } }}>✅ Competitive pricing</Typography>
                </Box>
              </Paper>

              <Paper sx={{ 
                p: { xs: 2, md: 4 },
                mb: { xs: 2, md: 4 },
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
                    fontSize: { xs: '1.25rem', md: '1.5rem' }
                  }}
                >
                  Our Services
                </Typography>
                <Box component="ul" sx={{ pl: { xs: 1.5, md: 2 } }}>
                  <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>📱 WhatsApp Virtual Numbers</Typography>
                  <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>📱 Telegram Virtual Numbers</Typography>
                  <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>📸 Instagram Accounts</Typography>
                  <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>📧 Gmail Accounts</Typography>
                  <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>💼 LinkedIn Accounts</Typography>
                  <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>🎬 Netflix Premium</Typography>
                  <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>🎨 Canva Pro</Typography>
                </Box>
                <Button
                  component={Link}
                  to="/buy"
                  variant="contained"
                  sx={{
                    mt: 2,
                    backgroundColor: '#667eea',
                    '&:hover': { backgroundColor: '#5a67d8' }
                  }}
                >
                  View All Services
                </Button>
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
                    fontSize: { xs: '1.25rem', md: '1.5rem' }
                  }}
                >
                  Quick Links
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Button
                    component={Link}
                    to="/faq"
                    variant="text"
                    sx={{
                      color: '#667eea',
                      justifyContent: 'flex-start',
                      '&:hover': { backgroundColor: 'rgba(102, 126, 234, 0.1)' }
                    }}
                  >
                    Frequently Asked Questions
                  </Button>
                  <Button
                    component={Link}
                    to="/terms"
                    variant="text"
                    sx={{
                      color: '#667eea',
                      justifyContent: 'flex-start',
                      '&:hover': { backgroundColor: 'rgba(102, 126, 234, 0.1)' }
                    }}
                  >
                    Terms of Service
                  </Button>
                  <Button
                    component={Link}
                    to="/privacy-policy"
                    variant="text"
                    sx={{
                      color: '#667eea',
                      justifyContent: 'flex-start',
                      '&:hover': { backgroundColor: 'rgba(102, 126, 234, 0.1)' }
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
            mt: { xs: 4, md: 6 },
            p: { xs: 2, md: 4 },
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            borderRadius: 3,
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <Typography 
              variant="h3" 
              sx={{ 
                mb: { xs: 2, md: 3 },
                color: '#667eea',
                fontSize: { xs: '1.5rem', md: '2rem' }
              }}
            >
              Ready to Get Started?
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                mb: { xs: 3, md: 4 },
                lineHeight: 1.8,
                fontSize: { xs: '0.9rem', md: '1rem' }
              }}
            >
              Join thousands of satisfied customers who trust VirtNumbers for their virtual number needs. 
              Get started today with instant delivery and 24/7 support.
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
              <Button
                component={Link}
                to="/buy"
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: '#667eea',
                  '&:hover': { backgroundColor: '#5a67d8' }
                }}
              >
                Buy Virtual Numbers Now
              </Button>
              <Button
                component={Link}
                to="/contact"
                variant="outlined"
                size="large"
                sx={{
                  borderColor: '#667eea',
                  color: '#667eea',
                  '&:hover': {
                    borderColor: '#5a67d8',
                    backgroundColor: 'rgba(102, 126, 234, 0.1)'
                  }
                }}
              >
                Contact Support
              </Button>
            </Box>
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