import { useLocation } from 'react-router';
import classes from './Container.module.css';

/* Component ---------------------------------------------------------------- */

export function Container({
  as: Component,
  className,
  children,
  ...restProps
}) {
  const combineClassNames = `${classes.Container} ${className}`.trim();

  const location = useLocation();
  console.log(1515, location);
  const HomeStyle = {
    width: '100%',
  };
  return (
    <Component
      className={combineClassNames}
      {...restProps}
      style={location.pathname === '/' ? HomeStyle : {}}
    >
      {children}
    </Component>
  );
}

Container.defaultProps = {
  as: 'div',
  className: '',
};
