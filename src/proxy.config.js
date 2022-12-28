const PROXY_CONFIG = [
    {
        context: [
            '/libraries',
        ],
        target: 'http://localhost:5211/api/',
        secure: false,
        changeOrigin: true,
        logLevel: 'debug'
    }
]

module.exports = PROXY_CONFIG;
