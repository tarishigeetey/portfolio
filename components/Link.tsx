/* eslint-disable jsx-a11y/anchor-has-content */
import Link from 'next/link';
import { AnchorHTMLAttributes, DetailedHTMLProps, forwardRef } from 'react';

const CustomLink = forwardRef<
  HTMLAnchorElement,
  DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
>(({ href, ...rest }, ref) => {
  const isInternalLink = href && href.startsWith('/');
  const isAnchorLink = href && href.startsWith('#');

  if (isInternalLink) {
    return (
      <Link href={href} legacyBehavior>
        <a ref={ref} {...rest} />
      </Link>
    );
  }

  if (isAnchorLink) {
    return <a href={href} ref={ref} {...rest} />;
  }

  return (
    <a
      target='_blank'
      rel='noopener noreferrer'
      href={href}
      ref={ref}
      {...rest}
    />
  );
});

CustomLink.displayName = 'CustomLink';

export default CustomLink;
