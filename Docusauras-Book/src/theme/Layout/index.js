import React from 'react';
import Layout from '@theme-original/Layout';
import Chatbot from '@site/src/components/Chatbot/Chatbot';

// Get the current page URL
const getCurrentPageUrl = () => {
  if (typeof window !== 'undefined') {
    return window.location.href;
  }
  return '';
};

export default function LayoutWrapper(props) {
  return (
    <>
      <Layout {...props}>
        {props.children}
        <div style={{ width: '400px', zIndex: 1000 }}>
          <Chatbot pageUrl={getCurrentPageUrl()} />
        </div>
      </Layout>
    </>
  );
}