import { Box, Typography } from "@mui/material";

export function Free() {
  return (
    <Box
      sx={{
        width: "100%",
        background: "#0032c4",
        minHeight: "1vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: { xs: 2, md: 4 },
        py: { xs: 2, md: 3 },
      }}
    >
      <Typography
        sx={{
          color: "#fff",
          fontWeight: 600,
          fontSize: { xs: "0.95rem", sm: "1.1rem", md: "1.8rem" },
          textAlign: "center",
          maxWidth: "900px",
        }}
      >
        7 dias de garantia. Satisfação ou reembolso integral.
      </Typography>
    </Box>
  );
}
