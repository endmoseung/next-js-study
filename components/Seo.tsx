import Head from "next/head";

interface Title {
  title: string;
}

const Seo: React.FC<Title> = ({ title }) => {
  return (
    <Head>
      <title>{title} | Next Movie</title>
    </Head>
  );
};

export default Seo;
