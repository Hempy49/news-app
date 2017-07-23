(function (exports) {
  function HeadlineList() {
    this.headlines = [];
  };

  HeadlineList.prototype.pushToHeadlineList = function (headline) {
    this.headlines.push(headline);
  };

  exports.HeadlineList = HeadlineList;
})(this);
