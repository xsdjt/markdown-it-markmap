/*
 * @file index.js
 *
 * @brief plugin entry point
 * @author David Suárez
 * @date Sat, 09 May 20 19:45:15 +0200
 *
 * @license
 *
 * markdown-it-markmap: markdown-it markmap-lib plugin
 *
 * Copyright (c) 2020 David Suárez
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 *
 */

import { Transformer } from 'markmap-lib';

const transformer = new Transformer();

const {Base64} = require('js-base64');

const markmapPlugin = (md) => {

  const temp = md.renderer.rules.fence.bind(md.renderer.rules);

  md.renderer.rules.fence = (tokens, idx, options, env, slf) => {

    const token = tokens[idx];

 //    if (token.info === 'markmap') {
 //      try {
	// var content = token.content.trim()
	// var style = 'style="width=1000px; height=600px"'
	// if (content.startsWith('style=')) {
	// 	style = content.substring(0, content.search('\n'))
	// 	content = content.substr(content.search('\n') + 1)
	// }
 //        return `<svg class="markmap-svg" ${style}>${content}</svg>`;
 //      } catch (ex) {
 //        return `<pre>${ex}</pre>`
 //      }
 //    }

 
    if (token.info === 'mindmap') {
      try {
        // const data = transformer.transform(token.content.trim());
        // return `<svg class="markmap-svg">${JSON.stringify(data)}</svg>`;

        // var data = new Buffer(token.content.trim()).toString('base64');

        //开源https://github.com/dankogai/js-base64
        // console.log(token.content);
        var data = Base64.encode(token.content.trim(), true);

        return `<svg class="markmap-svg">${data}</svg>`;


      } catch (ex) {
        return `<pre>${ex}</pre>`
      }
    }

    return temp(tokens, idx, options, env, slf)
  };
};

export default markmapPlugin
