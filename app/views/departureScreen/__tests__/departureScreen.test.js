import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import DepartureScreen from '..';
describe('DepartureScreen', () => {
    test('DepartureScreen snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<DepartureScreen/>);
        expect(snapshot).toMatchSnapshot();
    });
});


