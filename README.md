# Módulo path do Node.js

O módulo path, fornece utilitários para trabalhar com caminhos de arquivos e diretórios.

Faz parte do núcleo do Node.js, sendo necessário apenas importar e usar:

<pre class="pre"><pre class="prism-code language-javascript pre" p="3"><div class="token-line"><span class="token keyword">const</span><span class="token plain"> path </span><span class="token operator">=</span><span class="token plain"></span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token plain"></span></div></pre></pre>

O `path.sep` desse módulo, provê o caracter separador de segmento de caminho (`\` no Windows, e `/` no Linux / macOS), e o `path.delimiter` que provê o caracter delimitador de caminho (`;` no Windows, e `:` no Linux / macOS).

Os métodos do módulo `path` são:

### path.basename()

Retorna a última parte de um caminho. Um segundo parâmetro pode filtrar a extensão do arquivo:

<pre class="pre"><pre class="prism-code language-javascript pre" p="3"><div class="token-line"><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">basename</span><span class="token punctuation">(</span><span class="token string">'/test/something'</span><span class="token punctuation">)</span><span class="token plain"></span><span class="token comment">// something</span><span class="token plain"></span></div><div class="token-line"><span class="token plain"></span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">basename</span><span class="token punctuation">(</span><span class="token string">'/test/something.txt'</span><span class="token punctuation">)</span><span class="token plain"></span><span class="token comment">// something.txt</span><span class="token plain"></span></div><div class="token-line"><span class="token plain"></span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">basename</span><span class="token punctuation">(</span><span class="token string">'/test/something.txt'</span><span class="token punctuation">,</span><span class="token plain"></span><span class="token string">'.txt'</span><span class="token punctuation">)</span><span class="token plain"></span><span class="token comment">// something</span><span class="token plain"></span></div></pre></pre>

### path.dirname()

Retorna a parte do diretório de um caminho:

<pre class="pre"><pre class="prism-code language-javascript pre" p="3"><div class="token-line"><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">dirname</span><span class="token punctuation">(</span><span class="token string">'/test/something'</span><span class="token punctuation">)</span><span class="token plain"></span><span class="token comment">// /test</span><span class="token plain"></span></div><div class="token-line"><span class="token plain"></span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">dirname</span><span class="token punctuation">(</span><span class="token string">'/test/something/file.txt'</span><span class="token punctuation">)</span><span class="token plain"></span><span class="token comment">// /test/something</span><span class="token plain"></span></div></pre></pre>

### path.extname()

Retorna a parte da extensão de um caminho

<pre class="pre"><pre class="prism-code language-javascript pre" p="3"><div class="token-line"><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">extname</span><span class="token punctuation">(</span><span class="token string">'/test/something'</span><span class="token punctuation">)</span><span class="token plain"></span><span class="token comment">// ''</span><span class="token plain"></span></div><div class="token-line"><span class="token plain"></span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">extname</span><span class="token punctuation">(</span><span class="token string">'/test/something/file.txt'</span><span class="token punctuation">)</span><span class="token plain"></span><span class="token comment">// '.txt'</span><span class="token plain"></span></div></pre></pre>

### path.isAbsolute()

Retorna true se o caminho for absoluto

<pre class="pre"><pre class="prism-code language-javascript pre" p="3"><div class="token-line"><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">isAbsolute</span><span class="token punctuation">(</span><span class="token string">'/test/something'</span><span class="token punctuation">)</span><span class="token plain"></span><span class="token comment">// true</span><span class="token plain"></span></div><div class="token-line"><span class="token plain"></span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">isAbsolute</span><span class="token punctuation">(</span><span class="token string">'./test/something'</span><span class="token punctuation">)</span><span class="token plain"></span><span class="token comment">// false</span><span class="token plain"></span></div></pre></pre>

### path.join()

Junta duas ou mais partes de um caminho:

<pre class="pre"><pre class="prism-code language-javascript pre" p="3"><div class="token-line"><span class="token keyword">const</span><span class="token plain"> name </span><span class="token operator">=</span><span class="token plain"></span><span class="token string">'pauloluan'</span><span class="token plain"></span></div><div class="token-line"><span class="token plain"></span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">join</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">,</span><span class="token plain"></span><span class="token string">'users'</span><span class="token punctuation">,</span><span class="token plain"> name</span><span class="token punctuation">,</span><span class="token plain"></span><span class="token string">'notes.txt'</span><span class="token punctuation">)</span><span class="token plain"></span><span class="token comment">// '/users/pauloluan/notes.txt'</span><span class="token plain"></span></div></pre></pre>

### path.normalize()

Tenta calcular o caminho correto quando ele contêm especificadores relativos como `.` ou `..`, ou barras duplas:

<pre class="pre"><pre class="prism-code language-javascript pre" p="3"><div class="token-line"><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">normalize</span><span class="token punctuation">(</span><span class="token string">'/users/pauloluan/..//test.txt'</span><span class="token punctuation">)</span><span class="token plain"></span><span class="token comment">// '/users/test.txt'</span><span class="token plain"></span></div></pre></pre>

### path.parse()

Cria um objeto contendo os segmentos que compões o caminho fornecido:

* `root`: a raiz
* `dir`: o caminho da pasta a partir da raiz
* `base`: o nome do arquivo + extensão
* `name`: o nome do arquivo
* `ext`: a extensão do arquivo

Exemplo:

<pre class="pre"><pre class="prism-code language-javascript pre" p="3"><div class="token-line"><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">parse</span><span class="token punctuation">(</span><span class="token string">'/users/test.txt'</span><span class="token punctuation">)</span><span class="token plain"></span></div></pre></pre>

resulta em

<pre class="pre"><pre class="prism-code language-javascript pre" p="3"><div class="token-line"><span class="token punctuation">{</span><span class="token plain"></span></div><div class="token-line"><span class="token plain">  root</span><span class="token punctuation">:</span><span class="token plain"></span><span class="token string">'/'</span><span class="token punctuation">,</span><span class="token plain"></span></div><div class="token-line"><span class="token plain">  dir</span><span class="token punctuation">:</span><span class="token plain"></span><span class="token string">'/users'</span><span class="token punctuation">,</span><span class="token plain"></span></div><div class="token-line"><span class="token plain">  base</span><span class="token punctuation">:</span><span class="token plain"></span><span class="token string">'test.txt'</span><span class="token punctuation">,</span><span class="token plain"></span></div><div class="token-line"><span class="token plain">  ext</span><span class="token punctuation">:</span><span class="token plain"></span><span class="token string">'.txt'</span><span class="token punctuation">,</span><span class="token plain"></span></div><div class="token-line"><span class="token plain">  name</span><span class="token punctuation">:</span><span class="token plain"></span><span class="token string">'test'</span><span class="token plain"></span></div><div class="token-line"><span class="token plain"></span><span class="token punctuation">}</span><span class="token plain"></span></div></pre></pre>

### path.relative()

Aceita 2 caminhos como argumentos. Retorna o caminho relativo do primeiro para o segundo, baseando-se no diretório atual.

Exemplo:

<pre class="pre"><pre class="prism-code language-javascript pre" p="3"><div class="token-line"><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">relative</span><span class="token punctuation">(</span><span class="token string">'/Users/pauloluan'</span><span class="token punctuation">,</span><span class="token plain"></span><span class="token string">'/Users/pauloluan/test.txt'</span><span class="token punctuation">)</span><span class="token plain"></span><span class="token comment">// 'test.txt'</span><span class="token plain"></span></div><div class="token-line"><span class="token plain"></span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">relative</span><span class="token punctuation">(</span><span class="token string">'/Users/pauloluan'</span><span class="token punctuation">,</span><span class="token plain"></span><span class="token string">'/Users/pauloluan/something/test.txt'</span><span class="token punctuation">)</span><span class="token plain"></span><span class="token comment">// 'something/test.txt'</span><span class="token plain"></span></div></pre></pre>

### path.resolve()

Você pode obter o cálculo do caminho absoluto de um caminho relativo usando `path.resolve()`:

<pre class="pre"><pre class="prism-code language-javascript pre" p="3"><div class="token-line"><span class="token plain">path</span><span class="token punctuation">.</span><span class="token method function property-access">resolve</span><span class="token punctuation">(</span><span class="token string">'pauloluan.txt'</span><span class="token punctuation">)</span><span class="token plain"></span><span class="token comment">// '/Users/pauloluan/pauloluan.txt' se rodar da minha home</span><span class="token plain"></span></div></pre></pre>

Ao especificar um segundo parâmetro, o `resolve` vai usar o primeiro como base para o segundo:

<pre class="pre"><pre class="prism-code language-javascript pre" p="3"><div class="token-line"><span class="token plain">path</span><span class="token punctuation">.</span><span class="token method function property-access">resolve</span><span class="token punctuation">(</span><span class="token string">'tmp'</span><span class="token punctuation">,</span><span class="token plain"></span><span class="token string">'pauloluan.txt'</span><span class="token punctuation">)</span><span class="token plain"></span><span class="token comment">// '/Users/pauloluan/tmp/pauloluan.txt' se rodar da minha home</span><span class="token plain"></span></div></pre></pre>

Se o primeiro parâmetro começar com uma barra, isso significa que é um caminho absoluto:

<pre class="pre"><pre class="prism-code language-javascript pre" p="3"><div class="token-line"><span class="token plain">path</span><span class="token punctuation">.</span><span class="token method function property-access">resolve</span><span class="token punctuation">(</span><span class="token string">'/etc'</span><span class="token punctuation">,</span><span class="token plain"></span><span class="token string">'pauloluan.txt'</span><span class="token punctuation">)</span><span class="token plain"></span><span class="token comment">// '/etc/pauloluan.txt'</span></div></pre></pre>


## Como usar

Desenvolvido para prover agilidade no desenvolvimento de código Typescript / NodeJs.

Os passos de uso são clonar o projeto e instalar as dependências:

```javascript
  // Install
    npm i

  // Run Dev
    npm run start:dev

  // Run Build
    npm run build

  // Run Prod
    npm run start

  // Run Prettier
    npm run prettier

  // Run Eslint
    npm run eslint

  // Run Jest ( test )
    npm run test

  // Run Jest ( test CI )
    npm run test:ci
```

---

<h2>
  Conteúdo do repositório:
</h2>
<ul>
  <li>Typescript com NodeJS</li>
  <li>Prettier</li>
  <li>Eslint</li>
  <li>Jest</li>
</ul>

---

<h2>
  Typescript com NodeJS
</h2>
<p>Iniciando uma aplicação NodeJs utilizando Typescript como base:</p>

```javascript
  // Typescript
  npm i -D typescript @types/node tsx tsup
```

---

<h2>
  Prettier
</h2>
<p>
  O Prettier é uma ferramenta de formatação de código que ajuda a manter a consistência e a legibilidade do código em projetos de desenvolvimento de software. 
</p>

<p>
  Ele é amplamente utilizado em várias linguagens de programação/marcadores, incluindo JavaScript, TypeScript, CSS, HTML, JSON e muito mais.
</p>

```javascript
  // Prettier
  npm i -D prettier
```

---

<h2>
  Eslint
</h2>
<p>
O ESLint é uma ferramenta de análise de código estática amplamente utilizada na comunidade de desenvolvimento de software. 
</p>

<p>
Ele é projetado para ajudar os desenvolvedores a identificar e corrigir problemas de qualidade, erros de sintaxe e padrões de código inconsistentes em projetos JavaScript e TypeScript.
</p>

```javascript
  // Eslint
  npm i -D eslint
  npm i -D eslint-config-prettier eslint-plugin-prettier eslint-plugin-import
  npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

---

<h2>
  Jest
</h2>
<p>
O Jest é um framework de testes de JavaScript amplamente utilizado para testar aplicativos e bibliotecas JavaScript. 
</p>

<p>
Ele foi desenvolvido para ser fácil de configurar e usar, fornecendo uma ampla gama de recursos para escrever testes automatizados.
</p>

```javascript
  // Jest
  npm i -D jest ts-jest @types/jest
  npx ts-jest config:init
```

---

Por ♥ Ricardo Poleto 👋 [Linkedin!](https://www.linkedin.com/in/ricardo-poleto/)
