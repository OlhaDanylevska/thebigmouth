import React from "react";
import { Container, Grid, Typography, Box, CssBaseline } from "@mui/material";
import Link from "@mui/material/Link";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#E6007E",
        width: "100%",
        left: "0",
        height: "279.72px",
      }}
    >
      <CssBaseline />
      <Container maxWidth="lg" style={{ height: "100%" }}>
        <Grid container alignItems="center" style={{ height: "100%" }}>
          <Grid item xs={12} md={4}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              height="100%"
            >
              <img
                className="logo-image"
                src="https://thebigmouth-media.s3.eu-west-2.amazonaws.com/public/big-mouth.png"
                alt="Logo"
                width="237"
                height="273"
                style={{
                  background:
                    "var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box",
                  opacity: "1",
                }}
              />
              <div
                style={{
                  display: "inline",
                  position: "absolute",
                  right: "53%",
                  transform: "translateX(-50%)",
                  width: "386px",
                  height: "79px",
                  background: "#E6007E",
                  opacity: 0.77,
                  backdropFilter: "blur(5px)",
                  fontFamily: "Uni Sans Bold",
                  fontSize: "51px",
                  fontWeight: "bold",
                  color: "#FFFFFF",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  letterSpacing: "-2.04px",
                  zIndex: 1,
                }}
              >
                THE BIG MOUTH
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-around"
              height="100%"
              flexDirection="row"
            >
              <Link
                style={{
                  fontFamily: "Core Sans D 45 Medium W01 Rg",
                  color: "#E0E0E0",
                  textDecoration: "none",
                }}
                href="/back-to-the-big-mouth"
              >
                Back to The Big Mouth
              </Link>
              <Link
                style={{
                  fontFamily: "Core Sans D 45 Medium W01 Rg",
                  color: "#E0E0E0",
                  textDecoration: "none",
                }}
                href="/become-a-member"
              >
                Become a member
              </Link>
              <Link
                style={{
                  fontFamily: "Core Sans D 45 Medium W01 Rg",
                  color: "#E0E0E0",
                  textDecoration: "none",
                }}
                href="/contact"
              >
                Contact
              </Link>
              <Link
                style={{
                  fontFamily: "Core Sans D 45 Medium W01 Rg",
                  color: "#E0E0E0",
                  textDecoration: "none",
                }}
                href="/talent-enquiry"
              >
                Talent Enquiry
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
