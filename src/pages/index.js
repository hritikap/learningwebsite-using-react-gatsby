import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import HeroSection from '../components/HeroSection';

function IndexPage() {
  return (
    <Layout>
      <SEO title='Home' />
      <HeroSection />
    </Layout>
  );
}

export default IndexPage;
