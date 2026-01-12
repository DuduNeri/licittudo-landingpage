import { Box, Typography } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import eng1 from "../../assets/eng1.png";
import eng2 from "../../assets/eng2.png";
import eng3 from "../../assets/eng3.png";
import eng4 from "../../assets/eng4.png";

export function Client() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "50vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: { xs: 6, md: 5 },
        px: 2,
        background: "#eeeeee",
      }}
    >
      {/* Listra */}
      <Box
        sx={{
          width: { xs: "100%", sm: "80%", md: "900px" },
          height: "6px",
          backgroundColor: "#243694",
          borderRadius: "10px",
          mb: 3,
        }}
      />

      {/* Texto */}
      <Box sx={{ maxWidth: "900px", textAlign: "center" }}>
        <Typography
          sx={{
            color: "#283a97",
            fontSize: { xs: "1.4rem", sm: "1.6rem", md: "1.9rem" },
            fontWeight: 700,
            lineHeight: 1.3,
          }}
        >
          Inúmeros clientes já escolheram a Licittudo
        </Typography>

        <Typography
          sx={{
            mt: 0.5,
            color: "#283a97",
            fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.7rem" },
          }}
        >
          para simplificar suas licitações.
        </Typography>

        {/* CTA */}
        <Typography
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: { xs: 1.5, md: 4 },
            mt: 3,
            color: "#3c3c3c",
            fontSize: { xs: "1.1rem", sm: "1.3rem", md: "4rem" },
          }}
        >
          <EastIcon
            sx={{
              fontSize: { xs: "3rem", sm: "2.4rem", md: "6rem" },
              color: "#fff",
              backgroundColor: "#283a98",
              p: { xs: 1.2, sm: 1.8, md: 2.4 },
              borderRadius: 2.5,
            }}
          />
          Nossos clientes
        </Typography>
      </Box>

      {/* Logos */}
      <Box
        sx={{
          width: "100%",
          mt: { xs: 6, md: 2 },
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "flex-end",
          gap: { xs: 3, md: 6 },
        }}
      >
        {[eng1, eng2, eng3, eng4].map((img, i) => (
          <Box
            key={i}
            component="img"
            src={img}
            alt=""
            sx={{
              height: { xs: "90px", sm: "120px", md: "160px" },
              objectFit: "contain",
            }}
          />
        ))}
        <Typography
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: { xs: 1.5, md: 4 },
            mt: -1,
            mb: 2,
            fontWeight: "bold",
            background: "#ffffff",
            borderRadius: 10,
            px: { xs: 2, md: 10 },
            py: 2,
            color: "#3c3c3c",
            fontSize: { xs: "1.1rem", sm: "1.3rem", md: "2.8rem" },
          }}
        >
          O mercado escolhe a Licittudo.
        </Typography>
      </Box>
    </Box>
  );
}
