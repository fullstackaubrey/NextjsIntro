import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';

function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      
      <h1>First Post</h1>

      <h2>
        <Link href="/">Take me back home</Link>
      </h2>
    </Layout>
  );
}

export default FirstPost;