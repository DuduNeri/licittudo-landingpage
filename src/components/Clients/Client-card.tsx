import { Box } from "@mui/material";
import base from "../../assets/BASE para licit site atualiz.psd (6).png";

export function ClientCard() {
  return (
    <Box
      sx={{
        width: "100%",
        mt: { xs: 0, md: -4 },
        display: "flex",
        flexWrap: "wrap",
        background: "#001898",
        height: "27vh",
        justifyContent: "center",
        alignItems: "center",
        gap: { xs: 3, md: 6 },
      }}
    >
      <img
        src={base}
        alt=""
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />
    </Box>
  );
}
