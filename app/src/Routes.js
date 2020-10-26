import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { 
  Main as MainLayout, 
  Minimal as MinimalLayout,
  MainWithBreadcrumbs as MainWithBreadcrumbsLayout,
  MainWithContainer as MainWithContainerLayout,
 } from './layouts';

import {
  Dashboard as DashboardView,
  Evaluation as EvaluationView,
  EvaluationStudentList as EvaluationStudentListView,
  EvaluationForm as EvaluationFormView,
  ProductList as ProductListView,
  UserList as UserListView,
  Typography as TypographyView,
  Icons as IconsView,
  Account as AccountView,
  Settings as SettingsView,
  SignUp as SignUpView,
  SignIn as SignInView,
  NotFound as NotFoundView
} from './views';

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/evaluation"
      />
      <RouteWithLayout
        component={EvaluationView}
        exact
        layout={MainWithContainerLayout}
        path="/evaluation"
      />
      <RouteWithLayout
        component={EvaluationStudentListView}
        exact
        layout={MainWithContainerLayout}
        path="/evaluation/:dmType/:criteria"
      />
      <RouteWithLayout
        component={EvaluationFormView}
        exact
        layout={MainWithContainerLayout}
        path="/evaluation/:dmType/:criteria/:studentID"
      />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard"
      />
      <RouteWithLayout
        component={UserListView}
        exact
        layout={MainLayout}
        path="/users"
      />
      <RouteWithLayout
        component={ProductListView}
        exact
        layout={MainLayout}
        path="/products"
      />
      <RouteWithLayout
        component={TypographyView}
        exact
        layout={MainLayout}
        path="/typography"
      />
      <RouteWithLayout
        component={IconsView}
        exact
        layout={MainLayout}
        path="/icons"
      />
      <RouteWithLayout
        component={AccountView}
        exact
        layout={MainLayout}
        path="/account"
      />
      <RouteWithLayout
        component={SettingsView}
        exact
        layout={MainLayout}
        path="/settings"
      />
      <RouteWithLayout
        component={SignUpView}
        exact
        layout={MinimalLayout}
        path="/sign-up"
      />
      <RouteWithLayout
        component={SignInView}
        exact
        layout={MinimalLayout}
        path="/sign-in"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
