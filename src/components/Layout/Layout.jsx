import { Container } from '@/components';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import classes from './Layout.module.css';

/* Component ---------------------------------------------------------------- */

export function BaseLayout({ className, children, ...restProps }) {
  const combineClassNames = `${classes.BaseLayout} ${className}`.trim();

  return (
    <div className={combineClassNames} {...restProps}>
      <Header />
      <main>
        <Container>{children}</Container>
      </main>
      <Footer />
    </div>
  );
}

BaseLayout.defaultProps = {
  className: '',
};
