import 'react-native';
import React from './node_modules/react';
import ShallowRenderer from './node_modules/react-test-renderer/shallow';
import SettingsContent from '..';
describe(' SettingsContent', () => {
    test(' SettingsContent snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(< SettingsContent/>);
        expect(snapshot).toMatchSnapshot();
    });
});


