import rss from '@astrojs/rss';

export const get = () => rss({
    title: 'Sarah Rainsberger | Blog',
    description: 'Writing by Sarah Rainsberger',
    site: 'https://rainsberger.ca',
    items: import.meta.glob('./**/*.md'),
    customData: `<language>en-us</language>`,
  });

  