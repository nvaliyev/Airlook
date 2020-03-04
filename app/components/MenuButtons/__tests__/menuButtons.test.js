import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import DrawerButtons from '..';
describe(' DrawerButtons', () => {
    test(' DrawerButtons snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(< DrawerButtons/>);
        expect(snapshot).toMatchSnapshot();
    });
});


