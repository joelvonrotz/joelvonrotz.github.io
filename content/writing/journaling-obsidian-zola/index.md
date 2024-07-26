---
title: Journaling with Obsidian.md & Zola
description: I'm thinking about writing and recording my bike travels and have been trying a workflow using Obsidian.md and its git plugin. My website is hosted on Github Pages and it uses the static site engine *Zola*. Changes are pushed to the website's git repository via the git plugin and the page is rebuilt.
date: 2024-07-19
taxonomies:
  categories:
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

Git on Android is a difficult story, in short: there are no "official" git GUI client apps for Android. There is an app called [GitJournal](https://gitjournal.io/) which combines Git and a journal writer, which is neat, but it is not as customizable as [Obsidian.md](https://obsidian.md/). So I'm going with the more complicated setup by using *Obsidian.md*. Advantage is, Obsidian is very customizable and flexible!
### Preparation

Before Obsidian is setup up, the website repository needs to be copied onto your phone via USB (or whatever you use to transfer data between Phone and PC)

1. Connect your phone to your PC, where the repository of your Zola based website is located. (**Important**: the website repo needs to have a `.git` folder)
2. Copy the website files onto your phone for example under `internal/Documents/Obsidian/vault_website`

This copy step is done to remove the hassle of having to initialize the repo inside Obsidian.md and adding the necessary remote repository. By simply copying the repo onto your phone, the git repo is already initialized and ready to go.

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
## Template

Templates are useful when writing notes in Obsidian to quickly have a general structure. This can also be used for posts!

Fortunately Zola not only supports TOML, but also YAML, which makes it a lot easier on Obsidian. While Obsidian does support YAML, its fancy *Properties* feature does not support **nested** YAML:

```yaml
# supported in Properties view
key1: value1
key2: value2

# not supported :(
group:
  key1: value1
  key2: value2
```

A workaround is to display the post frontmatter in source form. Under **Settings > Editor > Under 'Display' the option 'Properties in document'**, change the setting to *Source*. This way it displays the frontmatter in monospaced font.

Going back to writing a post template, now that everything is configured correctly. Following template `post template.md` is saved locally under `obsidian/template/` and contains following:

```markdown
---
title: ""
description: ""
date: {{date:YYYY-MM-DD}}

taxonomies:
  categories: [""]
  tags: ["",""] # 

extra:
  thumbnail: ""
---

```

It's mainly the frontmatter that is important!

To be able to use the template, the Template core plugin needs to be configured!

1. Go to **Settings > under sidebar group 'Core Plugins' select 'Templates'**
2. Change the option *Template folder location* to the folder, where the post template is located (i.e. `obsidian/template`)
3. It's recommended to extend the toolbar above your phone keyboard with the template button (can be changed in the settings) – *OR* pull down and search for "Templates: insert template"
## Stuff to keep in mind

**Paths**: Zola handles posts and images a bit weirdly, but once you get used to it, it's actually quite neat. When writing a post with images, the post is named `index.md` and placed into a folder (i.e. `/test/`) under the posts' root folder (my posts are saved under `content/writing/`), which corresponds to the URL. So if I want to use the following image `colton-sturgeon-N4fdQbMJ0nI-unsplash.jpg`, it is saved for example in the folder `/test/`. If multiple posts use the same image, it can be placed in the posts' root folder and a relative path to the image is used.

![colton-sturgeon-N4fdQbMJ0nI-unsplash-min](colton-sturgeon-N4fdQbMJ0nI-unsplash.jpg)

---
Photo by [Colton Sturgeon](https://unsplash.com/@coltonsturgeon?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) on [Unsplash](https://unsplash.com/photos/brown-book-beside-macbook-N4fdQbMJ0nI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)

