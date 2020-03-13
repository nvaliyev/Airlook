import 'react-native';
import React from './node_modules/react';
import ShallowRenderer from './node_modules/react-test-renderer/shallow';
import FilterButtons from '..';
describe(' FilterButtons ', () => {
    test(' FilterButtons snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(< FilterButtons/>);
        expect(snapshot).toMatchSnapshot();
    });
});


