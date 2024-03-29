import { NavItemProps } from '@/types/components/global';
import Link from 'next/link';
import useNavigationContext from '@/context/navigationContext';
import classNames from 'classnames';

export default function NavItem({
    href,
    title,
    onClick,
    className,
}: NavItemProps) {
    const { currentRoute } = useNavigationContext();
    const isActive = currentRoute === href;

    return (
        <span>
            <Link
                href={href}
                className={classNames({
                    [className]: isActive,
                })}
                onClick={onClick}
            >
                {title}
            </Link>
        </span>
    );
}
