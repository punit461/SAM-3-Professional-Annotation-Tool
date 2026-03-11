import { Chip } from '@mui/material';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'brand' | 'surface' | 'success' | 'danger' | 'warning';
  size?: 'sm' | 'md';
}

const variants: Record<string, { bg: string; color: string }> = {
  brand: { bg: '#e4e4e7', color: '#3f3f46' },
  surface: { bg: '#f1f5f9', color: '#475569' },
  success: { bg: '#dcfce7', color: '#15803d' },
  danger: { bg: '#ffe4e6', color: '#be123c' },
  warning: { bg: '#fef3c7', color: '#b45309' },
};

const sizes: Record<string, { height: number; fontSize: number; px: number }> = {
  sm: { height: 20, fontSize: 10, px: 0.75 },
  md: { height: 22, fontSize: 12, px: 1 },
};

export function Badge({ children, variant = 'surface', size = 'sm' }: BadgeProps) {
  const variantStyles = variants[variant];
  const sizeStyles = sizes[size];

  return (
    <Chip
      label={children}
      size="small"
      sx={{
        bgcolor: variantStyles.bg,
        color: variantStyles.color,
        borderRadius: 999,
        height: sizeStyles.height,
        '& .MuiChip-label': {
          px: sizeStyles.px,
          py: 0,
          fontSize: sizeStyles.fontSize,
          fontWeight: 600,
          lineHeight: 1,
        },
      }}
    />
  );
}
