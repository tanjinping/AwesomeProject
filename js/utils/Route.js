class Route {
    // reset
    // pop
    // setParams
    // dispatch
    // isFocused
    // canGoBack
    // addListener
    // removeListener
    // dangerouslyGetParent
    // dangerouslyGetState
    // setOptions

    static popToTop() {
        // const navigation = Route.navigation;
        // (!navigation || routerName) && alert('404');
        // Router.navigation.navigate(routerName, {...params});
    }

    static replace(routeName) {
        Route.navigation && Route.navigation.replace(routeName);
    }

    static push(routeName, params = {}) {
        // const navigation = Route.navigation;
        // (!navigation || !filterRouteName(name)) && alert('404');
        // Router.navigation.navigate(routerName, {...params});
    }

    static navigate(routeName, params = {}) {
        (Route.navigation && filterRouteName(routeName)) ? Route.navigation.navigate(routeName, {...params}) : Route.navigation.replace('AuthStackNavigator');
    }

    static goBack() {
        //     const navigation = NavigationUtil.navigation;
        //     if (!navigation) {
        //         console.log('navigation undefined');
        //         return false;
        //     }
        //     navigation.goBack(key || null);
    }
}

const filterRouteName = routeName => {
    return ![''].includes(routeName);
};

export default Route;
