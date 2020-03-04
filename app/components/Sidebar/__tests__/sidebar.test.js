import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import DrawerContent from '..';
describe(' SideBar content', () => {
    test(' SideBar content snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(< DrawerContent/>);
        expect(snapshot).toMatchSnapshot();
    });
});


