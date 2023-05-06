import Layout from '../../layout/default';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';
import { getAllPostIds, getPostData } from '../../lib/posts';
import configData from '../../config/page.config';
import NavBar from '../../components/NavBar';
import Link from 'next/link';
import ShowMeDiv from '../../components/ShowMeDiv';
import ContentTextShow from '../../components/ContentTextShow';

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
    return {
        props: {
          postData,
        },
    };
}

export default function Post( { postData } ) {
    return (

        <Layout>

        {/* 配置首页默认头部 */}
        <Head> 
          <title>{ postData.title + ' - ' + configData.appTitle }</title>
        </Head>

        {/* 头部 */}
        <section className = { utilStyles.headBackGround } >
          <NavBar></NavBar>
        </section>

        {/* 内容区域 */}
        <section className = { utilStyles.contentWrapper }>

          {/* 个人信息展示 */}
          <ShowMeDiv></ShowMeDiv>

          {/* Blog 内容列表清单 */}
          <div className = { utilStyles.contentTextListDiv }>
            <div className = { utilStyles.backHomeLink }><Link href={`/`}> Back Home </Link></div>
            <ContentTextShow data = {postData}></ContentTextShow>
          </div> 

        </section>

        {/* 尾部 */}
        <section className = { utilStyles.tailContent }>
            <div>版本号：AECP2938192-388284892-39922391</div>
        </section>

        </Layout>
      );
}