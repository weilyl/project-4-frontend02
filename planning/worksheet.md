# Project Overview

## Project

Link to completed project [here](http://finance-tracker.surge.sh/)

Link to project frontend [here](https://github.com/weilyl/project-3-frontend)

Link to project backend [here](https://github.com/weilyl/project-3-backend)

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

| Day   | Deliverable                                                      | Status     |
| ----- | ---------------------------------------------------------------- | ---------- |
| Day 1 | Project Description                                              | Complete |
| Day 1 | Wireframes / Priority Matrix / Timeline `backend` and `frontend` | Complete |
| Day 2 | Working RestAPI                                                  | Complete |
| Day 3 | Core Application Structure (HTML, CSS, etc.)                     | Complete |
| Day 4 | MVP & Bug Fixes                                                  | Complete |
| Day 5 | Final Touches and Present                                        | Complete |

## Project Description

This finance tracker is a simple tool for users to visualize their spending history. 
The front-end will be built using HTML, CSS, Vue.js, Bootstrap, jQuery and D3.js. 
Our users value a minimal layout and functionality to achieve their goals faster.
Users will be able to make an account and sign in. 
Users will be able to store their expenses in a database. 
Users will be able to exclusively access their own expenses. 
Users will be able to see their expenses as a table and as a color-coded pie chart.
In future features, users will be able to: 
- log in using social media accounts
- select dates 
- select different types of charts 
- make multiple budgets, and
- sort expenses by category.

## Wireframes

- [Mobile-Homepage](https://res.cloudinary.com/wjclavell/image/upload/v1598145428/Project%203/Finance_Tracker_mobile_ymbohj.png)
- [Mobile-Login/Modal](https://res.cloudinary.com/wjclavell/image/upload/v1598156265/Project%203/Finance-Tracker_Login-Modal_mmfq5h.png)
- [Desktop](https://res.cloudinary.com/wjclavell/image/upload/v1598200003/Project%203/FinanceTracker_Desktop_h1dcx3.png)

## Time/Priority Matrix

[Here](https://res.cloudinary.com/dssciwyew/image/upload/v1598141818/Priority%20Matrix%20Frontend%20P3.png) is a full list of features that have been prioritized based on the `Time and Priority` Matix.

### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP. 
The MVP list includes functionality that will be implemented upon project completion.

#### MVP

- Hamburger menu/Navigation Bar (mobile-first)
- Sign In Modal
- Log In Modal
- Input Expenses Modal
- Table Template
- Vue.js
- Total spending
- CSS (Bootstrap)
- D3.js Table
- D3.js Chart
- Footer

#### PostMVP

- About, Contact, etc. for the footer
- More charts (line graph, bar chart, pie chart)
- Filter by month, year, etc.
- Sort by category
- Logo
- User profile

## Functional Components

Based on the initial logic defined in the previous sections, try and breakdown the logic further into functional components, and by that we mean functions. Try and capture what logic would need to be defined if the game was broken down into the following categories.

Time frames are also key in the development cycle. You have limited time to code all phases of the game. Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

#### MVP

| Component                     | Priority | Estimated Time | Time Allotted | Actual Time |
| ----------------------------- | :------: | :------------: | :------------: | :---------: |
| Hamburger menu/Navbar (mobile-first)  |    H     |   1 hr      |     10 hrs       |     2 hrs     |
| Sign In Modal                 |    H     |     3 hrs      |      3 hrs       |     1.5 hrs   |
| Input Modal                   |    H     |     3 hrs      |      3 hrs       |     1.5 hrs   |
| Table Template                |    H     |     3 hrs      |      10 hrs      |     5 hrs     |
| Vue.js                        |    M     |     3 hrs      |      5 hrs       |     5 hrs     |
| Average and totals            |    H     |     3 hrs      |      1hr       |     1 hr     |
| CSS (Bootstrap & D3.js)       |    H     |      3hrs      |      17 hrs      |     8hrs     |
| D3.js Chart & Table           |    H     |     2 hrs      |      10 hrs       |     10hrs     |
| Total                         |    H     |     23 hrs     |      59 hrs      |    34 hrs     |

#### PostMVP

| Component                                      | Priority | Estimated Time | Time Invested | Actual Time |
| ---------------------------------------------- | :------: | :------------: | :------------: | :---------: |
| About, Contact, etc. for the footer            |    L     |     2 hrs      |      8 hrs     |     12 hrs  |
| More charts (line graph, bar chart)           |    L     |     4 hrs      |      -hr       |     -hr     |
| Filter by month, year, etc.                    |    H     |     4 hrs      |      -hr       |     -hr     |
| Sort by category                               |    H     |     4 hrs      |      -hr       |     -hr     |
| Choose specific category/date to look at       |    H     |     4 hrs      |      -hr       |     -hr     |
| Logo                                           |    L     |    2.5 hrs     |      1 hr       |     1 hr     |
| Landing page                                        |    L     |    3 hrs     |      1 hr       |     2 hr     |
| Animations                                           |    L     |    2 hrs     |      1 hr       |     1 hr     |
| Refactoring                                     | L | 10 hrs | -hrs | - hrs|
| Total                                          |    M     |     35.5 hrs    |      11 hrs      |     16 hrs     |

## Additional Libraries

- Vue.js (DOM manipulation, fetch requests from the backend, display)
- Buefy (design, light responsiveness, display)
- Python (Django) (data visualization, creating responsive table & pie chart)
- BeautifulSoup (post-MVP image scraping)

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description

```
snippet2
```

```
snippet1
```

## Issues and Resolutions

Use this section to list of all major issues encountered and their resolution.

**ERROR**: 

**RESOLUTION**: 

**ERROR**: 

**RESOLUTION**: 

**ERROR**:   

**RESOLUTION**: 

**ERROR**: 

**RESOLUTION**: 

**ERROR**: 

**RESOLUTION**: 

**ERROR**: 

**RESOLUTION**: 

**ERROR**: 

**RESOLUTION**: 


**ERROR**: When trying to populate dropdown menu in navbar with an option for each list the user currently has: `"Error: You should wrap BDropdownItem in a dropdown" vue.runtime.esm.js?2b0e:619`
**RESOLUTION**: Breakpoint at `console.error(err)` in:
```js
function logError (err, vm, info) {
  if (process.env.NODE_ENV !== 'production') {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}
```
`console.error(err)` may be getting [deprecated](https://stackoverflow.com/questions/50896442/why-is-catcherr-console-errorerr-discouraged)  or triggered since I installed `cross-env` and changed `package.json` to: 

```js
 "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service cross-env NODE_ENV=development webpack --config build/webpack.config.js",
    "lint": "vue-cli-service lint"
  },
```
from:
```js
 "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build", 
    "lint": "vue-cli-service lint"
  },
```
Reverted changes, then ran `npm i` but returned this error:

```
npm ERR! code EJSONPARSE
npm ERR! file /mnt/c/Users/weily/Documents/seir-6-29/student/unit04/project04/p04frontend/package.json
npm ERR! JSON.parse Failed to parse json
npm ERR! JSON.parse Unexpected token / in JSON at position 159 while parsing near '...cli-service build", //cross-env NODE_ENV...'
npm ERR! JSON.parse Failed to parse package.json data.
npm ERR! JSON.parse package.json must be actual JSON, not just JavaScript.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/weily/.npm/_logs/2020-09-22T03_11_03_296Z-debug.log
```

Once comments were deleted and `npm i` ran in terminal, runtime error was still thrown when logging in the front end. `cross-env` was removed from node dependencies and `npm i` re-run. 

Errors still being thrown, but fetch requests are functioning. Issue is probably a mismatch between the parent element `<b-navbar-dropdown>` and the child element `<b-dropdown-item>`. 


**ERROR**: Vue CLI hot reloading not functioning. Changes to Vue files only reflected after server is stopped and restarted, which could take upwards of a minute. 

**RESOLUTION**: `npm install --no-optional` was run to force install optional `fsevents` dependencies to no avail. [source](https://stackoverflow.com/questions/46929196/how-to-solve-npm-install-throwing-fsevents-warning-on-non-mac-os) Instead, `cross-env` was installed and `NODE_ENV` was changed to "development" in `package.json`. [source](https://www.npmjs.com/package/cross-env)


**ERROR**: When logging in after resolving unexpected JSON token, received this error:
`Response {type: "cors", url: "http://127.0.0.1:8000/auth/api/users/login/", redirected: false, status: 404, ok: false, …}`

**RESOLUTION**: Python server was not running.


**ERROR**: When logging into frontend: `Uncaught (in promise) SyntaxError: Unexpected token < in JSON at position 0`

**RESOLUTION**: Needed to `JSON.stringify()` the request body because body was sending as HTML (hence the `<`) [source](https://stackoverflow.com/questions/47368716/fetching-json-returns-error-uncaught-in-promise-syntaxerror-unexpected-token/55628120)

