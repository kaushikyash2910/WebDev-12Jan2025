### Understanding the Power of Anchor Tags in HTML

Anchor tags (`<a>`) are used for navigation to move between different pages or sections of a website.

---

#### **Basic Structure of an Anchor Tag**

The basic syntax for an anchor tag is:

```html
<a href="URL">Clickable Text</a>
```

- **`href`**: Specifies the destination of the link. This can be an internal page, an external site, or a section within the same page.

- **Clickable Text**: The part of the link that the user sees and clicks.

---

##### **1. Linking Between Pages**

In the `index.html` file, there are links to other pages like `movies.html` and `about.html`:

```html
<a href="index.html">Home</a>
<a href="movies.html">Movies</a>
<a href="about.html">About Us</a>
```

- **`href="index.html"`**: Navigates to the Home page.
- **`href="movies.html"`**: Opens the Movies page.
- **`href="about.html"`**: Directs to the About Us page.

##### **2. Linking to Specific Sections**

Anchor tags can link to specific parts of a page using IDs as well.

For example:

```html
<a href="#mentors">Mentors</a> <a href="about.html#contact">Contact Number</a>
```

- **`href="#mentors"`**: Jumps to the section with the ID `mentors` on the current page.
- **`href="about.html#contact"`**: Navigates to the `contact` section of the About Us page.

##### **3. External Links**

Anchor tags also allow linking to external websites:

```html
<a href="https://www.example.com">Visit Example</a>
```

`target="_blank"`: opens an external site in a new tab
`target="_self"` : opens an external site in the same tab

---
