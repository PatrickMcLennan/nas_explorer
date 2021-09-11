import Head from 'next/Head';

type Props = {
  title: string;
  description: string;
  image?: string;
};

export function SEO({ title, description, image }: Props) {
  return (
    <Head>
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />

      <title>{`${title}NAS Netflix`}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="follow" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <meta property="og:title" content={title} />
      <meta property="twitter:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="twitter:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      {image && <meta property="twitter:image" content={image} />}
      <meta property="og:url" content="PERMALINK" />
      {/* TODO -- Return to this ^^ when url is sorted */}
      <meta property="og:site_name" content="NAS Netflix" />
    </Head>
  );
}
