// src/components/SeoPageLayout.tsx
import { generateBreadcrumbSchema, SITE_URL, SITE_NAME } from "@/lib/seo";

interface Breadcrumb { name: string; url: string }

interface SeoPageLayoutProps {
  children: React.ReactNode;
  breadcrumbs?: Breadcrumb[];
  schemas?: object[];
}

export default function SeoPageLayout({ children, breadcrumbs = [], schemas = [] }: SeoPageLayoutProps) {
  const allBreadcrumbs = [{ name: "Home", url: SITE_URL }, ...breadcrumbs];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(allBreadcrumbs)) }}
      />

      <header className="site-nav">
        <a href="/" className="logo">
          {SITE_NAME.split(".").map((part, i) => (
            <span key={i} style={i === 1 ? { color: "#00c896" } : {}}>
              {i > 0 ? "." : ""}{part}
            </span>
          ))}
        </a>
        <a
          href="/find-doctor"
          style={{
            marginLeft: "auto",
            background: "#0f5c7a",
            color: "white",
            padding: "8px 18px",
            borderRadius: 100,
            fontSize: "0.9rem",
            fontWeight: 600,
          }}
        >
          Find a Doctor
        </a>
      </header>

      <main className="seo-page">
        {breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="breadcrumb">
            <a href="/">Home</a>
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.url} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span aria-hidden="true">›</span>
                {i === breadcrumbs.length - 1 ? (
                  <span aria-current="page">{crumb.name}</span>
                ) : (
                  <a href={crumb.url}>{crumb.name}</a>
                )}
              </span>
            ))}
          </nav>
        )}
        {children}
      </main>

      <footer
        style={{
          background: "#093d52",
          color: "rgba(255,255,255,0.7)",
          padding: "32px 24px",
          textAlign: "center",
          fontSize: "0.9rem",
        }}
      >
        <p>
          © {new Date().getFullYear()}{" "}
          <a href="/" style={{ color: "#00c896", fontWeight: 600 }}>
            {SITE_NAME}
          </a>{" "}
          — Find Primary Care Doctors Near You
        </p>
        <nav aria-label="Footer" style={{ marginTop: 16, display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap" }}>
          {[
            { href: "/find-doctor", label: "Find a Doctor" },
            { href: "/telehealth-doctors", label: "Telehealth" },
            { href: "/insurance-accepted-doctors", label: "Insurance" },
            { href: "/sitemap.xml", label: "Sitemap" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </footer>
    </>
  );
}
