# How to contribute

# Edit texts online

1. Register and log in to a GitHub account
2. Click your way to the correct file in `src > app > xxx-yyy` where `xxx-yyy` is the route (url)
3. Click `content.mdx` file to open the file
4. Click the top right ✏️ button to open the editor
5. Make your changes
6. Click the top right `Commit changes..` button
7. Write a short sentence about what you changed (eg. "Fix typo on English page")
8. Choose `Create a new branch for this commit and start a pull request` at the bototm
9. Click `Propose changes`
10. This will take you to the "Open a pull request" form, you can just click `Create pull request` in the corner

This creates a "Pull request" with your proposed changes, and will automatically notify anyone who has permission to
review the changes. They can then perform a "merge", which means that your changes are incorporated into the main branch
and deployed to the website.

## Formatting

Most places use [MDX](https://mdxjs.com/) which basically means Markdown with React components.

Stick to these and you're fine:

- Write lines of texts to create paragraphs
- End a paragraph with backslash if you must have a soft linebreak
- A large heading (rarely used) starts with `# My heading`
- A sub heading (used below large headings) starts with `## My sub heading`
- For other headings: `### Smaller heading`
- Italic `_my italic text_`
- Bold `**my bold text**`
- Bullets: `- Start each line with a dash(-) or diamond(*)`
- Links: `A [link](http://www.example.com) in text`

# Development

1. Install [Node](https://nodejs.org/)
2. Install dependencies: `npm install`
3. Run local dev environment: `npm run dev`
4. Access it on http://localhost:3000
