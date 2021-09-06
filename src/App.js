import 'bootstrap/dist/css/bootstrap.min.css';
import {Header} from "./components/Header";
import {MoviesList} from "./components/MoviesList";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter, Redirect
} from "react-router-dom";
import {MovieInfo} from "./components/MovieInfo";
import {useEffect, useState} from "react";
import {discoverMovie, genresMovie} from "./sercives/movie.service";
import {useDispatch} from "react-redux";
import {darkTheme, GlobalStyles, lightTheme} from "./components/Themes/Themes";
import styled, {ThemeProvider} from "styled-components"
import {Toggle} from "./components/Themes/Toggle";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`

function App() {

    let dispatch = useDispatch()
    useEffect(async () => {
        await discoverMovie().then(value => {
            dispatch({type: 'NAME', payload: value.data.results})
        })
        await genresMovie().then(value => {
            dispatch({type: 'GENRES', payload: value.data.genres})
        })
    }, [])

    const [theme, setTheme] = useState("dark")

    const themeToggler = () => {
        theme === "light" ? setTheme("dark") : setTheme("light")
    }

    return (
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                <GlobalStyles/>
                <StyledApp>
                    <Router>
                    <Header themeToggler={themeToggler}/>
                        <Switch>
                            <Route exact path={'/'} component={MoviesList}/>
                            <Route path={`/about/:id`} render={(props) => {
                                return <MovieInfo {...props}/>
                            }}/>
                            <Redirect to={'/'}/>
                        </Switch>
                    </Router>
                </StyledApp>
            </ThemeProvider>
    );
}

export default App;

