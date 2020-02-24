import 'react-native';
import React from 'react';
import { act, create } from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import FlightScreen from '..';
describe('Flightscreen', () => {
    test('Flightscreen snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<FlightScreen/>);
        expect(snapshot).toMatchSnapshot();
    });
});


