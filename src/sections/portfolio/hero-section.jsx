import { m } from 'framer-motion';

import { Box, Stack, Button, Avatar, Container, Typography } from '@mui/material';

import { Iconify } from 'src/components/iconify';

export default function HeroSection() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      component="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: `
          radial-gradient(ellipse at top left, #0a1929 0%, transparent 50%),
          radial-gradient(ellipse at top right, #001e3c 0%, transparent 50%),
          radial-gradient(ellipse at bottom, #0d1b2a 0%, transparent 50%),
          linear-gradient(135deg, #0a1929 0%, #001e3c 50%, #0d1b2a 100%)
        `,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 50%, rgba(25, 118, 210, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(33, 150, 243, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 20%, rgba(30, 136, 229, 0.12) 0%, transparent 50%)
          `,
          animation: 'pulse 8s ease-in-out infinite',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle, rgba(255, 255, 255, 0.8) 1.5px, transparent 1.5px),
            radial-gradient(circle, rgba(255, 255, 255, 0.6) 1px, transparent 1px),
            radial-gradient(circle, rgba(255, 255, 255, 0.9) 2px, transparent 2px),
            radial-gradient(circle, rgba(255, 255, 255, 0.7) 1px, transparent 1px),
            radial-gradient(circle, rgba(255, 255, 255, 0.5) 1.5px, transparent 1.5px),
            radial-gradient(circle, rgba(255, 255, 255, 0.8) 1px, transparent 1px)
          `,
          backgroundSize: '200px 200px, 150px 150px, 250px 250px, 180px 180px, 220px 220px, 170px 170px',
          backgroundPosition: '0 0, 60px 80px, 130px 200px, 90px 120px, 180px 50px, 40px 160px',
          animation: 'float 25s ease-in-out infinite, twinkle 4s ease-in-out infinite',
        },
        '@keyframes pulse': {
          '0%, 100%': {
            opacity: 1,
            transform: 'scale(1)',
          },
          '50%': {
            opacity: 0.8,
            transform: 'scale(1.05)',
          },
        },
        '@keyframes float': {
          '0%': {
            transform: 'translate(0, 0)',
          },
          '25%': {
            transform: 'translate(10px, -15px)',
          },
          '50%': {
            transform: 'translate(-5px, -25px)',
          },
          '75%': {
            transform: 'translate(-15px, -10px)',
          },
          '100%': {
            transform: 'translate(0, 0)',
          },
        },
        '@keyframes twinkle': {
          '0%, 100%': {
            opacity: 0.4,
          },
          '50%': {
            opacity: 1,
          },
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Stack spacing={4} alignItems="center" textAlign="center">
          <m.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Avatar
              sx={{
                width: { xs: 120, md: 180 },
                height: { xs: 120, md: 180 },
                border: '4px solid #1976d2',
                boxShadow: '0 0 40px rgba(25, 118, 210, 0.4)',
              }}
              src="/assets/images/home/me.jpg"
              alt="Developer Avatar"
            />
          </m.div>

          <m.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Typography 
              variant="h1" 
              sx={{ 
                fontWeight: 800, 
                mb: 2, 
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                color: '#ffffff',
              }}
            >
              Azman Zakki
            </Typography>
            <Typography
              variant="h4"
              sx={{ 
                color: 'rgba(255, 255, 255, 0.8)', 
                fontWeight: 400, 
                maxWidth: 700, 
                mx: 'auto',
                fontSize: { xs: '1.25rem', md: '1.75rem' }
              }}
            >
              Junior Web Developer | IT Support
            </Typography>
          </m.div>

          <m.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button
                variant="contained"
                size="large"
                onClick={() => scrollToSection('professional-work')}
                startIcon={<Iconify icon="solar:case-round-bold" />}
                fullWidth={{ xs: true, sm: false }}
                sx={{
                  bgcolor: '#1976d2',
                  color: '#ffffff',
                  '&:hover': {
                    bgcolor: '#1565c0',
                    color: '#ffffff',
                  }
                }}
              >
                Lihat Project
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => scrollToSection('contact')}
                startIcon={<Iconify icon="solar:letter-bold" />}
                fullWidth={{ xs: true, sm: false }}
                sx={{
                  color: '#ffffff',
                  borderColor: 'rgba(255, 255, 255, 0.5)',
                  '&:hover': {
                    borderColor: '#ffffff',
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    color: '#ffffff',
                  }
                }}
              >
                Hubungi Saya
              </Button>
            </Stack>
          </m.div>
        </Stack>
      </Container>
    </Box>
  );
}
