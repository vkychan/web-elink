# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

============================================================================================

# How to push your code?

# 1. Make sure you are on main and up-to-date
git checkout main
git pull origin main               # ← very important!

# 2. Create a new branch (naming is important!)
# Good branch names examples:
#   feature/login-page
#   fix/bug-broken-button-on-mobile
#   refactor/cleanup-auth-logic
#   style/improve-button-spacing
git checkout -b feature/your-feature-name

# 3. Do your work (code, styles, tests...)
#    ... make changes ...

# 4. Stage & commit (small commits are better!)
git add .
git commit -m "feat: added login form validation"
# or more detailed:
# git commit -m "fix: prevent submit when email is invalid\n\n- added required check\n- show error message"

# 5. Push your branch to GitHub
git push origin feature/your-feature-name

# 6. Go to GitHub → create Pull Request
#    - Title: Clear and short (e.g. "Add login form validation")
#    - Description: Explain what you did + why + how to test
#    - Assign reviewer (usually senior or team lead)
#    - Add labels if your project uses them (feat/fix/refactor/etc)

# After review & fixes:
# 7. (If requested) make changes on the same branch
git add .
git commit -m "fix: address review comments - email regex"
git push origin feature/your-feature-name

# After PR is approved:
# 8. Merge (usually **Squash and merge** or **Merge commit** – follow project convention)
#    → GitHub will delete branch automatically (recommended)