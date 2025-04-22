import { useState, useEffect } from 'react'
import { 
  Container, 
  Typography, 
  Select,
  MenuItem,
  Button,
  Box,
  Paper,
  TextField,
  Alert,
  Chip,
  IconButton,
  Tooltip,
  Tabs,
  Tab,
  Grid,
  Card,
  CardContent,
  CardActions,
  Avatar,
  createTheme,
  ThemeProvider,
  FormControl,
  InputLabel,
  SelectChangeEvent
} from '@mui/material'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import BuildIcon from '@mui/icons-material/Build';
import PaidIcon from '@mui/icons-material/Paid';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { keyframes } from '@emotion/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Analytics } from '@vercel/analytics/react';
import SendIcon from '@mui/icons-material/Send';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

interface ServiceOption {
  id: string;
  name: string;
  price: number;
  icon?: string;
}

const telegramOptions: ServiceOption[] = [
  { id: 'fresh', name: 'Fresh Account', price: 500 },
  { id: '1year', name: '1 Year Old Account', price: 1000 },
];

const whatsappOptions: ServiceOption[] = [
  { id: 'poland', name: 'Poland WhatsApp', price: 800, icon: '🇵🇱' },
  { id: 'fresh', name: 'Fresh WhatsApp', price: 1000, icon: '🆕' },
  { id: 'poland2', name: 'Poland WhatsApp (Premium)', price: 1350, icon: '🇵🇱' },
  { id: 'georgia', name: 'Georgia WhatsApp', price: 1500, icon: '🇬🇪' },
  { id: 'thailand', name: 'Thailand WhatsApp', price: 1500, icon: '🇹🇭' },
  { id: 'germany', name: 'Germany WhatsApp', price: 2000, icon: '🇩🇪' },
  { id: 'hongkong', name: 'Hong Kong WhatsApp', price: 2000, icon: '🇭🇰' },
];

const instagramOptions: ServiceOption[] = [
  { id: 'account', name: 'Instagram Account', price: 180 },
];

const gmailOptions: ServiceOption[] = [
  { id: 'account', name: 'Gmail Account', price: 200 },
];

const linkedinOptions: ServiceOption[] = [
  { id: 'old', name: '1-3 Week Old LinkedIn', price: 500 },
  { id: 'followers', name: '500 LinkedIn Followers & Connections (Real)', price: 4000 },
];

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#2563EB',
      light: '#60A5FA',
      dark: '#1E40AF',
    },
    secondary: {
      main: '#EC4899',
      light: '#F472B6',
      dark: '#BE185D',
    },
    background: {
      default: '#F8FAFC',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1E293B',
      secondary: '#64748B',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.75rem',
    },
  },
  components: {
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          backgroundColor: 'white',
          '&:hover': {
            backgroundColor: 'rgba(108, 99, 255, 0.04)',
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: '0px',
          paddingRight: '0px',
          '@media (min-width: 600px)': {
            paddingLeft: '24px',
            paddingRight: '24px',
          }
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          fontWeight: 600,
          padding: '10px 24px',
          fontSize: '1rem',
        },
        contained: {
          boxShadow: '0 4px 12px rgba(108, 99, 255, 0.2)',
          '&:hover': {
            boxShadow: '0 6px 16px rgba(108, 99, 255, 0.3)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 600,
          padding: '4px 12px',
        },
      },
    },
  },
});

function LandingPage() {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  
  // Improved animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const scaleIn = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Buy Virtual Numbers for Telegram & WhatsApp | Instant Delivery | VirtNumbers</title>
        <meta name="description" content="Buy Premium Virtual Numbers for Telegram, WhatsApp & Social Media ✓ Instant Delivery ✓ 24/7 Support ✓ Secure Payment ✓ 100% Guaranteed Numbers | VirtNumbers" />
        <link rel="icon" href="/logo.ico" />
        <link rel="shortcut icon" href="/logo.ico" type="image/x-icon" />
      </Helmet>
      <Box sx={{ 
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%)',
        py: { xs: 6, md: 8 },
        position: 'relative'
      }}>
        <Container maxWidth="lg">
          {/* Hero Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <Box sx={{ 
              textAlign: 'center',
              mb: { xs: 8, md: 12 },
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -20,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100px',
                height: '4px',
                background: 'linear-gradient(90deg, #2563EB, #EC4899)',
                borderRadius: '2px'
              }
            }}>
              <Typography 
                variant="h1" 
                sx={{ 
                  color: 'primary.main',
                  mb: 3,
                  textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 700,
                  lineHeight: 1.2
                }}
              >
                VirtNum Pro
              </Typography>
              <Typography 
                variant="h5" 
                sx={{ 
                  color: 'text.secondary',
                  maxWidth: '800px',
                  mx: 'auto',
                  mb: 4,
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  lineHeight: 1.6
                }}
              >
                Premium Virtual Numbers for All Your Needs. Fast Delivery, 24/7 Support, and Secure Payment Options.
              </Typography>
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/buy')}
                sx={{
                  py: 2,
                  px: 6,
                  fontSize: '1.2rem',
                  borderRadius: '30px',
                  background: 'linear-gradient(45deg, #2563EB 30%, #EC4899 90%)',
                  boxShadow: '0 4px 12px rgba(37, 99, 235, 0.2)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #1E40AF 30%, #BE185D 90%)',
                    boxShadow: '0 6px 16px rgba(37, 99, 235, 0.3)',
                    transform: 'translateY(-2px)',
                  }
                }}
              >
                Buy Virtual Number
              </Button>
            </Box>
          </motion.div>

          {/* Features Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <Typography 
              variant="h2" 
              sx={{ 
                textAlign: 'center',
                mb: { xs: 4, sm: 6 },
                color: 'primary.main',
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                fontWeight: 600,
                lineHeight: 1.2
              }}
            >
              Why Choose Our Service?
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', md: 'row' },
              gap: { xs: 3, sm: 4, md: 6 },
              mb: { xs: 6, sm: 8, md: 12 }
            }}>
              <motion.div variants={scaleIn} style={{ flex: 1 }}>
                <Paper 
                  elevation={0}
                  sx={{ 
                    p: { xs: 2, sm: 3, md: 4 },
                    height: '100%',
                    minHeight: { xs: 'auto', md: '400px' },
                    borderRadius: 3,
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 12px 40px rgba(0,0,0,0.15)'
                    }
                  }}
                >
                  <Typography variant="h4" sx={{ 
                    mb: { xs: 2, sm: 3 }, 
                    color: 'primary.main', 
                    fontSize: { xs: '1.25rem', sm: '1.5rem' },
                    fontWeight: 600
                  }}>
                    Why Choose Us?
                  </Typography>
                  <Box component="ul" sx={{ pl: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
                    <Box>
                      <Box component="li" sx={{ mb: { xs: 2, sm: 3 }, display: 'flex', alignItems: 'flex-start' }}>
                        <PaidIcon sx={{ color: 'success.main', mr: 1.5, fontSize: { xs: '1.25rem', sm: '1.5rem' }, mt: 0.25 }} />
                        <Box>
                          <Typography variant="h6" sx={{ mb: 0.5, fontSize: { xs: '0.9rem', sm: '1.1rem' }, fontWeight: 600 }}>Instant Delivery</Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: { xs: '0.8rem', sm: '0.875rem' }, lineHeight: 1.5 }}>Get your virtual number within minutes of payment</Typography>
                        </Box>
                      </Box>
                      <Box component="li" sx={{ mb: { xs: 2, sm: 3 }, display: 'flex', alignItems: 'flex-start' }}>
                        <BuildIcon sx={{ color: 'primary.main', mr: 1.5, fontSize: { xs: '1.25rem', sm: '1.5rem' }, mt: 0.25 }} />
                        <Box>
                          <Typography variant="h6" sx={{ mb: 0.5, fontSize: { xs: '0.9rem', sm: '1.1rem' }, fontWeight: 600 }}>Premium Quality</Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: { xs: '0.8rem', sm: '0.875rem' }, lineHeight: 1.5 }}>High-quality numbers with guaranteed reliability</Typography>
                        </Box>
                      </Box>
                      <Box component="li" sx={{ mb: { xs: 2, sm: 3 }, display: 'flex', alignItems: 'flex-start' }}>
                        <WhatsAppIcon sx={{ color: '#25D366', mr: 1.5, fontSize: { xs: '1.25rem', sm: '1.5rem' }, mt: 0.25 }} />
                        <Box>
                          <Typography variant="h6" sx={{ mb: 0.5, fontSize: { xs: '0.9rem', sm: '1.1rem' }, fontWeight: 600 }}>24/7 Support</Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: { xs: '0.8rem', sm: '0.875rem' }, lineHeight: 1.5 }}>Round-the-clock customer support via WhatsApp</Typography>
                        </Box>
                      </Box>
                      <Box component="li" sx={{ mb: { xs: 2, sm: 3 }, display: 'flex', alignItems: 'flex-start' }}>
                        <TelegramIcon sx={{ color: '#0088cc', mr: 1.5, fontSize: { xs: '1.25rem', sm: '1.5rem' }, mt: 0.25 }} />
                        <Box>
                          <Typography variant="h6" sx={{ mb: 0.5, fontSize: { xs: '0.9rem', sm: '1.1rem' }, fontWeight: 600 }}>Secure Payments</Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: { xs: '0.8rem', sm: '0.875rem' }, lineHeight: 1.5 }}>Multiple secure payment options available</Typography>
                        </Box>
                      </Box>
                      <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start' }}>
                        <LockOpenIcon sx={{ color: 'secondary.main', mr: 1.5, fontSize: { xs: '1.25rem', sm: '1.5rem' }, mt: 0.25 }} />
                        <Box>
                          <Typography variant="h6" sx={{ mb: 0.5, fontSize: { xs: '0.9rem', sm: '1.1rem' }, fontWeight: 600 }}>No Login Required</Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: { xs: '0.8rem', sm: '0.875rem' }, lineHeight: 1.5 }}>Get your number instantly without any registration</Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Paper>
              </motion.div>
              <motion.div variants={scaleIn} style={{ flex: 1 }}>
                <Paper 
                  elevation={0}
                  sx={{ 
                    p: { xs: 2, sm: 3, md: 4 },
                    height: '100%',
                    minHeight: { xs: 'auto', md: '400px' },
                    borderRadius: 3,
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 12px 40px rgba(0,0,0,0.15)'
                    }
                  }}
                >
                  <Typography variant="h4" sx={{ 
                    mb: { xs: 2, sm: 3 }, 
                    color: 'primary.main', 
                    fontSize: { xs: '1.25rem', sm: '1.5rem' },
                    fontWeight: 600
                  }}>
                    Our Services
                  </Typography>
                  <Box component="ul" sx={{ pl: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
                    <Box>
                      <Box component="li" sx={{ mb: { xs: 2, sm: 3 }, display: 'flex', alignItems: 'flex-start' }}>
                        <TelegramIcon sx={{ color: '#0088cc', mr: 1.5, fontSize: { xs: '1.25rem', sm: '1.5rem' }, mt: 0.25 }} />
                        <Box>
                          <Typography variant="h6" sx={{ mb: 0.5, fontSize: { xs: '0.9rem', sm: '1.1rem' }, fontWeight: 600 }}>Telegram Numbers</Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: { xs: '0.8rem', sm: '0.875rem' }, lineHeight: 1.5 }}>Premium numbers for Telegram verification</Typography>
                        </Box>
                      </Box>
                      <Box component="li" sx={{ mb: { xs: 2, sm: 3 }, display: 'flex', alignItems: 'flex-start' }}>
                        <WhatsAppIcon sx={{ color: '#25D366', mr: 1.5, fontSize: { xs: '1.25rem', sm: '1.5rem' }, mt: 0.25 }} />
                        <Box>
                          <Typography variant="h6" sx={{ mb: 0.5, fontSize: { xs: '0.9rem', sm: '1.1rem' }, fontWeight: 600 }}>WhatsApp Numbers</Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: { xs: '0.8rem', sm: '0.875rem' }, lineHeight: 1.5 }}>Global numbers for WhatsApp verification</Typography>
                        </Box>
                      </Box>
                      <Box component="li" sx={{ mb: { xs: 2, sm: 3 }, display: 'flex', alignItems: 'flex-start' }}>
                        <InstagramIcon sx={{ color: '#E4405F', mr: 1.5, fontSize: { xs: '1.25rem', sm: '1.5rem' }, mt: 0.25 }} />
                        <Box>
                          <Typography variant="h6" sx={{ mb: 0.5, fontSize: { xs: '0.9rem', sm: '1.1rem' }, fontWeight: 600 }}>Instagram Accounts</Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: { xs: '0.8rem', sm: '0.875rem' }, lineHeight: 1.5 }}>Verified Instagram accounts with numbers</Typography>
                        </Box>
                      </Box>
                      <Box component="li" sx={{ mb: { xs: 2, sm: 3 }, display: 'flex', alignItems: 'flex-start' }}>
                        <EmailIcon sx={{ color: '#EA4335', mr: 1.5, fontSize: { xs: '1.25rem', sm: '1.5rem' }, mt: 0.25 }} />
                        <Box>
                          <Typography variant="h6" sx={{ mb: 0.5, fontSize: { xs: '0.9rem', sm: '1.1rem' }, fontWeight: 600 }}>Gmail Accounts</Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: { xs: '0.8rem', sm: '0.875rem' }, lineHeight: 1.5 }}>Secure Gmail accounts with verification</Typography>
                        </Box>
                      </Box>
                      <Box component="li" sx={{ mb: { xs: 2, sm: 3 }, display: 'flex', alignItems: 'flex-start' }}>
                        <LinkedInIcon sx={{ color: '#0077B5', mr: 1.5, fontSize: { xs: '1.25rem', sm: '1.5rem' }, mt: 0.25 }} />
                        <Box>
                          <Typography variant="h6" sx={{ mb: 0.5, fontSize: { xs: '0.9rem', sm: '1.1rem' }, fontWeight: 600 }}>LinkedIn Services</Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: { xs: '0.8rem', sm: '0.875rem' }, lineHeight: 1.5 }}>Professional LinkedIn account setup</Typography>
                        </Box>
                      </Box>
                      <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start' }}>
                        <BuildIcon sx={{ color: 'primary.main', mr: 1.5, fontSize: { xs: '1.25rem', sm: '1.5rem' }, mt: 0.25 }} />
                        <Box>
                          <Typography variant="h6" sx={{ mb: 0.5, fontSize: { xs: '0.9rem', sm: '1.1rem' }, fontWeight: 600 }}>Custom Services</Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: { xs: '0.8rem', sm: '0.875rem' }, lineHeight: 1.5 }}>Ask for any specific service you need</Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Paper>
              </motion.div>
            </Box>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <Typography 
              variant="h2" 
              sx={{ 
                textAlign: 'center',
                mb: { xs: 6, md: 8 },
                color: 'primary.main',
                fontSize: { xs: '2rem', md: '2.5rem' }
              }}
            >
              Frequently Asked Questions
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', md: 'row' },
              gap: { xs: 4, md: 6 },
              mb: { xs: 8, md: 12 }
            }}>
              <motion.div variants={fadeInUp} style={{ flex: 1 }}>
                <Paper 
                  elevation={0}
                  sx={{ 
                    p: { xs: 3, md: 4 },
                    height: '100%',
                    minHeight: { xs: 'auto', md: '300px' },
                    borderRadius: 3,
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 12px 40px rgba(0,0,0,0.15)'
                    }
                  }}
                >
                  <Typography variant="h6" sx={{ mb: 2, color: 'primary.main', fontSize: '1.1rem' }}>How fast is the delivery?</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.7 }}>
                    We provide instant delivery of virtual numbers. Once payment is confirmed, you'll receive your number within minutes. Our automated system ensures quick and reliable delivery.
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 2, color: 'primary.main', fontSize: '1.1rem' }}>What payment methods do you accept?</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.7 }}>
                    We accept various payment methods including UPI, bank transfer, and other secure payment options. All transactions are encrypted and secure.
                  </Typography>
                </Paper>
              </motion.div>
              <motion.div variants={fadeInUp} style={{ flex: 1 }}>
                <Paper 
                  elevation={0}
                  sx={{ 
                    p: { xs: 3, md: 4 },
                    height: '100%',
                    minHeight: { xs: 'auto', md: '300px' },
                    borderRadius: 3,
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 12px 40px rgba(0,0,0,0.15)'
                    }
                  }}
                >
                  <Typography variant="h6" sx={{ mb: 2, color: 'primary.main', fontSize: '1.1rem' }}>Is the service secure?</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.7 }}>
                    Yes, we use secure payment gateways and follow strict privacy policies to protect your information. Your data is encrypted and never shared with third parties.
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 2, color: 'primary.main', fontSize: '1.1rem' }}>Do you offer refunds?</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                    Yes, we guarantee a full refund if we fail to deliver your number. Our customer satisfaction is our top priority, and we ensure you get what you pay for.
                  </Typography>
                </Paper>
              </motion.div>
            </Box>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <Box sx={{ 
              textAlign: 'center',
              mb: { xs: 6, md: 8 }
            }}>
              <Typography 
                variant="h3" 
                sx={{ 
                  mb: 4,
                  color: 'primary.main',
                  fontSize: { xs: '1.75rem', md: '2.25rem' }
                }}
              >
                Ready to Join VirtNum Pro?
              </Typography>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => navigate('/buy')}
                  sx={{
                    py: 2,
                    px: 6,
                    fontSize: '1.2rem',
                    borderRadius: '30px',
                    background: 'linear-gradient(45deg, #2563EB 30%, #EC4899 90%)',
                    boxShadow: '0 4px 12px rgba(37, 99, 235, 0.2)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #1E40AF 30%, #BE185D 90%)',
                      boxShadow: '0 6px 16px rgba(37, 99, 235, 0.3)',
                      transform: 'translateY(-2px)',
                    }
                  }}
                >
                  Get Your Virtual Number
                </Button>
              </motion.div>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </>
  );
}

function VirtualNumberPage() {
  const [selectedService, setSelectedService] = useState<ServiceOption | null>(null);
  const [showQR, setShowQR] = useState(false);
  const [paymentDone, setPaymentDone] = useState(false);
  const [tabValue, setTabValue] = useState(0);

  // Add useEffect to scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
    setSelectedService(null);
    setShowQR(false);
    setPaymentDone(false);
  };

  const handleServiceSelect = (event: SelectChangeEvent<string>) => {
    const selectedId = event.target.value;
    const service = tabValue === 0 
      ? telegramOptions.find(opt => opt.id === selectedId)
      : tabValue === 1 ? whatsappOptions.find(opt => opt.id === selectedId)
      : tabValue === 2 ? instagramOptions.find(opt => opt.id === selectedId)
      : tabValue === 3 ? gmailOptions.find(opt => opt.id === selectedId)
      : linkedinOptions.find(opt => opt.id === selectedId);
    setSelectedService(service || null);
  };

  const handleSubmit = () => {
    if (selectedService) {
      setShowQR(true);
    }
  }

  const handlePayment = () => {
    setPaymentDone(true);
    window.location.href = "https://wa.me/918154994406";
  }

  const handleCustomization = () => {
    window.location.href = "https://wa.me/918154994406?text=I%20need%20customization%20for%20virtual%20number";
  }

  return (
    <>
      <Helmet>
        <title>Buy Virtual Numbers - Select Your Service | VirtNumbers</title>
        <meta name="description" content="Choose from our premium virtual numbers for Telegram, WhatsApp, Instagram, Gmail & LinkedIn. Instant activation with 24/7 support." />
        <link rel="icon" href="/logo.ico" />
        <link rel="shortcut icon" href="/logo.ico" type="image/x-icon" />
      </Helmet>
      <ThemeProvider theme={theme}>
        <Box sx={{ 
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%)',
          py: 4,
          position: 'relative'
        }}>
          {/* Floating Payment Buttons - Visible only on medium and larger screens */}
          <Box
            sx={{
              position: 'fixed',
              right: 24,
              top: 24,
              display: { xs: 'none', sm: 'flex' },
              flexDirection: 'column',
              gap: 2,
              zIndex: 1000,
            }}
          >
            <Tooltip title="Click here if you have already made the payment">
              <Button
                variant="contained"
                color="primary"
                startIcon={<SendIcon />}
                onClick={() => window.open('https://wa.me/919876543210?text=I%20have%20made%20the%20payment%20for%20the%20service', '_blank')}
                sx={{
                  borderRadius: 2,
                  px: 3,
                  py: 2,
                  fontSize: '1rem',
                  whiteSpace: 'nowrap',
                  minWidth: '200px',
                  boxShadow: 3,
                  '&:hover': {
                    boxShadow: 6,
                  },
                }}
              >
                Click here if you paid
              </Button>
            </Tooltip>
            <Tooltip title="Contact us for alternative payment methods">
              <Button
                variant="contained"
                color="secondary"
                startIcon={<SupportAgentIcon />}
                onClick={() => window.open('https://wa.me/919876543210?text=I%20need%20help%20with%20payment', '_blank')}
                sx={{
                  borderRadius: 2,
                  px: 3,
                  py: 2,
                  fontSize: '1rem',
                  whiteSpace: 'nowrap',
                  minWidth: '200px',
                  boxShadow: 3,
                  '&:hover': {
                    boxShadow: 6,
                  },
                }}
              >
                Not able to pay?
              </Button>
            </Tooltip>
          </Box>

          <Container maxWidth="md" sx={{ 
            px: { xs: 0, sm: 3 },
            pb: { xs: 4, sm: 4 }
          }}>
            <Box sx={{ 
              mb: { xs: 4, sm: 6 },
              textAlign: 'center',
              position: 'relative'
            }}>
              <Typography 
                variant="h1" 
                sx={{ 
                  color: 'primary.main',
                  mb: { xs: 1.5, sm: 2 },
                  textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                  fontSize: { xs: '1.75rem', sm: '2.25rem', md: '3rem' },
                  fontWeight: 700,
                  lineHeight: 1.2
                }}
              >
                VirtNum Pro Services
              </Typography>
              <Typography 
                variant="h5" 
                sx={{ 
                  color: 'text.secondary',
                  maxWidth: '600px',
                  mx: 'auto',
                  mb: { xs: 2.5, sm: 4 },
                  fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem' },
                  lineHeight: { xs: 1.4, sm: 1.6 },
                  px: { xs: 2, sm: 0 }
                }}
              >
                Get Premium Virtual Numbers with Instant Delivery
              </Typography>
            </Box>

            <Paper 
              elevation={0} 
              sx={{ 
                borderRadius: 3,
                overflow: 'hidden',
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                p: { xs: 2, sm: 3, md: 4 }
              }}
            >
              {/* Mobile Category Selection */}
              <Box sx={{ 
                display: { xs: 'block', sm: 'none' },
                mb: 2,
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '1px',
                  background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.1), transparent)'
                }
              }}>
                <Typography variant="subtitle1" sx={{ 
                  mb: 1.5, 
                  fontWeight: 600, 
                  color: 'text.secondary',
                  fontSize: '0.875rem'
                }}>
                  Select Category
                </Typography>
                <Box sx={{ 
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: 1,
                  pb: 2
                }}>
                  {[
                    { icon: <TelegramIcon />, label: 'Telegram', color: '#0088cc' },
                    { icon: <WhatsAppIcon />, label: 'WhatsApp', color: '#25D366' },
                    { icon: <InstagramIcon />, label: 'Instagram', color: '#E4405F' },
                    { icon: <EmailIcon />, label: 'Gmail', color: '#EA4335' },
                    { icon: <LinkedInIcon />, label: 'LinkedIn', color: '#0077B5' }
                  ].map((item, index) => (
                    <Box
                      key={index}
                      onClick={(e) => handleTabChange(e, index)}
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        p: 1,
                        borderRadius: 2,
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        backgroundColor: tabValue === index ? 'rgba(0,0,0,0.05)' : 'transparent',
                        border: tabValue === index ? `2px solid ${item.color}` : '2px solid transparent',
                        '&:hover': {
                          backgroundColor: 'rgba(0,0,0,0.05)',
                          transform: 'translateY(-2px)'
                        }
                      }}
                    >
                      <Box sx={{ 
                        width: 32, 
                        height: 32, 
                        borderRadius: '50%', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        backgroundColor: tabValue === index ? item.color : 'rgba(0,0,0,0.05)',
                        color: tabValue === index ? 'white' : item.color,
                        mb: 0.5,
                        transition: 'all 0.2s',
                        '& svg': {
                          fontSize: '1.25rem'
                        }
                      }}>
                        {item.icon}
                      </Box>
                      <Typography variant="caption" sx={{ 
                        fontWeight: 600,
                        color: tabValue === index ? 'text.primary' : 'text.secondary',
                        textAlign: 'center',
                        fontSize: '0.7rem',
                        lineHeight: 1.2
                      }}>
                        {item.label}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              {/* Desktop Category Selection */}
              <Tabs 
                value={tabValue} 
                onChange={handleTabChange} 
                centered
                sx={{
                  display: { xs: 'none', sm: 'block' },
                  borderBottom: 1,
                  borderColor: 'divider',
                  mb: 4,
                  '& .MuiTab-root': {
                    fontSize: { sm: '0.875rem', md: '1rem' },
                    fontWeight: 600,
                    minHeight: { sm: 48, md: 60 },
                    textTransform: 'none',
                    '&.Mui-selected': {
                      color: 'primary.main',
                    },
                    '& .MuiSvgIcon-root': {
                      fontSize: { sm: '1.5rem', md: '1.75rem' }
                    }
                  },
                }}
              >
                <Tab 
                  icon={<TelegramIcon sx={{ fontSize: { xs: 24, sm: 28 }, color: '#0088cc' }} />} 
                  label="Telegram" 
                />
                <Tab 
                  icon={<WhatsAppIcon sx={{ fontSize: { xs: 24, sm: 28 }, color: '#25D366' }} />} 
                  label="WhatsApp"
                />
                <Tab 
                  icon={<InstagramIcon sx={{ fontSize: { xs: 24, sm: 28 }, color: '#E4405F' }} />} 
                  label="Instagram"
                />
                <Tab 
                  icon={<EmailIcon sx={{ fontSize: { xs: 24, sm: 28 }, color: '#EA4335' }} />} 
                  label="Gmail"
                />
                <Tab 
                  icon={<LinkedInIcon sx={{ fontSize: { xs: 24, sm: 28 }, color: '#0077B5' }} />} 
                  label="LinkedIn"
                />
              </Tabs>

              <FormControl fullWidth sx={{ mb: 4 }}>
                <InputLabel id="service-select-label" sx={{
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                  transform: { xs: 'translate(8px, 8px)', sm: 'translate(14px, 16px)' },
                  '&.Mui-focused, &.MuiFormLabel-filled': {
                    transform: { xs: 'translate(14px, -9px) scale(0.75)', sm: 'translate(14px, -9px) scale(0.75)' }
                  }
                }}>Select Service</InputLabel>
                <Select
                  labelId="service-select-label"
                  id="service-select"
                  value={selectedService?.id || ''}
                  onChange={handleServiceSelect}
                  label="Select Service"
                  sx={{
                    '& .MuiSelect-select': {
                      display: 'flex',
                      alignItems: 'center',
                      gap: { xs: 1, sm: 2 },
                      py: { xs: 1, sm: 1.5 },
                      px: { xs: 1, sm: 2 },
                      fontSize: { xs: '0.875rem', sm: '1rem' },
                      height: { xs: '20px', sm: '25px' }
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      fontSize: { xs: '0.875rem', sm: '1rem' }
                    },
                    height: { xs: '40px', sm: '56px' },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'primary.main'
                    }
                  }}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        mt: 0.5,
                        '& .MuiMenuItem-root': {
                          py: { xs: 0.5, sm: 1.5 },
                          px: { xs: 1, sm: 2 },
                          minHeight: { xs: 'auto', sm: '48px' }
                        }
                      }
                    }
                  }}
                  renderValue={(selected) => {
                    if (!selected) return null;
                    
                    const option = tabValue === 0 
                      ? telegramOptions.find(opt => opt.id === selected)
                      : tabValue === 1 ? whatsappOptions.find(opt => opt.id === selected)
                      : tabValue === 2 ? instagramOptions.find(opt => opt.id === selected)
                      : tabValue === 3 ? gmailOptions.find(opt => opt.id === selected)
                      : linkedinOptions.find(opt => opt.id === selected);
                    
                    return (
                      <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: { xs: 1, sm: 2 },
                        width: '100%',
                        overflow: 'hidden'
                      }}>
                        {tabValue === 0 ? <TelegramIcon sx={{ 
                          color: '#0088cc',
                          flexShrink: 0,
                          fontSize: { xs: '1.25rem', sm: '1.5rem' }
                        }} />
                          : tabValue === 1 ? <WhatsAppIcon sx={{ 
                            color: '#25D366',
                            flexShrink: 0,
                            fontSize: { xs: '1.25rem', sm: '1.5rem' }
                          }} />
                          : tabValue === 2 ? <InstagramIcon sx={{ 
                            color: '#E4405F',
                            flexShrink: 0,
                            fontSize: { xs: '1.25rem', sm: '1.5rem' }
                          }} />
                          : tabValue === 3 ? <EmailIcon sx={{ 
                            color: '#EA4335',
                            flexShrink: 0,
                            fontSize: { xs: '1.25rem', sm: '1.5rem' }
                          }} />
                          : <LinkedInIcon sx={{ 
                            color: '#0077B5',
                            flexShrink: 0,
                            fontSize: { xs: '1.25rem', sm: '1.5rem' }
                          }} />}
                        <Box sx={{ 
                          minWidth: 0,
                          overflow: 'hidden',
                          flex: 1
                        }}>
                          <Typography 
                            variant="body1" 
                            sx={{ 
                              fontWeight: 600,
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              fontSize: { xs: '0.813rem', sm: '1rem' }
                            }}
                          >
                            {option?.name}
                          </Typography>
                          <Typography 
                            variant="body2" 
                            color="text.secondary"
                            sx={{
                              fontSize: { xs: '0.75rem', sm: '0.875rem' },
                              whiteSpace: 'nowrap'
                            }}
                          >
                            ₹{option?.price}
                          </Typography>
                        </Box>
                      </Box>
                    );
                  }}
                >
                  {tabValue === 0 ? (
                    telegramOptions.map((option) => (
                      <MenuItem key={option.id} value={option.id}>
                        <Box sx={{ 
                          display: 'flex', 
                          alignItems: 'flex-start',
                          gap: { xs: 1, sm: 2 },
                          width: '100%'
                        }}>
                          <TelegramIcon sx={{ 
                            fontSize: { xs: '1.25rem', sm: '1.5rem' }, 
                            color: '#0088cc',
                            mt: { xs: 0.25, sm: 0 }
                          }} />
                          <Box sx={{ flex: 1, minWidth: 0 }}>
                            <Typography variant="body1" sx={{ 
                              fontWeight: 600, 
                              fontSize: { xs: '0.813rem', sm: '1rem' },
                              lineHeight: { xs: 1.2, sm: 1.5 },
                              wordBreak: 'break-word'
                            }}>
                              {option.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ 
                              fontSize: { xs: '0.75rem', sm: '0.875rem' },
                              lineHeight: { xs: 1.2, sm: 1.5 }
                            }}>
                              ₹{option.price}
                            </Typography>
                          </Box>
                        </Box>
                      </MenuItem>
                    ))
                  ) : tabValue === 1 ? (
                    whatsappOptions.map((option) => (
                      <MenuItem key={option.id} value={option.id}>
                        <Box sx={{ 
                          display: 'flex', 
                          alignItems: 'flex-start',
                          gap: { xs: 1, sm: 2 },
                          width: '100%'
                        }}>
                          <WhatsAppIcon sx={{ 
                            fontSize: { xs: '1.25rem', sm: '1.5rem' }, 
                            color: '#25D366',
                            mt: { xs: 0.25, sm: 0 }
                          }} />
                          <Box sx={{ flex: 1, minWidth: 0 }}>
                            <Typography variant="body1" sx={{ 
                              fontWeight: 600, 
                              fontSize: { xs: '0.813rem', sm: '1rem' },
                              lineHeight: { xs: 1.2, sm: 1.5 },
                              wordBreak: 'break-word'
                            }}>
                              {option.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ 
                              fontSize: { xs: '0.75rem', sm: '0.875rem' },
                              lineHeight: { xs: 1.2, sm: 1.5 }
                            }}>
                              ₹{option.price}
                            </Typography>
                          </Box>
                        </Box>
                      </MenuItem>
                    ))
                  ) : tabValue === 2 ? (
                    instagramOptions.map((option) => (
                      <MenuItem key={option.id} value={option.id}>
                        <Box sx={{ 
                          display: 'flex', 
                          alignItems: 'flex-start',
                          gap: { xs: 1, sm: 2 },
                          width: '100%'
                        }}>
                          <InstagramIcon sx={{ 
                            fontSize: { xs: '1.25rem', sm: '1.5rem' }, 
                            color: '#E4405F',
                            mt: { xs: 0.25, sm: 0 }
                          }} />
                          <Box sx={{ flex: 1, minWidth: 0 }}>
                            <Typography variant="body1" sx={{ 
                              fontWeight: 600, 
                              fontSize: { xs: '0.813rem', sm: '1rem' },
                              lineHeight: { xs: 1.2, sm: 1.5 },
                              wordBreak: 'break-word'
                            }}>
                              {option.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ 
                              fontSize: { xs: '0.75rem', sm: '0.875rem' },
                              lineHeight: { xs: 1.2, sm: 1.5 }
                            }}>
                              ₹{option.price}
                            </Typography>
                          </Box>
                        </Box>
                      </MenuItem>
                    ))
                  ) : tabValue === 3 ? (
                    gmailOptions.map((option) => (
                      <MenuItem key={option.id} value={option.id}>
                        <Box sx={{ 
                          display: 'flex', 
                          alignItems: 'flex-start',
                          gap: { xs: 1, sm: 2 },
                          width: '100%'
                        }}>
                          <EmailIcon sx={{ 
                            fontSize: { xs: '1.25rem', sm: '1.5rem' }, 
                            color: '#EA4335',
                            mt: { xs: 0.25, sm: 0 }
                          }} />
                          <Box sx={{ flex: 1, minWidth: 0 }}>
                            <Typography variant="body1" sx={{ 
                              fontWeight: 600, 
                              fontSize: { xs: '0.813rem', sm: '1rem' },
                              lineHeight: { xs: 1.2, sm: 1.5 },
                              wordBreak: 'break-word'
                            }}>
                              {option.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ 
                              fontSize: { xs: '0.75rem', sm: '0.875rem' },
                              lineHeight: { xs: 1.2, sm: 1.5 }
                            }}>
                              ₹{option.price}
                            </Typography>
                          </Box>
                        </Box>
                      </MenuItem>
                    ))
                  ) : (
                    linkedinOptions.map((option) => (
                      <MenuItem key={option.id} value={option.id}>
                        <Box sx={{ 
                          display: 'flex', 
                          alignItems: 'flex-start',
                          gap: { xs: 1, sm: 2 },
                          width: '100%'
                        }}>
                          <LinkedInIcon sx={{ 
                            fontSize: { xs: '1.25rem', sm: '1.5rem' }, 
                            color: '#0077B5',
                            mt: { xs: 0.25, sm: 0 }
                          }} />
                          <Box sx={{ flex: 1, minWidth: 0 }}>
                            <Typography variant="body1" sx={{ 
                              fontWeight: 600, 
                              fontSize: { xs: '0.813rem', sm: '1rem' },
                              lineHeight: { xs: 1.2, sm: 1.5 },
                              wordBreak: 'break-word'
                            }}>
                              {option.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ 
                              fontSize: { xs: '0.75rem', sm: '0.875rem' },
                              lineHeight: { xs: 1.2, sm: 1.5 }
                            }}>
                              ₹{option.price}
                            </Typography>
                          </Box>
                        </Box>
                      </MenuItem>
                    ))
                  )}
                </Select>
              </FormControl>

              {selectedService && (
                <Card 
                  sx={{ 
                    mb: 4,
                    background: 'linear-gradient(145deg, #ffffff, #f8f9fa)',
                  }}
                >
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                      {tabValue === 0 ? (
                        <Avatar sx={{ bgcolor: 'primary.light', width: { xs: 40, sm: 48 }, height: { xs: 40, sm: 48 } }}>
                          <TelegramIcon />
                        </Avatar>
                      ) : tabValue === 1 ? (
                        <Avatar sx={{ bgcolor: 'success.light', width: { xs: 40, sm: 48 }, height: { xs: 40, sm: 48 } }}>
                          <WhatsAppIcon />
                        </Avatar>
                      ) : tabValue === 2 ? (
                        <Avatar sx={{ bgcolor: 'secondary.light', width: { xs: 40, sm: 48 }, height: { xs: 40, sm: 48 } }}>
                          <InstagramIcon />
                        </Avatar>
                      ) : tabValue === 3 ? (
                        <Avatar sx={{ bgcolor: 'error.light', width: { xs: 40, sm: 48 }, height: { xs: 40, sm: 48 } }}>
                          <EmailIcon />
                        </Avatar>
                      ) : (
                        <Avatar sx={{ bgcolor: '#0077B5', width: { xs: 40, sm: 48 }, height: { xs: 40, sm: 48 } }}>
                          <LinkedInIcon />
                        </Avatar>
                      )}
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600, fontSize: { xs: '1rem', sm: '1.1rem' } }}>
                          {selectedService.name}
                        </Typography>
                        <Chip 
                          label={`₹${selectedService.price}`} 
                          color={tabValue === 0 ? "primary" : tabValue === 1 ? "success" : tabValue === 2 ? "secondary" : tabValue === 3 ? "error" : "primary"}
                          sx={{ 
                            mt: 1,
                            backgroundColor: tabValue === 4 ? '#0077B5' : undefined,
                            '&:hover': {
                              backgroundColor: tabValue === 4 ? '#006097' : undefined,
                            }
                          }}
                        />
                      </Box>
                    </Box>
                  </CardContent>
                  <CardActions>
                    <Button
                      fullWidth
                      variant="contained"
                      color={tabValue === 0 ? "primary" : tabValue === 1 ? "success" : tabValue === 2 ? "secondary" : tabValue === 3 ? "error" : "primary"}
                      onClick={handleSubmit}
                      sx={{ 
                        py: 1.5,
                        fontSize: { xs: '0.9rem', sm: '1rem' },
                        backgroundColor: tabValue === 4 ? '#0077B5' : undefined,
                        '&:hover': {
                          backgroundColor: tabValue === 4 ? '#006097' : undefined,
                        }
                      }}
                    >
                      Get QR Code
                    </Button>
                  </CardActions>
                </Card>
              )}

              {showQR && (
                <Paper 
                  elevation={0}
                  sx={{ 
                    p: { xs: 2, sm: 3, md: 4 }, 
                    borderRadius: 3,
                    background: 'linear-gradient(145deg, #ffffff, #f8f9fa)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
                  }}
                >
                  <Typography variant="h5" gutterBottom align="center" sx={{ fontWeight: 600, fontSize: { xs: '1.1rem', sm: '1.25rem' } }}>
                    Scan QR Code
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                    <img 
                      src="https://wertrends.s3.eu-north-1.amazonaws.com/QR.jpg" 
                      alt="QR Code" 
                      style={{ 
                        maxWidth: '100%', 
                        height: 'auto',
                        borderRadius: 12,
                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                      }}
                    />
                  </Box>
                  
                  {!paymentDone ? (
                    <Button
                      variant="contained"
                      color={tabValue === 0 ? "primary" : tabValue === 1 ? "success" : tabValue === 2 ? "secondary" : tabValue === 3 ? "error" : "primary"}
                      fullWidth
                      onClick={handlePayment}
                      startIcon={tabValue === 0 ? <TelegramIcon /> : tabValue === 1 ? <WhatsAppIcon /> : tabValue === 2 ? <InstagramIcon /> : tabValue === 3 ? <EmailIcon /> : <LinkedInIcon />}
                      sx={{ 
                        py: 1.5,
                        fontSize: { xs: '0.9rem', sm: '1rem' },
                        backgroundColor: tabValue === 4 ? '#0077B5' : undefined,
                        '&:hover': {
                          backgroundColor: tabValue === 4 ? '#006097' : undefined,
                        }
                      }}
                    >
                      I Have Made Payment
                    </Button>
                  ) : (
                    <Alert severity="info" sx={{ mt: 2 }}>
                      Please send the QR code screenshot and payment proof to the WhatsApp number. You will receive your virtual number shortly.
                    </Alert>
                  )}
                </Paper>
              )}

              <Box sx={{ mt: 4, textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={handleCustomization}
                  startIcon={<BuildIcon />}
                  sx={{ 
                    borderRadius: 2,
                    borderWidth: 2,
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                    '&:hover': {
                      borderWidth: 2,
                    }
                  }}
                >
                  Need Customization?
                </Button>

                {/* Mobile Payment Buttons - Visible only on small screens */}
                <Box sx={{ display: { xs: 'flex', sm: 'none' }, flexDirection: 'column', gap: 2 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<SendIcon />}
                    onClick={() => window.open('https://wa.me/919876543210?text=I%20have%20made%20the%20payment%20for%20the%20service', '_blank')}
                    sx={{
                      borderRadius: 2,
                      px: 2,
                      py: 1.5,
                      fontSize: '0.875rem',
                      whiteSpace: 'nowrap',
                      boxShadow: 3,
                      '&:hover': {
                        boxShadow: 6,
                      },
                    }}
                  >
                    Click here if you paid
                  </Button>

                  <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<SupportAgentIcon />}
                    onClick={() => window.open('https://wa.me/919876543210?text=I%20need%20help%20with%20payment', '_blank')}
                    sx={{
                      borderRadius: 2,
                      px: 2,
                      py: 1.5,
                      fontSize: '0.875rem',
                      whiteSpace: 'nowrap',
                      boxShadow: 3,
                      '&:hover': {
                        boxShadow: 6,
                      },
                    }}
                  >
                    Not able to pay?
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Container>
        </Box>
      </ThemeProvider>
    </>
  )
}

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/buy" element={<VirtualNumberPage />} />
          </Routes>
          <Analytics />
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
