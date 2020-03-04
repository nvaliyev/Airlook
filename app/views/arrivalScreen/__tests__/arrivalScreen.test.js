import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ArrivalScreen from '..';
describe(' ArrivalScreen', () => {
    test(' ArrivalScreen snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(< ArrivalScreen/>);
        expect(snapshot).toMatchSnapshot();
    });
});


