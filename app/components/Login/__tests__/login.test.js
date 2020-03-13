import 'react-native';
import React from './node_modules/react';
import ShallowRenderer from './node_modules/react-test-renderer/shallow';
import Login from '..';
describe(' Login', () => {
    test(' Login snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(< Login/>);
        expect(snapshot).toMatchSnapshot();
    });
});


