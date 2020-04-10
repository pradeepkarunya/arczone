import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles/';
import Header from './Header';
import Theme from './Theme';
import HOC from '../../HOC/Hoc';

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
          <Route exact path="/" component={()=> (<HOC><div>Drivers</div></HOC>)} />
          <Route exact path="/profitcenter" component={()=> (<HOC><div>Profit Centers</div></HOC>)} />
          <Route exact path="/chennai" component={()=> (<HOC><div>Chennai</div></HOC>)} />
          <Route exact path="/mumbai" component={()=> (<HOC><div>Mumbai</div></HOC>)} />
          <Route exact path="/sj" component={()=> (<HOC><div>SJ</div></HOC>)} />
          <Route exact path="/tractors" component={()=> (<HOC><div>Tractors</div></HOC>)} />
          <Route exact path="/reports" component={()=> (<HOC><div>Reports</div></HOC>)} />
          <Route exact path="/documentcenter" component={()=> (<HOC><div>Document Centers</div></HOC>)} />
          <Route exact path="/messages" component={()=> (<HOC><div>Messages</div></HOC>)} />
        </Switch>
        
        </BrowserRouter>
        
        </ThemeProvider>
        </>
  );
}

export default App;
