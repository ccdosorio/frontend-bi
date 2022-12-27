const PROXY_CONFIG = [
    {
        context: [
            '/users',
            '/classrooms',
            '/books',
            '/user-books',
            '/counting',
            '/students'
        ],
        target: 'http://localhost:6100/ems-service',
        secure: false,
        changeOrigin: true,
        logLevel: 'debug'
    }
]

module.exports = PROXY_CONFIG;
