import { Box, Typography, Container, Paper, Grid, Button } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import AdSense from './AdSense';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About VirtNumbers - Virtual Numbers Provider | VirtNumbers</title>
        <meta name="description" content="Learn about VirtNumbers - trusted provider of virtual numbers for WhatsApp, Telegram, Instagram verification. Premium digital services with instant delivery." />
        <meta name="keywords" content="about VirtNumbers, virtual numbers company, WhatsApp verification service, Telegram numbers provider, digital services company" />
        <link rel="canonical" href="https://virtnumbers.com/about" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://virtnumbers.com/about" />
        <meta property="og:title" content="About VirtNumbers - Virtual Numbers Provider | VirtNumbers" />
        <meta property="og:description" content="Learn about VirtNumbers - trusted provider of virtual numbers for WhatsApp, Telegram, Instagram verification. Premium digital services with instant delivery." />
        <meta property="og:image" content="/logo.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://virtnumbers.com/about" />
        <meta property="twitter:title" content="About VirtNumbers - Virtual Numbers Provider | VirtNumbers" />
        <meta property="twitter:description" content="Learn about VirtNumbers - trusted provider of virtual numbers for WhatsApp, Telegram, Instagram verification. Premium digital services with instant delivery." />
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
            Your <strong>trusted provider</strong> of <strong>premium virtual numbers</strong> and <strong>digital services</strong>
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
                  <strong>Virtual numbers</strong> are phone numbers that aren't tied to a specific <strong>physical phone line</strong>. 
                  They work over the <strong>internet</strong> and can be used for various purposes like:
            </Typography>
            <Box sx={{ pl: { xs: 2, md: 3 }, mb: { xs: 2, md: 3 } }}>
              <Typography sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>• <strong>WhatsApp and Telegram verification</strong></Typography>
              <Typography sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>• <strong>Business communications</strong></Typography>
              <Typography sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>• <strong>Privacy protection</strong></Typography>
              <Typography sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>• <strong>International calling</strong></Typography>
              <Typography sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>• <strong>Account verification for various services</strong></Typography>
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
                  Purchase Virtual Numbers
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
                  At <strong>VirtNumbers</strong>, we believe everyone deserves access to <strong>reliable, affordable virtual numbers</strong>. 
                  Our mission is to provide <strong>premium virtual numbers</strong> with <strong>instant delivery</strong>, <strong>24/7 support</strong>, 
                  and <strong>competitive pricing</strong> to meet all your <strong>digital communication needs</strong>.
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    mb: { xs: 2, md: 3 },
                    lineHeight: 1.8,
                    fontSize: { xs: '0.9rem', md: '1rem' }
                  }}
                >
                  Whether you need a number for <strong>social media verification</strong>, <strong>business purposes</strong>, or <strong>privacy protection</strong>, 
                  we've got you covered with our <strong>wide range of services</strong> including <strong>WhatsApp</strong>, <strong>Telegram</strong>, <strong>Instagram</strong>, 
                  <strong>Gmail</strong>, <strong>LinkedIn</strong>, <strong>Netflix</strong>, and <strong>Canva Pro accounts</strong>.
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
                  We are <strong>committed to providing the highest quality virtual numbers</strong> and <strong>digital services</strong>. 
                  Our <strong>team works tirelessly</strong> to ensure every customer receives <strong>reliable, tested numbers</strong> 
                  that work perfectly with their <strong>intended platforms</strong>.
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
                  Our <strong>dedicated support team</strong> is available <strong>24/7</strong> to assist you with any questions or issues. 
                  We believe in providing <strong>exceptional customer service</strong> and ensuring your <strong>complete satisfaction</strong> 
                  with our <strong>virtual number services</strong>.
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
                  Get Customer Support
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
                  <Typography component="li" sx={{ mb: 2, fontSize: { xs: '0.9rem', md: '1rem' } }}>✅ <strong>Instant delivery within minutes</strong></Typography>
                  <Typography component="li" sx={{ mb: 2, fontSize: { xs: '0.9rem', md: '1rem' } }}>✅ <strong>24/7 customer support</strong></Typography>
                  <Typography component="li" sx={{ mb: 2, fontSize: { xs: '0.9rem', md: '1rem' } }}>✅ <strong>Secure payment options</strong></Typography>
                  <Typography component="li" sx={{ mb: 2, fontSize: { xs: '0.9rem', md: '1rem' } }}>✅ <strong>Premium quality numbers</strong></Typography>
                  <Typography component="li" sx={{ mb: 2, fontSize: { xs: '0.9rem', md: '1rem' } }}>✅ <strong>No registration required</strong></Typography>
                  <Typography component="li" sx={{ mb: 2, fontSize: { xs: '0.9rem', md: '1rem' } }}>✅ <strong>Competitive pricing</strong></Typography>
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
                  <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>📱 <strong>WhatsApp Virtual Numbers</strong></Typography>
                  <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>📱 <strong>Telegram Virtual Numbers</strong></Typography>
                  <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>📸 <strong>Instagram Accounts</strong></Typography>
                  <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>📧 <strong>Gmail Accounts</strong></Typography>
                  <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>💼 <strong>LinkedIn Accounts</strong></Typography>
                  <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>🎬 <strong>Netflix Premium</strong></Typography>
                  <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>🎨 <strong>Canva Pro</strong></Typography>
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
                  Explore All Services
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
                    Browse FAQ Section
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
                    Review Terms of Service
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
                    Read Privacy Policy
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
              Join <strong>thousands of satisfied customers</strong> who trust <strong>VirtNumbers</strong> for their <strong>virtual number needs</strong>. 
              Get started today with <strong>instant delivery</strong> and <strong>24/7 support</strong>.
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
                Purchase Virtual Numbers Now
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
                Get Customer Support
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