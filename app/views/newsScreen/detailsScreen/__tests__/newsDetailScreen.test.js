import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import NewsDetailScreen from '..';
describe('NewsDetailScreen', () => {
    test('NewsDetailScreen snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<NewsDetailScreen/>);
        expect(snapshot).toMatchSnapshot();
    });
});


