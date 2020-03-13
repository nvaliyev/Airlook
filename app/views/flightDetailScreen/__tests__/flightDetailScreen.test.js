import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import FlightDetailScreen from '..';
describe('FlightDetailScreen', () => {
    test('FlightDetailScreen snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<FlightDetailScreen/>);
        expect(snapshot).toMatchSnapshot();
    });
});