import { Helmet } from "react-helmet-async";

interface ReactHelmetProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const ReactHelmet = ({
  title,
  description,
  keywords,
  image,
  url
}: ReactHelmetProps) => {
  const SEOurl: string = import.meta.env.VITE_SENTRY_URL + url;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {image && <meta property="og:image" content={image} />}
      {url && <meta property="og:url" content={SEOurl} />}
    </Helmet>
  );
};

export default ReactHelmet;
