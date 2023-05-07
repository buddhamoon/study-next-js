import thisStyle from './index.module.css';
import configData from '../../config/page.config';
import Link from 'next/link';



export default function NavBar () {
    const listData = configData.navListData || [];
    return (
        <div className = {thisStyle.wrapper}>
            <div className = {thisStyle.logoOrTitle}>Blog - BuddhaMoon</div>
            <div className = {thisStyle.navButton}>
                <ul>
                    {/* <div className = {thisStyle.menuBarIcon}>+ Menu Bar</div> */}
                    <li>+ Menu Bar</li>
                    { listData.map(item => (
                        <li><Link href = { item.path }> {item.title} </Link></li>
                    ))}
                </ul>
            </div>
        </div>
    );
}