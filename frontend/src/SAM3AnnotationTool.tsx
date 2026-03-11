import { useEffect, useRef } from 'react';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import App from './App';
import { sam3MuiTheme } from './muiTheme';
import { setApiBaseUrl } from './services/api';

export interface SAM3AnnotationToolProps {
  /** Backend API base URL, e.g. "http://localhost:8000/api" or "/api".
   *  Defaults to "/api". */
  apiBaseUrl?: string;
  /** Optional CSS class name applied to the outer container. */
  className?: string;
  /** Optional inline styles for the outer container. */
  style?: React.CSSProperties;
}

/**
 * Self-contained SAM3 Annotation Tool component.
 *
 * Renders the full annotation UI (canvas, toolbar, sidebar).
 * The component fills its parent container — make sure the parent has
 * explicit dimensions (e.g. `height: 100vh` or `height: 600px`).
 */
export function SAM3AnnotationTool({
  apiBaseUrl = '/api',
  className,
  style,
}: SAM3AnnotationToolProps) {
  const configured = useRef(false);

  useEffect(() => {
    if (!configured.current) {
      setApiBaseUrl(apiBaseUrl);
      configured.current = true;
    }
  }, [apiBaseUrl]);

  return (
    <Box className={className} style={{ height: '100%', ...style }}>
      <ThemeProvider theme={sam3MuiTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Box>
  );
}
