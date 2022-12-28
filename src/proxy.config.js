const PROXY_CONFIG = [
    {
        context: [
            '/libraries',
            '/books',
            '/login',
        ],
        target: 'http://localhost:5211/api/',
        secure: false,
        changeOrigin: true,
        logLevel: 'debug'
    }
]

module.exports = PROXY_CONFIG;
