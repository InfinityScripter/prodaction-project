import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const svgLoader: webpack.RuleSetRule = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };

  const babelLoader: webpack.RuleSetRule = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
        plugins: [
          [
            "i18next-extract",
            {
              locales: ["en", "ru"],
              useI18nextDefaultValue: true,
              keyAsDefaultValue: true,
            },
          ],
        ],
      },
    },
  };

  const cssLoader: webpack.RuleSetRule = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes(".module.")),
            localIdentName: isDev
              ? "[path][name]__[local]--[hash:base64:5]"
              : "[hash:base64:8]",
          },
        },
      },
      // Compiles Sass to CSS
      "sass-loader",
    ],
  };

  const typescriptLoader: webpack.RuleSetRule = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const fileLoader: webpack.RuleSetRule = {
    test: /\.(png|jpe?g|gif|woff|woff2|eot|ttf|otf)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };
  //Порядок лоадеров важен!
  return [fileLoader, svgLoader, babelLoader, typescriptLoader, cssLoader];
}
