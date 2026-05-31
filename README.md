# 🏎️ F1Feed

A front-end web application that displays a mock social media feed for all Formula 1 teams. 
See what every team is posting across Instagram, X, and YouTube — all in one place, 
ordered from latest to oldest. 

## Technologies

- `HTML`
- `CSS`
  - Flexbox
  - CSS Variables
  - Media Queries
- `Vanilla JavaScript`
  - ES Modules
  - DOM Manipulation
  - Array Methods (map, filter)
  - localStorage

## Features

What you can see and do with F1Feed:

- 📰 A mock social media feed with posts from all 10 F1 teams and the official F1 account
- 🔍 Filter posts by team with a single click
- ✅ Active state on the selected filter button so you always know what you're viewing
- 🏠 Click the F1Feed logo to reset back to all teams
- 🌙 Dark / Light mode toggle
- 📱 Responsive design that adapts to any screen size

## The Process

I started by building the UI with mock data to focus on the layout and 
structure before worrying about real data. I learned how to render dynamic 
content using JavaScript's `map()` and `innerHTML` instead of writing each 
post manually in HTML.

Once I was happy with the initial look, I focused on making the layout 
responsive using Flexbox — ensuring the posts and filter buttons adapted 
cleanly to any screen size. I also made design decisions along the way, 
like replacing the title text with the official F1 logo and styling the 
filter buttons to reflect each team.

From there I added interactivity — event listeners for the filter buttons, 
filtering logic to show only the selected team's posts, and an active state 
so the user always knows which filter is selected. Finally I added a 
dark/light mode toggle using CSS variables, which made theming clean and 
easy to manage.

Throughout the entire process the project was managed and documented with 
Git, using feature branches and pull requests for each new feature — keeping 
`main` always stable and functional.

## What I learned

### 🎨 CSS Variables and Theming
Using `:root` to define global color variables and a `.dark-mode` class 
that overrides them, making the dark/light mode toggle clean and easy to manage.

### 📋 Array Methods
- **map()** — to loop through all posts and dynamically render each one as an HTML card
- **filter()** — to filter posts by team when a filter button is clicked

### 📐 Layout and Structure
How to use CSS Flexbox to build a clean, presentable layout, and how to use 
`max-width`, `width: 100%` and `margin: 0 auto` to make elements responsive 
without breaking the design.

### 📌 CSS Specificity
How more specific selectors always win — and how to use that to fix styles 
that weren't applying, like the active state on filter buttons.

### 💾 localStorage
How to use `localStorage.setItem()` and `localStorage.getItem()` to persist 
data in the browser — in this case saving the user's theme preference so the 
page remembers it on refresh.

### 🗂️ Project Structure
How to organize a front-end project into separate files using ES Modules 
(`import/export`), keeping data, logic and styles clean and easy to navigate.

### 🔀 Git Workflow
How to work with feature branches, commit changes along the way, open Pull 
Requests on GitHub and merge them back into main when a feature is complete.

## How can it be improved?

- Connect to real APIs (YouTube, RSS feeds) for live data
- Add a search bar to filter posts by keyword
- Save favourite posts using localStorage
- Add filtering by platform (Instagram, X, YouTube)
- Full mobile experience with a hamburger menu

## 🏃 Running the Project

No installation or dependencies required. If you want to run this project locally, follow these steps:

1. Clone the repository:
   git clone https://github.com/TarekM-7/F1Feed.git

2. Open the project folder:
   cd F1Feed

3. Open `index.html` in your browser.

That's it!

---

> **Note:** Since the project uses ES Modules (`import/export`), 
> opening `index.html` directly by double-clicking may cause a CORS 
> error in some browsers. If that happens, use a local server instead:
>
> - With VS Code: install the **Live Server** extension and click "Go Live"
> - With Node.js: run `npx serve .` in the project folder


## Preview

### Light Mode
<img width="1900" height="938" alt="image" src="https://github.com/user-attachments/assets/c6bff4cf-7137-4749-9394-cfa87e52c425" />

### Dark Mode
<img width="1901" height="926" alt="image" src="https://github.com/user-attachments/assets/be790c0d-a2df-4ac0-a71c-3f57916d3477" />

