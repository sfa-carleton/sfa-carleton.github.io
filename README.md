# SFA Website

Welcome to the repository for Carleton's Science-Fiction Fantasy Alliance website. Following the old website being removed we are now hosting this on Github Pages.

As of 2022-2023 the leadership is:

- Redacted Maxwell -- President
- Lily Haas -- Vice President
- Daphne Suh -- Vice President
- Petrichor Park -- Treasurer

## Repository Structure

The `main` branch contains the *sources* for the site in the `src` directory, as well as other misc information (like this readme!)

The actual site content is on the `site` branch (if you're on the web client, click the little "main" button in the top-left and switch to `site`).
You shouldn't edit those files.

## Editing the Site

You can edit the site via Github's web interface, or on your local computer. Locally requires more computery knowledge.

> Dev info: because security is fake we're using a classic, full-repo-access token for everything. If you're in the SFA leadership we can get you it, otherwise buzz off.
>
> 1. Figure out where your [git-credentials](https://git-scm.com/docs/git-credential-store) file is
> 2. If it exists, append `https://sfa-carleton:[THE TOKEN]@github.com` to it using your favorite text editor
> 3. If it doesn't exist, create it and put the above in it.
>
> Then git clone it, edit /src, and be on your merry way.

## Resources

- The site uses a version control system called Git. This is so we can revert things if we make a bad change, and also because GitHub (see below) requires Git.
- GitHub is the company that hosts the files.
- <https://www.freecodecamp.org/news/introduction-to-git-and-github/>
- Eleventy is a "static site generator" that makes it less of a pain in the tuckus to write websites. <https://www.11ty.dev/docs/getting-started/>
- Eleventy is written using Node.js, which makes it *more* of a pain in the tuckus to write websites.
- I tried to leave convenient comments in all the source files, so read those.
- And if you can't figure it out, someone in the club probably still has a way to contact me.

Magic commands.

```sh
# To test your changes locally:
# (note for devs: this is defined in package.json, in "scripts". you can run `npx @11ty/eleventy -- serve if you like instead`)
npm run serve

# To get your local changes onto the website:
git add .
git commit -m "A summary of your changes"
git push
```

There probably exist nice GUI versions of all these tools, but to be honest I only know the commands. If you don't know anything about the command line, IDK Google it or take CS 251 or something. Or ask a friend.
