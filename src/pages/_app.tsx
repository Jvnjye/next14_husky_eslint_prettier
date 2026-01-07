import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';
import { Provider } from 'react-redux';
import { store } from '@/store';
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';

// 为带有自定义布局的页面添加类型
export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // 使用页面级别定义的布局，如果没有则使用默认布局
  const getLayout = Component.getLayout ?? ((page) => (
    <Layout>
      {page}
    </Layout>
  ));

  return (
    <Provider store={store}>
      {getLayout(<Component {...pageProps} />)}
    </Provider>
  );
}
