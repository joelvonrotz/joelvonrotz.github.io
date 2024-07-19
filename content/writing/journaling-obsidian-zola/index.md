---
title: Journaling with Obsidian.md & Zola
description: I'm thinking about writing and recording my bike travels and have been trying a workflow using Obsidian.md and its git plugin. My website is hosted on Github Pages and it uses the static site engine *Zola*. Changes are pushed to the website's git repository via the git plugin and the page is rebuilt.
date: 2024-07-19
taxonomies:
  category:
    - workflow
  tags:
    - workflow
    - obsidian
    - markdown
    - zola
    - android
extra:
  thumbnail: colton-sturgeon-N4fdQbMJ0nI-unsplash.jpg
---


Following guide explains the setup to push content to a repository which uses the static site engine [Zola](https://www.getzola.org/).
## Setting it up!

Git on Android is a difficult story, in short: there are no "official" git GUI client apps for Android. There is an app called [GitJournal](https://gitjournal.io/) which combines Git and a journal writer, which is neat, but it is not as customizable as [Obsidian.md](https://obsidian.md/). So I'm going with the more complicated setup by using *Obsidian.md*. Advantage is it keeps everything in one app!
### Preparation

Before Obsidian is setup up, the website repository needs to be copied onto your phone via USB (or whatever you use to transfer data between Phone and PC)

1. Connect your phone to your PC, where the repository of your Zola based website is located.
2. Copy the website files onto your phone for example under `internal/Documents/Obsidian/vault_website`

### Obsidian

1. Install Obsidian.md on your phone and open it
2. Open the copied folder as an Obsidian-Vault
3. Go to **Settings > Community plugins > Browse > Search for "Git" and install it > Enable the plugin**
4. (💻) Create a *Personal Access Token* (I did the *classic* variant) via https://github.com/settings/tokens
	- Select following scope group: "**repo**"
5. (💻) Copy or transfer the generated token onto your phone
6. Back in Obsidian go to **Settings > open "Git" in the community plugins group in the sidebar > insert the required information**
	- instead of the password, you insert the token into it
7. Restart Obsidian
8. Pull changes by pulling down and executing the **Git: Pull** command

*Alternative Guide*: [https://forum.obsidian.md/t/the-easiest-way-to-setup-obsidian-git-to-backup-notes/51429](https://forum.obsidian.md/t/the-easiest-way-to-setup-obsidian-git-to-backup-notes/51429)
## Stuff to keep in mind

**Paths**: Zola handles posts and images a bit weirdly, but once you get used to it, it's actually quite neat. When writing a post with images, the post is named `index.md` and placed into a folder (i.e. `/test/`) under the posts' root folder (my posts are saved under `content/writing/`), which corresponds to the URL. So if I want to use the following image `colton-sturgeon-N4fdQbMJ0nI-unsplash.jpg`, it is saved in the folder `/test/`. If multiple posts use the same image, it can be placed in the posts' root folder.

![colton-sturgeon-N4fdQbMJ0nI-unsplash-min](colton-sturgeon-N4fdQbMJ0nI-unsplash.jpg)

---
Photo by [Colton Sturgeon](https://unsplash.com/@coltonsturgeon?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) on [Unsplash](https://unsplash.com/photos/brown-book-beside-macbook-N4fdQbMJ0nI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)

