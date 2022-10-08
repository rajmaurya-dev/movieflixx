import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Switch } from 'react-router-dom';
import { Actors, MovieInformation, Movie, NavBar, Profile } from '.';

function App() {
  return (
    <div>
      <CssBaseline />
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/movie/:id">
            <MovieInformation />
          </Route>
          <Route path="/actors/:id">
            <Actors />
          </Route>
          <Route path="/">
            <Movie />
          </Route>
          <Route path="/profile/:id">
            <Profile />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;