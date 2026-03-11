import { Box, Typography } from '@mui/material';

interface EmptyStateProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  compact?: boolean;
}

export function EmptyState({ icon, title, description, compact }: EmptyStateProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', py: compact ? 3 : 5 }}>
      <Box sx={{ mb: 1.5, color: '#cbd5e1', transform: compact ? 'none' : 'scale(1.25)' }}>
        {icon}
      </Box>
      <Typography variant="body2" sx={{ fontWeight: 600, color: '#64748b' }}>{title}</Typography>
      {description && (
        <Typography variant="caption" sx={{ color: '#94a3b8', mt: 0.5 }}>{description}</Typography>
      )}
    </Box>
  );
}
