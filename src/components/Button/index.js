import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'

import styles from './Button.module.css'

const cx = classNames.bind(styles)

export default function Button({
    to,
    href,
    primary = false,
    secondary = false,
    normal = false,
    rounded = false,
    large = false,
    small = false,
    className,
    onClick = () => {},
    disabled = false,
    children,
    styles,
    ...passProps
}) {
    let Comp = 'button'
    let props = {
        onClick,
        ...passProps
    }
    if (disabled) {
        // delete props.onClick;
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    if (to) {
        Comp = Link
        props.to = to
    } else if (href) {
        Comp = 'a'
        props.href = href
    }
    const classes = cx({
        'bg-colorPrimary rounded-md text-white': primary,
        'bg-colorSecondary rounded-md text-white': secondary,
        'text-colorDark text-md': normal,
        'rounded-full': rounded,
        'text-xl': large,
        'text-sm': small,
        [className]: className,
    })
    return (
        <Comp className={classes} {...props} styles={styles}>
            <span>{children}</span>
        </Comp>
    )
}