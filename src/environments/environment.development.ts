export const environment = {
  production: false,
  baseApiUrl: 'https://picsum.photos',
  localHostUrl: 'http://120.0.0.1:4200',
  photoProcess: {
    pageNumber: 1,
    batchSize: 12,
    randomDelay: Math.floor(Math.random() * (3000 - 1200 + 1) + 1200),
  },
};
