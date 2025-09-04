import { Box, Typography, Container, Paper } from '@mui/material';
import AdSense from './AdSense';

export default function PrivacyPolicy() {
  return (
    <Box sx={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      py: { xs: 3, md: 6 },
      position: 'relative'
    }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 3 } }}>
        <Typography 
          variant="h2" 
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
          variant="h5" 
          sx={{ 
            mb: { xs: 3, md: 6 }, 
            textAlign: 'center', 
            color: 'rgba(255,255,255,0.9)',
            fontSize: { xs: '1rem', sm: '1.25rem' }
          }}
        >
          How we collect, use, and protect your information
        </Typography>

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
              fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
            }}
          >
            6. Third-Party Services
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              mb: { xs: 2, md: 3 }, 
              lineHeight: 1.8,
              fontSize: { xs: '0.9rem', md: '1rem' }
            }}
          >
            We may use third-party services for payment processing, analytics, and customer support. These services have their own privacy policies, and we encourage you to review them. We are not responsible for the privacy practices of these third-party services.
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
            variant="h4" 
            sx={{ 
              mb: { xs: 2, md: 3 }, 
              color: '#667eea',
              fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
            }}
          >
            7. Your Rights
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
              fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
            }}
          >
            8. Changes to This Policy
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              mb: { xs: 2, md: 3 }, 
              lineHeight: 1.8,
              fontSize: { xs: '0.9rem', md: '1rem' }
            }}
          >
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. Your continued use of our services after changes constitutes acceptance of the updated policy.
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
            variant="h4" 
            sx={{ 
              mb: { xs: 2, md: 3 }, 
              color: '#667eea',
              fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
            }}
          >
            9. Contact Us
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              mb: { xs: 2, md: 3 }, 
              lineHeight: 1.8,
              fontSize: { xs: '0.9rem', md: '1rem' }
            }}
          >
            If you have any questions about this Privacy Policy or our privacy practices, please contact us:
          </Typography>
          <Box component="ul" sx={{ pl: { xs: 2, md: 3 }, mb: { xs: 2, md: 3 } }}>
            <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>WhatsApp: 24/7 Support Available</Typography>
            <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>Email: support@virtnumbers.com</Typography>
            <Typography component="li" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>Website: www.virtnumbers.com</Typography>
          </Box>
        </Paper>

        <Box sx={{ 
          textAlign: 'center', 
          p: { xs: 2, md: 4 }, 
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderRadius: 3,
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
        }}>
          <Typography 
            variant="h5" 
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
            sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}
          >
            Contact our support team for any questions about our privacy practices or to exercise your privacy rights.
          </Typography>
        </Box>
        
        {/* Ad Section */}
        <Box sx={{ mt: 6 }}>
          <AdSense adSlot="1720002040" adFormat="auto" />
        </Box>
      </Container>
    </Box>
  );
} 