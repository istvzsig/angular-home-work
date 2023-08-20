# Photo Monkey 🙈

## Frontend Developer Test v4 👨‍💻

## Overview 📝

This project involves creating an Angular webpage using the provided design wireframe. The goal is to build a photo library with an infinite random photostream and the ability to save photos to your "Favorites" library. The development process should adhere to best practices, including TDD (Test-Driven Development) and version control.

## Task Description 📋

### Design 🎨

- The wireframes provide a general view of how the pages should look.
- You have the freedom to choose the theme, including colors and fonts.

### Header 📌

- The header consists of 2 buttons that allow switching between your "Favorites" library and a random photostream. ✅ 
- The active view should be highlighted. ✅ 

### "Photos" Screen 📷

- Located at `/path`. ✅ 
- Displays an infinite scrollable list of photos. ✅ 
- Clicking a photo adds it to the "Favorites" library. ✅ 
- When scrolling, new photos are loaded, and a loader icon is displayed. ✅ 
- Real-world API emulation: Loading new photos should have a random delay of 200-300ms. ✅ 
- ~~Use `https://picsum.photos/200/300`~~ [https://picsum.photos/v2/list?page=1&limit=12](https://picsum.photos/v2/list?page=1&limit=12) to get random images. ✅

### "Favorites" Screen 🌟

- Located at `/favorites` path. ✅
- Displays a list of favorite photos. ( from localeStorage ) ✅ 
- Clicking on a photo opens a single photo page. ✅
- Favorites list should persist after a page refresh. ✅

### Single Photo Page 🖼️

- Located at `/photos/:id` path. ✅
- Displays a single full-screen photo. ✅
- Contains the "Remove from Favorites" button. ✅ ( broken heath )
- The header remains the same on this page. ✅

## General Requirements 📌

1. Use Angular Router module for navigation. ✅
2. Utilize the latest version of Angular and SCSS. ✅ ( SASS )
3. ~~Implement Angular Material components.~~ ( use custom stylesheet to practice )
4. Implement infinite scroll without using external libraries. ✅ ( window object scroll event )
5. Do not use any backend server for state retention. ✅
6. Include unit tests for your code. ✅ ( need a lot more )
7. Carefully structure your code with separate reusable components and modules. ✅ ( processed refactor but still needs )

## Getting Started 🚀

1. Clone this repository. 
2. Run ```npm install``` to install dependencies.
3. Run ```ng serve``` to start the development server.
4. Open your browser and go to `http://localhost:4200`.

## Tests 🧪

Run unit tests using the following command:

```
ng test
```

## Notes

I am incredibly excited about this opportunity with <img src="https://cloud.xm-cdn.com/static/xm/common/logos/XMLogo-2021_homepage.svg" alt="drawing" width="55"/> and eager to learn Angular and CS in depth. Feel free to reach out if you have any questions or need clarification.

Feel free to reach out if you have any questions or need clarification.
