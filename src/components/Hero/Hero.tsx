import { Box, Typography } from '@mui/material';
import cardlicittudo from '../../assets/cardlicittudo.png';
import cardlicittudo2 from '../../assets/cardlicittudo2.png';
import cardlicittudo3 from '../../assets/cardlicittudo3.png';
import cardlicittudo4 from '../../assets/cardlicittudo4.png';

export function Hero() {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        background: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Faixa Azul */}
      <Box
        sx={{
          bgcolor: '#001244',
          color: 'white',
          px: { xs: 2, sm: 5, md: 15, lg: 30 },
          py: 2,
          borderRadius: '0 0 40px 40px',
          textAlign: 'center',
          mb: { xs: 4, md: 6 },
          width: { xs: '90%', sm: 'auto' },
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
        <Typography
          variant="subtitle2"
          sx={{
            fontWeight: 600,
            mb: 1,
            letterSpacing: 1,
            fontSize: { xs: '0.75rem', md: '1.1rem' },
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
          Com as principais bases nacionais
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: { xs: 2, sm: 4, md: 9 },
            fontWeight: 'bold',
            fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
          }}
        >
          <span>Sinapi</span>
          <span>Seinfra</span>
          <span>Orse</span>
          <span>Sicro</span>
        </Box>
      </Box>

      {/* Frase Principal */}
      <Typography
        component="h2"
        sx={{
          textAlign: 'center',
          color: '#00175c',
          fontWeight: 'bold',
          mt: 1,
          maxWidth: { xs: '90%', md: '800px' },
          px: 2,
          fontSize: {
            xs: '1.5rem',
            sm: '2rem',
            md: '2.5rem',
            lg: '3rem',
          },
          lineHeight: 1.2,
        }}
      >
        A Plataforma de Orçamentos de Obras e Licitações
      </Typography>
      <Box
        sx={{
          mt: 3,
          mb: 3,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: { xs: 2, sm: 10, md: 10 },
          cursor: 'pointer',
          '& img': {
            width: { xs: '60%', sm: '380px', md: '260px' },
            maxWidth: '100%',
            borderRadius: 2,
            transition: 'transform 0.2s ease',
          },
          '& img:hover': {
            transform: 'translateY(-2px) scale(1.02)',
          },
        }}
      >
        <img src={cardlicittudo} alt="card" />
        <img src={cardlicittudo2} alt="card" />
        <img src={cardlicittudo3} alt="card" />
        <img src={cardlicittudo4} alt="card" />
      </Box>

      <Box
        sx={{
          gap: { xs: 2, sm: 4, md: 9 },
          position: 'relative',
          width: '80%',
          height: 'auto',
          aspectRatio: '16/9',
          borderRadius: '16px',
          overflow: 'hidden',
        }}
      >
        <iframe
          src="https://www.youtube.com/embed/Ki2-IvyruyU"
          title="Apresentação Licittudo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
        ></iframe>
      </Box>
    </Box>
  );
}
