import { ReactNode, useEffect, useState } from 'react';
import { IntlProvider, MessageFormatElement } from 'react-intl';
import useConfig from '~/hooks/useConfig';

const loadLocaleData = (locale: string) => {
  switch (locale) {
    case 'en':
      return import('~/utils/locales/en.json');
    case 'ja':
      return import('~/utils/locales/ja.json');
    case 'vi':
      return import('~/utils/locales/vi.json');
    default:
      return import('~/utils/locales/en.json');
  }
};

interface Props {
  children: ReactNode;
}

export default function Locales({ children }: Props) {
  const { i18n } = useConfig();

  const [messages, setMessages] = useState<Record<string, string> | Record<string, MessageFormatElement[]> | undefined>();

  useEffect(() => {
    loadLocaleData(i18n).then((d: { default: Record<string, string> | Record<string, MessageFormatElement[]> | undefined }) => {
      setMessages(d.default);
    });
  }, [i18n]);

  return (
    <>
      {messages && (
        <IntlProvider locale={i18n} defaultLocale="en" messages={messages}>
          {children}
        </IntlProvider>
      )}
    </>
  );
}
