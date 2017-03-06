describe('Home', function () {

  beforeEach(function () {
    browser.get('/');
  });

  it('should have a form', function () {
    var form = element(by.css('my-app form'));
    expect(form.isPresent()).toEqual(true);
  });

  it('should have at least 2 fields', function () {
    var inputs = element.all(by.css('my-app form input'));
    expect(inputs.count()).toBeGreaterThan(2);
  });

  it('should generate a URL', function() {

    element(by.css('[id="v"]')).sendKeys('1');
    element(by.css('[id="tid"]')).sendKeys('UA-0000-2');

    element(by.css('[type="submit"]')).click();

    expect(element(by.css('#url')).getText()).toEqual('v=1&tid=UA-0000-2');
  });
});
