import 'react-native';
import React from './node_modules/react';
import ShallowRenderer from './node_modules/react-test-renderer/shallow';
import FooterButtons from '..';
describe(' FooterButtons', () => {
    test(' FooterButtons snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(< FooterButtons/>);
        expect(snapshot).toMatchSnapshot();
    });
});


