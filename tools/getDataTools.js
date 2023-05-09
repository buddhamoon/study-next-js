import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';


// 申明获取数据的方法类
class GetDataTools {
    constructor () {

    }

    // 获取指定 md 文档数据，并转换为可渲染数据。
    async getMarkDownData ( fileName ) {
        const dataDirectory = path.join(process.cwd(), 'data');
        const fullPath = path.join(dataDirectory, `${fileName}.md`);
        const fileContents = await fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Use remark to convert markdown into HTML string
        const processedContent = await remark()
            .use(html)
            .process(matterResult.content);
        const contentHtml = processedContent.toString();

        // Combine the data with the id and contentHtml
        return {
            contentHtml,
            ...matterResult.data,
        };
    }
}


export default GetDataTools;