import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ClickButton from '..';
describe('clickButton', () => {
    test(' clickButton snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<ClickButton/>);
        expect(snapshot).toMatchSnapshot();
    });
});


