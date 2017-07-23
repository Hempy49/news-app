(function () {
    var headline = new Headline("Exciting headline");
    it("tests headline takes text", function () {
      assert.isTrue(headline.text === "Exciting headline");
    });

})();
