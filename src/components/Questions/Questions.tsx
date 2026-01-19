import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from 'react';

export function Questions() {
  const [expanded, setExpanded] = useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const faqData = [
    {
      id: 'panel1',
      question: 'O que é o Licittudo e para quem ele é indicado?',
      answer:
        'O Licittudo é uma plataforma SaaS para criação e gestão de orçamentos de obras e participação em processos licitatórios. É indicado para órgãos públicos, engenheiros, construtoras, empresas de serviços e profissionais autônomos que precisam de orçamentos rápidos, precisos e compatíveis com exigências oficiais.',
    },
    {
      id: 'panel2',
      question:
        'Como funciona a integração com o SINAPI e outras bases de preço?',
      answer: 'Conteúdo sobre integração...',
    },
    {
      id: 'panel3',
      question:
        'O Licittudo gera propostas conforme o TCU e a Caixa Econômica?',
      answer: 'Conteúdo sobre propostas...',
    },
    // {
    //   id: 'panel4',
    //   question: 'O que é o Radar de Licitação e como recebo alertas?',
    //   answer: 'Conteúdo sobre radar...',
    // },
    {
      id: 'panel5',
      question: 'Como funciona a Gestão de Certidões e documentos?',
      answer: 'Conteúdo sobre gestão...',
    },
  ];

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '50vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pt: { xs: 6, md: 8 },
        pb: 10,
        mt: -13,
        px: 2,
        background: '#FFFFFF',
      }}
    >
      {/* Badge FAQ */}
      <Chip
        label="FAQ"
        size="small"
        sx={{
          bgcolor: '#E3F2FD',
          color: '#1976D2',
          fontWeight: 'bold',
          mb: 2,
          borderRadius: '4px',
        }}
      />

      {/* Título Principal */}
      <Typography
        variant="h3"
        sx={{ fontWeight: 700, mb: 3, color: '#1A1A1A', textAlign: 'center' }}
      >
        Perguntas Frequentes
      </Typography>

      {/* Descrição */}
      <Typography
        variant="body1"
        sx={{
          color: '#666',
          textAlign: 'center',
          maxWidth: '800px',
          mb: 6,
          lineHeight: 1.6,
        }}
      >
        Reunimos as dúvidas mais comuns sobre o Licittudo: integração com bases
        oficiais, geração de propostas para licitações, gestão de documentos e
        fluxo de trabalho. Se não encontrar sua pergunta, fale com nosso
        suporte.
      </Typography>

      {/* Container dos Accordions */}
      <Box sx={{ width: '100%', maxWidth: '900px' }}>
        {faqData.map((item) => (
          <Accordion
            key={item.id}
            expanded={expanded === item.id}
            onChange={handleChange(item.id)}
            elevation={0}
            disableGutters
            sx={{
              '&:before': { display: 'none' },
              borderBottom: '1px solid #E0E0E0',
              py: 1,
            }}
          >
            <AccordionSummary
              expandIcon={
                expanded === item.id ? (
                  <RemoveIcon sx={{ color: '#4FC3F7' }} />
                ) : (
                  <AddIcon sx={{ color: '#4FC3F7' }} />
                )
              }
              sx={{ px: 0 }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  color: expanded === item.id ? '#4FC3F7' : '#333',
                }}
              >
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 0, pb: 2 }}>
              <Typography sx={{ color: '#555', lineHeight: 1.7 }}>
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
}
