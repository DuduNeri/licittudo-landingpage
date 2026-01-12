import { Box, Typography } from "@mui/material";

const cards = [
  {
    title: "Orçamentos de Obras",
    subtitle:
      "Ideal para engenheiros, construtoras e servidores que precisam de estimativas técnicas rápidas e confiáveis.",
    text: "Crie orçamentos detalhados em minutos: insumos, composições, encargos sociais e custos por item. Ferramentas para revisão, substituição automática de insumos e exportação para PDF com layout profissional.",
  },
  {
    title: "Propostas Automáticas para Licitações",
    subtitle:
      "Perfeito para quem participa de pregões, concorrências e contratos públicos.",
    text: "Gerador de propostas alinhado às regras do TCU e da Caixa (arredondamentos, truncamentos e formatos exigidos). Ajuste o lance e gere a planilha/proposta pronta para submissão com um clique.",
  },
  {
    title: "Radar de Licitação",
    subtitle:
      "Útil para quem precisa identificar oportunidades locais e nacionais sem perder prazos.",
    text: "Busque oportunidades (PNCP e portais locais) diretamente na plataforma usando filtros por estado, categoria, raio de proximidade e palavras-chave. Receba alertas e economize tempo na prospecção.",
  },
  {
    title: "Integração SINAPI e Bases Oficiais",
    subtitle:
      "Garante consistência nos preços e facilita a composição de custos por região.",
    text: "Base SINAPI sempre atualizada e possibilidade de trocar entre bases regionais. Faça substituição de insumos entre bases e normalize custos automaticamente para cada localidade.",
  },
  {
    title: "Gestão de Certidões e Documentos",
    subtitle:
      "Evita perda de prazos e facilita a apresentação documental em licitações.",
    text: "Centralize certidões, relatórios e documentos de habilitação. Controle vencimentos, gere lembretes e exporte pacotes documentais prontos para anexar em propostas e processos licitatórios.",
  },
  {
    title: "Base de Conhecimento & Newsletter",
    subtitle:
      "Mantém sua equipe informada e reduz riscos por falta de atualização normativa.",
    text: "Acesso a conteúdos técnicos, atualizações legislativas, guias de cálculo e um newsletter segmentado por categoria. Assine temas específicos para receber só o que interessa ao seu negócio.",
  },
];

export function CardInfo() {
  return (
    <Box
      sx={{
        width: "100%",
        background: "#00144c",
        pt: 0,
        pb: 10,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: {
            xs: 300,
            sm: 330,
            md: 700,
            lg: 1000,
          },
          mx: "auto",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: { xs: 4, md: 6 },
        }}
      >
        {cards.map((card, index) => (
          <Box
            key={index}
            sx={{
              borderRadius: "28px",
              overflow: "hidden",
              background: "#fff",
              boxShadow: "0 20px 40px rgba(0,0,0,.25)",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-4px) scale(1.02)",
                boxShadow: "0 12px 30px rgba(0,0,0,0.4)",
              },
            }}
          >
            {/* TOPO AZUL */}
            <Box
              sx={{
                background: "linear-gradient(135deg, #0032c4 0%, #00208a 100%)",
                color: "#fff",
                minHeight: "50%",
                p: 4,
              }}
            >
              <Typography
                sx={{
                  fontSize: "1.6rem",
                  fontWeight: "bold",
                  mb: 1,
                }}
              >
                {card.title}
              </Typography>

              <Typography
                sx={{
                  fontSize: "0.95rem",
                  opacity: 0.9,
                }}
              >
                {card.subtitle}
              </Typography>
            </Box>

            {/* CORPO */}
            <Box
              sx={{
                p: 4,
                color: "#333",
                fontSize: "1rem",
                lineHeight: 1.6,
              }}
            >
              {card.text}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
