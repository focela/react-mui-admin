import { createRoot } from 'react-dom/client';
import reportWebVitals from '~/reportWebVitals';
import App from '~/App';
import { Provider as ReduxProvider } from 'react-redux';
import { persister, store } from '~/store';
import { PersistGate } from 'redux-persist/integration/react';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <ReduxProvider store={store}>
    <PersistGate loading={null} persistor={persister}>
      <App />
    </PersistGate>
  </ReduxProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
