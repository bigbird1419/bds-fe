import { Link } from 'react-router-dom'

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
    onclick = () => { },
    disabled = false,
    children,
    styles,
    ...passProps
}) {
    let Comp = 'button'
    let props = {
        onclick,
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
    const classes = {
        'bg-colorPrimary rounded-md text-white px-4 py-1': primary,
        'bg-colorSecondary rounded-md text-white px-4 py-1': secondary,
        'text-colorDark text-md': normal,
        'rounded-full': rounded,
        'text-xl': large,
        'text-sm': small,
        [className]: className,
    }
    return (
        <Comp className={classes} {...props} styles={styles}>
            <span>{children}</span>
        </Comp>
    )
}