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

**ERROR**: Node dependencies are not reinstalling from the package.json after node_modules directory deleted and `npm install` was run.

**RESOLUTION**: 
Referencing [this](https://stackoverflow.com/questions/12866494/how-do-you-reinstall-an-apps-dependencies-using-npm):
1. tried `npm install p04frotnend` from one level up
2. tried `npm install node_modules` from same level as package.json
3. tried `npm rebuild`, followed by `npm i`
4. `npm update`
5. `npm cache clean` returned following errors:

```
npm ERR! As of npm@5, the npm cache self-heals from corruption issues and data extracted from the cache is guaranteed to be valid. If you want to make sure everything is consistent, use 'npm cache verify' instead. On the other hand, if you're debugging an issue with the installer, you can use `npm install --cache /tmp/empty-cache` to use a temporary cache instead of nuking the actual one.
npm ERR! 
npm ERR! If you're sure you want to delete the entire cache, rerun this command with --force.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/weily/.npm/_logs/2020-09-23T19_33_11_298Z-debug.log
```
6. `npx reinstall` (apparently include removal of node_modules dir)
Received the usual error from npm commands
```
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.13 (node_modules/webpack-dev-server/node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.13 (node_modules/watchpack-chokidar2/node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.1.3 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.3: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
```
and node_modules folder still missing, so referencing [this](https://stackoverflow.com/questions/12866494/how-do-you-reinstall-an-apps-dependencies-using-npm). 
Above referenced solutions also did not re-create a node_modules file so referencing [this](https://stackoverflow.com/questions/21250849/npm-install-doesnt-create-node-modules-directory) solution to delete package-lock.json and npm i, which also did not re-create node_modules. 

Going back to the beginning when template was installed with `npx merced-spinup vue <frontend_dir_name>`. Ran `npm uninstall merced-spinup` and (mistakenly) `npm uninstall vue`. Then:
`npx merced-spinup vue .` which replaced all files with template. 
A new branch was made for the recreation of the template. 
node_modules still missing. 
`npm install` was run. 
node_modules still missing.
A node_modules directory created earlier in the day was found in the parent folder of the current project. That recent node_modules was moved to project directory. 
node_modules did not appear in the VS Code Workspace.
`npm install`
`npm add`
`npm run serve`
Returned errors:
```
ERROR  Failed to compile with 2 errors                                   7:20:24 PM

This dependency was not found:

* vue in ./src/main.js, ./src/router/index.js

To install it, you can run: npm install --save vue
(node:8436) UnhandledPromiseRejectionWarning: Error: ENOENT: no such file or directory, stat '/mnt/c/Users/weily/Documents/seir-6-29/student/unit04/project04/p04frontend/node_modules/vuetemplate'
(node:8436) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 1)
(node:8436) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
```
`npm install --save vue`
Returned errors: 
```
npm WARN checkPermissions Missing write access to /mnt/c/Users/weily/Documents/seir-6-29/student/unit04/project04/p04frontend/node_modules/vuetemplate
npm ERR! code ENOENT
npm ERR! syscall access
npm ERR! path /mnt/c/Users/weily/Documents/seir-6-29/student/unit04/project04/p04frontend/node_modules/vuetemplate
npm ERR! errno -2
npm ERR! enoent ENOENT: no such file or directory, access '/mnt/c/Users/weily/Documents/seir-6-29/student/unit04/project04/p04frontend/node_modules/vuetemplate'
npm ERR! enoent This is related to npm not being able to find a file.
npm ERR! enoent 

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/weily/.npm/_logs/2020-09-23T23_21_03_363Z-debug.log
```
`npm run serve`
Returned error:
```
ERROR  Failed to compile with 2 errors                                   7:22:14 PM

This dependency was not found:

* vue in ./src/main.js, ./src/router/index.js

To install it, you can run: npm install --save vue
(node:8483) UnhandledPromiseRejectionWarning: Error: ENOENT: no such file or directory, stat '/mnt/c/Users/weily/Documents/seir-6-29/student/unit04/project04/p04frontend/node_modules/vuetemplate'
(node:8483) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 1)
(node:8483) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
```

Searched for solution [here](https://github.com/vuejs/vue-cli/issues/439)
```
npm i -g npm-check-updates
npm-check-updates -u
npm install
```
Returned errors:
```
npm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
npm WARN deprecated har-validator@5.1.5: this library is no longer supported
npm WARN checkPermissions Missing write access to /usr/lib/node_modules
npm ERR! code EACCES
npm ERR! syscall access
npm ERR! path /usr/lib/node_modules
npm ERR! errno -13
npm ERR! Error: EACCES: permission denied, access '/usr/lib/node_modules'
npm ERR!  [Error: EACCES: permission denied, access '/usr/lib/node_modules'] {
npm ERR!   errno: -13,
npm ERR!   code: 'EACCES',
npm ERR!   syscall: 'access',
npm ERR!   path: '/usr/lib/node_modules'
npm ERR! }
npm ERR! 
npm ERR! The operation was rejected by your operating system.
npm ERR! It is likely you do not have the permissions to access this file as the current user
npm ERR! 
npm ERR! If you believe this might be a permissions issue, please double-check the
npm ERR! permissions of the file and its containing directories, or try running
npm ERR! the command again as root/Administrator.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/weily/.npm/_logs/2020-09-23T23_28_07_112Z-debug.log
```
A new 'node_modules' was created manually in VS Code. 
Previous commands re-run with sudoers permission. 
node_modules was updated and returned:
```
 vue-router              ^3.2.0  →   ^3.4.3   
 eslint                  ^6.7.2  →   ^7.9.0   
 vue-template-compiler  ^2.6.11  →  ^2.6.12   

Run npm install to install new versions.
```

`sudo npm install` returned the following errors:
```
npm WARN checkPermissions Missing write access to /mnt/c/Users/weily/Documents/seir-6-29/student/unit04/project04/p04frontend/node_modules/vuetemplate
npm WARN buefy@0.9.3 requires a peer of vue@^2.6.11 but none is installed. You must install peer dependencies yourself.
npm WARN eslint-loader@2.2.1 requires a peer of eslint@>=1.6.0 <7.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN eslint-plugin-vue@6.2.2 requires a peer of eslint@^5.0.0 || ^6.0.0 but none is installed. You must install peer dependencies yourself.

npm ERR! code ENOENT
npm ERR! syscall access
npm ERR! path /mnt/c/Users/weily/Documents/seir-6-29/student/unit04/project04/p04frontend/node_modules/vuetemplate
npm ERR! errno -2
npm ERR! enoent ENOENT: no such file or directory, access '/mnt/c/Users/weily/Documents/seir-6-29/student/unit04/project04/p04frontend/node_modules/vuetemplate'
npm ERR! enoent This is related to npm not being able to find a file.
npm ERR! enoent 

npm ERR! A complete log of this run can be found in:
npm ERR!     /root/.npm/_logs/2020-09-23T23_29_51_657Z-debug.log
```
A symbiotic link named `vuetemplate` was found in node_modules and deleted. 
`npm-check-updates -u` returned no errors.
`sudo npm install` returned
```
npm ERR! errno -2
npm ERR! enoent ENOENT: no such file or directory, access '/mnt/c/Users/weily/Documents/seir-6-29/student/unit04/project04/p04frontend/node_modules/vuetemplate'
npm ERR! enoent This is related to npm not being able to find a file.
```
`sudo npm install vue` returned same  error as above. 
`sudo npm install vuetemplate`returned: 
```
npm ERR! code ENOSELF
npm ERR! Refusing to install package with name "vuetemplate" under a package
npm ERR! also called "vuetemplate". Did you name your project the same
npm ERR! as the dependency you're installing?
npm ERR! 
npm ERR! For more information, see:
npm ERR!     <https://docs.npmjs.com/cli/install#limitations-of-npms-install-algorithm>

npm ERR! A complete log of this run can be found in:
npm ERR!     /root/.npm/_logs/2020-09-23T23_34_45_615Z-debug.log
```
Realized that the `name:` property in package.json 1) matches the name of the missing dependency vuetemplate and 2) is meant to be the project name (parent dir name). `Name:` property was reassigned to the value `p04attempt3`.

Returned:
```
npm WARN deprecated core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
npm WARN deprecated popper.js@0.6.4: You can find the new Popper v2 at @popperjs/core, this package is dedicated to the legacy v1

> core-js@2.6.11 postinstall /mnt/c/Users/weily/Documents/seir-6-29/student/unit04/project04/p04frontend/node_modules/babel-runtime/node_modules/core-js
> node -e "try{require('./postinstall')}catch(e){}"

Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

The project needs your help! Please consider supporting of core-js on Open Collective or Patreon: 
> https://opencollective.com/core-js 
> https://www.patreon.com/zloirock 

Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)


> core-js@2.6.11 postinstall /mnt/c/Users/weily/Documents/seir-6-29/student/unit04/project04/p04frontend/node_modules/iview/node_modules/core-js
> node -e "try{require('./postinstall')}catch(e){}"

Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

The project needs your help! Please consider supporting of core-js on Open Collective or Patreon: 
> https://opencollective.com/core-js 
> https://www.patreon.com/zloirock 

Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)

npm WARN @vue/cli-plugin-eslint@4.5.6 requires a peer of eslint@>= 1.6.0 but none is installed. You must install peer dependencies yourself.
npm WARN babel-eslint@10.1.0 requires a peer of eslint@>= 4.12.1 but none is installed. You must install peer dependencies yourself.
npm WARN buefy@0.9.3 requires a peer of vue@^2.6.11 but none is installed. You must install peer dependencies yourself.
npm WARN eslint-loader@2.2.1 requires a peer of eslint@>=1.6.0 <7.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN eslint-plugin-vue@6.2.2 requires a peer of eslint@^5.0.0 || ^6.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN vue-eslint-parser@7.1.0 requires a peer of eslint@>=5.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.1.3 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.3: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.13 (node_modules/webpack-dev-server/node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.13 (node_modules/watchpack-chokidar2/node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

+ vuetemplate@1.0.1
added 62 packages from 142 contributors, removed 39 packages and audited 1334 packages in 45.657s

54 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```
Began to look into warnings and found [this](https://github.com/vuejs/vue-cli/issues/2862).

`npm list -g --depth=0` returned error: 

```
/usr/lib
├── @vue/cli@4.5.5
├── npm@6.14.8
└── npm-check-updates@9.0.2

npm ERR! peer dep missing: vue@3.0.0-rc.10, required by @vue/compiler-sfc@3.0.0-rc.10
```

Followed advice and ran `chmod 777 /usr/lib`, which raised following warnings, to be followed into some more (fsevents is a known warning). 

`npm run serve` to test Vue router, but errors thrown:

```
 ERROR  Failed to compile with 4 errors                        11:02:37 PM

 error  in ./src/views/One.vue

Module parse failed: Unexpected token (1:0)
File was processed with these loaders:
 * ./node_modules/eslint-loader/index.js
You may need an additional loader to handle the result of these loaders.
> <template>
|     <div>
| 

 @ ./src/router/index.js 5:0-35 14:13-16
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.24.120.140:8080&sockPath=/sockjs-node (webpack)/hot/dev-server.js ./src/main.js

 error  in ./src/views/Page2.vue

Module parse failed: Unexpected token (1:0)
File was processed with these loaders:
 * ./node_modules/eslint-loader/index.js
You may need an additional loader to handle the result of these loaders.
> <template>
|   <div class="home">
|     <img alt="Vue logo" src="../assets/logo.png">

 @ ./src/router/index.js 4:0-39 18:13-18
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.24.120.140:8080&sockPath=/sockjs-node (webpack)/hot/dev-server.js ./src/main.js

 error  in ./src/views/Home.vue

Module parse failed: Unexpected token (1:0)
File was processed with these loaders:
 * ./node_modules/eslint-loader/index.js
You may need an additional loader to handle the result of these loaders.
> <template>
|   <div class="home">
|     You're on the hook

 @ ./src/router/index.js 3:0-37 10:13-17
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.24.120.140:8080&sockPath=/sockjs-node (webpack)/hot/dev-server.js ./src/main.js

 error  in ./src/App.vue

Module parse failed: Unexpected token (1:0)
File was processed with these loaders:
 * ./node_modules/eslint-loader/index.js
You may need an additional loader to handle the result of these loaders.
> <template>
|   <div id="app">
|     <div id="nav">

 @ ./src/main.js 6:0-28 17:13-16
 @ multi (webpack)-dev-server/client?http://172.24.120.140:8080&sockPath=/sockjs-node (webpack)/hot/dev-server.js ./src/main.js

```

**ERROR**: Vue dev tools indicated that data.$route.query & data.$route.params are always empty read-only objects.

**RESOLUTION**: [Potential solution](https://stackoverflow.com/questions/56309617/vuerouter-this-route-query-always-empty) to add "mode: 'history'," when instantiating a new Router.


**ERROR**: When attaching directives to navbar dropdown menu in order to set unique id's to each menu item and then pass that id to the next-appearing component:

```
[Vue warn]: Error in v-on handler: "TypeError: this.parent.selectItem is not a function"

found in

---> <BDropdownItem>
       <BNavbarDropdown>
         <BNavbar>
           <Header> at src/components/Header.vue
             <App> at src/App.vue
               <Root>
warn @ vue.runtime.esm.js?2b0e:619
logError @ vue.runtime.esm.js?2b0e:1884
globalHandleError @ vue.runtime.esm.js?2b0e:1879
handleError @ vue.runtime.esm.js?2b0e:1839
invokeWithErrorHandling @ vue.runtime.esm.js?2b0e:1862
invoker @ vue.runtime.esm.js?2b0e:2179
original._wrapper @ vue.runtime.esm.js?2b0e:6917
```

**RESOLUTION**: [This](https://stackoverflow.com/questions/36968153/vue-js-reference-div-id-on-v-onclick) did not work. Replaced "event" with "id" but error persists.

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

