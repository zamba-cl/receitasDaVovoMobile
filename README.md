# 📖 Receitas da Vovó

Aplicativo mobile desenvolvido em React Native com Expo para armazenar e consultar receitas de família de forma simples e organizada.

O objetivo do projeto é digitalizar um antigo caderno de receitas, preservando os modos de preparo originais e facilitando o acesso às receitas por toda a família.

---

## ✨ Funcionalidades

- 📚 Visualização de todas as receitas
- 🍰 Lista de receitas doces
- 🍕 Lista de receitas salgadas
- 🔍 Pesquisa de receitas por nome
- 📝 Visualização detalhada de ingredientes e modo de preparo
- 📖 Interface inspirada em um caderno de receitas
- ↩️ Navegação entre telas com retorno para a página anterior

---

## 📱 Telas

### Todas as Receitas
Exibe todas as receitas cadastradas em ordem alfabética.

### Receitas Doces
Exibe apenas receitas classificadas como doces.

### Receitas Salgadas
Exibe apenas receitas classificadas como salgadas.

### Detalhes da Receita
Mostra:
- Nome da receita
- Lista de ingredientes
- Modo de preparo completo

---

## 🛠️ Tecnologias Utilizadas

- React Native
- Expo
- Expo Router
- TypeScript
- Lucide React Native

---


## 🚀 Como Executar

### Instalar dependências

```bash
npm install
```

### Iniciar o projeto

```bash
npx expo start
```

### Executar no Android

```bash
npx expo start --tunnel
```

Escaneie o QR Code utilizando o aplicativo Expo Go.

---

## 📦 Gerar APK

Após configurar o EAS Build:

```bash
eas build -p android --profile preview
```

O Expo gerará um link para download do APK.

---

## 📊 Base de Dados

As receitas são armazenadas localmente em um arquivo JSON.

Cada receita possui a seguinte estrutura:

```json
{
  "id": 1,
  "nome": "PÃO DE LÓ",
  "categoria": 1,
  "ingredientes": [
    "2 xícaras de açúcar",
    "2 xícaras de farinha"
  ],
  "modoPreparo": "Modo de preparo da receita..."
}
```

### Categorias

| Valor | Categoria |
|---------|-----------|
| 0 | Salgada |
| 1 | Doce |

---

## 🎨 Interface

O design foi inspirado em um caderno de receitas tradicional, utilizando:

- Fundo em tons de papel envelhecido
- Linhas pautadas semelhantes a folhas de caderno
- Margem vermelha lateral
- Tipografia manuscrita

---

## 👨‍💻 Desenvolvido por

**Carol Zambanini**

Uma homenagem para a minha vó Edina, que não esta com a gente em terra mas vai estar pra sempre em nossos corações!

Projeto desenvolvido para preservar e compartilhar receitas de família de forma digital.