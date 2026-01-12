import { Box, Typography, Button } from '@mui/material';
import logoLicittudo from '../../assets/logoLicittudo.png';

export function Header() {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #020b2d, #000f39)',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        paddingX: { xs: 3, md: 12 },
        paddingY: { xs: 6, md: 0 },
        gap: { xs: 3, md: 0 },
      }}
    >
      {/* CONTEÚDO ESQUERDA */}
      <Box
        sx={{
          flex: 3,
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          textAlign: { xs: 'center', md: 'left' },
          alignItems: { xs: 'center', md: 'flex-start' },
        }}
      >
        {/* Badge */}
        <Box
          sx={{
            gap: 2,
            backgroundColor: '#5fa8ff',
            width: 'fit-content',
            paddingX: { xs: 2, sm: 3 },
            paddingY: { xs: 0.5, sm: 1 },
            borderRadius: 3,
            fontWeight: 800,
            letterSpacing: 1,
            fontSize: { xs: 12, sm: 14 },
            animation: 'fadeSlide 1.2s ease-out forwards',
            '@keyframes fadeSlide': {
              '0%': {
                opacity: 0,
                transform: 'translateY(20px)',
              },
              '100%': {
                opacity: 1,
                transform: 'translateY(0)',
              },
            },
          }}
        >
          TECNOLOGIA PARA ORÇAMENTOS
        </Box>
        {/* Título */}
        <Typography
          sx={{
            fontSize: { xs: 23, sm: 38, md: 54 },
            fontWeight: 800,
            lineHeight: 1.2,
            animation: 'fadeSlide 1.2s ease-out forwards',
            '@keyframes fadeSlide': {
              '0%': {
                opacity: 0,
                transform: 'translateY(20px)',
              },
              '100%': {
                opacity: 1,
                transform: 'translateY(0)',
              },
            },
          }}
        >
          Orçamentos Ágeis, <br /> Precisos e Lucrativos <br /> para Licitações
          <br />e Obras
        </Typography>
        {/* Subtítulo */}
        <Typography
          sx={{
            fontSize: { xs: 16, md: 18 },
            color: '#cfd8ff',
            maxWidth: 520,
            animation: 'fadeSlide 1.2s ease-out forwards',
            '@keyframes fadeSlide': {
              '0%': {
                opacity: 0,
                transform: 'translateY(20px)',
              },
              '100%': {
                opacity: 1,
                transform: 'translateY(0)',
              },
            },
          }}
        >
          Transforme a forma como você cria e gerencia orçamentos de obras. Com
          o Licittudo, reduza horas de trabalho, aumente sua produtividade e
          faça propostas confiáveis em minutos.
        </Typography>
        {/* CTA */}
        <Button
          href="https://app.licittudo.com.br/auth/jwt/sign-up"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            width: 'fit-content',
            backgroundColor: '#5fa8ff',
            color: '#fff',
            paddingX: 4,
            paddingY: 1,
            borderRadius: 6,
            fontWeight: 600,
            textTransform: 'none',
            fontSize: 16,
            '&:hover': { backgroundColor: '#4a97f0' },
            animation: 'fadeSlide 1.2s ease-out forwards',
            '@keyframes fadeSlide': {
              '0%': {
                opacity: 0,
                transform: 'translateY(20px)',
              },
              '100%': {
                opacity: 1,
                transform: 'translateY(0)',
              },
            },
          }}
        >
          Acessar Oportunidades Agora
        </Button>
      </Box>
      {/* IMAGEM */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          component="img"
          src={logoLicittudo}
          alt="Licittudo"
          sx={{
            width: { xs: 280, sm: 340, md: 420, lg: 600 },
            height: 'auto',
            animation: 'fadeSlide 1.2s ease-out forwards',
            '@keyframes fadeSlide': {
              '0%': {
                opacity: 0,
                transform: 'translateY(20px)',
              },
              '100%': {
                opacity: 1,
                transform: 'translateY(0)',
              },
            },
          }}
        />
      </Box>
    </Box>
  );
}
