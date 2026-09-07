# InfoSec @ UNCG — Club Website

The official website for **InfoSec**. Built with React, Vite, and plain CSS.

## Tech stack

- React 19
- Vite
- React Router (`HashRouter`, so routing works on GitHub Pages without extra server config)
- Plain CSS (no framework)



## Project structure

```
src/
  components/     Reusable UI pieces (Navbar, Footer, cards, etc.)
  pages/          One file per route (Home, About, Leadership, Events, Resources)
  data/           Editable content — see below
  styles/         Global design tokens and shared button styles
```



### Leadership — `src/data/leadership.js`

Each board member is an object with `name`, `role`, `photo`, `bio`, and `socials`. To add a real photo:

1. Add the image file to `src/assets/leadership/` (create the folder if it doesn't exist).
2. Import it at the top of `leadership.js`, e.g. `import yashPhoto from '../assets/leadership/yash-patel.jpg'`.
3. Set `photo: yashPhoto` on that member's entry.

Until a photo is set, the site automatically shows a placeholder with the person's initials.

To add social links, fill in the `socials` object, e.g. `socials: { linkedin: 'https://...', github: 'https://...', email: 'name@uncg.edu' }`. Any key you leave out just won't show an icon.

### Events — `src/data/events.js`

The list starts empty, which shows an "Events are coming soon" message on the Home and Events pages. To add a real event, add an object to the array:

```js
{
  id: 'first-meeting-fall-2026',
  title: 'First General Meeting',
  date: '2026-09-15',       // ISO format, used for display
  time: '6:00 PM',          // optional
  location: 'TBD',
  description: 'Kickoff meeting: club intro, CTF overview, and how to get involved.',
  tag: 'General Meeting',
}
```

### Resources — `src/data/resources.js`

Resources are grouped into four categories (Getting Started, CTFs & Practice, Careers, Research). Each category starts with an empty `resources` array. Add entries like:

```js
{ title: 'TryHackMe', url: 'https://tryhackme.com', description: 'Guided, hands-on security labs.' }
```

Leave `url` unset if you don't have a link yet — the card will still render without one.

### Join link / contact email — `src/data/config.js`

Once the club has an official signup form, Discord, or contact email, set `joinUrl` and/or `contactEmail` in this file. Until then, the "Join InfoSec" button intentionally renders as a disabled placeholder across the site so nothing broken ships.

### Images

There's no images folder yet since none were provided. Create `src/assets/` (or subfolders like `src/assets/leadership/`) as needed and import images directly into the relevant component or data file — Vite will handle bundling automatically.

## Notes

- All placeholder content (leadership photos, events, resources, join link, contact email) was left intentionally blank rather than invented, per the club's request. Search each `src/data/*.js` file for guidance on filling it in.
- The design uses a dark navy palette with a single blue accent, Space Grotesk for headings, and IBM Plex Sans for body text — see `src/styles/tokens.css` for all color and type variables if you want to adjust the look.
