# crwn-clothing

**Live site: https://sam-crwn.netlify.app**

A clothing store made with `React`, where user can sign in / sign up using `Firebase Authentication`, browse items by category, add items to cart, view their cart, and checkout using a credit card via `Stripe`. To test, use card #4242 4242 4242 4242, any CVV, any zip, must use a future expiration date.  Shopping cart state is persisted using `Redux-Persist`.  Available items and their categories are pulled from a `Firestore` database.  App state is managed with `Redux`.  Side effects such as requests to firebase auth and firestore are handled with `Redux-Saga`.  `Typescript` is used to enforce types during development and minimize type-related runtime errors.  Styling is done using `Styled Components` with `SCSS` syntax.  Site is auto-deployed to `Netlify` upon pushing to the main branch.

<br>

From Udemy course: **Complete React Developer in 2022** by **Zero To Mastery**  

*I enhanced the styling to make the site mobile-friendly and a more natural-feeling user experience in general.  I also added "Clear Entire Cart" functionality.
