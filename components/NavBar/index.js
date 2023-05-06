import style from './index.module.css';
import configData from '../../config/page.config';
import Link from 'next/link';



export default function NavBar () {
    const listData = configData.navListData || [];
    return (
        <div className = {style.wrapper}>
            <div className = {style.logoOrTitle}>Blog - 中文显示</div>
            <div className = {style.navButton}>
                <ul>
                    { listData.map(item => (
                        <li><Link href = { item.path }> {item.title} </Link></li>
                    ))}
                </ul>
            </div>
        </div>
    );
}