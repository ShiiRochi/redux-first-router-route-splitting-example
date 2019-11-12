import React, { useCallback } from 'react'
import {connect, useDispatch} from 'react-redux'

import Switcher from "./components/Switcher";

const App = ({ page }) => {

  const dispatch = useDispatch();

  const goToUserPage = useCallback(() => {
    dispatch({ type: 'USER' });
  }, [dispatch]);

  return (
      <div>
        <button onClick={goToUserPage}>to user page</button>
        <Switcher page={page} />
      </div>
  )
}

export default connect(({ page }) => ({ page }))(App)
