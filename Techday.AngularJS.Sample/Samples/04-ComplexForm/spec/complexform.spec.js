describe('Complex Form', function() {
    beforeEach(function() {
        browser.get('http://localhost:20883/Samples/04-ComplexForm/ComplexForm.html');
    });

    it('標題正確', function() {        
        expect(browser.getTitle()).toEqual('Complex Form');
    });

    it('所有欄位輸入正確', function () {
        element(by.model('account')).sendKeys('kirkchen');
        element(by.model('email')).sendKeys('kirkchen@test.com');
        element(by.model('password')).sendKeys('12345678');
        element(by.model('passwordConfirm')).sendKeys('12345678');
        element(by.model('hint')).sendKeys('number');
        element(by.model('firstName')).sendKeys('Kirk');
        element(by.model('lastName')).sendKeys('Chen');
        element(by.model('nickname')).sendKeys('小風');
        element(by.model('address')).sendKeys('台北市某個地方');
        element(by.model('mobile')).sendKeys('0912345678');
        element(by.model('birthday')).sendKeys('1985/06/08');

        element(by.id('submit')).click();        

        expect(element(by.id('successMessage')).isDisplayed()).toBeTruthy();        
    });

    it('帳號為空，驗證失敗', function () {        
        element(by.model('email')).sendKeys('kirkchen@test.com');
        element(by.model('password')).sendKeys('12345678');
        element(by.model('passwordConfirm')).sendKeys('12345678');
        element(by.model('hint')).sendKeys('number');
        element(by.model('firstName')).sendKeys('Kirk');
        element(by.model('lastName')).sendKeys('Chen');
        element(by.model('nickname')).sendKeys('小風');
        element(by.model('address')).sendKeys('台北市某個地方');
        element(by.model('mobile')).sendKeys('0912345678');
        element(by.model('birthday')).sendKeys('1985/06/08');

        element(by.id('submit')).click();

        expect(element(by.id('errorMessage')).isDisplayed()).toBeTruthy();
    });

    it('Email為空，驗證失敗', function () {
        element(by.model('account')).sendKeys('kirkchen');        
        element(by.model('password')).sendKeys('12345678');
        element(by.model('passwordConfirm')).sendKeys('12345678');
        element(by.model('hint')).sendKeys('number');
        element(by.model('firstName')).sendKeys('Kirk');
        element(by.model('lastName')).sendKeys('Chen');
        element(by.model('nickname')).sendKeys('小風');
        element(by.model('address')).sendKeys('台北市某個地方');
        element(by.model('mobile')).sendKeys('0912345678');
        element(by.model('birthday')).sendKeys('1985/06/08');

        element(by.id('submit')).click();

        expect(element(by.id('errorMessage')).isDisplayed()).toBeTruthy();
    });

    it('密碼為空，驗證失敗', function () {
        element(by.model('account')).sendKeys('kirkchen');
        element(by.model('email')).sendKeys('kirkchen@test.com');        
        element(by.model('passwordConfirm')).sendKeys('12345678');
        element(by.model('hint')).sendKeys('number');
        element(by.model('firstName')).sendKeys('Kirk');
        element(by.model('lastName')).sendKeys('Chen');
        element(by.model('nickname')).sendKeys('小風');
        element(by.model('address')).sendKeys('台北市某個地方');
        element(by.model('mobile')).sendKeys('0912345678');
        element(by.model('birthday')).sendKeys('1985/06/08');

        element(by.id('submit')).click();

        expect(element(by.id('errorMessage')).isDisplayed()).toBeTruthy();
    });

    it('確認密碼為空，驗證失敗', function () {
        element(by.model('account')).sendKeys('kirkchen');
        element(by.model('email')).sendKeys('kirkchen@test.com');
        element(by.model('password')).sendKeys('12345678');        
        element(by.model('hint')).sendKeys('number');
        element(by.model('firstName')).sendKeys('Kirk');
        element(by.model('lastName')).sendKeys('Chen');
        element(by.model('nickname')).sendKeys('小風');
        element(by.model('address')).sendKeys('台北市某個地方');
        element(by.model('mobile')).sendKeys('0912345678');
        element(by.model('birthday')).sendKeys('1985/06/08');

        element(by.id('submit')).click();

        expect(element(by.id('errorMessage')).isDisplayed()).toBeTruthy();
    });

    it('提示為空，驗證失敗', function () {
        element(by.model('account')).sendKeys('kirkchen');
        element(by.model('email')).sendKeys('kirkchen@test.com');
        element(by.model('password')).sendKeys('12345678');
        element(by.model('passwordConfirm')).sendKeys('12345678');        
        element(by.model('firstName')).sendKeys('Kirk');
        element(by.model('lastName')).sendKeys('Chen');
        element(by.model('nickname')).sendKeys('小風');
        element(by.model('address')).sendKeys('台北市某個地方');
        element(by.model('mobile')).sendKeys('0912345678');
        element(by.model('birthday')).sendKeys('1985/06/08');

        element(by.id('submit')).click();

        expect(element(by.id('errorMessage')).isDisplayed()).toBeTruthy();
    });

    it('姓為空，驗證失敗', function () {
        element(by.model('account')).sendKeys('kirkchen');
        element(by.model('email')).sendKeys('kirkchen@test.com');
        element(by.model('password')).sendKeys('12345678');
        element(by.model('passwordConfirm')).sendKeys('12345678');
        element(by.model('hint')).sendKeys('number');        
        element(by.model('lastName')).sendKeys('Chen');
        element(by.model('nickname')).sendKeys('小風');
        element(by.model('address')).sendKeys('台北市某個地方');
        element(by.model('mobile')).sendKeys('0912345678');
        element(by.model('birthday')).sendKeys('1985/06/08');

        element(by.id('submit')).click();

        expect(element(by.id('errorMessage')).isDisplayed()).toBeTruthy();
    });

    it('名為空，驗證失敗', function () {
        element(by.model('account')).sendKeys('kirkchen');
        element(by.model('email')).sendKeys('kirkchen@test.com');
        element(by.model('password')).sendKeys('12345678');
        element(by.model('passwordConfirm')).sendKeys('12345678');
        element(by.model('hint')).sendKeys('number');
        element(by.model('firstName')).sendKeys('Kirk');        
        element(by.model('nickname')).sendKeys('小風');
        element(by.model('address')).sendKeys('台北市某個地方');
        element(by.model('mobile')).sendKeys('0912345678');
        element(by.model('birthday')).sendKeys('1985/06/08');

        element(by.id('submit')).click();

        expect(element(by.id('errorMessage')).isDisplayed()).toBeTruthy();
    });

    it('暱稱為空，驗證失敗', function () {
        element(by.model('account')).sendKeys('kirkchen');
        element(by.model('email')).sendKeys('kirkchen@test.com');
        element(by.model('password')).sendKeys('12345678');
        element(by.model('passwordConfirm')).sendKeys('12345678');
        element(by.model('hint')).sendKeys('number');
        element(by.model('firstName')).sendKeys('Kirk');
        element(by.model('lastName')).sendKeys('Chen');        
        element(by.model('address')).sendKeys('台北市某個地方');
        element(by.model('mobile')).sendKeys('0912345678');
        element(by.model('birthday')).sendKeys('1985/06/08');

        element(by.id('submit')).click();

        expect(element(by.id('errorMessage')).isDisplayed()).toBeTruthy();
    });

    it('住址為空，驗證失敗', function () {
        element(by.model('account')).sendKeys('kirkchen');
        element(by.model('email')).sendKeys('kirkchen@test.com');
        element(by.model('password')).sendKeys('12345678');
        element(by.model('passwordConfirm')).sendKeys('12345678');
        element(by.model('hint')).sendKeys('number');
        element(by.model('firstName')).sendKeys('Kirk');
        element(by.model('lastName')).sendKeys('Chen');
        element(by.model('nickname')).sendKeys('小風');        
        element(by.model('mobile')).sendKeys('0912345678');
        element(by.model('birthday')).sendKeys('1985/06/08');

        element(by.id('submit')).click();

        expect(element(by.id('errorMessage')).isDisplayed()).toBeTruthy();
    });

    it('手機為空，驗證失敗', function () {
        element(by.model('account')).sendKeys('kirkchen');
        element(by.model('email')).sendKeys('kirkchen@test.com');
        element(by.model('password')).sendKeys('12345678');
        element(by.model('passwordConfirm')).sendKeys('12345678');
        element(by.model('hint')).sendKeys('number');
        element(by.model('firstName')).sendKeys('Kirk');
        element(by.model('lastName')).sendKeys('Chen');
        element(by.model('nickname')).sendKeys('小風');
        element(by.model('address')).sendKeys('台北市某個地方');    
        element(by.model('birthday')).sendKeys('1985/06/08');

        element(by.id('submit')).click();

        expect(element(by.id('errorMessage')).isDisplayed()).toBeTruthy();
    });

    it('生日為空，驗證失敗', function () {
        element(by.model('account')).sendKeys('kirkchen');
        element(by.model('email')).sendKeys('kirkchen@test.com');
        element(by.model('password')).sendKeys('12345678');
        element(by.model('passwordConfirm')).sendKeys('12345678');
        element(by.model('hint')).sendKeys('number');
        element(by.model('firstName')).sendKeys('Kirk');
        element(by.model('lastName')).sendKeys('Chen');
        element(by.model('nickname')).sendKeys('小風');
        element(by.model('address')).sendKeys('台北市某個地方');
        element(by.model('mobile')).sendKeys('0912345678');        

        element(by.id('submit')).click();

        expect(element(by.id('errorMessage')).isDisplayed()).toBeTruthy();
    });
});