import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Login from '..';
describe(' Login', () => {
    test(' Login snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(< Login/>);
        expect(snapshot).toMatchSnapshot();
    });
});


