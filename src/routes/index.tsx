import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Dashboard from '../pages/Dashboard';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';
import SignIn from '../pages/SignIn';
import Profile from '../pages/Profile';
import DashboardAdm from '../pages/admin/DashboardAdm';
import Characters from '../pages/admin/Characters';
import CreateCharacter from '../pages/admin/Characters/Create';
import Kekkeis from '../pages/admin/Kekkei';
import CreateKekkei from '../pages/admin/Kekkei/Create';
import EditKekkei from '../pages/admin/Kekkei/Edit';
import Affiliation from '../pages/admin/Affiliation';
import EditAffiliation from '../pages/admin/Affiliation/Edit';
import CreateAffiliation from '../pages/admin/Affiliation/Create';
import CreateClan from '../pages/admin/Clan/Create';
import EditClan from '../pages/admin/Clan/Edit';
import Clan from '../pages/admin/Clan';
import Team from '../pages/admin/Team';
import CreateTeam from '../pages/admin/Team/Create';
import EditTeam from '../pages/admin/Team/Edit';
import EditCharacter from '../pages/admin/Characters/Edit';
import AdminSignIn from '../pages/admin/SignIn';
import Users from '../pages/admin/Users';
import Cards from '../pages/Cards';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/forgot-password" component={ForgotPassword} />
    <Route path="/reset-password" component={ResetPassword} />

    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/cards" component={Cards} isPrivate />
    <Route path="/profile" component={Profile} isPrivate />

    <Route path="/admin/" exact component={AdminSignIn} />
    <Route path="/admin/dashboard" component={DashboardAdm} isPrivate isAdmin />
    <Route
      path="/admin/characters"
      exact
      component={Characters}
      isPrivate
      isAdmin
    />
    <Route
      path="/admin/character/new"
      exact
      component={CreateCharacter}
      isPrivate
      isAdmin
    />
    <Route
      path="/admin/character/edit/:id"
      component={EditCharacter}
      isPrivate
      isAdmin
    />
    <Route path="/admin/kekkeis" exact component={Kekkeis} isPrivate isAdmin />
    <Route
      path="/admin/kekkeis/new/"
      component={CreateKekkei}
      isPrivate
      isAdmin
    />
    <Route
      path="/admin/kekkeis/edit/:id"
      component={EditKekkei}
      isPrivate
      isAdmin
    />
    <Route
      path="/admin/affiliation"
      exact
      component={Affiliation}
      isPrivate
      isAdmin
    />
    <Route
      path="/admin/affiliation/new/"
      component={CreateAffiliation}
      isPrivate
      isAdmin
    />
    <Route
      path="/admin/affiliation/edit/:id"
      component={EditAffiliation}
      isPrivate
      isAdmin
    />
    <Route path="/admin/clan" exact component={Clan} isPrivate isAdmin />
    <Route path="/admin/clan/new/" component={CreateClan} isPrivate isAdmin />
    <Route path="/admin/clan/edit/:id" component={EditClan} isPrivate isAdmin />
    <Route path="/admin/team" exact component={Team} isPrivate isAdmin />
    <Route path="/admin/team/new/" component={CreateTeam} isPrivate isAdmin />
    <Route path="/admin/team/edit/:id" component={EditTeam} isPrivate isAdmin />
    <Route path="/admin/users" exact component={Users} isPrivate isAdmin />
  </Switch>
);

export default Routes;
