var urchinTracker = function () {},
  _gaq = {
    push: function () {
      try {
        if (arguments[0][0] === "_link") {
          window.location.href = arguments[0][1];
        }
      } catch (er) {}
    },
  },
  _gat = {
    _createTracker: function () {},
    _getTracker: function () {
      return {
        __noSuchMethod__: function () {},
        _link: function (o) {
          if (o) {
            location.href = o;
          }
        },
        _linkByPost: function () {
          return true;
        },
        _getLinkerUrl: function (o) {
          return o;
        },
        _trackEvent: function () {},
      };
    },
  };
var _gat = {
  _getTrackerByName: function () {
    return { _trackEvent: function () {} };
  },
};
