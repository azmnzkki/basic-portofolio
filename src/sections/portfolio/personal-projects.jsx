import { useState } from 'react';
import { m } from 'framer-motion';

import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Stack,
  Button,
  IconButton,
  ToggleButtonGroup,
  ToggleButton,
} from '@mui/material';

import { Iconify } from 'src/components/iconify';

const personalProjects = [
  {
    title: 'Landing Page 1',
    description: 'Modern landing page dengan design clean dan interactive elements',
    tech: ['HTML5', 'Tailwind CSS', 'JavaScript'],
    image: '/assets/images/landing-page.png',
    liveUrl: 'https://azmnzkki.github.io/marektplace-web/',
    githubUrl: 'https://github.com/azmnzkki/marektplace-web',
    featured: true,
  },
  {
    title: 'Landing Page 2',
    description: 'Creative landing page dengan animasi smooth dan responsive layout',
    tech: ['HTML5', 'Tailwind CSS', 'JavaScript'],
    image: '/assets/images/landing-page2.png',
    liveUrl: 'https://azmnzkki.github.io/company-web-profile/',
    githubUrl: 'https://github.com/azmnzkki/company-web-profile',
    featured: true,
  },
  {
    title: 'Landing Page 3',
    description: 'Professional landing page dengan UI modern dan user-friendly',
    tech: ['HTML5', 'Tailwind CSS', 'JavaScript'],
    image: '/assets/images/landing-page3.png',
    liveUrl: 'https://azmnzkki.github.io/blog-website/',
    githubUrl: 'https://github.com/azmnzkki/blog-website',
    featured: true,
  },
];

const techFilters = ['All', 'HTML5', 'Tailwind CSS', 'JavaScript'];

export default function PersonalProjects() {
  const [filter, setFilter] = useState('All');

  const filteredProjects =
    filter === 'All'
      ? personalProjects
      : personalProjects.filter((project) => project.tech.includes(filter));

  return (
    <Box component="section" sx={{ py: 12, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <m.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Stack direction="row" alignItems="center" justifyContent="center" spacing={1} sx={{ mb: 2 }}>
            <Iconify icon="solar:code-square-bold-duotone" width={32} />
            <Typography variant="h2" textAlign="center" sx={{ fontWeight: 700, fontSize: { xs: '2rem', md: '2.5rem' } }}>
              Personal Projects
            </Typography>
          </Stack>
          <Typography
            variant="body1"
            textAlign="center"
            color="text.secondary"
            sx={{ mb: 6, maxWidth: 600, mx: 'auto' }}
          >
            Side projects yang saya buat untuk belajar dan eksperimen
          </Typography>
        </m.div>

        {/* Filter Buttons */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
          <ToggleButtonGroup
            value={filter}
            exclusive
            onChange={(e, newFilter) => newFilter && setFilter(newFilter)}
            aria-label="tech filter"
          >
            {techFilters.map((tech) => (
              <ToggleButton key={tech} value={tech}>
                {tech}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Box>

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
          {filteredProjects.map((project, index) => (
            <m.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                sx={{
                  height: 400,
                  maxHeight: 400,
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'translateY(-8px)' },
                  overflow: 'hidden',
                }}
              >
                {project.featured && (
                  <Chip
                    label="Featured"
                    size="small"
                    color="primary"
                    icon={<Iconify icon="solar:star-bold" />}
                    sx={{ position: 'absolute', top: 12, right: 12, zIndex: 1 }}
                  />
                )}

                <CardMedia
                  component="img"
                  height="180"
                  image={project.image}
                  alt={project.title}
                  sx={{ bgcolor: 'grey.800', objectFit: 'cover', flexShrink: 0 }}
                />

                <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', p: 2.5, overflow: 'hidden' }}>
                  <Typography 
                    variant="h6" 
                    fontWeight={600}
                    sx={{ 
                      mb: 1.5,
                      height: 48,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
                    {project.title}
                  </Typography>

                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ 
                      mb: 1.5,
                      height: 60,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
                    {project.description}
                  </Typography>

                  <Box sx={{ mb: 1.5, display: 'flex', flexWrap: 'wrap', gap: 0.5, height: 28 }}>
                    {project.tech.slice(0, 3).map((tech) => (
                      <Chip key={tech} label={tech} size="small" variant="outlined" sx={{ height: 24 }} />
                    ))}
                  </Box>

                  <Box sx={{ flex: 1 }} />

                  <Stack direction="row" spacing={1}>
                    <Button
                      size="small"
                      variant="contained"
                      startIcon={<Iconify icon="solar:eye-bold" />}
                      href={project.liveUrl}
                      target="_blank"
                      fullWidth
                    >
                      Demo
                    </Button>
                    <IconButton
                      size="small"
                      href={project.githubUrl}
                      target="_blank"
                      sx={{ border: 1, borderColor: 'divider' }}
                    >
                      <Iconify icon="mdi:github" />
                    </IconButton>
                  </Stack>
                </CardContent>
              </Card>
            </m.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
