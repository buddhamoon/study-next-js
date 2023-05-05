import Layout from '../../components/layout';
import Head from 'next/head';
import Date from '../../tools/date';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';
import { getAllPostIds, getPostData } from '../../lib/posts';

export async function sayText () { console.info('说话程序执行') }

export async function getStaticPaths () {
    console.info('getStaticPaths 执行')
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.textContentId);
    console.info('你执行了吗？',params)
    return {
        props: {
          postData,
        },
    };
}

export default function Post( { postData } ) {
    console.info('test',postData)
    return (
        <Layout>
          <Head>
            <title>{postData.title}</title>
          </Head>
          <article>
            <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            <div className={utilStyles.lightText}>
              <Date dateString={postData.date} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </article>
          <Link href={`/`}> 返回首页 </Link>
        </Layout>
      );
}