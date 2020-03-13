import 'react-native';
import React from './node_modules/react';
import ShallowRenderer from './node_modules/react-test-renderer/shallow';
import DrawerContent from '..';
describe(' SideBar content', () => {
    test(' SideBar content snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(< DrawerContent/>);
        expect(snapshot).toMatchSnapshot();
    });
});


