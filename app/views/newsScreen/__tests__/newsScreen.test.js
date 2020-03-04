import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import NewsScreen from '..';
describe(' NewsScreen', () => {
    test(' NewsScreen snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(< NewsScreen/>);
        expect(snapshot).toMatchSnapshot();
    });
});


