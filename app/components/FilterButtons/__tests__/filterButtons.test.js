import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import FilterButtons from '..';
describe(' FilterButtons ', () => {
    test(' FilterButtons snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(< FilterButtons/>);
        expect(snapshot).toMatchSnapshot();
    });
});


