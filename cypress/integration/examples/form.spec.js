const Form = require('../../support/page-objects/commands')

describe('Testing Fills Form', () => {
    let form;
    form = new Form();

    beforeEach(() => cy.visit("https://demoqa.com/automation-practice-form"));

    it('Fills and comparing form with true values', () => {
        form.fillsFormTrueValues();
        form.comparingForms();
    });

    it('Test mandatory fields with false values', () => {
        form.insetFirstName("01234");
        form.insetLastName("56789");
        form.insetEmail("brunogmail.com");
        form.clickGender();
        form.insetMobile("abcefghij");
        form.clickSubmit();
        form.formNotDone();
    });

    it('New Test', () => {
        form.insetFirstName("Bruno");
        form.insetLastName("Santos");
        form.insetEmail("bruno@gmail.com");
        form.clickGender();
        form.insetMobile("9999999999");
        form.insetSubjects("Hello Word!");
        form.selectPicture();
        form.insetCurrentAddress("Ola mundo!");
        form.selectStateAndCity("NCR{enter}","Delhi{enter}");
        form.clickSubmit();
    });

    
});