import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ArrivalDetailScreen from '..';
describe('ArrivalDetailScreen', () => {
    test('ArrivalDetailScreen snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<ArrivalDetailScreen/>);
        expect(snapshot).toMatchSnapshot();
    });
});


