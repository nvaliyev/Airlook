import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import MButton from '..';
describe(' MButton', () => {
    test(' MButton snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(< MButton/>);
        expect(snapshot).toMatchSnapshot();
    });
});


