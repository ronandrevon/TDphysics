MathJax.Hub.Config({
  config: ["MMLorHTML.js"],
  jax: ["input/TeX", "output/HTML-CSS", "output/NativeMML"],
  extensions: ["MathMenu.js", "MathZoom.js"],
  TeX: {
    Macros: {
        cc: ["{\\mathcal #1}",1],
        bb: ["{\\mathbf #1}",1],
        dP: "{\\partial}",
        grad: "{\\nabla}",
        vecTwo: ["{\\left[\\begin{array}{c} #1 \\\\ #2 \\end{array}\\right]}",2],
        matTwo: ["{\\left[\\begin{array}{cc} #1 & #2 \\\\ #3 & #4 \\end{array}\\right]}",4],
        matFour:["{\\left[\\begin{array}{cccc} #1\\\\ #2\\\\ #3\\\\ #4 \\end{array}\\right]}",4],
        expp:["{e^{-2j\\pi \\left(#1 \\right)}}",1],
        expj:["{e_{j}^{#1}}",1],
        eps:["{\\epsilon}"],
        Psis:["{\\Psi^{*}}"],
        // rp:["{\\bb r^{\\prime}}"],
        lp:["{l^{\\prime}}"],
        mp:["{m^{\\prime}}"],
        rp:["{r^{\\prime}}"],
        nlp:["{ n_{l^{  \\prime}} }"],
        lmlmp:["{ l,m;\\lp,\\mp}"],
        jlp:["{ j_{l^{  \\prime}} }"],
        Llp:["{ L_{l^{  \\prime}} }"],
        Rlp:["{ R_{l^{  \\prime}} }"],
        nplp:["{ n_{l^{ \\prime}}^{\\prime} }"],
        jplp:["{ j_{l^{ \\prime}}^{\\prime} }"],
        Rplp:["{ R_{l^{ \\prime}}^{\\prime} }"],
    }
  }
});
