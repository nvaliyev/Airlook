import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { LaunchScreen } from '..';
describe('Laucnhscreen', () => {
    test('Launchscreensnapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<LaunchScreen/>);
        expect(snapshot).toMatchSnapshot();
    });
});


