import { useState } from "react";
import Typewriter from "typewriter-effect";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import Switch from "@material-ui/core/Switch";
import "./style.css";

const Container = styled.div`
     font-family: sans-serif;
     font-size: 50px;
     font-weight: 500;
     color: ${(props) => props.theme.color};
     background: ${(props) => props.theme.background};
     height: 100vh;
`;

const Content = styled.div`
     padding-top: 80px;
     text-align: center;
`;

const ButtonContainer = styled.div`
     text-align: right;
     padding: 20px;
`;

export default function App() {
     const [theme, setTheme] = useState("light");
     const themeToggler = () => {
          theme === "light" ? setTheme("dark") : setTheme("light");
     };
     return (
          <>
               <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
                    <Container>
                         <ButtonContainer>
                              <Switch onChange={themeToggler} />
                         </ButtonContainer>
                         <Content>
                              <Typewriter
                                   onInit={(typewriter) => {
                                        typewriter
                                             .pauseFor(1000)
                                             .typeString("Shilpi Maurya")
                                             .deleteAll()
                                             .pauseFor(1000)
                                             .deleteChars(7)
                                             .typeString(
                                                  "<strong>Shilpi Maurya </strong>"
                                             )
                                             .typeString(
                                                  "<br/><span>Front-end developer</span>"
                                             )
                                             .pauseFor(1000)
                                             .start();
                                   }}
                                   options={{
                                        autoStart: true,
                                        loop: true
                                   }}
                              />
                         </Content>
                    </Container>
               </ThemeProvider>
          </>
     );
}
