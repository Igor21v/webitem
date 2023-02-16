export type Mods = Record<string, string | boolean | undefined>;

export function classNames(
    cls: string,
    mode: Mods = {},
    additional: Array<string | undefined> = [],
): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mode)
            .filter(([, value]) => Boolean(value))
            .map(([className]) => className),
    ].join(' ');
}
