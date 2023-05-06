import layoutStyle from '../../styles/layout.module.css';

export default function Layout({ children }) {
    return (
      <div className = { layoutStyle.layoutDefault }> { children } </div>
    );
  }