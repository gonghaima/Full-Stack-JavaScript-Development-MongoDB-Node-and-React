const env=process.env;

export const nodeEnv=env.NODE_ENV || 'development';

export default {
    port: env.PORT || 8080
};
// const env=process.env;

// export const nodeEnv=env.NODE_ENV || 'development';

// export const logStars = function (message) {
//     console.info('*******');
//     console.info(message);
//     console.info('*******');
// };

// export default {
//     port: env.PORT || 8080
// };