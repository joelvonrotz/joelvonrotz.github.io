---
layout: page
title: "$\\LaTeX$ Equation Generator"
excerpt: "A small generator using Katex to generate equations."
---

This exist to quickly write an equation for explaining something to a friend or look how an equation will look in a document. It uses the Katex script and works great! I recommend using a browser that has a Snapshot-Tool to save the equations.

<pre id="equation_input" contenteditable="true">y = m \cdot x + b</pre>
<pre id="equation_text" contenteditable="true"></pre>


<div id="equation_output">
</div>

<style>
  #equation_input, #equation_output {
    margin: 0 auto;
    max-width: 90%;
    -webkit-box-shadow: inset 0px 0px 15px -1px #DBDBDB; 
    box-shadow: inset 0px 0px 5px -1px #DBDBDB;
    padding: 10px;
    border-radius: 10px;
    display: block;
    font-family: var(--font-code);
    min-height: 20px;
  }

  #equation_input {
    overflow-x: auto;
    border: solid 1px var(--highlight);
    line-height: 1.3;
    width:100%;
    display:block
  }

  #equation_output {
    border: solid 1px var(--bg-1);
    margin-top: 20px;
  }
  
  .katex {
    font-size: 1.5em;
  }

</style>
<script src="/scripts/tools/katex_equation_renderer.js"></script>