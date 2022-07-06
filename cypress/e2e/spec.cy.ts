import { mount } from '@cypress';
import Navigation from '../../src/routes/navigation/navigation';

describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true);
  });

  it('Does checks all links on navigation route', () => {
    mount(<Navigation />);

    cy.get('a').each((link) => {
      cy.wrap(link)
        .invoke('attr', 'href')
        .then((href) => {
          cy.request(href).then((resp) => {
            expect(resp.status).to.eq(200);
          });
        });
    });
  });
});
