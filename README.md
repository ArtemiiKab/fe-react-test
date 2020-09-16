# TASK

```
Create a React application for displaying and storing data using https://swapi.dev/
and any image searching API (Google, Bing or whatever you want).

Please, read this document all the way to the end.
```

Completing a a test case may require:

-   Complexity "Easy-peasy" - requires ~1 hour to complete and no external sources or reading documentation.

-   Complexity "Good job" - requires ~1.5 hours to complete, also may require checking libraries documentation.

-   Complexity "Wow! We've noticed your efforts" - requires ~2.5-3 hours to complete and requires reading quite an amount of documentation for used libraries.

_**You may choose whatever option you like, according to the amount of time
that you feel affordable for yourself on spending for a test.**_

## _Tech requirements_

-   You may use either provided struture in this repo or `create-react-app` (_recommended_) or any other React setup you like. _**App MUST be written using React Hooks API.**_
-   As a result we'd like having a link for a git repository with a task.

#### **Complexity: Easy-peasy**

1. App must display 2 tabs - `Starships` and `Saved`.
2. `Starships` tab must display images of starships (you get starships names from Swapi, images you get from an image provider of your choice).
3. Clicking on an image saves it and it will be avaiilable in a `Saved` tab.

#### **Complexity: Good job**

0. Everything from "Easy-peasy", but also the following:
1. App must display three tabs that you can switch between: `Planets`, `Starships` and `Saved`.
2. Clicking the `Saved` tab moves us to the page with all the saved images, which also contains an input field that allows us to filter images by the name.

#### **Complexity: Wow! We've noticed your efforts**

0. Everything from "Easy-peasy" and "Good job", but also the following:
1. App must display three tabs that you can switch between: `Planets`, `Starships`, `Persons` and `Saved`.
2. Clicking any of the following tabs [ `Planets`, `Persons`, `Starships` ] displays a list with all items that are provided by Swapi.
3. Clicking any item from the list displays a gallery with unequal rows / columns (a.k.a. "Masonry grid") with images representing chosen item (images are fetched via an image searching API you've chosen).
4. Clicking an image saves it to the `Saved` and show a toaster telling about the result of an operation.

## _Data management_

-   For global state management use Redux.
-   For connecting Redux you may use `react-redux's "connect"` or hooks or whatever approach you like.

#### **Complexity: Easy-peasy**

1. Saved items must be stored in Redux store.
2. Asynchronous operations may be handled just by sending a request inside a component.

#### **Complexity: Good job**

0. Everything from "Easy-peasy", but also the following:
1. For asynchronous operations use whatever tool you like (like `redux-thunk`).
2. Redux store MUST NOT be accessible via `Redux devtools` extension in a production mode.

#### **Complexity: Wow! We've noticed your efforts**

0. Everything from "Easy-peasy" and "Good job", but also the following:
1. For handling side-effects and redux management use `redux-saga`.

## _Styling and layouts_

-   Usage of SCSS modules is a MUST. Using SCSS tools like mixins, variables etc will be a plus.
-   Usage of `styled-components` is a plus if they're organized as modules.

#### **Complexity: Easy-peasy**

1. All layout should be done using either CSS Grid or CSS Flexbox (using CSS Grid will be a plus).
2. Images should be placed in a grid.
3. Adding hover effects will be a plus.
4. Having fancy styling will be a plus.

#### **Complexity: Good job**

0. Everything from "Easy-peasy", but also the following:
1. Every image must have an appear transition on mount (we suggest going with _opacity + bottom-to-top slide in_ transition).
2. Adding transition for pages will be a plus.

#### **Complexity: Wow! We've noticed your efforts, styling ninja**

0. Everything from "Easy-peasy" and "Good job", but also the following:
1. Images should be placed in a grid with unequal columns / rows (a.k.a. Masonry layout), which must be created with just CSS (and JS if needed). You MUST NOT use a library.
2. Including light and darks theme will be a plus.

### _Useful hints_:

1. Use a library for toasters - this will save you a bit of time and efforts.
2. Save not only the image itself, but also some additional data about it (at least a name) - this will help you in filtering.
3. Using some memoization strategies will be a plus.
4. Try making your code clean, readable and maintainable - this will be a HUGE plus.
5. Creating a transition where images appear smoothly one by one (not all at the same time) will be a plus, cuz it looks fancy :)
6. Responsiveness will be a plus
7. Creating some functionality which was not stated in a spec but shows your skills may be considered as a plus.
8. Prepare before starting a test work and find a good balance between time spent and a result, as it also may be reviewed.
9. Try making commit messages nice and informative.
