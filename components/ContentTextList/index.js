import thisStyle from './index.module.css';
import Link from 'next/link';

export default function ContentTextList ( data ) {
    console.info('内容展示清单数据', data);
    return (
        <div className = {thisStyle.wrapper}>
            <ul className = {thisStyle.list}>
                {
                    data['data'].map( ({id, date, title}) => (
                        <li key = { id } >
                            主题：<Link href = {`/posts/${id}`}>{ title }</Link>
                            <br />
                            ID：{ id }
                            <br />
                            Time：{ date }
                        </li>
                    ) )
                }
            </ul>
        </div>
    );
}