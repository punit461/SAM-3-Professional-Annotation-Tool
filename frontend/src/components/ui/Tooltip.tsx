import { useState, useRef, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

interface TooltipProps {
  content: React.ReactNode;
  shortcut?: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
}

export function Tooltip({ content, shortcut, children, position = 'bottom', delay = 400 }: TooltipProps) {
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = () => {
    timeoutRef.current = setTimeout(() => setVisible(true), delay);
  };

  const hide = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setVisible(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const positionSx: Record<string, object> = {
    top: { bottom: '100%', left: '50%', transform: 'translateX(-50%)', mb: 1 },
    bottom: { top: '100%', left: '50%', transform: 'translateX(-50%)', mt: 1 },
    left: { right: '100%', top: '50%', transform: 'translateY(-50%)', mr: 1 },
    right: { left: '100%', top: '50%', transform: 'translateY(-50%)', ml: 1 },
  };

  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }} onMouseEnter={show} onMouseLeave={hide}>
      {children}
      {visible && (
        <Box
          sx={{
            position: 'absolute',
            zIndex: 200,
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            px: 1.25,
            py: 0.75,
            borderRadius: 1.5,
            fontSize: 12,
            fontWeight: 500,
            bgcolor: '#27272a',
            color: '#fff',
            boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            ...positionSx[position],
          }}
        >
          <Typography component="span" sx={{ fontSize: 12, color: '#fff' }}>{content}</Typography>
          {shortcut && (
            <Box component="span" sx={{ px: 0.75, py: 0.25, borderRadius: 1, fontSize: 10, fontWeight: 700, bgcolor: '#3f3f46', color: '#e4e4e7' }}>
              {shortcut}
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
}
