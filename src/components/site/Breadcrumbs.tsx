import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { Helmet } from "react-helmet-async";

export interface BreadcrumbItem {
  /** Keyword-aware label, e.g. "Insurance Claims Management" */
  name: string;
  /** Absolute route path, e.g. "/services/claims-management". Omit for the current page. */
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  /** Used to build absolute URLs inside JSON-LD. */
  siteUrl?: string;
  className?: string;
}

const DEFAULT_SITE = "https://www.vamanainsurance.in";

/**
 * Accessible, SEO-friendly breadcrumb trail.
 * Renders a visible <nav aria-label="Breadcrumb"> and emits matching
 * schema.org BreadcrumbList JSON-LD so Google can show breadcrumb
 * rich results in the SERP.
 */
export const Breadcrumbs = ({ items, siteUrl = DEFAULT_SITE, className }: BreadcrumbsProps) => {
  const trail: BreadcrumbItem[] = [{ name: "Home", href: "/" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => {
      // Google allows (and recommends) omitting `item` for the final
      // crumb since it represents the current page. For intermediate
      // crumbs the visible link target and the JSON-LD `item` MUST
      // resolve to the same URL — both are built from `item.href`.
      const entry: Record<string, unknown> = {
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
      };
      if (item.href) entry.item = `${siteUrl}${item.href}`;
      return entry;
    }),
  };

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <ol className="container-x py-6 flex flex-wrap items-center gap-2 text-sm">
        {trail.map((item, i) => {
          const isLast = i === trail.length - 1;
          return (
            <li key={`${item.name}-${i}`} className="inline-flex items-center gap-2">
              {i > 0 && <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />}
              {isLast || !item.href ? (
                <span className="font-semibold text-primary" aria-current="page">
                  {i === 0 ? (
                    <span className="inline-flex items-center gap-1.5"><Home className="h-3.5 w-3.5" aria-hidden="true" />{item.name}</span>
                  ) : item.name}
                </span>
              ) : (
                <Link
                  to={item.href}
                  className="font-medium text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1.5"
                >
                  {i === 0 && <Home className="h-3.5 w-3.5" aria-hidden="true" />}
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
