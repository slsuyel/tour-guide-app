const config = {
  siteUrl: 'https://panchagarhtourguide.gov.bd',
  generateRobotsTxt: true,
  exclude: [
    '/dashboard',
    '/dashboard/*',
    '/login',
    '/register',
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/dashboard', '/dashboard/*', '/login', '/register'],
      },
    ],
  },
};

export default config;
