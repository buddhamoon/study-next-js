import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import Layout from '../layout/default';
import ShowMeDiv from '../components/ShowMeDiv';
import NavBar from '../components/NavBar';
import ContentTextList from '../components/ContentTextList';
import configData from '../config/page.config';
import { getSortedPostsData } from '../lib/posts';
import GetDataTools from '../tools/getDataTools';

export async function getStaticProps () {
  const allPostsData = getSortedPostsData();
  const showMeText = await new GetDataTools().getMarkDownData('self-introduction');
  return {
    props: {
      showMeText,
      allPostsData
    },
  };
}

export async function sayText () { console.info('说话程序执行') };

export default function Home({ allPostsData, showMeText }) {
  return (
    <Layout>

      {/* 配置首页默认头部 */}
      <Head> 
        <title>{ configData.appTitle }</title>
      </Head>

      {/* 头部 */}
      <section className = { utilStyles.headBackGround } >
        <NavBar ></NavBar>
      </section>

      {/* 内容区域 */}
      <section className = { utilStyles.contentWrapper }>

        {/* 个人信息展示 */}
        <ShowMeDiv data = {showMeText}></ShowMeDiv>

        {/* Blog 内容列表清单 */}
        <div className = { utilStyles.contentTextListDiv }>
          <ContentTextList data = {allPostsData}></ContentTextList>
        </div> 

      </section>

      {/* 尾部 */}
      <section className = { utilStyles.tailContent }>
          <div>版本号：AECP2938192-388284892-39922391</div>
      </section>
      
    </Layout>
  );
}
