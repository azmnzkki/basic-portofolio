import { IconButton, useColorScheme } from '@mui/material';

import { useSettingsContext } from 'src/components/settings';

import { Iconify } from './iconify';

export function ThemeToggle() {
  const settings = useSettingsContext();
  const { mode, setMode } = useColorScheme();

  const handleToggle = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark';
    // Update both Material-UI mode and settings
    setMode(newMode);
    settings.setField('colorScheme', newMode);
  };

  return (
    <IconButton
      onClick={handleToggle}
      sx={{
        position: 'fixed',
        top: 20,
        right: 20,
        zIndex: 9999,
        bgcolor: 'background.paper',
        boxShadow: 3,
        border: 1,
        borderColor: 'divider',
        '&:hover': { 
          bgcolor: 'action.hover',
          transform: 'scale(1.1)',
        },
        transition: 'all 0.3s',
      }}
    >
      <Iconify
        icon={mode === 'dark' ? 'solar:sun-bold' : 'solar:moon-bold'}
        width={24}
      />
    </IconButton>
  );
}
