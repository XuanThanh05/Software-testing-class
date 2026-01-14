describe('Checkout Test', () => {
  it('Should complete checkout step one successfully', () => {
    // Truy cập và đăng nhập
    cy.visit('https://www.saucedemo.com');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();

    // Thêm sản phẩm vào giỏ hàng
    cy.get('.inventory_item').first().find('.btn_inventory').click();

    // Vào giỏ hàng
    cy.get('.shopping_cart_link').click();

    // Nhấn Checkout
    cy.get('#checkout').click();

    // Nhập thông tin thanh toán
    cy.get('#first-name').type('John');
    cy.get('#last-name').type('Doe');
    cy.get('#postal-code').type('12345');

    // Nhấn Continue
    cy.get('#continue').click();

    // Kiểm tra chuyển sang trang xác nhận
    cy.url().should('include', '/checkout-step-two.html');
  });
});
