# Project Overview

## Project

Link to completed project [here](http://onthehook.netlify.app/)

Link to project frontend [here](https://github.com/weilyl/project-4-frontend02)

Link to project backend [here](https://github.com/weilyl/project-4-backend02)

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

MVP: 
Users can submit links to patterns or tutorials that are visible by all users (links only because many patterns are copyrighted). Users can save them to lists, but also be able to see all their favorites in one place. When a user deletes their account, their lists get deleted as well, but not the patterns they submitted.
post-MVP: 
Users can filter by the difficulty level they (privately) assign to each pattern, project type (ex: hats vs scarves), medium (Youtube tutorial vs PDF vs .txt).
post-post-MVP: 
Users can add publicly visible reviews to patterns and give them ratings on technical difficulty, ease of pattern/tutorial comprehension, aesthetic, etc. Owners of copyrighted patterns can request I take down a submission if someone has posted a full pattern that is not open source or that is hosted on a website they rely on for income. For each pattern, users can see both their own ratings as well as the average ratings of all users.

## Wireframes

- [Mobile-Homepage](https://res.cloudinary.com/dd3nkph31/image/upload/v1600060028/GAProject04/iPhone_SE_4x_ayccli.png)
- [Mobile-Login/Modal](https://res.cloudinary.com/dd3nkph31/image/upload/v1600060034/GAProject04/iPhone_8_4x_1_vdtikd.png)
- [Desktop](https://res.cloudinary.com/dd3nkph31/image/upload/v1600060025/GAProject04/Ultra_HD_4x_gyogtv.pngg)

## Time/Priority Matrix

[Here](https://res.cloudinary.com/dssciwyew/image/upload/v1598141818/Priority%20Matrix%20Frontend%20P3.png) is a full list of features that have been prioritized based on the `Time and Priority` Matix.

### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP. 
The MVP list includes functionality that will be implemented upon project completion.

#### MVP

- Hamburger menu/Navigation Bar (mobile-first)
- User-only
- User-specific lists (CRUD)
- Users can add/remove links from lists
- Users can create lists
- Vue.js (Buefy)
- CSS (Bulma/Buefy)
- Footer

#### PostMVP

- About, Contact
- Image scraper for URLs
- User profile with image, list sidebar, favorite tags
- Sort by category
- Reviews
- Tags
- Utilize breakpoints or classes to hide dropdown arrow when expanded
- Include text field to save patterns

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

**ERROR**: When logging in after attempting to connect components and pass data via `data.$route.params`:
```
Header.vue?5e07:233 Uncaught (in promise) TypeError: Cannot assign to read only property 'params' of object '#<Object>'
    at eval (Header.vue?5e07:233)
```

**RESOLUTION**: In Header.vue line 234, used `this.$route.params.token = data.token,` to replace `this.$route.params = {token = data.token}`. Error persisted, so `$route.params.token: ""` was added to data property in Header.vue. A Syntax Error was raised instead:

```
Syntax Error: SyntaxError: /mnt/c/Users/weily/Documents/seir-6-29/student/unit04/project04/p04frontend/src/components/Header.vue: Unexpected token, expected "," (185:12)

  183 |       listoflists: [],
  184 |       labelPosition: 'on-border', 
> 185 |       $route.params.token: ""
      |             ^
  186 |     }
  187 |   },
  188 |   beforeCreated(){
```

Replacing `$route,params.token: ""` raised another error, so this line was removed. According to [this](https://github.com/vuejs/vue-router/issues/1439), all `$route` properties are read-only.

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

**RESOLUTION**: `npm install --no-optional` was run to force install optional `fsevents` dependencies to no avail. [source](https://stackoverflow.com/questions/46929196/how-to-solve-npm-install-throwing-fsevents-warning-on-non-mac-os) Instead, `cross-env` was installed and `NODE_ENV` was changed to "development" in `package.json`. [source](https://www.npmjs.com/package/cross-env) This came with its own issues (see above).

Increased the number of inotify watchers [link](https://github.com/guard/listen/wiki/Increasing-the-amount-of-inotify-watchers) via [here](https://github.com/vuejs-templates/webpack/issues/349). Further reading: [1](https://github.com/vuejs/vue-cli/issues/2051), [2](https://vue-loader.vuejs.org/guide/hot-reload.html#usage).


**ERROR**: When logging in after resolving unexpected JSON token, received this error:
`Response {type: "cors", url: "http://127.0.0.1:8000/auth/api/users/login/", redirected: false, status: 404, ok: false, …}`

**RESOLUTION**: Python server was not running.


**ERROR**: When logging into frontend: `Uncaught (in promise) SyntaxError: Unexpected token < in JSON at position 0`

**RESOLUTION**: Needed to `JSON.stringify()` the request body because body was sending as HTML (hence the `<`) [source](https://stackoverflow.com/questions/47368716/fetching-json-returns-error-uncaught-in-promise-syntaxerror-unexpected-token/55628120)

