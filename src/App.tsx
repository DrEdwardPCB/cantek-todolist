import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodolistPage from "./pages/TodolistPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Footer } from "./components/footer";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <BrowserRouter basename="">
                <Routes>
                    <Route path="/" Component={TodolistPage} />{" "}
                    {/* 👈 Renders at /app/ */}
                </Routes>
            </BrowserRouter>
            <Footer />
        </ThemeProvider>
    );
}

export default App;
