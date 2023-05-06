
import Date from '../../tools/date';
import thisStyle from './index.module.css'

export default function ContentTextShow ( data ) {
    const context = data['data'] || {};
    return (
        <>
            <div className = { thisStyle.titleFonts }> { context.title } </div>
            <div className = { thisStyle.titleFonts }>
                Time：<Date dateString = { context.date } />
            </div>
            <div className = { thisStyle.headingMd }>
                <div dangerouslySetInnerHTML={{ __html: context.contentHtml }} />
            </div>
        </>
    );
}