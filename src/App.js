import './App.css';
import CoinsFetching from './components/CoinsFetching';
import {useState} from 'react'
import styled, {ThemeProvider} from "styled-components"
import {lightTheme, darkTheme, GlobalStyles} from './themes'

const StyledApp = styled.div`

`

function App() {
  const [theme, setTheme] = useState('light');
  
  const changeTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles/>
      <StyledApp>
          {theme === 'light' ? (
            <button className='btn-dark' onClick={changeTheme}>&#9728; Light</button>
          ) : (
            <button className='btn-light' onClick={changeTheme}>Dark &#9789;</button>
          )}
        <CoinsFetching/>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
