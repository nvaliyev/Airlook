import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Burger from '..';
describe('Burgerbutton', () => {
    test(' Burger button snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<Burger/>);
        expect(snapshot).toMatchSnapshot();
    });
});


