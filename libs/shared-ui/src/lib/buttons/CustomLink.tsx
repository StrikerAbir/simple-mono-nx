// libs/shared-ui/src/lib/links/CustomLink.tsx

import React from 'react';
import Link from 'next/link';

type CustomLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
};

export const CustomLink: React.FC<CustomLinkProps> = ({
  href,
  children,
  className = '',
  external = false,
}) => {
  if (external) {
    return (
      <a
        href={href}
        className={`text-blue-500 hover:underline ${className}`}
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link legacyBehavior href={href} passHref>
      <a
        rel="noopener noreferrer"
        className={`text-blue-500 hover:underline ${className}`}
      >
        {children}
      </a>
    </Link>
  );
};
