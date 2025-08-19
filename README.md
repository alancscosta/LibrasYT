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

### 3️⃣ Execute em um servidor web local (recomendado)

Você pode abrir o arquivo `index.html` diretamente, mas **o ideal é rodar o projeto em um servidor local para garantir o funcionamento correto dos scripts e do carregamento dos arquivos**.

#### 🔸 Recomendação: XAMPP

- Baixe e instale o [XAMPP](https://www.apachefriends.org/index.html) (disponível para Windows, Linux e Mac).
- Após instalar, mova a pasta do projeto para dentro do diretório `htdocs` do XAMPP. Exemplo:
  ```
  C:\xampp\htdocs\LibrasYT-Website
  ```
- Inicie o servidor Apache pelo painel do XAMPP.
- No navegador, acesse:
  ```
  http://localhost/LibrasYT-Website
  ```

#### Alternativa: Python (para usuários avançados)
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
