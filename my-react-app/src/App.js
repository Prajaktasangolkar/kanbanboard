import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CssBaseLine from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Board from "./pages/Board";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Task from "./pages/Task";

function App() {
  const theme = createTheme({
    palette: { mode: "dark" },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseLine />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="boards" element={<Board />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
