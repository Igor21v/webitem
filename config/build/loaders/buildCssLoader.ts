import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { RESIZEBREAKPOINTS } from "../../../src/shared/lib/hooks/useResizeWindow/ResizeBreakpoints";

const getBreakpoints = () => {
    return (`@function breakpoints($size) {
                @if $size==SM {
                    @return ${RESIZEBREAKPOINTS.SM}px
                } @if $size==MD {
                    @return ${RESIZEBREAKPOINTS.MD}px
                } @if $size==LG {
                    @return ${RESIZEBREAKPOINTS.LG}px
                } @if $size==XL {
                    @return ${RESIZEBREAKPOINTS.XL}px
                } @if $size==XXL {
                    @return ${RESIZEBREAKPOINTS.XXL}px    
                }}`
  )
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


