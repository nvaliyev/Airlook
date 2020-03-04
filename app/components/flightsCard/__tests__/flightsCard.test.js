import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import FlightsCard from '..';
describe(' FlightsCard', () => {
    test(' FlightsCard snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(< FlightsCard/>);
        expect(snapshot).toMatchSnapshot();
    });
});


