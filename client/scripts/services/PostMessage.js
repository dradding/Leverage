exports.inject = function (app) {
  app.factory('PostMessage', exports.factory);
  return exports.factory;
};

exports.factory = function ($http) {

  return {

    '_get': function _get() {

    },
    '_post': function _post() {

    }
  };

};
