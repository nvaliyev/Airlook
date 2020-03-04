import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import FooterButtons from '..';
describe(' FooterButtons', () => {
    test(' FooterButtons snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(< FooterButtons/>);
        expect(snapshot).toMatchSnapshot();
    });
});


