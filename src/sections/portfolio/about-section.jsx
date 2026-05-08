import { m } from 'framer-motion';

import { Box, Stack, Button, Container, Typography } from '@mui/material';

import { Iconify } from 'src/components/iconify';

const funFacts = [
  { icon: 'solar:code-bold', text: 'Passionate about Web Development', color: '#2196F3' },
  { icon: 'solar:book-bold', text: 'Always Learning New Tech', color: '#FF9800' },
  { icon: 'solar:users-group-rounded-bold', text: 'Open to Collaboration', color: '#4CAF50' },
  { icon: 'solar:star-bold', text: 'Quality-Focused', color: '#9C27B0' },
];

export default function AboutSection() {
  return (
    <Box component="section" sx={{ py: 12, bgcolor: 'background.paper' }}>
      <Container maxWidth="md">
        <m.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Stack direction="row" alignItems="center" justifyContent="center" spacing={1} sx={{ mb: 2 }}>
            <Iconify icon="solar:user-bold-duotone" width={32} />
            <Typography variant="h2" textAlign="center" sx={{ fontWeight: 700, fontSize: { xs: '2rem', md: '2.5rem' } }}>
              About Me
            </Typography>
          </Stack>
          <Typography
            variant="body1"
            textAlign="center"
            color="text.secondary"
            sx={{ mb: 8, maxWidth: 600, mx: 'auto' }}
          >
            Siapa saya di balik kode-kode ini
          </Typography>
        </m.div>

        <Stack spacing={6} alignItems="center">
          {/* Photo */}
          <m.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Box
              component="img"
              src="/assets/images/home/me.jpg"
              alt="About Me"
              sx={{
                width: { xs: 200, md: 250 },
                height: { xs: 200, md: 250 },
                borderRadius: '50%',
                objectFit: 'cover',
                border: (theme) => `4px solid ${theme.palette.primary.main}`,
                boxShadow: (theme) => `0 8px 32px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.15)'}`,
              }}
            />
          </m.div>

          {/* Description */}
          <m.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Typography 
              variant="body1" 
              color="text.secondary" 
              textAlign="center"
              lineHeight={1.8}
              sx={{ maxWidth: 700, mx: 'auto', fontSize: { xs: '0.95rem', md: '1rem' } }}
            >
              Halo! Saya seorang self-taught developer yang memulai perjalanan coding dari nol di awal 2023.
              Yang awalnya cuma iseng belajar HTML, sekarang udah bisa bikin full-stack web apps. Motivasi
              saya simpel: pengen bikin produk digital yang bermanfaat dan terus belajar teknologi baru.
              Sekarang fokus ke React ecosystem dan mulai explore backend development.
            </Typography>
          </m.div>

          {/* Fun Facts Grid */}
          <m.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ width: '100%' }}
          >
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                gap: 2,
                maxWidth: 600,
                mx: 'auto',
              }}
            >
              {funFacts.map((fact, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    p: 2,
                    bgcolor: 'background.default',
                    borderRadius: 2,
                    border: (theme) => `1px solid ${theme.palette.divider}`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: (theme) => `0 4px 12px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.1)'}`,
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      bgcolor: 'action.hover',
                    }}
                  >
                    <Iconify icon={fact.icon} width={24} sx={{ color: fact.color }} />
                  </Box>
                  <Typography variant="body2" fontWeight={500}>
                    {fact.text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </m.div>

          {/* Download CV Button */}
          <m.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              variant="contained"
              size="large"
              startIcon={<Iconify icon="solar:download-bold" />}
              href="/assets/images/cv.pdf"
              download="Azman-Zakki-CV.pdf"
              component="a"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ 
                px: 4,
                py: 1.5,
                fontSize: '1rem',
              }}
            >
              Download CV
            </Button>
          </m.div>
        </Stack>
      </Container>
    </Box>
  );
}
