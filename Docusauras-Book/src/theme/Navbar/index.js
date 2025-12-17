import React, { useState, useEffect } from 'react';
import Navbar from '@theme-original/Navbar';
import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useThemeConfig } from '@docusaurus/theme-common';

export default function NavbarWrapper(props) {
  const location = useLocation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { siteConfig } = useDocusaurusContext();
  const { navbar: { title: siteTitle } } = useThemeConfig();

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Focus management for accessibility
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Focus the close button when menu opens
      const closeBtn = document.querySelector('.navbar-mobile-close');
      if (closeBtn) {
        closeBtn.focus();
      }
    }
  }, [isMobileMenuOpen]);

  // Keyboard navigation enhancements
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Close mobile menu with Escape key
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setMobileMenuOpen(false);
        // Return focus to the menu toggle button
        const menuToggle = document.querySelector('[aria-label="Toggle navigation bar"]');
        if (menuToggle) {
          menuToggle.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <Navbar {...props} />
      {/* Additional navigation enhancements can be added here */}
      {isMobileMenuOpen && (
        <div
          className="navbar-mobile-overlay"
          onClick={() => setMobileMenuOpen(false)}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              setMobileMenuOpen(false);
            }
          }}
          role="button"
          tabIndex="0"
          aria-label="Close mobile menu overlay"
        >
          <div
            className="navbar-mobile-menu"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-menu-title"
          >
            <div className="navbar-mobile-header">
              <h2 id="mobile-menu-title" className="navbar-mobile-title">
                <Link to="/" className="navbar-mobile-title-link" tabIndex="0">
                  {siteTitle}
                </Link>
              </h2>
              <button
                className="navbar-mobile-close"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close mobile menu"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setMobileMenuOpen(false);
                  }
                }}
                tabIndex="0"
              >
                ×
              </button>
            </div>
            {/* Mobile menu content would be added here */}
          </div>
        </div>
      )}
      <style jsx>{`
        .navbar-mobile-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 999;
          display: flex;
          align-items: flex-start;
          justify-content: center;
        }
        .navbar-mobile-menu {
          background: var(--ifm-background-surface-color);
          width: 90%;
          max-width: 400px;
          height: fit-content;
          max-height: 80vh;
          margin-top: 5vh;
          border-radius: var(--ifm-global-radius);
          box-shadow: var(--ifm-global-shadow-md);
          overflow: hidden;
        }
        .navbar-mobile-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem;
          border-bottom: 1px solid var(--ifm-color-emphasis-200);
        }
        .navbar-mobile-title {
          font-weight: 600;
          font-size: 1.2rem;
          margin: 0;
        }
        .navbar-mobile-title-link {
          color: var(--ifm-color-primary);
          text-decoration: none;
        }
        .navbar-mobile-title-link:hover {
          text-decoration: underline;
        }
        .navbar-mobile-close {
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: var(--ifm-color-emphasis-700);
          padding: 0.25rem;
          border-radius: 4px;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .navbar-mobile-close:hover,
        .navbar-mobile-close:focus {
          background-color: var(--ifm-color-emphasis-100);
          outline: 2px solid var(--ifm-color-primary);
          outline-offset: 2px;
        }
      `}</style>
    </>
  );
}