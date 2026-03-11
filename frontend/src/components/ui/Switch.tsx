import { Switch as MuiSwitch } from '@mui/material';

interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  size?: 'sm' | 'md';
}

export function Switch({ checked, onChange, label, size = 'sm' }: SwitchProps) {
  return (
    <MuiSwitch
      checked={checked}
      onChange={(_, value) => onChange(value)}
      aria-label={label}
      size={size === 'sm' ? 'small' : 'medium'}
      sx={{
        '& .MuiSwitch-switchBase.Mui-checked': {
          color: '#fff',
          '& + .MuiSwitch-track': {
            backgroundColor: '#52525b',
            opacity: 1,
          },
        },
        '& .MuiSwitch-track': {
          backgroundColor: '#cbd5e1',
          opacity: 1,
        },
      }}
    />
  );
}
