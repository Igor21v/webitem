import MiniCssExtractPlugin from 'mini-css-extract-plugin';
// eslint-disable-next-line unused-imports/no-unused-imports
import { Breakpoint, RESIZEBREAKPOINTS } from "../../../src/shared/lib/hooks/useResizeWindow/ResizeBreakpoints";

const sass = require("node-sass");
const sassUtils = require("node-sass-utils")(sass);

const getBreakpoints = () => {
    return ('@import "/src/app/styles/variables/preproc"; @function pow($base, $exponent) {$result: 1; @for $_ from 1 through $exponent {$result: $result * $base;} @return $result;}'
  )

  .sidebar {
    float: left;
    margin-left: pow(4, 3) * 1px;
  }


export function buildCssLoader(isDev: boolean) {
    return {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]',
                    },
                },
            },
            {loader: 'sass-loader',
            options: {
                additionalData: getBreakpoints()
            },
        }
        ],
    };
}


