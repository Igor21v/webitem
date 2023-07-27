import webpack from 'webpack';
import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildMode, BuildPaths, BuilEnv } from './config/build/types/config';

function getApiUrl(mode: BuildMode, apiUrl?: string) {
    if (apiUrl) {
        return apiUrl;
    }
    if (mode === 'production') {
        return '/api';
    }
    return 'http://localhost:8000';
}

function getStaticUrl(mode: BuildMode, staticUrl?: string) {
    if (staticUrl) {
        return staticUrl;
    }
    if (mode === 'production') {
        return '/static';
    }
    return 'http://localhost:8000/static';
}

export default (env: BuilEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
        locales: path.resolve(__dirname, 'public', 'locales'),
        buildLocales: path.resolve(__dirname, 'build', 'locales'),
        favicon: path.resolve(__dirname, 'public', 'favicon.svg'),
        buildFavicon: path.resolve(__dirname, 'build', 'favicon.svg'),
    };

    const mode = env?.mode || 'development';
    const PORT = env?.port || 3000;
    const apiUrl = getApiUrl(mode, env?.apiUrl);
    const staticUrl = getStaticUrl(mode, env?.staticUrl);
    const bundleAnalyzer = env?.bundleAnalyzer || false;

    const isDev = mode === 'development';

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
        apiUrl,
        staticUrl,
        project: 'frontend',
        bundleAnalyzer,
    });
    return config;
};
