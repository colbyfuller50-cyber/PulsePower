
# Pulse Power — Static Site (GitHub Pages)

## Contact form (Formspree)
1) Go to https://formspree.io and create a new form. Use **pulsepowerrental@gmail.com** as your email.
2) Copy the **Form ID** they give you (looks like `abcdjqwe`).
3) Open `config.js` and set:
   ```js
   window.FS_FORM_ID = "YOUR_FORM_ID";
   ```
4) Commit and publish. Submissions will be delivered to your Gmail.

This site is static (HTML/CSS/JS). No server is needed.
