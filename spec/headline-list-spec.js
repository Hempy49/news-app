(function() {
  var headline = new Headline("Another headline");
  var headlineList = new HeadlineList();

  it("tests headline-list is created with empty array", function () {
    assert.isTrue(Array.isArray(headlineList.headlines));
  });

  it("tests headline can be pushed to array", function () {
    headlineList.pushToHeadlineList(headline);
    assert.isTrue(headlineList.headlines.length === 1);
  });
})();
