import React from 'react';
import {render} from 'react-dom';

// Import css
import css from './styles/style.styl';

//Import Components
import App from './components/App';
import SingleGrid from './components/SingleGrid';
import PhotoGrid from './components/PhotoGrid';

//import react router deps
import {Router, Route, IndexRoute} from 'react-router';
import {Provider} from 'react-redux';
import store, {history} from './store';

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route path="/view/:postId" component={SingleGrid}></Route>
            </Route>
        </Router>
    </Provider>
);

render(
    router,
    document.getElementById('root')
);
