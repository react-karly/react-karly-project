import classes from './Container.module.css';

/* Component ---------------------------------------------------------------- */

export function Container({
  as: Component,
  className,
  children,
  ...restProps
}) {
  const combineClassNames = `${classes.Container} ${className}`.trim();

  return (
    <Component className={combineClassNames} {...restProps}>
      {children}
    </Component>
  );
}

Container.defaultProps = {
  as: 'div',
  className: '',
};
