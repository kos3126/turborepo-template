const withTM = require('next-transpile-modules')(['@monorepo/ui'])

/** @type {import('next').NextConfig} */
module.exports = withTM({
  reactStrictMode: true,
})
