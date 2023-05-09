import style from './index.module.css';
import Image from 'next/image';
import configData from '../../config/page.config';

export default function ShowMeDiv ( data ) {
    const context = data['data'] || {};
    return (
        <div className = {style.wrapper}>
            <div className = {style.headPortrait}>
                <Image src = { configData.myPhoto } width = "120" height = "120" ></Image>
            </div>
            <div className = {style.verticalCuttingLine}></div>
            <div className = {style.contentText}>
                <div dangerouslySetInnerHTML={{ __html: context.contentHtml }} />
            </div>
        </div>
    );
}