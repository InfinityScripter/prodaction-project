export function classNames(
    cls: string,
    mods: Mods = {},
    additional: string[] = [],
): string {
    return [
        cls,
        ...additional.filter(Boolean), // filter out empty strings and undefined
        Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className),
    ].join(' ');
}

type Mods = Record<string, boolean | string>

classNames('remove-btn', { hovered: true, selectable: true, red: true }, [
    'pdg',
]);
