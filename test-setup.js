// matchMedia not present, legacy browsers require a polyfill
// react-slick과 관련된 문제에 대한 링크 참조: https://www.npmjs.com/package/react-slick/v/0.22.3
window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {}
    };
  };
