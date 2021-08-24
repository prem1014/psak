import React from 'react';
import AppRoute from './Components/Presentational/Routes/routes';

import './App.css';

const App: React.FC<any> = (props: any) => {
    return (
        <div className="container-fluid">
             <AppRoute />
        </div>
    )
}

export default App;