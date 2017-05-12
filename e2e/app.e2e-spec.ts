import { FormPatientDemographicPage } from './app.po';

describe('form-patient-demographic App', () => {
  let page: FormPatientDemographicPage;

  beforeEach(() => {
    page = new FormPatientDemographicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
