import { NavBar } from "./components/NavBar";
import { ThemeProvider } from "styled-components";
import { FONTS } from "./theme";
import { WebsiteLogo } from "./components/WebsiteLogo";
import { Spotlight } from "./components/Spotlight";


function App() {
  return (
    <ThemeProvider theme={{ fonts: FONTS }} >
       <WebsiteLogo/>   
      <NavBar />
      <Spotlight/>
    </ThemeProvider>
  );
}

export default App;
