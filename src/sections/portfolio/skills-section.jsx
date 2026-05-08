import { m } from 'framer-motion';

import { Box, Stack, Container, Typography } from '@mui/material';

import { Iconify } from 'src/components/iconify';

const skills = [
  { name: 'HTML5', icon: 'devicon:html5', category: 'Frontend' },
  { name: 'CSS3', icon: 'devicon:css3', category: 'Frontend' },
  { name: 'JavaScript', icon: 'devicon:javascript', category: 'Frontend' },
  { name: 'TypeScript', icon: 'devicon:typescript', category: 'Frontend' },
  { name: 'React', icon: 'devicon:react', category: 'Frontend' },
  { name: 'Next.js', icon: 'devicon:nextjs', category: 'Frontend' },
  { name: 'Tailwind CSS', icon: 'devicon:tailwindcss', category: 'Frontend' },
  { name: 'Material-UI', icon: 'devicon:materialui', category: 'Frontend' },
  { name: 'Git', icon: 'devicon:git', category: 'Tools' },
  { name: 'GitHub', icon: 'devicon:github', category: 'Tools' },
  { name: 'VS Code', icon: 'devicon:vscode', category: 'Tools' },
  { name: 'Figma', icon: 'devicon:figma', category: 'Tools' },
  { name: 'Node.js', icon: 'devicon:nodejs', category: 'Backend' },
  { name: 'Supabase', icon: 'devicon:supabase', category: 'Backend' },
  { name: 'MariaDB', icon: 'devicon:mariadb', category: 'Backend' },
  { name: 'Golang', icon: 'devicon:go', category: 'Backend' },
];

export default function SkillsSection() {
  return (
    <Box component="section" sx={{ py: 12, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <m.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Stack direction="row" alignItems="center" justifyContent="center" spacing={1} sx={{ mb: 2 }}>
            <Iconify icon="solar:widget-5-bold-duotone" width={32} />
            <Typography variant="h2" textAlign="center" sx={{ fontWeight: 700, fontSize: { xs: '2rem', md: '2.5rem' } }}>
              Skills & Tech Stack
            </Typography>
          </Stack>
          <Typography
            variant="body1"
            textAlign="center"
            color="text.secondary"
            sx={{ mb: 8, maxWidth: 600, mx: 'auto' }}
          >
            Teknologi yang saya gunakan dalam development
          </Typography>
        </m.div>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(3, 1fr)',
              sm: 'repeat(4, 1fr)',
              md: 'repeat(6, 1fr)',
              lg: 'repeat(8, 1fr)',
            },
            gap: { xs: 2, md: 3 },
          }}
        >
          {skills.map((skill, index) => (
            <m.div
              key={index}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: { xs: 2, md: 2.5 },
                  bgcolor: 'background.paper',
                  borderRadius: 2,
                  border: (theme) => `1px solid ${theme.palette.divider}`,
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: (theme) => `0 8px 24px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.1)'}`,
                    borderColor: 'primary.main',
                  },
                }}
              >
                <Iconify 
                  icon={skill.icon} 
                  width={{ xs: 40, md: 48 }} 
                  sx={{ mb: 1 }}
                />
                <Typography 
                  variant="caption" 
                  textAlign="center" 
                  fontWeight={500}
                  sx={{ 
                    fontSize: { xs: '0.65rem', md: '0.75rem' },
                    lineHeight: 1.2,
                  }}
                >
                  {skill.name}
                </Typography>
              </Box>
            </m.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
