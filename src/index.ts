// retorna o caminho relativo
console.log(__dirname);

// retorna o caminho absoluto pois retorna até o nome do arquivo em execução
console.log(__filename);

import path from 'node:path';

// path.join() junta os caminhos independente do S.O.
console.log(path.join('diretorio1','diretorio2','diretorio3'))

// path.resolve() retorna o caminho absoluto atual
console.log(path.resolve());
// path.resolve('diretorio1', 'diretorio2') retorna o caminho absoluto atual 
// cacatenado com os diretorio passados como parâmetros
console.log(path.resolve('diretorio1', 'diretorio2'));
// se inseri / no começo do parâmetro retorna o caminho conforme parâmetro
// a partir do diretório raiz onde / é o diretório raiz;
console.log('/home')

// path.dirname('diretorio1/diretorio2/diretorio3') remove o ultimo diretório do caminho
console.log(path.dirname('diretorio1/diretorio2/diretorio3'));
// path.dirname('diretorio1/diretorio2/arquivo.ts') remove o nome do arquivo do caminho
console.log(path.dirname('diretorio1/diretorio2/arquivo.ts'));

// path.basename('diretorio1/diretorio2/diretorio3') retorna o nome do último diretório 'diretorio3'
console.log(path.basename('diretorio1/diretorio2/diretorio3'))
// path.basename('diretorio1/diretorio2/arquivo.ts') retorna o nome do arquivo 'arquivo.ts'
console.log(path.basename('diretorio1/diretorio2/arquivo.ts'))

// pegando somente o nome do diretório do projeto
console.log(path.basename(path.resolve()));

// pegando a extensão de um caminho de arquivo
// path.extname('diretorio1/diretorio2/arquivo.ts')
console.log(path.extname('diretorio1/diretorio2/arquivo.ts'));
