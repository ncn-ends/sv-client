const withImages = require('next-images');
// const withVideos = require('next-videos')

// module.exports = withImages(withVideos());

module.exports = withImages({
    pageExtensions: ["page.js", "page.tsx", "api.js", "api.ts"],
    images: {
        domains: ['static.wikia.nocookie.net', 'i.imgur.com']
    }
})