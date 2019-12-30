import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom'
import {linkParams, links} from "../../constants/routerLinks";
import {connect} from "react-redux";
import { Loader } from "../common/Loader/Loader";
import { Failed } from "../common/Failed/Failed";
import '../../styles/global.module.scss'
import { EmptyPage } from './Empty/Empty'
import { ContactListPage } from "./ContactList/ContactList";
import {skeletons} from "../../constants";

const routes = [
    {
        path: `${links.LIST}/:${linkParams.LETTER}`,
        component: ContactListPage,
        loader: skeletons.CONTACT_LIST
    },
    {
        path: links.LIST,
        component: EmptyPage,
        loader: skeletons.CONTACT_LIST
    }
];

const  MainRoute = ({ isFailed, isFetching, isSucceed }) => {
    return (
            <Switch>
                {routes.map(({ path, component, loader }) => {
                    const Component = isFetching
                        ? () => <Loader type={loader}/>
                        : isSucceed
                            ? component
                            : isFailed
                                ? Failed
                                : null;
                    return <Route key={path} path={path} component={Component}/>})}
                <Redirect to={links.LIST}/>
            </Switch>
    )};

const mapStateToProps = ({ contacts: { isFailed, isFetching, isSucceed } }) => ({
    isFailed, isFetching, isSucceed
});

const mapDispatchToProps = {
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainRoute)
