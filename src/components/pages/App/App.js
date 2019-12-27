import React, { useEffect }  from "react";
import { Route, Switch, Redirect } from 'react-router-dom'
import {linkParams, links} from "../../../constants/routerLinks";
import {connect} from "react-redux";
import { Loader } from "../../common/Loader/Loader";
import { Failed } from "../../common/Failed/Failed";
import '../../../styles/global.module.scss'
import styles from './App.module.scss'


const routes = [
    { path: `${links.LIST}/:${linkParams.LETTER}`, component: ()=><>TestRouter</>},
    { path: links.DASHBOARD, component: ()=><>TestRouter</>}
];

const  App = ({ isFailed, isFetching, isSucceed }) => {
    return (
        <div className={styles.App}>
            <Switch>
                {routes.map(({ path, component }) => {
                    const Component = isFetching
                        ? Loader
                        : isSucceed
                            ? component
                            : isFailed
                                ? Failed
                                : null;
                    return <Route key={path} path={path} component={Component}/>})}
                <Redirect to={links.DASHBOARD}/>
            </Switch>
        </div>
    )};

const mapStateToProps = () => ({
});

const mapDispatchToProps = {
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
