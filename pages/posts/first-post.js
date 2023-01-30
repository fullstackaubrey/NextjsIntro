import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';

function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Blog: First Post</title>
      </Head>
      <h2>First Post</h2>
      <section>
        <p>Lorem ipsum dolor sit amet. Vel minus distinctio vel voluptate voluptas non veniam illo qui suscipit porro. Et voluptas eaque est asperiores culpa nam debitis labore ea enim dolores et autem modi qui suscipit veritatis? Sit quasi galisum qui placeat minus eum consequatur quis.</p>
        <p>Et molestiae vitae At nihil reprehenderit qui deleniti officiis? Quo maiores blanditiis non laudantium nulla eum excepturi repudiandae et eaque doloremque sed dolorum voluptatem.</p>
        <p>Ut laboriosam blanditiis eum ipsum illum vel eveniet accusantium eos doloremque sunt ut doloremque nesciunt. Ab aliquid expedita rem beatae sint et dolor sapiente qui nostrum vitae sit sint dolorem nam mollitia voluptatem eos minus consequatur. Quo nihil quia eos repudiandae voluptate cum quidem quisquam et omnis consequatur?</p>
      </section>
      {/* <h2>
        <Link href="/">Take me back home</Link>
      </h2> */}
    </Layout>
  );
}

export default FirstPost;