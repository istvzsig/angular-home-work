export const environment = {
  production: false,
  baseApiUrl: 'https://picsum.photos',
  localHostUrl: 'localhost',
  photoProcess: {
    pageNumber: 1,
    batchSize: 12,
    randomDelay: Math.floor(Math.random() * (3000 - 1200 + 1) + 1200),
  },
};
