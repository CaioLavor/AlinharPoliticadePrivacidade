# Site legal do Alinhar

Site estático em HTML/CSS/JS, pronto para GitHub Pages. Não há build, servidor, banco ou serviço pago.

## Antes de publicar — obrigatório

Faça uma busca em todos os arquivos `.html` e substitua:

- `NOME LEGAL DO CONTROLADOR` → nome legal da instituição/pessoa responsável pelo tratamento de dados e coerente com a identidade exibida na Play Store.
- `EMAIL DE PRIVACIDADE` → e-mail real e monitorado para LGPD e exclusão de conta.
- `EMAIL DE SUPORTE` → e-mail real e monitorado para suporte. Pode ser o mesmo de privacidade, se apropriado.

Não publique o site com esses marcadores.

## Arquivos públicos

- `index.html` — página inicial.
- `politica-privacidade.html` — URL para o campo “Política de Privacidade” da Play Console.
- `termos-de-uso.html` — termos do aplicativo.
- `exclusao-de-conta.html` — URL para o campo de exclusão de conta/dados da Play Console.
- `suporte.html` — suporte.
- `assets/` — estilo, script e marca.

## Publicar gratuitamente no GitHub Pages

1. Crie um repositório público, por exemplo `alinhar-legal`.
2. Envie **o conteúdo desta pasta** para a raiz do repositório.
3. No GitHub: `Settings` → `Pages`.
4. Em `Build and deployment`, escolha `Deploy from a branch`.
5. Selecione `main` e pasta `/ (root)`.
6. Salve e aguarde a publicação.
7. Teste as URLs em janela anônima e em celular.

Exemplo de estrutura de URL depois de publicar:

- `https://SEU-USUARIO.github.io/alinhar-legal/politica-privacidade.html`
- `https://SEU-USUARIO.github.io/alinhar-legal/exclusao-de-conta.html`

## Importante para a Google Play

O site resolve a parte **pública/web**, mas não substitui requisitos dentro do aplicativo e da Play Console.

- A Política de Privacidade precisa estar também acessível dentro do app.
- Se o app permite criar conta, deve existir um caminho facilmente identificável **dentro do app** para iniciar a exclusão ou abrir diretamente o recurso web de exclusão.
- A seção **Segurança dos dados** precisa refletir exatamente o que o app e seus SDKs coletam, usam e compartilham.
- Como o Alinhar trata registros de intensidade de dor e observações relacionadas a atividades, ele deve ser tratado com cautela como app com conteúdo/dados de saúde.
- Apps de saúde devem preencher a declaração de apps de saúde no Play Console; se houver pesquisa em seres humanos, verifique também consentimento e aprovação ética aplicáveis.
- A página de requisitos fornecida pelo projeto informa que apps de saúde devem usar conta de desenvolvedor do tipo organização; confira o tipo da conta da Play Console.

## Checklist técnico atual — outubro de 2026

A partir de 31/08/2026, uma **atualização** de app móvel enviada ao Google Play precisa mirar Android 16 / API 36 ou superior, salvo extensão aplicável até 01/11/2026. Antes de gerar o AAB definitivo, confirme o `targetSdkVersion`/`targetSdk` efetivo.

Veja também `CHECKLIST-PLAY-CONSOLE.md`.
