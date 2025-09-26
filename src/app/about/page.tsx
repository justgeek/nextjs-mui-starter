import { Typography, Container, Box } from "@mui/material";

export default function About() {
  return (
    <Container maxWidth="md">
      <Box sx={{ py: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
          This is a modern Next.js starter template with Material-UI and TypeScript.
          It includes a clean project structure, proper routing, and best practices
          for building scalable web applications.
        </Typography>
        <Typography variant="body1">
          Features include:
        </Typography>
        <ul>
          <li>Next.js 15 with App Router</li>
          <li>Material-UI v7 with custom theming</li>
          <li>TypeScript for type safety</li>
          <li>SCSS modules for styling</li>
          <li>HTTP service with proper error handling</li>
        </ul>
      </Box>
    </Container>
  );
}
