import { useEffect } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { useColorScheme, ThemeProvider as ThemeVarsProvider } from '@mui/material/styles';

import { useSettingsContext } from 'src/components/settings';

import { createTheme } from './create-theme';
import { Rtl } from './with-settings/right-to-left';

// ----------------------------------------------------------------------

function ColorSchemeSync() {
  const settings = useSettingsContext();
  const { setMode } = useColorScheme();

  useEffect(() => {
    setMode(settings.state.colorScheme);
  }, [settings.state.colorScheme, setMode]);

  return null;
}

// ----------------------------------------------------------------------

export function ThemeProvider({ themeOverrides, children, defaultMode, modeStorageKey, ...other }) {
  const settings = useSettingsContext();

  const theme = createTheme({
    settingsState: settings.state,
    themeOverrides,
  });

  return (
    <ThemeVarsProvider 
      disableTransitionOnChange 
      theme={theme} 
      defaultMode={settings.state.colorScheme}
      modeStorageKey={modeStorageKey}
      {...other}
    >
      <ColorSchemeSync />
      <CssBaseline />
      <Rtl direction={settings.state.direction}>{children}</Rtl>
    </ThemeVarsProvider>
  );
}
