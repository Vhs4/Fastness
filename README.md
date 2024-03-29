## MID - ORACLE - FIAP

Projeto de criação de rede social corporativa para marcar reuniões entre pessoas executivas
que não se conhecem, projeto criado durante o MID da Oracle com a FIAP.

Líder da equipe (B2B e Head de tecnologias): Victor Hugo

Front-end: Victor Hugo e Letícia Zago

Back-end: Victor Hugo e Neto

UX/UI: Matheus e Goularti

Marketing: Victor Hugo e Letícia Zago

## Instruções gerais da organização das pastas

`assets`: Serve para armazenar imagens (imagens leves, se forem pesadas sempre prefira hospedar em uma CDN), ícones, etc.

`components`: Componentes reutilizáveis da aplicação. Componentes que são unidades para sua aplicação, um button, um dropdown, um modal, etc.

`hooks`: Essa pasta é utilizada para armazenar hooks que são genéricos, tem interação com hooks do React (useState, useEffect) e normalmente reutilizáveis e qualquer projeto, exemplos: useScreenSize, useLocalStorage, useSessionStorage, useUserActive.

`pages`: As pages são as páginas que usam vários componentes. É essa a página que o usuário vai ver.

`services`: Aqui ficam as configurações de HTTP clientes, normalmente utilizando axios.

`store`: Ficam as definições de state managers, context api, zustand, redux.

`types`: Armazena as tipagens de typescript (types e interfaces) que são comuns em várias áreas do projeto.

`utils`: Funções utilitárias como formatCurrency, formatPhone, convertTimezone, parsePhone (javascript puro).