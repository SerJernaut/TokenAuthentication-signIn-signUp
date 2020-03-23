import React      from 'react';
import AppContext from '../../state';

const withContext = (WrappedComponent) => (props => (
    <AppContext.Consumer>
      {
        value => (<WrappedComponent {...props} {...value}/>)
      }
    </AppContext.Consumer>
  )
);

export default withContext;
