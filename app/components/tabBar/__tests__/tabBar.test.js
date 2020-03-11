import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Tabs from '..';
describe(' Tabbar', () => {
    test('Tabbar snap', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(< Tabs/>);
        expect(snapshot).toMatchSnapshot();
    });
});


