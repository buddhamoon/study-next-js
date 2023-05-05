import style from '../styles/utils.module.css'

export default function Layout({ children }) {
    return <div className={ style.layoutPlanA}> { children } </div>;
  }