import { createRoot } from 'react-dom/client';

// PROJECTS
import App from '~/App';
import reportWebVitals from '~/reportWebVitals';
import { ConfigProvider } from '~/contexts/ConfigContext';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <ConfigProvider>
    <App />
  </ConfigProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
