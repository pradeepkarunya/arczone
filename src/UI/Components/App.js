import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
        <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={()=> <div>Drivers</div>} />
          <Route exact path="/profitcenter" component={()=> <div>Profit Centers</div>} />
          <Route exact path="/chennai" component={()=> <div>Chennai</div>} />
          <Route exact path="/mumbai" component={()=> <div>Mumbai</div>} />
          <Route exact path="/sj" component={()=> <div>SJ</div>} />
          <Route exact path="/tractors" component={()=> <div>Tractors</div>} />
          <Route exact path="/reports" component={()=> <div>Reports</div>} />
          <Route exact path="/documentcenter" component={()=> <div>Document Centers</div>} />
          <Route exact path="/messages" component={()=> <div>Messages</div>} />
        </Switch>
        
        </BrowserRouter>
        
        </ThemeProvider>
        </>
  );
}

export default App;
