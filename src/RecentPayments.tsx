import { Box, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import p1 from './assets/p1.jpeg';
import p2 from './assets/p2.jpeg';
import p3 from './assets/p3.jpeg';
import p4 from './assets/p4.jpeg';
import p5 from './assets/p5.jpeg';
import p6 from './assets/p6.jpeg';
import p7 from './assets/p7.jpeg';
import p8 from './assets/p8.jpeg';
import p9 from './assets/p9.jpeg';
import p10 from './assets/p10.jpeg';
import p11 from './assets/p11.jpeg';
import p12 from './assets/p12.jpeg';
import p13 from './assets/p13.jpeg';

// Placeholder images (replace with your real payment screenshots in public/assets or src/assets)
const paymentImages = [
  p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const fadeInItem = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 }
  }
};

export default function RecentPayments() {
  const captions = [
    "Payment from Delhi for Netflix number",
    "Payment from Spain for Netflix number",
    "Payment from USA for Netflix account",
    "Payment from Hyderabad for Netflix account",
    "Payment from Indonesia for Netflix account",
    "Payment from Chennai for Netflix subscription",
    "Payment from Pune for Netflix subscription",
    "Payment from Jaipur for Netflix number",
    "Payment from Philippines for Netflix number",
    "Payment from Surat for Netflix account",
    "Payment from Indore for Netflix account",
    "Payment from Bhopal for Telegram account",
    "Payment from Patna for Telegram subscription"
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      style={{ minHeight: '80vh', background: 'linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%)' }}
    >
      <Box sx={{ py: 6, px: { xs: 2, md: 8 } }}>
        <Typography variant="h3" sx={{ mb: 2, textAlign: 'center', fontWeight: 700, color: 'primary.main', letterSpacing: 1 }}>
          Recent Payments from Our Happy Customers
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, textAlign: 'center', color: 'text.secondary', maxWidth: 700, mx: 'auto' }}>
          We value transparency and trust. Below are real payment proofs from our satisfied customers who purchased virtual numbers and digital services. This gallery demonstrates our commitment to instant delivery and genuine service. Join hundreds of happy clients who have chosen VirtNumbers for their digital needs!
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {paymentImages.map((img, idx) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
              <motion.div variants={fadeInItem}>
                <Paper
                  elevation={4}
                  sx={{
                    borderRadius: 4,
                    overflow: 'hidden',
                    boxShadow: 6,
                    transition: 'transform 0.2s',
                    '&:hover': { transform: 'scale(1.03)' },
                    p: 1,
                    background: '#181818'
                  }}
                >
                  <img
                    src={img}
                    alt={captions[idx] || `Payment Screenshot ${idx + 1}`}
                    style={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'contain',
                      borderRadius: 8,
                      background: '#222',
                      maxHeight: 400,
                      margin: '0 auto'
                    }}
                  />
                  <Typography variant="caption" sx={{ display: 'block', color: 'text.secondary', mt: 1, textAlign: 'center', minHeight: 32 }}>
                    {captions[idx] || ''}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
        <Typography variant="caption" sx={{ mt: 4, display: 'block', textAlign: 'center', color: 'text.secondary' }}>
          *Your privacy is always protected. Payment screenshots are shown with customer consent and for demonstration purposes only.
        </Typography>
      </Box>
    </motion.div>
  );
} 