import React from 'react';
import { ThemeProvider } from '@material-ui/styles/';
import Header from './Header';
import Theme from './Theme';

/*const paragraphGenerator = ()=>{
  return [...new Array(120)]
          .map(
            () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
          )
          .join('\n')
}*/

function App() {
  return (
    <>
        <ThemeProvider theme={Theme}>
        <Header />
        </ThemeProvider>
        </>
  );
}

export default App;
