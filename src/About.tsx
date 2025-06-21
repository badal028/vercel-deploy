import { Box, Typography, Container, Paper, Grid } from '@mui/material';

export default function About() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h2" sx={{ mb: 4, textAlign: 'center', fontWeight: 700, color: 'primary.main' }}>
        About VirtNumbers
      </Typography>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 4, mb: 4 }}>
            <Typography variant="h4" sx={{ mb: 3, color: 'primary.main' }}>
              What Are Virtual Numbers?
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
              Virtual numbers are phone numbers that aren't tied to a specific physical phone line. 
              They work over the internet and can be used for various purposes like:
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 3 }}>
              <Typography component="li" sx={{ mb: 1 }}>WhatsApp and Telegram verification</Typography>
              <Typography component="li" sx={{ mb: 1 }}>Business communications</Typography>
              <Typography component="li" sx={{ mb: 1 }}>Privacy protection</Typography>
              <Typography component="li" sx={{ mb: 1 }}>International calling</Typography>
              <Typography component="li" sx={{ mb: 1 }}>Account verification for various services</Typography>
            </Box>
          </Paper>

          <Paper sx={{ p: 4, mb: 4 }}>
            <Typography variant="h4" sx={{ mb: 3, color: 'primary.main' }}>
              Our Mission
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
              At VirtNumbers, we believe everyone deserves access to reliable, affordable virtual numbers. 
              Our mission is to provide premium virtual numbers with instant delivery, 24/7 support, 
              and competitive pricing to meet all your digital communication needs.
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
              Whether you need a number for social media verification, business purposes, or privacy protection, 
              we've got you covered with our wide range of services including WhatsApp, Telegram, Instagram, 
              Gmail, LinkedIn, Netflix, and Canva Pro accounts.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 4, mb: 4 }}>
            <Typography variant="h5" sx={{ mb: 3, color: 'primary.main' }}>
              Why Choose VirtNumbers?
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              <Typography component="li" sx={{ mb: 2 }}>✅ Instant delivery within minutes</Typography>
              <Typography component="li" sx={{ mb: 2 }}>✅ 24/7 customer support</Typography>
              <Typography component="li" sx={{ mb: 2 }}>✅ Secure payment options</Typography>
              <Typography component="li" sx={{ mb: 2 }}>✅ Premium quality numbers</Typography>
              <Typography component="li" sx={{ mb: 2 }}>✅ No registration required</Typography>
              <Typography component="li" sx={{ mb: 2 }}>✅ Competitive pricing</Typography>
            </Box>
          </Paper>

          <Paper sx={{ p: 4 }}>
            <Typography variant="h5" sx={{ mb: 3, color: 'primary.main' }}>
              Our Services
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              <Typography component="li" sx={{ mb: 1 }}>📱 WhatsApp Virtual Numbers</Typography>
              <Typography component="li" sx={{ mb: 1 }}>📱 Telegram Virtual Numbers</Typography>
              <Typography component="li" sx={{ mb: 1 }}>📸 Instagram Accounts</Typography>
              <Typography component="li" sx={{ mb: 1 }}>📧 Gmail Accounts</Typography>
              <Typography component="li" sx={{ mb: 1 }}>💼 LinkedIn Accounts</Typography>
              <Typography component="li" sx={{ mb: 1 }}>🎬 Netflix Premium</Typography>
              <Typography component="li" sx={{ mb: 1 }}>🎨 Canva Pro</Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
} 