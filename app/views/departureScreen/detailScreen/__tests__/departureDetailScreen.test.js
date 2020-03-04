import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import DepartureDetailScreen from '..';
describe('DepartureDetailScreen', () => {
    test('DepartureDetailScreen snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<DepartureDetailScreen/>);
        expect(snapshot).toMatchSnapshot();
    });
});


