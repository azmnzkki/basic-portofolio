import { useState } from 'react';
import { m } from 'framer-motion';

import {
  Box,
  Chip,
  Stack,
  Alert,
  Button,
  Container,
  TextField,
  Typography,
  IconButton,
  Card,
} from '@mui/material';

import { Iconify } from 'src/components/iconify';

const socialLinks = [
  { icon: 'mdi:github', url: 'https://github.com/azmnzkki', label: 'GitHub' },
  { icon: 'mdi:linkedin', url: 'https://www.linkedin.com/in/azman-zakki-687177291/', label: 'LinkedIn' },
  { icon: 'mdi:whatsapp', url: 'https://wa.link/m11eos', label: 'WhatsApp' },
  { icon: 'mdi:instagram', url: 'https://www.instagram.com/az.aakki/', label: 'Instagram' },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      console.log('Sending form data:', formData);
      
      const response = await fetch('https://formspree.io/f/mrejypkp', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      console.log('Response status:', response.status);
      
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        console.log('Form submitted successfully!');
      } else {
        const errorData = await response.json();
        console.error('Form submission failed:', errorData);
        alert('Gagal mengirim pesan. Coba lagi nanti.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Terjadi error: ' + error.message);
    }
  };

  return (
    <Box id="contact" component="section" sx={{ py: 12, bgcolor: 'background.default' }}>
      <Container maxWidth="md">
        <m.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Stack direction="row" alignItems="center" justifyContent="center" spacing={1} sx={{ mb: 2 }}>
            <Iconify icon="solar:letter-bold-duotone" width={32} />
            <Typography variant="h2" textAlign="center" sx={{ fontWeight: 700, fontSize: { xs: '2rem', md: '2.5rem' } }}>
              Let&apos;s Work Together
            </Typography>
          </Stack>
          <Typography
            variant="body1"
            textAlign="center"
            color="text.secondary"
            sx={{ mb: 2, maxWidth: 600, mx: 'auto' }}
          >
            Punya project atau opportunity? Mari diskusi!
          </Typography>
          <Stack direction="row" justifyContent="center" sx={{ mb: 8 }}>
            <Chip
              label="✅ Open to Freelance"
              color="primary"
              size="medium"
              sx={{ fontSize: '0.9rem', py: 2.5 }}
            />
          </Stack>
        </m.div>

        {/* Contact Form Card */}
        <m.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: 3,
              border: (theme) => `1px solid ${theme.palette.divider}`,
              boxShadow: (theme) => theme.palette.mode === 'dark' 
                ? '0 8px 32px rgba(0,0,0,0.4)' 
                : '0 8px 32px rgba(0,0,0,0.08)',
            }}
          >
            <Stack spacing={3}>
              <Typography variant="h5" fontWeight={600} textAlign="center">
                Send me a message
              </Typography>

              {submitted && (
                <Alert severity="info" onClose={() => setSubmitted(false)}>
                  Pesan terkirim! Saya akan balas secepatnya.
                </Alert>
              )}

              <Box component="form" onSubmit={handleSubmit}>
                <Stack spacing={2.5}>
                  <TextField
                    fullWidth
                    label="Nama"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                  <TextField
                    fullWidth
                    label="Pesan"
                    multiline
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth
                    startIcon={<Iconify icon="solar:letter-bold" />}
                    sx={{ py: 1.5 }}
                  >
                    Kirim Pesan
                  </Button>
                </Stack>
              </Box>
            </Stack>
          </Card>
        </m.div>

        {/* Contact Info */}
        <m.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Stack spacing={4} alignItems="center" sx={{ mt: 6 }}>
            {/* Social Links */}
            <Box>
              <Typography variant="h6" fontWeight={600} textAlign="center" gutterBottom>
                Connect with me
              </Typography>
              <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 2 }}>
                {socialLinks.map((social) => (
                  <IconButton
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      bgcolor: 'action.hover',
                      transition: 'all 0.3s',
                      '&:hover': { 
                        bgcolor: 'primary.main', 
                        color: 'white',
                        transform: 'translateY(-4px)',
                      },
                    }}
                  >
                    <Iconify icon={social.icon} width={24} />
                  </IconButton>
                ))}
              </Stack>
            </Box>

            {/* Direct Email */}
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Direct Email
              </Typography>
              <Button
                variant="outlined"
                size="large"
                href="mailto:azmanzakki16@gmail.com"
                startIcon={<Iconify icon="solar:letter-bold" />}
                sx={{ mt: 1 }}
              >
                azmanzakki16@gmail.com
              </Button>
            </Box>

            {/* Info Box */}
            <Box
              sx={{
                p: 3,
                bgcolor: 'action.hover',
                borderRadius: 2,
                border: (theme) => `1px solid ${theme.palette.divider}`,
                maxWidth: 400,
                width: '100%',
              }}
            >
              <Typography variant="body2" color="text.secondary" textAlign="center" lineHeight={2}>
                💼 Available for freelance projects
                <br />
                ⏰ Response time: Usually within 24 hours
                <br />
                🌍 Timezone: WIB (GMT+7)
              </Typography>
            </Box>
          </Stack>
        </m.div>

        {/* Footer */}
        <Box sx={{ mt: 12, pt: 6, borderTop: (theme) => `1px solid ${theme.palette.divider}` }}>
          <Stack spacing={3} alignItems="center">
            {/* Social Links */}
            <Stack direction="row" spacing={2}>
              {socialLinks.map((social) => (
                <IconButton
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    bgcolor: 'action.hover',
                    transition: 'all 0.3s',
                    '&:hover': { 
                      bgcolor: 'primary.main', 
                      color: 'white',
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <Iconify icon={social.icon} width={20} />
                </IconButton>
              ))}
            </Stack>

            {/* Name & Tagline */}
            <Stack spacing={0.5} alignItems="center">
              <Typography variant="h6" fontWeight={600}>
                Azman Zakki
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Junior Web Developer | IT Support
              </Typography>
            </Stack>

            {/* Copyright */}
            <Typography variant="body2" color="text.secondary" textAlign="center">
              © {new Date().getFullYear()} Azman Zakki. Made with ❤️ using React & Material-UI
            </Typography>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
