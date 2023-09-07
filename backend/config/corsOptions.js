
const allowedOrigins = [process.env.CLIENT_URL, process.env.CLIENT_URL2, process.env.SERVER_URL];

const corsOptions = {

    origin: function (origin, callback) {

        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }

};

module.exports = corsOptions;