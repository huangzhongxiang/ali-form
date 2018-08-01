
import React from 'react';
import ReactDOM, {render} from 'react-dom';
import {Provider} from 'react-redux';
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom';

import store from './store/index';

import {LocaleProvider} from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';

import Yi from './routes/Yi'
import Er from './routes/Er'
import San from './routes/San'

import './static/person.less'




render(<Provider store={store}>
    <HashRouter>
        <LocaleProvider locale={zh_CN}>
            <div>
                <Switch>
                 <Route path={'/yi'} component={Yi}/>
                 <Route path={'/er'} component={Er}/>
                <Route path={'/san'} component={San}/>
                <Redirect to='/Yi'/>
                </Switch>
            </div>
        </LocaleProvider>
    </HashRouter>
</Provider>,root);