/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    distDir: "out",
    // eslint: {
    //     ignoreDuringBuilds: true,
    // },
    // compiler: {
    //     // eslint-disable-next-line no-undef
    //     typescript: {
    //         ignoreBuildErrors true,
    //     },
    // }
}

module.exports = nextConfig
