export type BuildMode = 'production' | 'development'

export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
    src: string;
    locales: string;
    buildLocales: string;
    favicon: string;
    buildFavicon: string;
}

export interface BuilEnv {
    mode: BuildMode;
    port: number;
    apiUrl: string;
    staticUrl: string;
    bundleAnalyzer: boolean;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
    apiUrl: string;
    staticUrl: string;
    project: 'storybook' | 'frontend' | 'jest';
    bundleAnalyzer: boolean;
}
