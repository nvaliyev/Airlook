import hoistStatics from 'hoist-non-react-statics';
import invariant from '../utils/invariant';
import NavigationContext from './NavigationContext';

export const withNavigation = (
    Component,
    config = { forwardRef: true }
) => {
    class ComponentWithNavigation extends React.Component {
        static displayName = `withNavigation(${Component.displayName ||
            Component.name})`;

        render() {
            const navigationProp = this.props.navigation;
            return (
                <NavigationContext.Consumer>
                    {navigationContext => {
                        const navigation = navigationProp || navigationContext;
                        invariant(
                            !!navigation,
                            'withNavigation can only be used on a view hierarchy of a navigator. The wrapped component is unable to get access to navigation from props or context.'
                        );
                        return (
                            <Component
                                {...this.props}
                                navigation={navigation}
                                ref={config.forwardRef ? this.props.onRef : undefined}
                            />
                        );
                    }}
                </NavigationContext.Consumer>
            );
        }
    }

    return hoistStatics(ComponentWithNavigation, Component);
}
const EventNameToPropName = {
    willFocus: 'onWillFocus',
    didFocus: 'onDidFocus',
    willBlur: 'onWillBlur',
    didBlur: 'onDidBlur',
};

const EventNames = Object.keys(EventNameToPropName);

class NavigationEvents extends React.Component {
    getPropListener = eventName => this.props[EventNameToPropName[eventName]];

    componentDidMount() {
        this.subscriptions = {};

        // We register all navigation listeners on mount to ensure listener stability across re-render
        // A former implementation was replacing (removing/adding) listeners on all update (if prop provided)
        // but there were issues (see https://github.com/react-navigation/react-navigation/issues/5058)
        EventNames.forEach(eventName => {
            this.subscriptions[eventName] = this.props.navigation.addListener(
                eventName,
                (...args) => {
                    const propListener = this.getPropListener(eventName);
                    return propListener && propListener(...args);
                }
            );
        });
    }

    componentWillUnmount() {
        EventNames.forEach(eventName => {
            this.subscriptions[eventName].remove();
        });
    }

    render() {
        return null;
    }
}

export default withNavigation(NavigationEvents);