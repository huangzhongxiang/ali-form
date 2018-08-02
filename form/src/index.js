
import React from 'react';
import ReactDOM, {render} from 'react-dom';
import {Provider} from 'react-redux';
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom';

import store from './store/index';

import {LocaleProvider} from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';

import Register from './routes/Register'
import Template from './routes/Template'
import Succeed from './routes/Succeed'

import './static/person.less'




render(<Provider store={store}>
    <HashRouter>
        <LocaleProvider locale={zh_CN}>
            <div>
                <Switch>
                 <Route path={'/register'} component={Register}/>
                 <Route path={'/template'} component={Template}/>
                <Route path={'/succeed'} component={Succeed}/>
                <Redirect to='/register'/>
                </Switch>
            </div>
        </LocaleProvider>
    </HashRouter>
</Provider>,root);