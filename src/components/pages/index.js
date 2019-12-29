import React, { useEffect }  from "react";
import { Route, Switch, Redirect } from 'react-router-dom'
import {linkParams, links} from "../../constants/routerLinks";
import {connect} from "react-redux";
import { Loader } from "../common/Loader/Loader";
import { Failed } from "../common/Failed/Failed";
import '../../styles/global.module.scss'
import { EmptyPage } from './Empty/Empty'
import { ContactListPage } from "./ContactList/ContactList";
import App from '../containers/App'

const routes = [
    { path: `${links.LIST}/:${linkParams.LETTER}`, component: ContactListPage},
    { path: links.LIST, component: EmptyPage}
];

const  MainRoute = ({ isFailed, isFetching, isSucceed }) => {
    return (
            <Switch>
                {routes.map(({ path, component }) => {
                    const Component = component;
                    return <Route key={path} path={path} component={Component}/>})}
                <Redirect to={links.LIST}/>
            </Switch>
    )};

const mapStateToProps = () => ({
});

const mapDispatchToProps = {
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainRoute)
