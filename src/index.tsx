import { createRoot } from 'react-dom/client';
import reportWebVitals from '~/reportWebVitals';
import App from '~/App';
import { Provider as ReduxProvider } from 'react-redux';
import { persister, store } from '~/store';
import { PersistGate } from 'redux-persist/integration/react';
import { ConfigProvider } from '~/contexts/ConfigContext';

// GOOGLE FONTS
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/700.css';

import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';

import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';

import '@fontsource/public-sans/400.css';
import '@fontsource/public-sans/500.css';
import '@fontsource/public-sans/600.css';
import '@fontsource/public-sans/700.css';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <ReduxProvider store={store}>
    <PersistGate loading={null} persistor={persister}>
      <ConfigProvider>
        <App />
      </ConfigProvider>
    </PersistGate>
  </ReduxProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
