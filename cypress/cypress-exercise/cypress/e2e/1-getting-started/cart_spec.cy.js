//Kịch bản 3: Kiểm tra chức năng thêm sản phẩm vào giỏ hàng
describe('Cart Test', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
  });

  it('Should add a product to the cart', () => {
    cy.get('.inventory_item').first().find('.btn_inventory').click();
    cy.get('.shopping_cart_badge').should('have.text', '1');
  });
  //Kịch bản 4: Kiểm tra chức năng tìm kiếm sản phẩm
it('Should sort products by price low to high', () => {
  cy.get('.product_sort_container').select('lohi');
  cy.get('.inventory_item_price').first().should('have.text', '$7.99');
});
//Kịch bản mới 1: Xóa sản phẩm khỏi giỏ hàng
it('Should remove product from cart', () => {
  cy.get('.inventory_item').first().find('.btn_inventory').click();
  cy.get('.shopping_cart_badge').should('have.text', '1');
  cy.get('.inventory_item').first().find('.btn_inventory').click();
  cy.get('.shopping_cart_badge').should('not.exist');
});
});

