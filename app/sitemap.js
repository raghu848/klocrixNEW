export default function sitemap() {
  const baseUrl = 'https://www.klocrix.com';
  
  const routes = [
    '',
    '/about',
    '/services',
    '/services/web-development',
    '/services/app-development',
    '/services/ui-ux-design',
    '/services/data-science',
    '/work',
    '/training',
    '/contact',
    '/blog',
    '/careers',
    '/privacy',
    '/terms'
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
