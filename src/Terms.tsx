import { Box, Typography, Container, Paper } from '@mui/material';
import AdSense from './AdSense';

export default function Terms() {
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
          Terms of Service
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
          Please read these terms carefully before using our services
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
            By accessing and using VirtNumbers services, you accept and agree to be bound by the terms and provision of this agreement. 
            If you do not agree to abide by the above, please do not use this service.
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
            VirtNumbers provides virtual phone numbers for various purposes including but not limited to WhatsApp verification, 
            Telegram verification, social media account creation, and business communications. Our services are delivered digitally 
            and are subject to availability.
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
            All payments must be made in advance before service delivery. We accept various payment methods including UPI, 
            digital wallets, and other secure payment options. Prices are subject to change without prior notice.
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
            We strive to deliver virtual numbers within minutes of payment confirmation. However, delivery times may vary 
            depending on service type and current demand. We are not responsible for delays caused by third-party services 
            or technical issues beyond our control.
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
            We offer refunds only in cases where we are unable to deliver the service as promised. Once a virtual number 
            has been delivered and is working, no refunds will be provided. Refund requests must be made within 24 hours 
            of purchase.
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
            6. User Responsibilities
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              mb: { xs: 2, md: 3 }, 
              lineHeight: 1.8,
              fontSize: { xs: '0.9rem', md: '1rem' }
            }}
          >
            Users are responsible for using our services in compliance with applicable laws and regulations. 
            We do not condone the use of virtual numbers for illegal activities. Users must ensure they have 
            the right to use virtual numbers for their intended purposes.
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
            7. Privacy Policy
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              mb: { xs: 2, md: 3 }, 
              lineHeight: 1.8,
              fontSize: { xs: '0.9rem', md: '1rem' }
            }}
          >
            We are committed to protecting your privacy. Your personal information is collected, used, and protected 
            in accordance with our Privacy Policy. We do not share your information with third parties without 
            your explicit consent.
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
            8. Limitation of Liability
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              mb: { xs: 2, md: 3 }, 
              lineHeight: 1.8,
              fontSize: { xs: '0.9rem', md: '1rem' }
            }}
          >
            VirtNumbers shall not be liable for any indirect, incidental, special, consequential, or punitive damages 
            resulting from your use of our services. Our total liability shall not exceed the amount paid for the 
            specific service in question.
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
            9. Changes to Terms
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              mb: { xs: 2, md: 3 }, 
              lineHeight: 1.8,
              fontSize: { xs: '0.9rem', md: '1rem' }
            }}
          >
            We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting 
            on our website. Continued use of our services after changes constitutes acceptance of the new terms.
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
            10. Contact Information
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              mb: { xs: 2, md: 3 }, 
              lineHeight: 1.8,
              fontSize: { xs: '0.9rem', md: '1rem' }
            }}
          >
            For questions about these terms or our services, please contact us:
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
            Questions About These Terms?
          </Typography>
          <Typography 
            variant="body1"
            sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}
          >
            Contact our support team for clarification on any part of these terms of service.
          </Typography>
        </Box>
        
        {/* Ad Section */}
        <Box sx={{ mt: 6 }}>
          <AdSense adSlot="6625177500" adFormat="auto" />
        </Box>
      </Container>
    </Box>
  );
} 