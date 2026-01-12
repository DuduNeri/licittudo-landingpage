import { Box, Button } from '@mui/material';

export function ComplementoCardInfo() {
  return (
    <Box
      sx={{
        width: '100%',
        background: '#00144c',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        px: { xs: 2, md: 4 },
        py: { xs: 3, md: 6 },
      }}
    >
      <Button
        href="https://app.licittudo.com.br/auth/jwt/sign-up"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          mt: { xs: -9, md: -9 },
          background: '#0004ff',
          color: '#fff',
          fontWeight: 'bold',
          fontSize: { xs: '1.3rem', sm: '1.6rem', md: '2rem' },
          px: { xs: 4, sm: 12 },
          py: { xs: 1.6, sm: 2 },
          borderRadius: '18px',
          textTransform: 'none',
          boxShadow: '0 12px 30px rgba(0,0,0,0.35)',
          transition: 'all 0.3s ease',
          '&:hover': {
            background: '#3f82bd',
            transform: 'translateY(-3px)',
            boxShadow: '0 18px 40px rgba(0,0,0,0.45)',
          },
        }}
      >
        Assinar a LICITTUDO
      </Button>
    </Box>
  );
}
