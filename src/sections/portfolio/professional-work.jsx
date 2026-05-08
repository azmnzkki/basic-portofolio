import { m } from 'framer-motion';

import { Box, Container, Typography, Card, CardMedia, CardContent, Chip, Stack } from '@mui/material';

import { Iconify } from 'src/components/iconify';

const professionalProjects = [
  {
    title: 'HSIBS Official Website',
    type: 'Client Project',
    description: 'Website resmi HSIBS dengan modern UI dan komponen React interaktif',
    tech: ['Next.js 16', 'React', 'TypeScript', 'Tailwind CSS'],
    image: '/assets/images/profesional.png',
    isNDA: false,
  },
  {
    title: 'Dashboard E-Rapor BQ HSI',
    type: 'Client Project',
    description: 'Dashboard e-rapor untuk memudahkan admin mencetak rapor dan manage data siswa Baitul Qur\'an HSI',
    tech: ['Next.js 16', 'TypeScript', 'Dashboard', 'Admin Panel'],
    image: '/assets/images/dashboard.png',
    isNDA: false,
  },
  {
    title: 'Sistem Inventaris Sarpras',
    type: 'Client Project',
    description: 'Aplikasi pengelola inventaris untuk memudahkan admin sarpras mengelola barang di instansi/sekolahan',
    tech: ['Next.js', 'Supabase', 'TypeScript', 'Database'],
    image: '/assets/images/inventaris.png',
    isNDA: false,
  },
];

export default function ProfessionalWork() {
  return (
    <Box id="professional-work" component="section" sx={{ py: 12, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <m.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Stack direction="row" alignItems="center" justifyContent="center" spacing={1} sx={{ mb: 2 }}>
            <Iconify icon="solar:case-round-bold-duotone" width={32} />
            <Typography variant="h2" textAlign="center" sx={{ fontWeight: 700, fontSize: { xs: '2rem', md: '2.5rem' } }}>
              Professional Work
            </Typography>
          </Stack>
          <Typography
            variant="body1"
            textAlign="center"
            color="text.secondary"
            sx={{ mb: 8, maxWidth: 600, mx: 'auto' }}
          >
            Project berbayar yang telah saya kerjakan untuk berbagai klien
          </Typography>
        </m.div>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
            gap: 3,
          }}
        >
          {professionalProjects.map((project, index) => (
            <m.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                sx={{
                  height: 450,
                  maxHeight: 450,
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'translateY(-8px)' },
                  overflow: 'hidden',
                }}
              >
                <Box sx={{ position: 'relative', flexShrink: 0 }}>
                  <CardMedia
                    component="img"
                    height="180"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      bgcolor: 'grey.800',
                      filter: project.isBlurred ? 'blur(8px)' : 'none',
                      objectFit: 'cover',
                    }}
                  />
                  {project.isNDA && (
                    <Chip
                      label="NDA"
                      size="small"
                      color="warning"
                      icon={<Iconify icon="solar:lock-password-bold" />}
                      sx={{ position: 'absolute', top: 12, right: 12 }}
                    />
                  )}
                </Box>

                <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', p: 2.5, overflow: 'hidden' }}>
                  <Box sx={{ mb: 1.5 }}>
                    <Typography 
                      variant="h6" 
                      fontWeight={600}
                      sx={{ 
                        mb: 1,
                        minHeight: 56,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Chip label={project.type} size="small" color="primary" variant="outlined" />
                  </Box>

                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ 
                      mb: 1.5,
                      minHeight: 72,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: 4,
                      WebkitBoxOrient: 'vertical',
                      lineHeight: 1.5,
                    }}
                  >
                    {project.description}
                  </Typography>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, minHeight: 32 }}>
                    {project.tech.slice(0, 4).map((tech) => (
                      <Chip key={tech} label={tech} size="small" sx={{ height: 24 }} />
                    ))}
                  </Box>

                  <Box sx={{ flex: 1 }} />

                  {project.testimonial && (
                    <Box
                      sx={{
                        p: 1.5,
                        bgcolor: 'action.hover',
                        borderRadius: 1,
                        borderLeft: (theme) => `3px solid ${theme.palette.primary.main}`,
                        height: 70,
                        overflow: 'hidden',
                      }}
                    >
                      <Typography 
                        variant="body2" 
                        fontSize="0.75rem" 
                        fontStyle="italic"
                        sx={{
                          mb: 0.5,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                        }}
                      >
                        &ldquo;{project.testimonial.text}&rdquo;
                      </Typography>
                      <Typography variant="caption" color="text.secondary" fontSize="0.65rem">
                        — {project.testimonial.client}
                      </Typography>
                    </Box>
                  )}
                </CardContent>
              </Card>
            </m.div>
          ))}
        </Box>

        <m.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Typography variant="body1" color="text.secondary">
              💼 More work available upon request
            </Typography>
          </Box>
        </m.div>
      </Container>
    </Box>
  );
}
