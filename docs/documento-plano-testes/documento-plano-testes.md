# Plano de Teste

**Wunjo**

*versão 0.6*

## Histórico das alterações

| Versão | Data | Descrição da Alteração | Nome(s) Integrante(s) |
| :----: | :--: | :--------------------: | :-------------------: |
| 0.5 | 29/01/2025 | Atualizar template | João Farias |
| 0.6 | 10/02/2025 | Atualização das seções 2 e 3 | Willian Silva |

## 1 - Introdução

Este documento descreve os requisitos a testar, os  tipos de testes definidos para cada iteração, os recursos de hardware e software a serem empregados e o cronograma dos testes ao longo do projeto UnBordo. As seções referentes aos requisitos, recursos e cronograma servem para permitir ao gerente do projeto acompanhar a evolução dos testes.

<!-- Com esse documento, você deve:
- Identificar informações de projeto existentes e os componentes de software que devem ser testados.
- Listar os Requisitos a testar.
- Recomendar e descrever as estratégias de teste a serem empregadas.
- Identificar os recursos necessários e prover uma estimativa dos esforços de teste.
- Listar os elementos resultantes do projeto de testes.

Também é possível apresentar aqui o programa que será testado. -->

## 2 - Requisitos a Testar

<!-- Esta seção deve conter os casos de uso e requisitos não funcionais identificados como objetos dos testes ao longo do desenvolvimento do projeto.
Como, em geral, os requisitos a testar são obtidos diretamente dos requisitos do sistema, esta seção é concebida como opcional. Assim sendo, sempre que novos requisitos a testar, que não constem como requisitos do sistema, forem identificados ou, simplesmente, por questões de organização e clareza, esta seção deve ser preenchida.
Dependendo das informações disponíveis, essa seção pode começar a ser preenchida já nas primeiras iterações do ciclo de vida a partir do documento de requisitos.

Caso seja necessário, liste aqui os requisitos a testar subdivididos em casos de uso e requisitos não-funcionais. -->

### Casos de uso:

<!-- Tem que adicionar os casos de uso. -->

<table border="1">
    <thead>
        <tr>
            <th>Nome do Caso de Uso</th>
            <th>Identificador do Caso de Uso</th>
            <th>Passos</th>
            <th>Resultado Esperado</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Fórum de dúvidas</td>
            <td>RQ01</td>
            <td>
                1. Acessar a página inicial<br>
                2. Navegar até a seção do fórum<br>
                3. Verificar se as dúvidas estão sendo exibidas
            </td>
            <td>O sistema deve exibir as dúvidas públicas no fórum</td>
        </tr>
        <tr>
            <td>Chat privado</td>
            <td>RQ02</td>
            <td>
                1. Acessar o fórum de dúvidas<br>
                2. Selecionar uma dúvida<br>
                3. Iniciar um chat privado
            </td>
            <td>O sistema deve permitir que um estudante inicie um chat privado para responder uma dúvida</td>
        </tr>
        <tr>
            <td>Cancelamento de chat pelo tutor</td>
            <td>RQ03</td>
            <td>
                1. Acessar a lista de chats ativos<br>
                2. Selecionar um chat<br>
                3. Clicar em cancelar
            </td>
            <td>O tutor deve conseguir cancelar um chat sem restrições</td>
        </tr>
        <tr>
            <td>Cancelamento de chat pelo aluno</td>
            <td>RQ04</td>
            <td>
                1. Acessar a lista de chats ativos<br>
                2. Selecionar um chat<br>
                3. Clicar em cancelar
            </td>
            <td>O aluno deve conseguir cancelar um chat até 3 vezes por semana</td>
        </tr>
        <tr>
            <td>Chats privados</td>
            <td>RQ05</td>
            <td>
                1. Acessar o sistema<br>
                2. Selecionar um tutor ou aluno para conversar<br>
                3. Iniciar um chat
            </td>
            <td>O sistema deve permitir a troca de mensagens privadas entre alunos e tutores</td>
        </tr>
        <tr>
            <td>Filtro de dúvidas por matéria</td>
            <td>RQ06</td>
            <td>
                1. Acessar a página do fórum<br>
                2. Aplicar o filtro por matéria<br>
            </td>
            <td>O sistema deve exibir apenas as dúvidas da matéria selecionada</td>
        </tr>
        <tr>
            <td>Buscar matérias através do SIGAA</td>
            <td>RQ07</td>
            <td>
                1. Acessar a página de cadastro de dúvidas
            </td>
            <td>O sistema exibe corretamente as matérias disponíveis.</td>
        </tr>
        <tr>
            <td>Marcar dúvida como resolvida</td>
            <td>RQ08</td>
            <td>
                1. Acessar sua dúvida<br>
                2. Clicar na opção "Resolvida"
            </td>
            <td>A dúvida é fechada e marcada como resolvida.</td>
        </tr>
        <tr>
            <td>Cadastro de dúvidas</td>
            <td>RQ09</td>
            <td>
                1. Acessar a página de criação de dúvidas<br>
                2. Informar a matéria e a urgência<br>
                3. Confirmar o cadastro
            </td>
            <td>A dúvida é cadastrada com sucesso.</td>
        </tr>
        <tr>
            <td>Indicação da dificuldade da dúvida</td>
            <td>RQ10</td>
            <td>
                1. Acessar a página de criação de dúvidas<br>
                2. Informar a dificuldade da dúvida<br>
                3. Confirmar o cadastro
            </td>
            <td>A dúvida é cadastrada com a dificuldade selecionada.</td>
        </tr>
        <tr>
            <td>Cadastro de dúvida em texto e/ou foto</td>
            <td>RQ11</td>
            <td>
                1. Acessar a página de criação de dúvidas<br>
                2. Inserir um texto e/ou uma imagem<br>
                3. Confirmar o cadastro
            </td>
            <td>A dúvida é cadastrada com o conteúdo adequado.</td>
        </tr>
        <tr>
            <td>Filtragem de dúvidas por urgência</td>
            <td>RQ12</td>
            <td>
                1. Acessar o fórum de dúvidas<br>
                2. Selecionar um filtro de urgência
            </td>
            <td>O sistema exibe as dúvidas filtradas corretamente.</td>
        </tr>
        <tr>
            <td>Avaliação do tutor</td>
            <td>RQ13</td>
            <td>
                1. Entender a resposta<br>
                2. Avaliar o tutor
            </td>
            <td>A dúvida é fechada após a avaliação.</td>
        </tr>
        <tr>
            <td>Denúncia de usuários</td>
            <td>RQ14</td>
            <td>
                1. Acessar o perfil de outro usuário<br>
                2. Selecionar a opção de denúncia<br>
                3. Preencher o motivo e confirmar
            </td>
            <td>A denúncia é registrada no sistema.</td>
        </tr>
        <tr>
            <td>Gamificação do sistema</td>
            <td>RQ15</td>
            <td>
                1. Responder perguntas e recebe feedbacks<br>
                2. Receber feedbacks
            </td>
            <td>O usuário recebe incentivos através da gamificação.</td>
        </tr>
        <tr>
            <td>Ranking dos alunos</td>
            <td>RQ16</td>
            <td>
                1. Gerar um ranking com base na pontuação
            </td>
            <td>Os alunos são classificados no ranking.</td>
        </tr>
        <tr>
            <td>Participação opcional no ranking</td>
            <td>RQ17</td>
            <td>
                1. Acessar as configurações<br>
                2. Optar por participar do ranking
            </td>
            <td>O usuário define sua participação no ranking.</td>
        </tr>
        <tr>
            <td>Suspensão temporária de tutores</td>
            <td>RQ18</td>
            <td>
                1. Verificar avaliações negativas<br>
                2. Suspender o tutor temporariamente
            </td>
            <td>O tutor é suspenso por 3 dias.</td>
        </tr>
       <tr>
            <td>Cadastro de usuário</td>
            <td>RQ19</td>
            <td>
                1. Acessar a página de cadastro<br>
                2. Preencher nome, matrícula e curso<br>
                3. Confirmar o cadastro
            </td>
            <td>O usuário é cadastrado no sistema.</td>
        </tr>
        <tr>
            <td>Aumento de pontos por dificuldade</td>
            <td>RQ20</td>
            <td>
                1. Cadastrar uma dúvida<br>
                2. Selecionar a dificuldade
            </td>
            <td>O sistema atribui à dúvida um valor de pontos de acordo com a dificuldade.</td>
        </tr>
        <tr>
            <td>Recompensa de tutores</td>
            <td>RQ21</td>
            <td>
                1. Responder dúvidas de usuários<br>
            </td>
            <td>O tutor recebe recompensas baseadas em seu desempenho através do sistema.</td>
        </tr>
        <tr>
            <td>Redução de média de avaliação</td>
            <td>RQ22</td>
            <td>
                1. Avaliar o tutor após o atendimento
            </td>
            <td>O sistema ajusta a média do tutor e é recalculada conforme as avaliações recebidas.</td>
        </tr>
        <tr>
            <td>Notificação de denúncia</td>
            <td>RQ23</td>
            <td>
                1. Denunciar um usuário por comportamento impróprio
            </td>
            <td>O usuário denunciado recebe um aviso por e-mail sobre a denúncia.</td>
        </tr>
        <tr>
            <td>Exclusão de Conta</td>
            <td>RQ24</td>
            <td>
                1. Acessar as configurações de conta<br>
                2. Solicitar a exclusão da conta
            </td>
            <td>A conta do usuário é desativada no sistema por meio de um soft delete.</td>
        </tr>
        <tr>
            <td>Chat privado com tutores</td>
            <td>RQ25</td>
            <td>
                1. Iniciar uma conversa com um tutor
            </td>
            <td>O histórico de chat é salvo pelo sistema e pode ser acessado posteriormente.</td>
        </tr>
        <tr>
            <td>Página de perfil do usuário</td>
            <td>RQ26</td>
            <td>
                1. Acessar a página de perfil<br>
            </td>
            <td>O usuário pode visualizar seu progresso e feedbacks.</td>
        </tr>
        <tr>
            <td>Notificação de resposta</td>
            <td>RQ27</td>
            <td>
                1. Responder a dúvida de um aluno
            </td>
            <td>O aluno recebe um alerta do sistema sobre a resposta recebida.</td>
        </tr>
        <tr>
            <td>Edição de perfil</td>
            <td>RQ28</td>
            <td>
                1. Acessar as configurações de perfil<br>
                2. Editar suas informações
            </td>
            <td>As informações do usuário são atualizadas no sistema.</td>
        </tr>
        <tr>
            <td>Exibição de ranking de tutores</td>
            <td>RQ29</td>
            <td>
                1. Exibir o ranking dos tutores
            </td>
            <td>Os usuários podem visualizar o desempenho dos tutores.</td>
        </tr>
        <tr>
            <td>Validação de matrícula</td>
            <td>RQ30</td>
            <td>
                1. Inserir sua matrícula no cadastro
            </td>
            <td> O sistema envia um e-mail institucional para validação</td>
        </tr>
        <tr>
            <td>Temporadas do ranking</td>
            <td>RQ31</td>
            <td>
                1. Iniciar uma nova temporada
            </td>
            <td>O ranking dos alunos e tutores é reiniciado a cada nova temporada.</td>
        </tr>
        <tr>
            <td>Recuperação de senha</td>
            <td>RQ32</td>
            <td>
                1. Acessar a opção "Esqueci minha senha"<br>
                2. Informar seu e-mail cadastrado<br>
                3. Acessar o link de recuperação<br>
                4. Definir uma nova senha.
            </td>
            <td>O usuário redefine sua senha com sucesso.</td>
        </tr>
        <tr>
            <td>Visualização de perfil</td>
            <td>RQ33</td>
            <td>
                1. Acessar o ranking ou o chat privado.<br>
                2. Selecionar outro usuário para visualizar o perfil.
            </td>
            <td>O usuário consegue visualizar o perfil de outro usuário.</td>
        </tr>
    </tbody>
</table>


<!-- Tem que adicionar os casos de uso. -->

## 3 - Tipos de teste

<!-- Esta seção deve conter os tipos de testes escolhidos para cada iteração do projeto.
Pode-se definir inicialmente apenas os tipos de testes que serão usadas na próxima iteração, mas é possível também já registrar eventuais tipos de teste que se espera utilizar nas demais iterações. 
Com base no guia de testes, indique os tipos de testes que melhor se adéquam aos requisitos, tipo da aplicação e seus recursos disponíveis e, caso necessário complemente ou forneça mais detalhes da técnica e dos critérios de completude sugeridos no guia para cada tipo de teste indicado. -->

### 3.1 - Testes unitários

Para testes unitários.
São responsáveis por verificar a menor unidade testável do sistema, como as funções e interfaces. Dessa forma, é testado se cada componente individual do código funciona isoladamente.

<br/>
<table>
    <tr>
        <th>
            Objetivo
        </th>
        <th colspan="4">
            Verificar se o sistema é capaz de suportar a carga de usuários simultâneos.
        </th>
    </tr>
    <tr>
        <th>
            Técnica:
        </th>
        <th colspan="2">
            (x) manual
        </th>
        <th colspan="2">
            ( ) automática
        </th>
    </tr>
    <tr>
        <th>
            Estágio do teste
        </th>
        <th>
            Integração ( )
        </th>
        <th>
            Sistema (x)
        </th>
        <th>
            Unidade ( )
        </th>
        <th>
            Aceitação ( )
        </th>
    </tr>
    <tr>
        <th>
            Abordagem do teste
        </th>
        <th colspan="2">
            Caixa branca (x)
        </th>
        <th colspan="2">
            Caixa preta ( )
        </th>
    </tr>
    <tr>
        <th>
            Responsável(is)
        </th>
        <th colspan="4">
            Backend
        </th>
    </tr>
</table>
<br/>

### 3.2 - Testes funcionais

Para testes funcionais.
Possuem a responsabilidade de verificar se o sistema atende aos requisitos especificados. Esses testes consideram a interação entre diferentes componentes do sistema por intermédio de suas integrações.

<br/>
<table>
    <tr>
        <th>
            Objetivo
        </th>
        <th colspan="4">
            Verificar se o sistema é capaz de suportar a carga de usuários simultâneos.
        </th>
    </tr>
    <tr>
        <th>
            Técnica:
        </th>
        <th colspan="2">
            (x) manual
        </th>
        <th colspan="2">
            ( ) automática
        </th>
    </tr>
    <tr>
        <th>
            Estágio do teste
        </th>
        <th>
            Integração ( )
        </th>
        <th>
            Sistema (x)
        </th>
        <th>
            Unidade ( )
        </th>
        <th>
            Aceitação ( )
        </th>
    </tr>
    <tr>
        <th>
            Abordagem do teste
        </th>
        <th colspan="2">
            Caixa branca (x)
        </th>
        <th colspan="2">
            Caixa preta ( )
        </th>
    </tr>
    <tr>
        <th>
            Responsável(is)
        </th>
        <th colspan="4">
            Backend
        </th>
    </tr>
</table>
<br/>

### 3.3 - Testes de carga

Para teste de carga.
Deve-se avaliar a capacidade do sistema em lidar com um número crescente de usuários ou operações simultâneas. Ademais, é importante identificar o ponto em que o desempenho começa a degradar, por meio do tempo de resposta, uso de recursos e de vfalhas em potencial.

<br/>
<table>
    <tr>
        <th>
            Objetivo
        </th>
        <th colspan="4">
            Verificar se o sistema é capaz de suportar a carga de usuários simultâneos.
        </th>
    </tr>
    <tr>
        <th>
            Técnica:
        </th>
        <th colspan="2">
            (x) manual
        </th>
        <th colspan="2">
            ( ) automática
        </th>
    </tr>
    <tr>
        <th>
            Estágio do teste
        </th>
        <th>
            Integração ( )
        </th>
        <th>
            Sistema (x)
        </th>
        <th>
            Unidade ( )
        </th>
        <th>
            Aceitação ( )
        </th>
    </tr>
    <tr>
        <th>
            Abordagem do teste
        </th>
        <th colspan="2">
            Caixa branca (x)
        </th>
        <th colspan="2">
            Caixa preta ( )
        </th>
    </tr>
    <tr>
        <th>
            Responsável(is)
        </th>
        <th colspan="4">
            Backend
        </th>
    </tr>
</table>
<br/>

### 3.4 - Teste de segurança e controle de acesso

Para teste de integridade de dados e do banco de dados.
Aqui deve-se verificar se os dados não se perdem ao desligar o programa. Se o programa consegue se recuperar em caso de falha ou fechamento repentino.
Se possível usar teste automatizado.

<br/>
<table>
    <tr>
        <th>
            Objetivo
        </th>
        <th colspan="4">
            Verificar se dados são mantidos após súbito desligamento do programa .
        </th>
    </tr>
    <tr>
        <th>
            Técnica:
        </th>
        <th colspan="2">
            (x) manual
        </th>
        <th colspan="2">
            (x) automática
        </th>
    </tr>
    <tr>
        <th>
            Estágio do teste
        </th>
        <th>
            Integração ( )
        </th>
        <th>
            Sistema (x)
        </th>
        <th>
            Unidade ( )
        </th>
        <th>
            Aceitação ( )
        </th>
    </tr>
    <tr>
        <th>
            Abordagem do teste
        </th>
        <th colspan="2">
            Caixa branca ( )
        </th>
        <th colspan="2">
            Caixa preta (x)
        </th>
    </tr>
    <tr>
        <th>
            Responsável(is)
        </th>
        <th colspan="4">
            Programador(es) ou equipe de testes
        </th>
    </tr>
</table>
<br/>

### 3.5 - Teste de instalação

Para teste de instalação.
É verificado se o software pode ser corretamente instalado, configurado e executado no ambiente de destino. Além disso, é avaliado se todas as dependências são satisfeitas, se houve a alocação correta dos arquivose e se o sistema inicia sem erros após a instalação.

<br/>
<table>
    <tr>
        <th>
            Objetivo
        </th>
        <th colspan="4">
            descreva aqui o objetivo
        </th>
    </tr>
    <tr>
        <th>
            Técnica:
        </th>
        <th colspan="2">
            (x) manual
        </th>
        <th colspan="2">
            (x) automática
        </th>
    </tr>
    <tr>
        <th>
            Estágio do teste
        </th>
        <th>
            Integração (x)
        </th>
        <th>
            Sistema ( )
        </th>
        <th>
            Unidade ( )
        </th>
        <th>
            Aceitação ( )
        </th>
    </tr>
    <tr>
        <th>
            Abordagem do teste
        </th>
        <th colspan="2">
            Caixa branca (x)
        </th>
        <th colspan="2">
            Caixa preta (x)
        </th>
    </tr>
    <tr>
        <th>
            Responsável(is)
        </th>
        <th colspan="4">
            Programador(es) ou equipe de testes
        </th>
    </tr>
</table>
<br/>

### 3.6 - Teste de sistema

Para teste de sistema.
Tem como objetivo validar o funcionamento completo do software,através da garantia de que todos os componentes interajam corretamente e que os requisitos especificados sejam atendidos.

<br/>
<table>
    <tr>
        <th>
            Objetivo
        </th>
        <th colspan="4">
            descreva aqui o objetivo
        </th>
    </tr>
    <tr>
        <th>
            Técnica:
        </th>
        <th colspan="2">
            ( ) manual
        </th>
        <th colspan="2">
            ( ) automática
        </th>
    </tr>
    <tr>
        <th>
            Estágio do teste
        </th>
        <th>
            Integração ( )
        </th>
        <th>
            Sistema ( )
        </th>
        <th>
            Unidade ( )
        </th>
        <th>
            Aceitação ( )
        </th>
    </tr>
    <tr>
        <th>
            Abordagem do teste
        </th>
        <th colspan="2">
            Caixa branca ( )
        </th>
        <th colspan="2">
            Caixa preta ( )
        </th>
    </tr>
    <tr>
        <th>
            Responsável(is)
        </th>
        <th colspan="4">
            Programador(es) ou equipe de testes
        </th>
    </tr>
</table>
<br/>

### 3.7 - Critérios de Finalização dos Testes

A respeito dos critérios de finalização dos testes, é importante que sejam cumpridos os seguintes itens:

<ul>
    <li>Todos os testes unitários atingirem uma cobertura mínima de 90%.</li>
    <li>Os testes de integração validarem a comunicação correta entre os módulos.</li>
    <li>Os testes funcionais garantirem que todas as funcionalidades essenciais operam corretamente.</li>
    <li>O desempenho do sistema atender aos limites estabelecidos para tempo de resposta e carga simultânea.</li>
    <li>As verificações de segurança não identificarem vulnerabilidades críticas.</li>
</ul>

## 4 - Recursos

<!-- Esta seção deve descrever os recursos humanos, de ambiente de teste (hardware e software) e de ferramentas de automatização de testes necessários para execução dos testes que devem ser descritos nas subseções que seguem. -->

### 4.1 - Ambiente de teste - Software e Hardware

De software, utilizamos Node.js para o backend e React para o frontend; o próprio React faz testes em questão de renderização de componentes e telas.

Para o servidor, utilizamos o Render para fazer deploy que por si só faz testes para manter o servidor rodando apesar de falhas, ele também possui um endpoint para checar se o servidor está online.

### 4.2 - Ferramenta de teste

De ferramentas, utilizamos Vitest para testes de API e Banco, que é uma ferramenta de teste de software que permite a criação de testes automatizados para serviços HTTPs e APIs.

Já para o frontend, o aplicativo foi testado manualmente, com a utilização de um emulador de celular (waydroid, Android Emulator) e celulares para verificar a responsividade do aplicativo e a usabilidade.

## 5 - Cronograma

Tipo de teste       | Duração | data de início | data de término
--------------------|---------|----------------|-----------------
Planejar testes     | 2 meses | 06/11/2024     | 30/01/2025
Implementar testes  | 3 meses | 06/11/2024     | 10/02/2025
Executar teste      | 3 meses | 06/11/2024     | 10/02/2025
Avaliar teste       | 3 meses | 06/11/2024     | 10/02/2025
