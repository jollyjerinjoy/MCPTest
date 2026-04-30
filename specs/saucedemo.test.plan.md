# SauceDemo Automation Test Plan

## Application Overview

Automated test plan for Sauce Demo web application covering login, product browsing, cart management, checkout, and negative validation scenarios.

## Test Scenarios

### 1. SauceDemo Functional Test Suite

**Seed:** `seed.spec.ts`

#### 1.1. Login and authentication

**File:** `specs/saucedemo.test.plan.md`

**Steps:**
  1. -
    - expect: Start on the Sauce Demo landing page at https://www.saucedemo.com.
  2. Enter valid username "standard_user" in the username field.
    - expect: The username field contains the entered text.
  3. Enter valid password "secret_sauce" in the password field.
    - expect: The password field contains the entered text.
  4. Click the Login button.
    - expect: User is redirected to the products inventory page.
    - expect: The page shows the title or header for Sauce Demo Products.
  5. Log out from the application if possible (via menu or user icon).
    - expect: User returns to the login page.

#### 1.2. Login validation and error handling

**File:** `specs/saucedemo.test.plan.md`

**Steps:**
  1. -
    - expect: Start on the Sauce Demo login page.
  2. Leave username blank, enter password "secret_sauce", and click Login.
    - expect: An error message is displayed indicating username is required.
    - expect: User remains on the login page.
  3. Enter username "standard_user", leave password blank, and click Login.
    - expect: An error message is displayed indicating password is required.
    - expect: User remains on the login page.
  4. Enter username "locked_out_user" and password "secret_sauce", then click Login.
    - expect: An error message is displayed indicating the user is locked out.
    - expect: User remains on the login page.
  5. Enter invalid username "bad_user" and password "bad_pass", then click Login.
    - expect: An error message is displayed indicating invalid credentials.
    - expect: User remains on the login page.

#### 1.3. Product browsing and sorting

**File:** `specs/saucedemo.test.plan.md`

**Steps:**
  1. -
    - expect: User is logged in as a standard valid user and on the inventory page.
  2. Verify the inventory page shows multiple products with images, names, prices, and Add to cart buttons.
    - expect: At least 6 products are visible with required details.
  3. Use the product sort dropdown to sort by Price (low to high).
    - expect: Products reorder with lowest price first.
  4. Use the product sort dropdown to sort by Price (high to low).
    - expect: Products reorder with highest price first.
  5. Click a product name or image to view product details.
    - expect: Product detail page loads with description, price, and Add to cart button.
  6. Use the Back to products button to return to inventory.
    - expect: User returns to the inventory list page.

#### 1.4. Cart add/remove and detail validation

**File:** `specs/saucedemo.test.plan.md`

**Steps:**
  1. -
    - expect: User is logged in and on the inventory page.
  2. Add two different products to the cart by clicking their Add to cart buttons.
    - expect: The cart badge updates to show quantity 2.
    - expect: Selected buttons change to Remove or similar state.
  3. Click the cart icon to open the shopping cart page.
    - expect: Cart page loads showing the selected products, quantities, and prices.
  4. Remove one item from the cart.
    - expect: The cart page updates and the cart badge decrements by 1.
    - expect: The removed item disappears from the cart page.
  5. Click Continue Shopping to return to inventory.
    - expect: User is returned to the inventory page and cart badge still reflects 1 item.
  6. Verify the remaining product still shows Remove button in inventory.
    - expect: The remaining selected product remains in the cart and shows Remove state.

#### 1.5. Checkout happy path

**File:** `specs/saucedemo.test.plan.md`

**Steps:**
  1. -
    - expect: User has at least one item in the cart.
  2. Open the cart and click Checkout.
    - expect: The Checkout: Your Information page loads.
  3. Fill first name "Test", last name "User", and postal code "90210".
    - expect: Fields contain the provided values.
  4. Click Continue.
    - expect: The Checkout Overview page loads showing order summary.
  5. Verify the subtotal, tax, and total are displayed correctly.
    - expect: Order totals match the items in cart and tax is present.
  6. Click Finish to complete the purchase.
    - expect: Confirmation page appears with a thank-you message.
    - expect: A complete order or success message is visible.

#### 1.6. Checkout error handling

**File:** `specs/saucedemo.test.plan.md`

**Steps:**
  1. -
    - expect: User is logged in and has items in the cart.
  2. Open cart, click Checkout, then click Continue with all fields blank.
    - expect: An error message is displayed requiring first name.
  3. Fill first name only and click Continue.
    - expect: An error message is displayed requiring last name.
  4. Fill first name and last name only and click Continue.
    - expect: An error message is displayed requiring postal code.

#### 1.7. Session persistence and logout

**File:** `specs/saucedemo.test.plan.md`

**Steps:**
  1. -
    - expect: User is logged in with at least one item in the cart.
  2. Refresh the browser page on the inventory page.
    - expect: User remains logged in and session persists.
    - expect: Cart badge still displays selected items.
  3. Click the menu button and select Logout.
    - expect: User is redirected to the login page.
  4. Attempt to navigate directly to /inventory.html after logout.
    - expect: User is redirected back to the login page or blocked from accessing inventory.
