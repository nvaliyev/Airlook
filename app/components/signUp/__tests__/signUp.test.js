import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import SignUp from '..';
describe(' SignUp', () => {
    test(' SignUp snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(< SignUp/>);
        expect(snapshot).toMatchSnapshot();
    });
});


