# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
- [Screenshot](#screenshot)
- [Links](#links)
- [My process](#my-process)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
- [Author](#author)

## Overview
This is a simple layout for a QR code. The design is elegantly centered on the page for both mobile and desktop users.

### Screenshot 
![](https://github.com/famanakis/frontend-mentor/blob/main/qr-code-component-main/src/images/project-screenshot.png)

### Links
- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process
I built this using semantic HTML and CSS styling. This was built using a mobile-first approach. I used :root selector for the colors, and Flexbox to center elements on the page. I used absolute positioning in order to have the footer remain at the bottom of the page.

### Built with
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned
I reinforced what I have been learning on Srimba with regards to CSS :root styling for colors. In CSS, the :root selector matches the document's root element and allows developers to assign colors to root words which can then be used repeatedly throughout the CSS. If a customer wishes to change a color, the developer only needs to change the root color, and not every line of code where the color may be in the CSS. Here is an example of the :root selector in CSS code: 
```
:root {
    --white: hsl(0, 0%, 100%);
    --lt-gray: hsl(212, 45%, 89%);
    --gray-blue: hsl(220, 15%, 55%);
    --lt-blue: hsl(228, 45%, 44%);
    --dk-blue: hsl(218, 44%, 22%);
}
```
Here is an example of a root color being used later on in the CSS code :
```
h1 {
    color: var(--dk-blue);
}
```

## Author

- Website - [Farrah Mamanakis](https://github.com/famanakis)
- Frontend Mentor - [@famanakis](https://www.frontendmentor.io/profile/famanakis)
- Twitter - [@FMamanakis](https://twitter.com/FMamanakis)
