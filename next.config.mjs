/** @type {import('next').NextConfig} */
import { fileURLToPath } from "url";
import path from "path";

export default async function nextConfig() {
  return {
    webpack(config, { isServer }) {
      // Add file-loader for GLB files
      config.module.rules.push({
        test: /\.(glb|gltf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              publicPath: "/_next/static/models/",
              outputPath: "static/models/",
              name: "[name].[ext]",
            },
          },
        ],
      });

      return config;
    },
  };
}
