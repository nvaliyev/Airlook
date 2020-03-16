import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import CurrTime from '..';
describe('CurrTime Button', () => {
    test(' CurrTime Button  snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<CurrTime/>);
        expect(snapshot).toMatchSnapshot();
    });
});


