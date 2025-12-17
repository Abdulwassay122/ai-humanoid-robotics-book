import React from 'react';
import { useLocation } from '@docusaurus/router';
import Link from '@docusaurus/Link';
import { useThemeConfig } from '@docusaurus/theme-common';

export default function Breadcrumb() {
  const location = useLocation();
  const { navbar: { title: siteTitle } } = useThemeConfig();

  // Simple breadcrumb generation based on URL path
  const pathSegments = location.pathname
    .split('/')
    .filter(segment => segment.length > 0);

  // Create breadcrumb items
  const breadcrumbItems = [
    { label: siteTitle, path: '/' },
    ...pathSegments.map((segment, index) => {
      const path = '/' + pathSegments.slice(0, index + 1).join('/');
      // Convert segment to a readable label (replace hyphens with spaces and capitalize)
      const label = segment
        .replace(/-/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase());

      return { label, path };
    })
  ];

  return (
    <nav className="breadcrumb-nav" aria-label="Breadcrumb">
      <ol className="breadcrumb-list">
        {breadcrumbItems.map((item, index) => (
          <li key={index} className="breadcrumb-item">
            {index === breadcrumbItems.length - 1 ? (
              <span className="breadcrumb-current">{item.label}</span>
            ) : (
              <>
                <Link to={item.path} className="breadcrumb-link">
                  {item.label}
                </Link>
                <span className="breadcrumb-separator" aria-hidden="true">/</span>
              </>
            )}
          </li>
        ))}
      </ol>
      <style jsx>{`
        .breadcrumb-nav {
          padding: 0.75rem 0;
          margin-bottom: 1rem;
        }
        .breadcrumb-list {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .breadcrumb-item {
          display: flex;
          align-items: center;
          font-size: 0.875rem;
        }
        .breadcrumb-item:not(:last-child) {
          margin-right: 0.5rem;
        }
        .breadcrumb-link {
          color: var(--ifm-color-primary);
          text-decoration: none;
        }
        .breadcrumb-link:hover {
          text-decoration: underline;
        }
        .breadcrumb-separator {
          margin: 0 0.5rem;
          color: var(--ifm-color-emphasis-500);
        }
        .breadcrumb-current {
          color: var(--ifm-color-emphasis-700);
          font-weight: 500;
        }
      `}</style>
    </nav>
  );
}