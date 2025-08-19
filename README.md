# 🌐 LibrasYT WebSite

Bem-vindo ao **LibrasYT WebSite**!

Esta é a versão web do projeto, que reúne todas as informações sobre o LibrasYT e já inclui o **LibrasPlayer** integrado.  
**Diferente da versão em Python**, aqui o player faz a **sincronização da transcrição com o vídeo**, proporcionando uma experiência muito mais completa diretamente no navegador.

---

## 🚀 Como Instalar e Usar

### 1️⃣ Baixe o repositório
- Clique em **Code > Download ZIP** ou clone pelo terminal:
  ```bash
  git clone https://github.com/alancscosta/LibrasYT-Website.git
  ```
- Extraia o conteúdo do ZIP em uma pasta de sua preferência.

### 2️⃣ Descompacte as pastas de imagens
- Dentro do diretório do projeto, devem existir (ou ser adicionados) dois arquivos ZIP:
  - `img.zip` (**imagens gerais do site**)
  - `imagens.zip` (**dicionário de Libras de A até Z**)

Descompacte ambos, mantendo as seguintes estruturas de pastas:
```
LibrasYT-Website/
├── img/         ← imagens gerais do site
└── imagens/     ← dicionário de Libras (A-Z)
```
- Para descompactar, clique com o botão direito sobre cada arquivo ZIP e selecione **Extrair aqui**  
  ou use o terminal:
  ```bash
  unzip img.zip
  unzip imagens.zip
  ```

### 3️⃣ Instale um servidor web local (opcional, recomendado)
- Você pode rodar o site diretamente clicando no arquivo `index.html`,  
  mas para melhor funcionamento (especialmente com arquivos locais e scripts), recomenda-se um servidor local.

Exemplo usando o Python:
```bash
# No diretório do projeto:
python -m http.server 8000
```
Depois, acesse [http://localhost:8000](http://localhost:8000) no navegador.

---

## ✨ Diferenciais desta versão

- Sincronização perfeita entre transcrição e vídeo usando o LibrasPlayer Web.
- Visual moderno e responsivo.
- Consulta ao dicionário de Libras por imagens (A-Z).
- Pronto para melhorias e novas implementações!

---

## ❓ Dúvidas ou Problemas?

Entre em contato: [alancscostabusiness@gmail.com](mailto:alancscostabusiness@gmail.com)

---

### ⭐ Dê uma estrela se gostou do projeto, e contribua com melhorias!
