# Primeiro App com React Native

## Setup do projeto

Crie o projeto digitando: 
```bash
    npx create-expo-app --template blank first_app
```

```bash
    cd first_app
```

Para começar a testar o projeto utilize seu celular, baixe o aplicativo Expo na sua loja de aplicativos e dê o seguinte comando no terminal:

```bash
    npm start
```

Um Qr será exposto no seu terminal e você poderá acessar o app que está criando pelo celular.
Para utilizar no Android Studio basta seguir as informações do terminal.

## Componentes

**View:** O componente fundamental para construir a interface do usuário. Atua como um container que agrupa outros componentes, similar a uma `<div>` na web. Permite definir estilos, layout e lidar com eventos.

**Button:** Um componente de botão interativo que responde a toques. Amplamente utilizado para iniciar ações ou navegação dentro do aplicativo.

**Pressable:** Um componente mais avançado para lidar com toques, oferecendo maior flexibilidade e personalização em comparação ao Button. Permite detectar diferentes tipos de eventos de toque e aplicar estilos de feedback visual.

**FlatList:** Um componente eficiente para renderizar listas longas de dados. Otimizado para exibir grandes conjuntos de informações de forma performática, reciclando os itens da lista que não estão visíveis na tela.

**StyleSheet:** Uma ferramenta para criar e gerenciar estilos de forma organizada e reutilizável. Permite definir estilos para os componentes e aplicá-los de forma consistente em todo o aplicativo.

**TextInput:** Um componente para entrada de texto do usuário. Utilizado em formulários e campos de pesquisa, permitindo que o usuário digite informações.

**Modal:** Um componente para exibir conteúdo em uma janela sobreposta ao restante do aplicativo. Ideal para exibir informações importantes, alertas ou formulários que exigem a atenção do usuário.

**Image:** Um componente para exibir imagens. Permite carregar imagens de fontes locais ou remotas, além de oferecer opções para redimensionamento e formatação.

**Em resumo:**

*   **View:** O alicerce da interface, agrupando outros componentes.
*   **Button:** Botões simples para ações básicas.
*   **Pressable:** Botões avançados com mais controle sobre os eventos de toque.
*   **FlatList:** Listas eficientes para grandes conjuntos de dados.
*   **StyleSheet:** Estilos organizados e reutilizáveis.
*   **TextInput:** Entrada de texto do usuário.
*   **Modal:** Janelas sobrepostas para informações importantes.
*   **Image:** Exibição de imagens.

Esses componentes são essenciais para construir interfaces de usuário completas e interativas em React Native. Ao combiná-los e personalizá-los, você pode criar aplicativos para dispositivos móveis.