import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  image?: string;
  type?: "website" | "article" | "service";
  jsonLd?: object | object[];
}

// Primary canonical domain. The .co.in domain is advertised as an alternate.
const PRIMARY_DOMAIN = "https://www.vamanainsurance.in";
const ALT_DOMAIN = "https://www.vamanainsurance.co.in";

export const SEO = ({
  title,
  description,
  path,
  keywords,
  image = "/og-image.jpg",
  type = "website",
  jsonLd,
}: SEOProps) => {
  const url = `${PRIMARY_DOMAIN}${path}`;
  const altUrl = `${ALT_DOMAIN}${path}`;
  const ogImage = image.startsWith("http") ? image : `${PRIMARY_DOMAIN}${image}`;
  const ldArray = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="geo.region" content="IN" />
      <meta name="geo.country" content="India" />
      <meta name="language" content="English" />
      <link rel="canonical" href={url} />
      <link rel="alternate" hrefLang="en-in" href={url} />
      <link rel="alternate" hrefLang="x-default" href={url} />
      <link rel="alternate" href={altUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type === "article" ? "article" : "website"} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:site_name" content="Vamana Insurance Broking" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      {ldArray.map((obj, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(obj)}</script>
      ))}
    </Helmet>
  );
};
