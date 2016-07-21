'use strict';
export default /*@ngInject*/function ($stateProvider) {
    $stateProvider.state('app.setmap', {
        url: '/',
        /*@ngInject*/
        templateProvider: ($q) => {
            let promise = $q((resolve) => {
                require.ensure([], function () {
                    resolve(require('./index.html'));
                });
            });
            return promise;
        },
        controller: 'setmapController',
        controllerAs: 'ctrl',
        resolve: {
            /*@ngInject*/
            load: ($q, $ocLazyLoad) => {
                let promise = $q((resolve) => {
                    require.ensure([], () => {
                        let module = require('./setmap.controller').default;
                        $ocLazyLoad.load({ name: module.name });
                        resolve(module);
                    });
                });

                return promise;
            }
        }
    });

}
