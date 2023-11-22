import React from 'react';

const Theme = React.createContext({
  theme: 'light',
  toggleTheme: () => {},
});

export default Theme
