import { ChevronDown } from 'lucide-react';
import { Box, Typography } from '@mui/material';
import { Badge } from './Badge';

interface SectionHeaderProps {
  icon?: React.ReactNode;
  title: string;
  count?: number;
  collapsed?: boolean;
  onToggle?: () => void;
  action?: React.ReactNode;
}

export function SectionHeader({ icon, title, count, collapsed, onToggle, action }: SectionHeaderProps) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1 }}>
      <Box
        component={onToggle ? 'button' : 'div'}
        onClick={onToggle}
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          flex: 1,
          minWidth: 0,
          border: 0,
          background: 'transparent',
          p: 0,
          textAlign: 'left',
          cursor: onToggle ? 'pointer' : 'default',
        }}
      >
        {icon && <Box sx={{ color: '#94a3b8', flexShrink: 0, display: 'flex' }}>{icon}</Box>}
        <Typography sx={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.8, color: '#94a3b8', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{title}</Typography>
        {count !== undefined && (
          <Badge variant="surface">{count}</Badge>
        )}
        {onToggle && (
          <Box sx={{ ml: 'auto', color: '#94a3b8', display: 'flex', transform: collapsed ? 'rotate(-90deg)' : 'rotate(0deg)', transition: 'transform 200ms' }}>
            <ChevronDown size={14} />
          </Box>
        )}
      </Box>
      {action && <Box sx={{ flexShrink: 0 }}>{action}</Box>}
    </Box>
  );
}
