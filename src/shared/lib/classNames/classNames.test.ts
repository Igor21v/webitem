import { classNames } from './classNames';

describe('classNames', () => {
    test('whith only first parm', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('whith additional class', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(
            expected,
        );
    });

    test('whith mods', () => {
        const expected = 'someClass class1 class2 hovered scrollable';
        expect(
            classNames('someClass', { hovered: true, scrollable: true }, [
                'class1',
                'class2',
            ]),
        ).toBe(expected);
    });

    test('whith mods false', () => {
        const expected = 'someClass class1 class2 scrollable';
        expect(
            classNames('someClass', { hovered: false, scrollable: true }, [
                'class1',
                'class2',
            ]),
        ).toBe(expected);
    });

    test('whith mods undefined', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(
            classNames('someClass', { hovered: true, scrollable: undefined }, [
                'class1',
                'class2',
            ]),
        ).toBe(expected);
    });
});
