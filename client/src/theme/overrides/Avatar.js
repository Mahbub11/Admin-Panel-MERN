// ----------------------------------------------------------------------

export default function Avatar(theme) {
  return {
    MuiAvatar: {
      styleOverrides: {
        
        colorDefault: {
          color: theme.palette.text.secondary,
          backgroundColor: theme.palette.grey[400],height:'32px',
        width:'32px',
        },
      },
    },
    MuiAvatarGroup: {
      styleOverrides: {
        avatar: {
          fontSize: 6,
          fontWeight: theme.typography.fontWeightMedium,
          '&:first-of-type': {
            fontSize: 14,
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.primary.lighter,
          },
        },
      },
    },
  };
}
