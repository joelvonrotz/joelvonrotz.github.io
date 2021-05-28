# Repository of [joelvonrotz.ch](https://joelvonrotz.ch)

## Collection: Travel `_travel`



## Collection: Notes `_notes`

## Miscellaneous

### Disclosure Menu

HTML contains the `detail` & `summary` tags, which are used in combination to create a disclosure menu (click on the `summary` tag and open up the respective `detail`)

```html
<details>
  <summary>Details</summary>
  Something small enough to escape casual notice.
</details>
```

The problem with this one is the customizability is rather limited, therefore I created a `:target`-selector based disclosure menu (for now only with `ul` contents).

```html
<div class="entry open" id="spaghet">
  <a class="alt" href="#spaghet">test</a>
  <ul>
    ...
  </ul>
</div>
```

![](docs/disclosure_menu.gif)

- **Problem** - You can't close it! You can click it, but you have to click something else to close it.

### Menu Icon

```html
<a class="icon" href="/link">
  <svg>
    inline SVG
  </svg>
  <span>Title</span>
</a>
```

To get a icon only, remove the `span` element

```html
<a class="icon" href="/link">
  <svg>
    inline SVG
  </svg>
</a>
```