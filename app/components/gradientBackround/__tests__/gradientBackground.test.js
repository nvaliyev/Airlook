import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Gradient from '..';
describe('Gradient Button', () => {
    test(' Gradient Button  snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<Gradient/>);
        expect(snapshot).toMatchSnapshot();
    });
});


