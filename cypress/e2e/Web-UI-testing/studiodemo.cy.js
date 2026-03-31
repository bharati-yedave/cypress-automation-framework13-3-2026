// describe("Studio scenario", () => {
//   it("studio test", () => {
//     cy.visit('https://rahulshettyacademy.com/client')
//     // Page URL changed.
//     cy.url()
//       .should('eq', 'https://rahulshettyacademy.com/client/#/auth/login')
//     // Page title changed. The page title is 'Let's Shop'.
//     cy.title()
//       .should('eq', 'Let\'s Shop')
//     // The 'Log in' heading is visible.
//     cy.get('h1.login-title')
//       .should('contain.text', 'Log in')
//     // The login button is visible.
//     cy.get('[name="login"]')
//       .should('have.value', 'Login')

//     cy.get('a.text-reset').click();
//     // Page URL changed.
//     cy.url()
//       .should('eq', 'https://rahulshettyacademy.com/client/#/auth/register')
//     // The form heading changed to 'Register'.
//     cy.get('h1.login-title')
//       .should('contain.text', 'Register')
//     // The button text changed to 'Register'.
//     cy.get('[name="login"]')
//       .should('have.value', 'Register')
//     // The navigation link changed to 'Login here'.
//     cy.get('a.text-reset')
//       .should('contain.text', 'Login here')

//     cy.get('#firstName').click();
//     cy.get('#firstName').type('Bharati');
//     // The 'First Name' input field is now marked as 'dirty' and 'valid'.
//     cy.get('#firstName')
//       .should(($el) => {
//         expect($el).to.have.class('ng-dirty')
//         expect($el).to.have.class('ng-valid')
//         expect($el).to.have.class('ng-touched')
//         expect($el).to.not.have.class('ng-untouched')
//         expect($el).to.not.have.class('ng-pristine')
//         expect($el).to.not.have.class('ng-invalid')
//         expect($el).to.have.value('Bharati')
//       })
//     // The registration form is now marked as 'dirty' and 'touched'.
//     cy.get('form.ng-invalid')
//       .should(($el) => {
//         expect($el).to.have.class('ng-dirty')
//         expect($el).to.have.class('ng-touched')
//         expect($el).to.not.have.class('ng-untouched')
//         expect($el).to.not.have.class('ng-pristine')
//       })

//     cy.get('#lastName').type('Yedave');
//     // The last name input field now contains the value 'Yedave'.
//     cy.get('#lastName')
//       .should(($el) => {
//         expect($el).to.have.class('ng-dirty')
//         expect($el).to.have.class('ng-touched')
//         expect($el).to.not.have.class('ng-untouched')
//         expect($el).to.not.have.class('ng-pristine')
//         expect($el).to.have.value('Yedave')
//       })

//     cy.get('#userEmail').type('bharati@yopmail.com');
//     // The email input field now contains the value 'bharati@yopmail.com'.
//     cy.get('#userEmail')
//       .should(($el) => {
//         expect($el).to.have.class('ng-dirty')
//         expect($el).to.have.class('ng-valid')
//         expect($el).to.have.class('ng-touched')
//         expect($el).to.not.have.class('ng-untouched')
//         expect($el).to.not.have.class('ng-pristine')
//         expect($el).to.not.have.class('ng-invalid')
//         expect($el).to.have.value('bharati@yopmail.com')
//       })

//     cy.get('#userMobile').type('9874563214');
//     // The mobile number input field now contains the value '9874563214'.
//     cy.get('#userMobile')
//       .should(($el) => {
//         expect($el).to.have.class('ng-dirty')
//         expect($el).to.have.class('ng-valid')
//         expect($el).to.have.class('ng-touched')
//         expect($el).to.not.have.class('ng-untouched')
//         expect($el).to.not.have.class('ng-pristine')
//         expect($el).to.not.have.class('ng-invalid')
//         expect($el).to.have.value('9874563214')
//       })

//     cy.get('select.custom-select').select('1: Doctor');
//     // The occupation dropdown now shows 'Doctor' as the selected value.
//     cy.get('select.custom-select')
//       .should(($el) => {
//         expect($el).to.have.class('ng-dirty')
//         expect($el).to.not.have.class('ng-pristine')
//         expect($el).to.have.value('1: Doctor')
//       })
//     // The 'Doctor' option is now marked as selected.
//     cy.get('option:nth-child(2)')
//       .should('be.selected')

//     cy.get('label:nth-child(3)').click();
//     cy.get('input[value="Female"]').check();
//     // The 'Female' radio button is checked.
//     cy.get('input[value="Female"]')
//       .should(($el) => {
//         expect($el).to.have.class('ng-dirty')
//         expect($el).to.not.have.class('ng-pristine')
//         expect($el).to.be.checked
//       })
//     // The 'Male' radio button is marked as dirty but remains unchecked.
//     cy.get('input[value="Male"]')
//       .should(($el) => {
//         expect($el).to.have.class('ng-dirty')
//         expect($el).to.not.have.class('ng-pristine')
//       })

//     cy.get('#userPassword').click();
//     cy.get('#userPassword').type('Grishu@23');
//     // The password input field is now marked as 'dirty', 'valid', and 'touched'.
//     cy.get('#userPassword')
//       .should(($el) => {
//         expect($el).to.have.class('ng-dirty')
//         expect($el).to.have.class('ng-valid')
//         expect($el).to.have.class('ng-touched')
//         expect($el).to.not.have.class('ng-untouched')
//         expect($el).to.not.have.class('ng-pristine')
//         expect($el).to.not.have.class('ng-invalid')
//       })

//     cy.get('#confirmPassword').click();
//     cy.get('#confirmPassword').type('Grishu@23');
//     // The confirm password input field is now marked as 'dirty', 'valid', and 'touched'.
//     cy.get('#confirmPassword')
//       .should(($el) => {
//         expect($el).to.have.class('ng-dirty')
//         expect($el).to.have.class('ng-valid')
//         expect($el).to.have.class('ng-touched')
//         expect($el).to.not.have.class('ng-untouched')
//         expect($el).to.not.have.class('ng-pristine')
//         expect($el).to.not.have.class('ng-invalid')
//       })

//     cy.get('input.ng-invalid').check();
//     // The registration form is now valid.
//     cy.get('form.ng-touched')
//       .should(($el) => {
//         expect($el).to.have.class('ng-valid')
//         expect($el).to.not.have.class('ng-invalid')
//       })
//     // The terms and conditions checkbox is checked.
//     cy.get('input.ng-untouched')
//       .should(($el) => {
//         expect($el).to.have.class('ng-dirty')
//         expect($el).to.have.class('ng-valid')
//         expect($el).to.not.have.class('ng-pristine')
//         expect($el).to.not.have.class('ng-invalid')
//         expect($el).to.be.checked
//       })

//     cy.get('[name="login"]').click();
//     // The registration form is now submitted.
//     cy.get('form.ng-dirty')
//       .should('have.class', 'ng-submitted')

//     cy.get('button.btn').click();
//     // Page URL changed.
//     cy.url()
//       .should('eq', 'https://rahulshettyacademy.com/client/#/auth/login')
//     // The heading text changed to 'Log in'.
//     cy.get('h1.login-title')
//       .should('contain.text', 'Log in')
//     // The button text changed to 'Login'.
//     cy.get('[name="login"]')
//       .should('have.value', 'Login')
//     // The navigation link text changed to 'Register here'.
//     cy.get('a.text-reset')
//       .should('contain.text', 'Register here')

//     cy.get('#userEmail').click();
//     cy.get('#userEmail').type('bharati@yopmail.com');
//     // The email input field is now dirty, valid, touched, and contains the value 'bharati@yopmail.com'.
//     cy.get('#userEmail')
//       .should(($el) => {
//         expect($el).to.have.class('ng-dirty')
//         expect($el).to.have.class('ng-valid')
//         expect($el).to.have.class('ng-touched')
//         expect($el).to.not.have.class('ng-untouched')
//         expect($el).to.not.have.class('ng-pristine')
//         expect($el).to.not.have.class('ng-invalid')
//         expect($el).to.have.value('bharati@yopmail.com')
//       })
//     // The form is now dirty and touched.
//     cy.get('form.ng-invalid')
//       .should(($el) => {
//         expect($el).to.have.class('ng-dirty')
//         expect($el).to.have.class('ng-touched')
//         expect($el).to.not.have.class('ng-untouched')
//         expect($el).to.not.have.class('ng-pristine')
//       })

//     cy.get('#userPassword').click();
//     cy.get('#userPassword').type('Grishu@23');
//     // The password input field is now dirty, valid, and touched.
//     cy.get('#userPassword')
//       .should(($el) => {
//         expect($el).to.have.class('ng-dirty')
//         expect($el).to.have.class('ng-valid')
//         expect($el).to.have.class('ng-touched')
//         expect($el).to.not.have.class('ng-untouched')
//         expect($el).to.not.have.class('ng-pristine')
//         expect($el).to.not.have.class('ng-invalid')
//       })
//     // The login form is now valid.
//     cy.get('form')
//       .should(($el) => {
//         expect($el).to.have.class('ng-valid')
//         expect($el).to.not.have.class('ng-invalid')
//       })

//     cy.get('[name="login"]').click();
//     // Page URL changed.
//     cy.url()
//       .should('eq', 'https://rahulshettyacademy.com/client/#/dashboard/dash')
//     // A 'Login Successfully' message is displayed.
//     cy.get('#toast-container div.toast-title')
//       .should(($el) => {
//         expect($el).to.be.visible
//         expect($el).to.contain.text('Login Successfully')
//       })

//     cy.get('#products div:nth-child(2) > div.card > div.card-body > button.w-10').click();
//     // The cart count label is now visible and shows '1'.
//     cy.get('button[routerlink="/dashboard/cart"] label')
//       .should(($el) => {
//         expect($el).to.be.visible
//         expect($el).to.contain.text('1')
//       })

//     cy.get('#products div:nth-child(1) > div.card > div.card-body > button.w-40').click();
//     // Page URL changed.
//     cy.url()
//       .should('eq', 'https://rahulshettyacademy.com/client/#/dashboard/product-details/6960eae1c941646b7a8b3ed3')
//     // The product name 'ADIDAS ORIGINAL' is displayed.
//     cy.get('h2')
//       .should('contain.text', 'ADIDAS ORIGINAL')
//     // The product price '$ 11500' is displayed.
//     cy.get('div.col-lg-6 h3')
//       .should('contain.text', '$ 11500')
//     // The product description 'Apple phone' is displayed.
//     cy.get('div:nth-child(4) p')
//       .should('contain.text', 'Apple phone')
//     // The 'Add to Cart' button is visible.
//     cy.get('div.product-buttons')
//       .should('contain.text', 'Add to Cart')

//     cy.get('button.btn-primary').click();
//     // The cart count label now shows '2'.
//     cy.get('button[routerlink="/dashboard/cart"] label')
//       .should('contain.text', '2')
//     // A 'Product Added To Cart' message is displayed.
//     cy.get('#toast-container div.toast-message')
//       .should(($el) => {
//         expect($el).to.be.visible
//         expect($el).to.contain.text('Product Added To Cart')
//       })

//     cy.get('button[routerlink="/dashboard/cart"]').click();
//     // Page URL changed.
//     cy.url()
//       .should('eq', 'https://rahulshettyacademy.com/client/#/dashboard/cart')
//     // The page heading changed to 'My Cart'.
//     cy.get('h1')
//       .should('contain.text', 'My Cart')
//     // Length changed from 0 to 1
//     cy.get('div.cart ul:nth-child(1) > li')
//       .should('have.length', 1)
//     // The product 'ZARA COAT 3' is visible in the cart.
//     cy.get('li.even h3')
//       .should('contain.text', 'ZARA COAT 3')
//     // The product 'ADIDAS ORIGINAL' is visible in the cart.
//     cy.get('li.odd h3')
//       .should('contain.text', 'ADIDAS ORIGINAL')
//     // Length changed from 0 to 3
//     cy.get('div.subtotal ul > li')
//       .should('have.length', 3)
//     // The subtotal is displayed as '$23000'.
//     cy.get('li:nth-child(1) span.value')
//       .should('contain.text', '$23000')
//     // The total is displayed as '$23000'.
//     cy.get('li:nth-child(2) span.value')
//       .should('contain.text', '$23000')

//     cy.get('button[routerlink="/dashboard"]').click();
//   });
// });
