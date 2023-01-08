field = document.getElementById("equation_input");
field.addEventListener("input", updateEquationOutput);
output = document.getElementById("equation_output");

const random_equations = [
  "y = m \\cdot x + b",
  "y = a \\cdot x^{2} + b \\cdot x + c",
  "x_{1,2}=\\frac{-b \\pm\\sqrt{b^2-4\\cdot a \\cdot c}}{2\\cdot a}",
  "\\begin{align*}\n  a&=b+c \\\\\n  d+e&=f\n\\end{align*}",
  "\\cfrac{2}{1+\\cfrac{2}{1+\\cfrac{2}{1}}}",
  "\\begin{CD}\n  A @>a>> B \\\\\n  @VbVV @AAcA \\\\\n  C @= D\n\\end{CD}"
];

function updateEquationOutput(ev) {
  if(ev) {
    katex.render(ev.target.innerText, output, {
      throwOnError: false,
      displayMode: true
    })
  } else {
    katex.render(field.innerText, output, {
      throwOnError: false,
      displayMode: true
    })
  }
}

window.onload = function() {
  field.innerText = random_equations[Math.floor(Math.random() * random_equations.length)];
  updateEquationOutput(null);
};