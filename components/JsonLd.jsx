import React from 'react';

const JsonLd = ({ data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Klocrix Business Solutions",
    "url": "https://klocrix.com",
    "logo": "https://klocrix.com/klocrix-logo.png",
    "sameAs": [
      "https://www.linkedin.com/in/klocrix-business-solution-4454a5237",
      "https://www.facebook.com/Klocrix",
      "https://www.instagram.com/klocrixbusinesssolution"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-81463-30346",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["en", "Hindi"]
    }
  };
  return <JsonLd data={schema} />;
};

export const WebsiteSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Klocrix",
    "url": "https://klocrix.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://klocrix.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
  return <JsonLd data={schema} />;
};

export default JsonLd;
