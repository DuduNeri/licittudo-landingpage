import { Box, Button, Typography } from '@mui/material';
import card from '../../assets/cardwaldir.png';
import licitLogo from '../../assets/logolicit.png';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export function Card() {
  return (
    <Box
      sx={{
        width: '100%',
        background: '#fff',
        position: 'relative',
        px: { xs: 3, sm: 4, md: 8 },
        pt: { xs: 4, md: 6 },
        overflow: 'hidden',
      }}
    >
      {/* LOGO */}
      <Box
        sx={{ display: 'flex', justifyContent: 'center', mb: { xs: 2, md: 4 } }}
      >
        <Box
          component="img"
          src={licitLogo}
          alt="Licittudo"
          sx={{ width: { xs: 70, md: 90 } }}
        />
      </Box>

      {/* CONTEÚDO */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: 1, md: 0 },
          alignSelf: { xs: 'center', md: 'flex-end' },
          mt: -9,
        }}
      >
        {/* TEXTO */}
        <Box
          sx={{
            maxWidth: { xs: '100%', md: 600 },
            textAlign: { xs: 'center', md: 'left' },
            alignSelf: { xs: 'center', md: 'flex-start' },
            zIndex: 2,
            mt: 8,
          }}
        >
          <Typography
            sx={{
              background: '#253795',
              color: '#fff',
              px: 3,
              py: 1,
              borderRadius: 3,
              fontWeight: 600,
              display: 'inline-block',
              mb: 2,
            }}
          >
            centraliza tudo
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem' },
              color: '#00144b',
              fontWeight: 'bold',
              lineHeight: 1.2,
              mb: 2,
            }}
          >
            A Solução Inteligente para Orçamentos de Obras
          </Typography>

          <Typography
            sx={{ color: '#555', mb: 3, fontSize: { xs: 14, sm: 16 } }}
          >
            O Licittudo transforma a complexidade das licitações em processos
            ágeis. Nossa plataforma automatiza a elaboração de orçamentos,
            eliminando erros manuais e garantindo precisão técnica em minutos.
          </Typography>

          <Typography
            sx={{
              background: '#253795',
              color: '#fff',
              px: 3,
              py: 1,
              borderRadius: 3,
              fontWeight: 600,
              display: 'inline-block',
              mb: 1,
              fontSize: { xs: 13, sm: 14 },
            }}
          >
            Engenharia de Custos{' '}
            <Box
              component="span"
              sx={{
                backgroundColor: '#0f0f0fff',
                color: '#fff',
                px: 1,
                py: 0.2,
                borderRadius: 1,
                fontWeight: 700,
                display: 'inline-block',
              }}
            >
              com Agilidade
            </Box>
          </Typography>

          <Typography
            sx={{ fontSize: { xs: 12, sm: 14 }, mb: 3, lineHeight: 1.5 }}
          >
            <strong>Bases Oficiais Integradas:</strong> SINAPI, SICRO, ORSE e
            SEINFRA.
            <br />
            <strong>Automação Inteligente:</strong> propostas em poucos cliques.
            <br />
            <strong>Segurança:</strong> cálculos conforme normas do setor.
          </Typography>

          <Button
            href="https://app.licittudo.com.br/auth/jwt/sign-up"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              background: '#4fa3e3',
              color: '#fff',
              px: 4,
              py: 1.2,
              borderRadius: 3,
              fontWeight: 600,
              fontSize: 15,
              height: 50,
              bottom: 9,
              textTransform: 'none',
              '&:hover': { background: '#3b8fcc' },
            }}
          >
            Quero comprar agora
          </Button>
        </Box>

        {/* AREA DA IMAGEM */}
        <Box
          sx={{
            position: 'relative',
            width: { xs: '80%', sm: 400, md: 480 },
            display: 'flex',
            justifyContent: 'center',
            mt: { xs: 1, md: 10.5 },
          }}
        >
          <Box
            component="img"
            src={card}
            alt="Waldir"
            sx={{
              width: '100%',
              maxWidth: 480,
              zIndex: 1,
              borderRadius: 2,
            }}
          />

          {/* BADGES */}
          <Box
            sx={{
              position: 'absolute',
              right: { xs: -30, md: -30 },
              bottom: { xs: -10, md: 30 },
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              zIndex: 3,
              pb: { xs: 2, md: 0 },
            }}
          >
            {[
              'Inovação',
              'Precisão',
              'Eficiência',
              'Transparência',
              'Autonomia',
            ].map((item) => (
              <Box
                key={item}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  background: '#253795',
                  color: '#fff',
                  px: 2,
                  py: 0.8,
                  borderRadius: 4,
                  fontSize: { xs: 10, sm: 12, md: 14 },
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                }}
              >
                <CheckCircleOutlineIcon fontSize="small" />
                {item}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
