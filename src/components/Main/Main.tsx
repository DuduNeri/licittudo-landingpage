import { Box, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/PersonAdd";
import SettingsIcon from "@mui/icons-material/SettingsSuggest";
import DescriptionIcon from "@mui/icons-material/Description";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";

export function Main() {
  const steps = [
    {
      id: 1,
      title: "Crie sua Conta",
      color: "#003399",
      icon: <PersonIcon sx={{ fontSize: 36 }} />,
      text: "Cadastre-se na plataforma com informações básicas e configure seu perfil profissional ou da empresa.",
    },
    {
      id: 2,
      title: "Configure Bases",
      color: "#0c215a",
      icon: <SettingsIcon sx={{ fontSize: 36 }} />,
      text: "Defina suas tabelas de preços, insumos e BDI, com integração automática ao SINAPI.",
    },
    {
      id: 3,
      title: "Gere Orçamentos",
      color: "#003399",
      icon: <DescriptionIcon sx={{ fontSize: 36 }} />,
      text: "Crie orçamentos detalhados em minutos e exporte relatórios em PDF.",
    },
    {
      id: 4,
      title: "Acompanhe tudo",
      color: "#0c215a",
      icon: <TrackChangesIcon sx={{ fontSize: 36 }} />,
      text: "Gerencie certidões e acompanhe o desempenho das propostas.",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        background: "#00144c",
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        px: { xs: 2, md: 4 },
        py: { xs: 6, md: 10 },
      }}
    >
      {/* TÍTULOS */}
      <Box sx={{ textAlign: "center", maxWidth: 800 }}>
        <Typography
          sx={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.8rem" },
            lineHeight: 1.2,
            mb: 1,
          }}
        >
          Simplifique seus <br />
          Orçamentos e Licitações
        </Typography>

        <Typography
          sx={{
            mt: 3,
            display: "inline-block",
            background: "linear-gradient(135deg, #0032c4, #1a4fff)",
            color: "#fff",
            px: { xs: 3, sm: 9 },
            py: 1.2,
            borderRadius: "999px",
            fontSize: { xs: "1.1rem", sm: "1.4rem" },
            fontWeight: 700,
          }}
        >
          Como Funciona
        </Typography>
      </Box>

      {/* CARDS */}
      <Box
        sx={{
          mt: 5,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: { xs: 3, md: 4 },
          maxWidth: 1200,
          width: "100%",
        }}
      >
        {steps.map((step) => (
          <Box
            key={step.id}
            sx={{
              backgroundColor: "#fff",
              width: { xs: "60%", sm: "45%", md: "190px" },
              borderRadius: "20px",
              boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* HEADER */}
            <Box
              sx={{
                backgroundColor: step.color,
                color: "#fff",
                m: 2,
                p: 2,
                borderRadius: "14px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px) scale(1.02)",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
                },
                "&:active": {
                  transform: "translateY(-1px) scale(0.99)",
                },
              }}
            >
              {step.icon}
              <Typography fontSize={28} fontWeight="bold">
                {step.id}
              </Typography>
            </Box>

            {/* BODY */}
            <Box sx={{ px: 3, pb: 3, textAlign: "center" }}>
              <Typography fontWeight={700} fontSize={18} mb={1}>
                {step.title}
              </Typography>
              <Typography fontSize={14} color="text.secondary">
                {step.text}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      {/* TEXTO FINAL */}
      <Typography
        sx={{
          color: "#cfd8ff",
          fontSize: "1rem",
          textAlign: "center",
          maxWidth: 700,
          mt: 3,
        }}
      >
        Siga estes passos simples para gerar orçamentos precisos e otimizar a
        gestão de suas obras.
      </Typography>
    </Box>
  );
}
