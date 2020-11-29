# markdown-it-markmap

> Markmap plugin for markdown-it markdown parser.

With this plugin you can create mindmap using [markmap](https://markmap.js.org/).

It adds a named fence _markmap_ to the markdown parser.

## Installation

```bash
$ yarn add https://github.com/guoang/markdown-it-markmap.git
```

## Usage

Configure the plugin in markdown-it:

```js
var markdownIt = require('markdown-it');
var markdownItMarkmap = require('markdown-it-markmap');

const mdi = markdownIt();
mdi.use(markdownItMarkmap);

let mindmapContent = `
\`\`\`mindmap
# root
## child1
  - child3
## child2
  - child3
\`\`\``;


console.log(mdi.render(mindmapContent));
```

Add needed libraries in browser:

```html
<script src="https://cdn.jsdelivr.net/npm/d3@6"></script>
<script src="https://cdn.jsdelivr.net/npm/markmap-view"></script>
<script>
    import { transform, getUsedAssets, getAssets } from 'markmap-lib';
    const { Markmap, loadCSS, loadJS, loadPlugins } = window.markmap;
    const mindmaps = document.querySelectorAll('.markmap-svg');
    for(const mindmap of mindmaps) {
        // 1. transform markdown
        const { root, features } = transform(mindmap.innerHTML);
        // 2. get assets
        const { styles, scripts } = getAssets();
        // 3. load assets
        if (styles) loadCSS(styles);
        if (scripts) loadJS(scripts, { getMarkmap: () => window.markmap });
        // 4. create markmap
        Markmap.create(mindmap, null, root);
    }
</script>
```

## Example

[example](https://guoang.tech/md/?name=mindmap.md)

[MIT](LICENSE)
