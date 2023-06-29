/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        INFURA_API_KEY: process.env.INFURA_API_KEY,
        IS_TEST: process.env.IS_TEST
    }
}

module.exports = nextConfig
