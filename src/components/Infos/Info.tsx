import { Box, Typography, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

const perde = [
  'Tempo precioso com tarefas manuais e repetitivas em planilhas.',
  'Bons editais por não conseguir monitorar todas as fontes manualmente.',
  'Dinheiro ao orçar com bases de preços desatualizadas.',
  'A licitação por erros técnicos na formatação da proposta.',
  'Prazos cruciais por desorganização de documentos e certidões.',
];

const ganha = [
  'Rapidez: Orçamentos e propostas automáticas gerados em minutos.',
  'Conformidade: Propostas alinhadas às regras do TCU e Caixa.',
  'Precisão: Acesso à base SINAPI sempre atualizada e integrada.',
  'Oportunidades: Radar que encontra licitações no PNCP e portais locais.',
  'Organização: Gestão centralizada de certidões com alertas de vencimento.',
];

export function Info() {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '50vh',
        background: 'linear-gradient(180deg, #00144c 0%, #000b2e 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: { xs: 6, md: 10 },
        px: 2,
      }}
    >
      {/* COLUNAS */}
      <Box
        sx={{
          width: { xs: '100%', md: '80%' },
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: { xs: 6, md: 10 },
        }}
      >
        {/* PERDE */}
        <Box>
          <Typography
            sx={{
              color: '#fff',
              fontSize: { xs: '1.4rem', md: '1.8rem' },
              fontWeight: 'bold',
              mb: 3,
              mt: -3,
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-4px) scale(1.02)',
                boxShadow: '0 12px 30px rgba(0,0,0,0.4)',
              },
            }}
          >
            O que você <b>PERDE</b>
            <br /> sem a Licittudo
          </Typography>

          {perde.map((text, i) => (
            <Box
              key={i}
              sx={{
                background: 'linear-gradient(90deg, #7a0000 0%, #1a0000 100%)',
                p: 2,
                mb: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                width: '90%',
                borderLeft: '3px solid red',
                '&:hover': {
                  transform: 'translateY(-4px) scale(1.02)',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.4)',
                },
              }}
            >
              <CancelIcon sx={{ color: '#ff4d4d', fontSize: 28 }} />
              <Typography sx={{ color: '#fff', fontSize: '0.95rem' }}>
                {text}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* GANHA */}
        <Box>
          <Typography
            sx={{
              color: '#fff',
              fontSize: { xs: '1.4rem', md: '1.8rem' },
              fontWeight: 'bold',
              mb: 3,
              mt: -3,
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-4px) scale(1.02)',
                boxShadow: '0 12px 30px rgba(0,0,0,0.4)',
              },
            }}
          >
            O que você <b>GANHA</b>
            <br /> com a Licittudo
          </Typography>

          {ganha.map((text, i) => (
            <Box
              key={i}
              sx={{
                background: 'linear-gradient(90deg, #0b3d0b 0%, #020d02 100%)',
                p: 2,
                mb: 2,
                display: 'flex',
                alignItems: 'center',
                width: '90%',
                gap: 2,
                borderLeft: '3px solid #4caf50',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px) scale(1.02)',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.4)',
                },
              }}
            >
              <CheckCircleIcon sx={{ color: '#4caf50', fontSize: 28 }} />
              <Typography sx={{ color: '#fff', fontSize: '0.95rem' }}>
                {text}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* BOTÃO */}
      <Button
        href="https://app.licittudo.com.br/auth/jwt/sign-up"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          mt: 3,
          background: '#0004ff',
          color: '#fff',
          fontWeight: 'bold',
          fontSize: { xs: '1.3rem', sm: '1.6rem', md: '1.3rem' },
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
        Começar Agora
      </Button>
    </Box>
  );
}
