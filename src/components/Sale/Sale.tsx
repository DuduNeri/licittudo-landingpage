import { Box, Button, Typography } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import sale from '../../assets/BASE para licit site atualiz.psd (7).png';

export function Sale() {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        background: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 4, md: 6 },
        textAlign: 'center',
        pt: { xs: 4, sm: 6, md: 8 },
        px: { xs: 2, sm: 4, md: 0 }, // padding horizontal para mobile
      }}
    >
      {/* Botão inicial */}
      <Button
        href="https://app.licittudo.com.br/auth/jwt/sign-up"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          background: '#0004ff',
          color: '#fff',
          fontWeight: 'bold',
          fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' },
          px: { xs: 4, sm: 12, md: 20 },
          py: { xs: 1.5, sm: 2, md: 2.5 },
          borderRadius: '18px',
          textTransform: 'none',
          boxShadow: '0 8px 20px rgba(0,0,0,0.25)',
          transition: 'all 0.3s ease',
          '&:hover': {
            background: '#3f82bd',
            transform: 'translateY(-3px)',
            boxShadow: '0 12px 30px rgba(0,0,0,0.35)',
          },
        }}
      >
        Começar Agora
      </Button>

      {/* Texto com ícone */}
      <Typography
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: { xs: 1, sm: 2, md: 4 },
          maxWidth: 1000,
          color: '#3c3c3c',
          fontSize: { xs: '1rem', sm: '1.3rem', md: '4rem' },
          textAlign: 'center',
          mt: { xs: 2, md: 4 },
        }}
      >
        <EastIcon
          sx={{
            fontSize: { xs: '2.5rem', sm: '3rem', md: '5rem' },
            color: '#fff',
            backgroundColor: '#283a98',
            p: { xs: 1, sm: 1.5, md: 2 },
            borderRadius: 2.5,
          }}
        />
        Aproveite a nossa oferta especial de lançamento:
      </Typography>

      {/* Imagem */}
      <Box
        component="img"
        src={sale}
        alt="Oferta"
        sx={{
          width: { xs: '100%', sm: '80%', md: '60%' },
          maxWidth: 900,
          mt: { xs: 3, md: 0 },
          borderRadius: 2,
        }}
      />

      {/* Botão final */}
      <Button
        href="https://app.licittudo.com.br/auth/jwt/sign-up"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          background: '#0004ff',
          color: '#fff',
          fontWeight: 'bold',
          fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' },
          px: { xs: 4, sm: 12, md: 10 },
          py: { xs: 1.5, sm: 2, md: 2.5 },
          borderRadius: '18px',
          textTransform: 'none',
          transition: 'all 0.3s ease',
          '&:hover': {
            background: '#3f82bd',
          },
          mt: { xs: 2, md: 1 },
          mb: 10,
        }}
      >
        QUERO APROVEITAR A OFERTA DE LANÇAMENTO
      </Button>
    </Box>
  );
}
