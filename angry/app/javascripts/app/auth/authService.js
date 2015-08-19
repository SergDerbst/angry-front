'use strict';

angular.module('angry').factory('authService', [
    '$rootScope',
    '$resource',
    '$state',
    '$http',
    '$q',
    'authStorage',
    function ($rootScope, $resource, $state, $http, $q, authStorage) {
        var errorMessages = {
                'credentials_invalid': 'Username or password incorrect.'
            },
            resource = {
                method: 'POST',
                interceptor: {
                    response: function (res) {
                        authStorage.set('auth', {
                            accessToken: res.data.accessToken,
                            refreshToken: res.data.refreshToken
                        });
                        $http.defaults.headers.common['Authorization'] = res.data.accessToken;
                        return null;
                    },
                    responseError: function (err) {
                        return $q.reject(err);
                    }
                }
            },
            send = function(url, data, successCallback, errorCallback) {
                var s = successCallback ? successCallback : success;
                $resource(url, {}, {oauth: resource}).oauth({}, data, s, errorCallback);
            },
            success = function() {
                if ($rootScope.toState) {
                    $state.go($rootScope.toState.name, $rootScope.toParams);
                } else {
                    $state.go('map');
                }
            };

        //delete authStorage.get('auth').accessToken;
        return {
            authenticate: function (data, successCallback, scope) {
                send('http://localhost:9000/api/v1/oauth/token', data, successCallback, function(err) {
                    scope.message = errorMessages[err.data.errorContext.error];
                });
            },
            refresh: function (data, successCallback) {
                send('http://localhost:9000/api/v1/oauth/token/refresh', data, successCallback, function(err) {
                    throw err;
                });
            },
            isAuthenticated: function () {
                return authStorage.get('auth') && authStorage.get('auth').accessToken;
            }
        };
    }
]);
