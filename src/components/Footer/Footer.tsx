import { Box, Typography, IconButton, Stack } from '@mui/material';
import licittudo from '../../assets/logoFooter.webp';
import InstagramIcon from '@mui/icons-material/Instagram';

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        minHeight: { xs: 'auto', md: '40vh' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        pt: { xs: 6, md: 10 },
        pb: 4,
        px: { xs: 3, md: 8 },
        background: '#001898',
        color: '#FFFFFF',
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: { xs: 5, md: 2 },
        }}
      >
        {/* Lado Esquerdo: CNPJ */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: { xs: 'center', md: 'flex-start' },
            order: { xs: 2, md: 1 },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '1rem', md: '1.2rem' },
              opacity: 0.8,
              textAlign: 'center',
            }}
          >
            CNPJ 57.727.871/0001-29
          </Typography>
        </Box>

        {/* Centro: Logo e Redes Sociais */}
        <Box
          sx={{
            flex: 1.5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            order: { xs: 1, md: 2 },
          }}
        >
          <Box
            component="img"
            src={licittudo}
            alt="Licittudo"
            sx={{
              width: { xs: '230px', md: '300px' },
              height: 'auto',
              mb: 2,
            }}
          />
          <Stack direction="row" spacing={2}>
            <IconButton
              href="https://www.instagram.com/licittudo_oficial/?hl=pt-br"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: '#FFF',
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: '#4FC3F7',
                  transform: 'scale(1.2)',
                  backgroundColor: 'transparent',
                },
              }}
            >
              <InstagramIcon sx={{ fontSize: { xs: 30, md: 40 } }} />
            </IconButton>
          </Stack>
        </Box>

        {/* Lado Direito: Whatsapp */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: { xs: 'center', md: 'flex-end' },
            order: { xs: 3, md: 3 },
          }}
        >
          <Typography
            component="a"
            href="https://wa.me/5589981328091"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              fontSize: { xs: '1rem', md: '1.2rem' },
              opacity: 0.8,
              textAlign: 'center',
              textDecoration: 'none',
              color: 'inherit',
              cursor: 'pointer',
              '&:hover': {
                opacity: 1,
                textDecoration: 'none',
              },
            }}
          >
            WhatsApp +55 89 98132-8091
          </Typography>
        </Box>
      </Box>

      {/* Copyright */}
      <Typography
        variant="caption"
        sx={{
          mt: { xs: 6, md: 10 },
          opacity: 0.5,
          textAlign: 'center',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          pt: 2,
          width: '100%',
        }}
      >
        © {new Date().getFullYear()} Licittudo. Todos os direitos reservados.
      </Typography>
    </Box>
  );
}
