# Checklist Play Console — Alinhar

Revisão: 05/10/2026. Use como checklist de implementação; as políticas oficiais prevalecem em caso de conflito.

## 1. Identidade e conta de desenvolvedor

- [ ] Nome legal, endereço, e-mail e telefone da conta estão corretos e verificáveis.
- [ ] Se a conta for de organização, dados e D-U-N-S estão coerentes.
- [ ] Como o Alinhar possui função/dados relacionados à saúde, confirmar se a conta está configurada como **Organização** conforme requisito atual da Play Console.
- [ ] Pacote registrado e coerente com o app publicado: `com.wellnessapp_unimes`.

## 2. Política de Privacidade

- [ ] URL pública, ativa, sem login, não geobloqueada, em HTML (não PDF).
- [ ] Link inserido na Play Console.
- [ ] Link/texto acessível dentro do app.
- [ ] App/desenvolvedor identificado na política.
- [ ] Ponto de contato de privacidade real.
- [ ] Tipos de dados pessoais e sensíveis descritos.
- [ ] Finalidades descritas.
- [ ] Prestadores/terceiros e compartilhamentos descritos.
- [ ] Segurança descrita.
- [ ] Retenção e exclusão descritas.
- [ ] Política coerente com a seção “Segurança dos dados”.

## 3. Mapa de dados para revisar no formulário “Segurança dos dados”

Com base nas funcionalidades conhecidas do projeto, revise pelo menos:

- **Informações pessoais:** nome, e-mail, ID de usuário.
- **Saúde e fitness / informações de saúde:** intensidade de dor antes/depois e registros associados.
- **Conteúdo gerado pelo usuário:** observações opcionais.
- **Atividade do app/configurações:** agendas, lembretes, avaliações e registros de atividade, conforme a classificação oferecida pelo formulário.
- **Dados técnicos:** somente o que realmente for coletado/transmitido pelo app e pelos SDKs.

Não marque “não coletado” apenas porque o dado fica em Firebase ou é tratado por um prestador. Revise a definição atual de “coleta” e as exceções de “compartilhamento” da Play Console.

## 4. Exclusão de conta

Se há criação de conta:

- [ ] Caminho visível dentro do app para excluir/solicitar exclusão.
- [ ] URL externa pública: `exclusao-de-conta.html`.
- [ ] Usuário consegue iniciar a solicitação sem reinstalar o app.
- [ ] Página cita “Alinhar” claramente.
- [ ] Página informa quais dados são apagados e quais podem ser retidos legitimamente.
- [ ] Processo não exige senha por e-mail.
- [ ] Dados associados são realmente removidos; “desativar” ou “congelar” não basta.
- [ ] Quando aplicável, exclusão propagada aos prestadores de serviço.

## 5. Saúde

- [ ] Preencher **Declaração de apps de saúde** em Conteúdo do app.
- [ ] Política de Privacidade descreve dados de saúde e tratamento.
- [ ] Solicitar somente permissões necessárias.
- [ ] Se houver coleta sensível inesperada/segundo plano, usar divulgação em destaque no app antes da coleta/permissão e consentimento afirmativo quando exigido.
- [ ] Não prometer diagnóstico, cura ou resultado clínico não comprovado.
- [ ] Manter aviso de que o app não substitui profissional/urgência quando apropriado.
- [ ] Se for pesquisa em seres humanos: manter consentimento informado e aprovação ética/CEP/IRB aplicável; guardar comprovação caso solicitada.

## 6. Notificações e alarmes exatos

- [ ] `SCHEDULE_EXACT_ALARM` é realmente necessário à função principal.
- [ ] O app verifica se o usuário concedeu a permissão antes de depender de alarme exato.
- [ ] Existe comportamento degradado/gracioso se a permissão for negada.
- [ ] Explicação ao usuário é coerente com o uso real.
- [ ] Notificações não são apresentadas como mecanismo garantido para emergências.

## 7. API alvo — ponto crítico em outubro/2026

- [ ] Atualizações de apps móveis submetidas após 31/08/2026 miram **Android 16 / API 36+**, salvo extensão válida até 01/11/2026.
- [ ] Confirmar `targetSdk` do AAB final antes do upload.

## 8. Revisão do app pelo Google

- [ ] Metadados da ficha correspondem ao funcionamento real.
- [ ] Conta de demonstração ativa, se o app exigir login.
- [ ] Instruções de acesso e passos de teste claros.
- [ ] Dados de teste não expiram durante a revisão.
- [ ] Todas as telas principais funcionam sem crash.
- [ ] URLs de privacidade/suporte/exclusão carregam em janela anônima.

## Referências oficiais consultadas

- Requisitos da Play Console: https://support.google.com/googleplay/android-developer/answer/10788890
- Dados do usuário / Privacidade / Segurança dos dados / Exclusão: https://support.google.com/googleplay/android-developer/answer/10144311
- Exclusão de conta: https://support.google.com/googleplay/android-developer/answer/13327111
- Apps de saúde: https://support.google.com/googleplay/android-developer/answer/16679511
- Declaração de apps de saúde: https://support.google.com/googleplay/android-developer/answer/14738291
- API alvo: https://support.google.com/googleplay/android-developer/answer/11926878
- Alarmes exatos Android 14+: https://developer.android.com/about/versions/14/changes/schedule-exact-alarms
- Direitos do titular — ANPD: https://www.gov.br/anpd/pt-br/assuntos/titular-de-dados-1/direito-dos-titulares
