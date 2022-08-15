import React from "react";
import { useSiteMetadata } from "@/hooks/use-site-metadata";

export const HeadSEO = ({ title, description, pathname, children }: any) => {
  const { favIcon, logo, siteUrl } = useSiteMetadata();

  const seo = {
    title: title,
    description: description,
    logo: `${siteUrl}/tools${logo}`,
    favIcon: `${siteUrl}/tools${favIcon}`,
    url: `${siteUrl}${pathname || ``}/`,
  };

  //   const breadcrumbs =

  return (
    <>
      <title>{seo.title}</title>
      <meta name="title" content={seo.title} />
      <meta name="description" content={seo.description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={seo.url} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="content-language" content="en_US" />
      <meta name="Language" content="en" />
      <meta name="autor" content="Saatsaz Watch" />
      <meta name="owner" content="Saatsaz Watch" />
      <link rel="icon" type="image/x-icon" href={seo.favIcon} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:site_name" content="Saatsaz Watch" />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content={seo.logo} />
      <meta property="og:image:secure_url" content={seo.logo} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:alt" content="Saatsaz Watch" />
      <meta property="dc.title" content={seo.title} />
      <meta property="dc.description" content={seo.description} />
      <meta property="dc.type" content="website" />
      <meta property="dc.identifier" content={seo.url} />
      <meta property="dc.language" content="en_US" />
      <meta property="twitter:title" content={seo.title} />
      <meta property="twitter:description" content={seo.description} />
      <meta property="twitter:creator" content="Saatsaz Watch" />
      <meta property="twitter:site" content="Saatsaz Watch" />
      <meta property="twitter:url" content={seo.url} />
      <meta property="twitter:image" content={seo.logo} />
      <meta property="twitter:image:alt" content="Saatsaz Watch" />
      <meta property="twitter:card" content="summary" />
      <meta itemProp="name" content={seo.title} />
      <meta itemProp="description" content={seo.description} />
      <meta itemProp="image" content={seo.logo} />
      {children}
    </>
  );
};
