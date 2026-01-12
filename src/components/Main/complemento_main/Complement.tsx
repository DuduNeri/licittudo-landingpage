import { Box, Typography } from '@mui/material';
import notebook from '../../../assets/cardnotebook.png';

export function Complement() {
  return (
    <Box
      sx={{
        width: '100%',
        background: '#00144c',
        minHeight: { xs: 'auto', md: '50vh' },
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'flex-end',
        position: 'relative',
        overflow: 'hidden',
        mt: { xs: -4, md: -10.4 },
        pb: { xs: 4, md: 0 },
      }}
    >
      {/* FAIXA */}
      <Box
        sx={{
          background: '#0032c4',
          display: 'inline-flex',
          alignItems: 'center',
          color: '#fff',

          pl: { xs: 3, sm: 9 },
          pr: { xs: 8, sm: 38 },
          py: { xs: 1, sm: 3 },

          borderRadius: { xs: '14px', sm: '20px' },
          fontWeight: 'bold',

          position: 'relative',
          zIndex: 1,
          mr: { xs: 0, md: -100 },
          mb: { xs: 3, md: 40 },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: '1.6rem', sm: '4rem' },
            fontWeight: 'bold',
            lineHeight: 1,
            whiteSpace: 'nowrap',
          }}
        >
          Nossos Serviços
        </Typography>
      </Box>
      <Typography
        sx={{
          color: '#fff',
          fontSize: { xs: '0.95rem', sm: '3rem' },
          mt: { xs: -1, sm: 40 },
          mb: { xs: 2, md: 30 },
          ml: { xs: 2, sm: 2 },
          textAlign: 'center',
          maxWidth: '600px',
        }}
      >
        Soluções completas para orçamentos, licitações e gestão de obras
      </Typography>

      {/* IMAGEM */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,

          width: { xs: 220, sm: 320, md: 600 },
          maxWidth: '100%',

          alignSelf: { xs: 'flex-end', md: 'auto' },
          mt: { xs: 1, md: 0 },
        }}
      >
        <img
          src={notebook}
          alt=""
          style={{
            width: '100%',
            display: 'block',
          }}
        />
      </Box>
    </Box>
  );
}
