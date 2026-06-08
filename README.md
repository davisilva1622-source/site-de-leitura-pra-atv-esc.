<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Biblioteca Digital</title>

<style>

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    font-family:Georgia, serif;
    background:#f4f1e8;
    color:#222;
    min-height:100vh;

    display:grid;
    grid-template-columns:300px 1fr;
    grid-template-rows:80px 1fr 60px;
    grid-template-areas:
    "header header"
    "aside main"
    "footer footer";
}

header{
    grid-area:header;
    background:#3a2d1f;
    color:white;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:20px;
}

nav ul{
    display:flex;
    gap:20px;
    list-style:none;
}

nav a{
    color:white;
    text-decoration:none;
}

aside{
    grid-area:aside;
    background:white;
    overflow:auto;
    border-right:2px solid #ddd;
    padding:20px;
}

main{
    grid-area:main;
    padding:40px;
    overflow:auto;
    line-height:1.8;
}

footer{
    grid-area:footer;
    background:#3a2d1f;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
}

section{
    margin-bottom:50px;
}

article{
    background:white;
    padding:30px;
    border-radius:15px;
    box-shadow:0 10px 25px rgba(0,0,0,.1);
}

details{
    margin-bottom:15px;
    border:1px solid #ddd;
    padding:10px;
    border-radius:10px;
}

summary{
    cursor:pointer;
    font-weight:bold;
}

figure{
    text-align:center;
    margin-bottom:30px;
}

img{
    max-width:250px;
    border-radius:15px;
}

mark{
    background:gold;
}

</style>
</head>

<body>

<header>

<h1>📚 Biblioteca Digital</h1>

<nav>
<ul>
<li><a href="#">Início</a></li>
<li><a href="#">Livros</a></li>
<li><a href="#">Autores</a></li>
<li><a href="#">Favoritos</a></li>
</ul>
</nav>

</header>

<aside>

<h2>Sumário</h2>

<details open>
<summary>Capítulo 1</summary>
<p>Introdução</p>
</details>

<details>
<summary>Capítulo 2</summary>
<p>Desenvolvimento</p>
</details>

<details>
<summary>Capítulo 3</summary>
<p>Conclusão</p>
</details>

</aside>

<main>

<section>

<figure>
<img src="capa.jpg" alt="Livro">
<figcaption>Livro Principal</figcaption>
</figure>

<article>

<h2>Capítulo 1</h2>

<p>
Era uma vez uma biblioteca digital extremamente avançada.
O leitor podia navegar entre capítulos, marcar trechos com
<mark>destaques personalizados</mark> e acessar conteúdos
interativos.
</p>

<br>

<p>
Todo o layout foi construído usando apenas elementos
semânticos do HTML5, sem nenhuma tag DIV.
</p>

</article>

</section>

<section>

<article>

<h2>Capítulo 2</h2>

<p>
O sistema utiliza CSS Grid, Flexbox, temas escuros,
rolagem personalizada, animações e estrutura modular.
</p>

</article>

</section>

</main>

<footer>
<p>© 2025 Biblioteca Digital Premium</p>
</footer>

</body>
</html>
