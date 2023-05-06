import style from './index.module.css';
import Image from 'next/image';
import configData from '../../config/page.config';

export default function ShowMeDiv () {
    return (
        <div className = {style.wrapper}>
            <div className = {style.headPortrait}>
                <Image src = { configData.myPhoto } width = "120" height = "120" ></Image>
            </div>
            <div className = {style.verticalCuttingLine}></div>
            <div className = {style.contentText}>
                Hello ~ 欢迎来到由我基于 NextJS 开发的 Blog。
                <br></br>
                如有问题，请联系我：hy51hy#126.com
            </div>
        </div>
    );
}