import { m } from 'framer-motion';

import { Box, Chip, Card, Stack, Container, CardMedia, Typography } from '@mui/material';

import { Iconify } from 'src/components/iconify';

const journeyData = [
  {
    phase: 'HTML & Tailwind CSS',
    ahaMoment: 'Pertama kali bikin layout responsive tanpa tutorial!',
    skills: ['HTML5', 'Tailwind CSS', 'Flexbox', 'Grid'],
    project: {
      title: 'Landing Page Pertama',
      image: '/assets/images/html.png',
    },
  },
  {
    phase: 'JavaScript & DOM Manipulation',
    ahaMoment: 'Akhirnya paham kenapa addEventListener itu penting',
    skills: ['JavaScript', 'ES6+', 'DOM', 'Async/Await'],
    project: {
      title: 'Bookshelf App',
      image: '/assets/images/js.png',
    },
  },
  {
    phase: 'React & Component Thinking',
    ahaMoment: 'Form validation dengan Zod bikin development jadi lebih smooth!',
    skills: ['React 19', 'Next.js 15', 'react-hook-form', 'Zod'],
    project: {
      title: 'Coming Soon Landing Page',
      image: '/assets/images/react.png',
    },
  },
  {
    phase: 'Next.js & Full-Stack',
    ahaMoment: 'React Query untuk data fetching & caching bikin app jadi super smooth!',
    skills: ['Next.js 15', 'React Query', 'API Integration', 'localStorage'],
    project: {
      title: 'MyQur\'an - Digital Al-Qur\'an',
      image: '/assets/images/nextjs.png',
    },
  },
  {
    phase: 'Professional Development',
    ahaMoment: 'Kerja dengan real client mengajarkan soft skill yang gak ada di tutorial',
    skills: ['TypeScript', 'Next.js', 'React', 'Golang'],
    isNow: true,
  },
];

export default function JourneyTimeline() {
  return (
    <Box component="section" sx={{ py: 12, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <m.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h2" textAlign="center" sx={{ mb: 2, fontWeight: 700, fontSize: { xs: '2rem', md: '2.5rem' } }}>
            My Learning Journey
          </Typography>
          <Typography
            variant="body1"
            textAlign="center"
            color="text.secondary"
            sx={{ mb: 8, maxWidth: 600, mx: 'auto' }}
          >
            Setiap fase punya cerita dan pelajaran berharga
          </Typography>
        </m.div>

        <Stack spacing={{ xs: 4, md: 6 }} sx={{ position: 'relative' }}>
          {/* Timeline Line */}
          <Box
            sx={{
              position: 'absolute',
              left: { xs: 20, md: '50%' },
              top: 0,
              bottom: 0,
              width: 2,
              bgcolor: 'divider',
              transform: { md: 'translateX(-50%)' },
            }}
          />

          {journeyData.map((item, index) => (
            <m.div
              key={index}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Stack
                direction={{ xs: 'row', md: index % 2 === 0 ? 'row' : 'row-reverse' }}
                spacing={{ xs: 2, md: 4 }}
                alignItems="center"
              >
                <Box sx={{ flex: 1, textAlign: { xs: 'left', md: index % 2 === 0 ? 'right' : 'left' }, display: { xs: 'none', md: 'block' } }}>
                  <Stack spacing={2} alignItems={{ md: index % 2 === 0 ? 'flex-end' : 'flex-start' }}>
                    {item.isNow && (
                      <Chip
                        label="Now"
                        size="small"
                        color="primary"
                        icon={<Iconify icon="solar:star-bold" />}
                      />
                    )}
                    <Typography variant="h5" fontWeight={600}>
                      {item.phase}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" fontStyle="italic">
                      💡 {item.ahaMoment}
                    </Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ gap: 1 }}>
                      {item.skills.map((skill) => (
                        <Chip key={skill} label={skill} size="small" variant="outlined" />
                      ))}
                    </Stack>
                  </Stack>
                </Box>

                {/* Timeline Dot */}
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    flexShrink: 0,
                    borderRadius: '50%',
                    bgcolor: item.isNow ? 'primary.main' : 'primary.main',
                    border: (theme) => `4px solid ${theme.palette.background.paper}`,
                    boxShadow: 3,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1,
                  }}
                >
                  <Iconify
                    icon={item.isNow ? 'solar:star-bold' : 'solar:check-circle-bold'}
                    sx={{ color: 'white' }}
                  />
                </Box>

                <Box sx={{ flex: 1 }}>
                  {/* Mobile Content */}
                  <Box sx={{ display: { xs: 'block', md: 'none' }, mb: 2 }}>
                    <Stack spacing={1.5}>
                      {item.isNow && (
                        <Chip
                          label="Now"
                          size="small"
                          color="primary"
                          icon={<Iconify icon="solar:star-bold" />}
                          sx={{ alignSelf: 'flex-start' }}
                        />
                      )}
                      <Typography variant="h6" fontWeight={600}>
                        {item.phase}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" fontStyle="italic">
                        💡 {item.ahaMoment}
                      </Typography>
                      <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ gap: 1 }}>
                        {item.skills.map((skill) => (
                          <Chip key={skill} label={skill} size="small" variant="outlined" />
                        ))}
                      </Stack>
                    </Stack>
                  </Box>

                  {item.project && (
                    <Card sx={{ maxWidth: { xs: '100%', md: 300 } }}>
                      <CardMedia
                        component="img"
                        height="160"
                        image={item.project.image}
                        alt={item.project.title}
                        sx={{ bgcolor: 'grey.800' }}
                      />
                      <Box sx={{ p: 2 }}>
                        <Typography variant="subtitle2">{item.project.title}</Typography>
                      </Box>
                    </Card>
                  )}
                </Box>
              </Stack>
            </m.div>
          ))}
        </Stack>

        {/* Now Learning Badge */}
        <m.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Chip
              label="🚀 Currently Learning: TypeScript, Testing, DevOps"
              color="primary"
              size="large"
              sx={{ py: 3, px: 2, fontSize: '1rem' }}
            />
          </Box>
        </m.div>
      </Container>
    </Box>
  );
}
