import { Box, Typography, Container, Paper, Grid } from '@mui/material';
import AdSense from './AdSense';

export default function About() {
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
        About VirtNumbers
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
          </Paper>

          <Paper sx={{ p: { xs: 2, md: 4 }, mb: { xs: 2, md: 4 } }}>
            <Typography 
              variant="h4" 
              sx={{ 
                mb: { xs: 2, md: 3 }, 
                color: 'primary.main',
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
                lineHeight: 1.8,
                fontSize: { xs: '0.9rem', md: '1rem' }
              }}
            >
              Whether you need a number for social media verification, business purposes, or privacy protection, 
              we've got you covered with our wide range of services including WhatsApp, Telegram, Instagram, 
              Gmail, LinkedIn, Netflix, and Canva Pro accounts.
            </Typography>
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

          <Paper sx={{ p: { xs: 2, md: 4 } }}>
            <Typography 
              variant="h5" 
              sx={{ 
                mb: { xs: 2, md: 3 }, 
                color: 'primary.main',
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
          </Paper>
        </Grid>
      </Grid>
      
      {/* Ad Section */}
      <Box sx={{ mt: 6 }}>
        <AdSense adSlot="1720002040" adFormat="auto" />
      </Box>
    </Container>
  );
} 