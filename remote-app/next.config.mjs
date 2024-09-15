// eslint-disable-next-line @typescript-eslint/no-var-requires
import NextFederationPlugin from "@module-federation/nextjs-mf";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, options) => {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: "remote",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./ComponentA": "./src/components/ComponentA.tsx",
          "./ComponentB": "./src/components/ComponentB.tsx",
        },
        shared: {
          // Shared dependencies between the Host and Remote applications
        },
      })
    );
    return config;
  },
};

export default nextConfig;
