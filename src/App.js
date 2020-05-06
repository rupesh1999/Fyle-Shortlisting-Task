import React from "react";
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section3";
import Section4 from "./Components/Section4";
import Section5 from "./Components/Section5";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0099FF"
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      </div>
    </ThemeProvider>
  );
}

export default App;
