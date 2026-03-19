type OrganizationJsonLdInput = {
  name: string;
  url: string;
  logo?: string;
  sameAs?: string[];
};

type ArticleJsonLdInput = {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  url: string;
};

export function buildOrganizationJsonLd(input: OrganizationJsonLdInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: input.name,
    url: input.url,
    logo: input.logo,
    sameAs: input.sameAs || [],
  };
}

export function buildArticleJsonLd(input: ArticleJsonLdInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    image: [input.image],
    datePublished: input.datePublished,
    dateModified: input.dateModified || input.datePublished,
    author: {
      "@type": "Person",
      name: input.authorName,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": input.url,
    },
  };
}

export function JsonLdScript({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
