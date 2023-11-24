const checklists = {
    out_point: {
      name: "Ponto Fora",
      src: 'out_point',
      checks: {
        out_point: {
          name: ["Ponto fora", "out_point"],
          questions: [
            "Qual o ponto ou bloco fora?",
            "Há quanto tempo o ponto está fora?",
            "Quem é o responsável pelo local e quais seus contatos?",
            "Após entrado em contato com o responsável, foi certificado que há energia no local?",
            "Quais horários disponíveis para recebimento de técnico?",
            "Outros clientes relataram o mesmo problema ? Quais?",
            "Quais blocos foram afetados e possuem falta de conexão? (em caso de prédio)",
          ],
        },
      },
    },

    corp_emp: {
      name: "Corporativo e Empresarial",
      src: 'corp_emp',
      checks: {
        corporative: {
          name: ["Corporativo", "corporative"],
          questions: [
            "Nome do responsável pelo contato:",
            "Número de contato DRA:",
            "Suporte Interno:",
            "Local está com energia?",
            "Que tipo de equipamento  a Persis entrega o Link? (ONU ou Switch)",
            `EM CASO DE ONU:
                      Cliente possui somente uma ONU e roteador no local? Se não, como está realizada a distribuição de equipamentos?`,
            "ONU está com LOS Vermelha?",
            `EM CASO DE SWITCH:
                      O equipamento está ligado?`,
            "As portas de UPlink e acesso estão acesas?",
            "Nome do contato no local?",
            "Telefone do contato no local?",
            "Caso necessário visita ao local, qual o horário permitido de acesso?",
            "Qual seria o protocolo interno?",
            "Descreva o que ocorre com o cliente:",
          ],
        },
        business: {
          name: ["Empresarial", "business"],
          questions: [
            "Nome do responsável pelo contato:",
            "Número de contato DRA:",
            "Suporte Interno:",
            "Local está com energia?",
            "ONU está com LOS Vermelha?",
            "Cliente possui somente uma ONU e roteador no local? Se não, como está realizada a distribuição de equipamentos?",
            "Foi realizado teste com cabo direto da ONU?",
            "Nome do contato no local?",
            "Telefone do contato no local?",
            "Caso necessário visita ao local, qual o horário permitido de acesso?",
            "Descreva o que ocorre com o cliente:",
            "Em caso de reclamação de lentidão ou perda de pacotes solicitar os teste de Ping e Winmtr para os seguintes destinos:",
          ],
        },
        algar: {
          name: ["Algar Telecom", "algar"],
          questions: [
            "Nome do responsável pelo contato:",
            "Número de contato DRA:",
            "Suporte Interno:",
            "Local está com energia?",
            "ONU possui algum alerta no Smart OLT?",
            "Qual o número do plano no integrator?",
            "Qual o designador do circuito?",
            "Qual o designador do circuito pela ALGAR?",
            "Qual o protocolo interno da ALGAR?",
            "Qual o nome do responsável no local atendido?",
            "Qual o telefone do responsável no local atendido?",
            "Se necessário envio de técnico, quais os horários para envio?",
            "Qual o problema descrito pelo cliente?",
          ],
        },
      },
    },

    attendance: {
      name: "Atendimento",
      src: 'attendance',
      checks: {
        fiber: {
          name: ["Fibra", "fiber"],
          questions: [
            "Responsável pela realização dos procedimentos (Cliente):",
            "Telefone utilizado para contato (Origem no DRA):",
            "Confirmado Endereço e telefone do cliente? Qual(is) número(s) foi(ram) confirmado(s)?",
            "Telefone com WhatsApp para contato?",
            "Ponto de referência? (No caso de agendamento)",
            "Cliente utiliza Roteador? Adquirido na Persis?",
            "Qual o login e senha de acesso ao roteador?",
            "Conexão com Roteador está OK?",
            "Sinal da fibra esta OK ? (mínimo 19, máxima 27)",
            "Lentidão/quedas ocorre em algum equipamento em particular? Caso sim, qual?",
            "Algum LED na ONU em vermelho ou laranja?",
            "PON piscando?",
            "Foi necessário realizar teste com cabo direto e Roteador desligado? A conexão com o cabo direto está OK?",
            "Apresentado algum Erro? Qual o número do Erro?",
            "Qual o procedimento realizado no atendimento? (detalhado)",
            "Qual o melhor período para um agendamento de O.S.?",
            "Foi alterado o tipo do atendimento?",
          ],
        },
        building: {
          name: ["Prédio/Condomínio", "building"],
          questions: [
            "Responsável pela realização dos procedimentos (Cliente):",
            "Telefone utilizado para contato (Origem no DRA):",
            "Confirmado Endereço e telefone do cliente? Qual(is) número(s) foi(ram) confirmado(s)?",
            "Telefone com WhatsApp para contato?",
            "Ponto de referência? (No caso de agendamento)",
            "Cliente utiliza Roteador? Adquirido na empresa Persis? Caso sim, Acesso remoto foi liberado?",
            "Qual o login e senha de acesso ao roteador?",
            "Lentidão/quedas ocorre em algum equipamento em particular? Caso sim, qual?",
            "Conexão com Roteador está OK?",
            "Foi necessário realizar teste com cabo direto e Roteador desligado? A conexão com o cabo direto está OK?",
            "Apresentado algum Erro? Qual o número do Erro?",
            "Qual o procedimento realizado no atendimento? (detalhado)",
            "Qual o melhor período para um agendamento de O.S.?",
            "Foi alterado o tipo do atendimento?",
          ],
        },
        radio: {
          name: ["Radio", "radio"],
          questions: [
            "Responsável pela realização dos procedimentos (Cliente):",
            "Telefone utilizado para contato (Origem no DRA):",
            "Confirmado Endereço e telefone do cliente? Qual(is) número(s) foi(ram) confirmado(s)?",
            "Telefone com WhatsApp para contato?",
            "Ponto de referência? (No caso de agendamento)",
            "Cliente utiliza Roteador? Adquirido na empresa Persis?",
            "Qual o login e senha de acesso ao roteador?",
            "Conexão com Roteador está OK?",
            "Qual AP que cliente se conecta?",
            "Alterado ponto de ACESSO no integrator? Cliente com Referência?",
            "Rádio padronizado?",
            "Foi necessário realizar teste com cabo direto e Roteador desligado? A conexão com o cabo direto está OK?",
            "Qual o procedimento realizado no atendimento? (detalhado)",
            "Qual o melhor período para um agendamento de O.S.?",
            "Foi alterado o tipo do atendimento?",
          ],
        },
        velocity_test: {
          name: ["Teste de Velocidade", "velocity_test"],
          questions: [
            "Responsável pela realização dos procedimentos (Cliente):",
            "Telefone utilizado para contato (Origem no DRA):",
            "Confirmado Endereço e telefone do cliente? Qual(is) número(s) foi(ram) confirmado(s)?",
            "Telefone com WhatsApp para contato?",
            "Ponto de referência? (No caso de agendamento)",
            "Qual cabo o cliente está utilizando? (CAT5E OU SUPERIOR)",
            "Qual o modelo da ONU?",
            "Se fiberhome, possui 2 portas? Foi alterado de porta?",
            "Qual site/aplicativo utilizado para realizar o teste?",
            "Teste realizado por cabo ou wifi?",
            "Qual o equipamento utilizado para o teste?",
            "Se computador, é compatível o plano? Teste foi realizado via web ou aplicativo?",
            "Se celular, possui a tecnologia AC?",
            "Foi explicado ao cliente sobre as redes 2.4 E 5G?",
            "Mesmo após a explicação, cliente insistiu em receber o técnico?",
            "Alguma observação adicional?",
            "Qual o melhor período para um agendamento de O.S.?",
            "Foi alterado o tipo do atendimento?",
          ],
        },
      },
    },

    maintenance: {
      name: "Manutenção Persis",
      src: 'maintenance',
      checks: {
        huawei_zte: {
          name: ["Manutenção Huawei/ZTE", "huawei_zte"],
          questions: [
            "Técnico Externo:",
            "Técnico Interno:",
            "OS:",
            "Protocolo:",
            "Foi Refeito a Infra ?",
            "Quanto de cabo?",
            "Qual o PON da ONU (Huawei ou ZTE)?",
            "Qual o MAC da ONU?",
            "Qual o numero do patrimônio?",
            "Qual a caixa que esta conectado?",
            "Qual a porta que esta conectado?",
            "O cabo esta identificado na caixa?(anilha)",
            "Qual o sinal da fibra na caixa (entre -15 e -25)? ",
            "Qual o sinal da fibra na residência (diferença máxima de -2db)? ",
            "Conector antigo, RESIDENCIA:",
            "Conector antigo, CAIXA:",
            "Conector Novo, RESIDENCIA:",
            "Conector Novo, CAIXA:",
            "Cliente possui roteador?",
            "Qual o modelo do roteador?",
            "Qual o login de acesso ao roteador?",
            "Qual a senha de acesso ao roteador?",
            "Roteador adquirido na Persis?",
            "Qual o patrimônio do roteador?",
            "Quais procedimentos realizados durante a manutenção?",
            "Qual IP esta registrado no teste? (confirmar com o IP no extrato de conexão ) ",
            "Quem acompanhou o teste?",
            "Download",
            "Upload",
            "Tempo de resposta médio",
            "Técnico foi informado para tirar foto novamente em caso da troca de equipamento durante a manutenção ?",
            "Sinal da fibra mostrado na ONU(mínimo 19, máxima 25)?( confirmar Sinal dentro da ONU)",
            "Foi alterado o tipo do atendimento?",
          ],
        },
        fiberhome_cdata: {
          name: ["Manutenção Fiberhome/C-DATA", "fiberhome_cdata"],
          questions: [
            "Técnico Externo:",
            "Técnico Interno:",
            "OS:",
            "Protocolo:",
            "Foi Refeito a Infra ?",
            "Quanto de cabo?",
            "Qual o MAC da ONU?",
            "Qual o numero do patrimônio?",
            "Qual a caixa que esta conectado?",
            "Qual a porta que esta conectado?",
            "O cabo esta identificado na caixa?(anilha)",
            "Qual o sinal da fibra na caixa (entre -15 e -25)? ",
            "Qual o sinal da fibra na residência (diferença máxima de -2db)? ",
            "Conector antigo, RESIDENCIA:",
            "Conector antigo, CAIXA:",
            "Conector Novo, RESIDENCIA:",
            "Conector Novo, CAIXA:",
            "Cliente possui roteador?",
            "Qual o modelo do roteador?",
            "Qual o login de acesso ao roteador?",
            "Qual a senha de acesso ao roteador?",
            "Roteador adquirido na Persis?",
            "Qual o patrimônio do roteador?",
            "Quais procedimentos realizados durante a manutenção?",
            "Qual IP esta registrado no teste? (confirmar com o IP no extrato de conexão ) ",
            "Quem acompanhou o teste?",
            "Download",
            "Upload",
            "Tempo de resposta médio",
            "Técnico foi informado para tirar foto novamente em caso da troca de equipamento durante a manutenção ?",
            "Sinal da fibra mostrado na ONU(mínimo 19, máxima 25)?( confirmar Sinal dentro da ONU)",
            "Foi alterado o tipo do atendimento?",
          ],
        },
        building: {
          name: ["Manutenção Pŕedio/Condomínio", "building"],
          questions: [
            "Tecnico Externo:",
            "Tecnico Interno:",
            "OS:",
            "Protocolo:",
            "O cabo e conectorização no lado do cliente estão adequados?",
            "O cabo e conectorização no lado do switch estão adequados?",
            "As instalações elétricas dos switches estão adequadas?",
            "Cliente possui roteador?",
            "Qual o modelo do roteador?",
            "Qual o login de acesso ao roteador?",
            "Qual a senha de acesso ao roteador?",
            "Roteador adquirido na Persis?",
            "Qual o patrimônio do roteador?",
            "Acesso remoto foi liberado?",
            "Foi habilitado o IPV6?",
            "Alterado ponto de ACESSO no integrator? Adicionado referência?",
            "Quais procedimentos realizados durante a manutenção?",
            "Qual o IP esta registrado no teste? (confirmar com o IP no extrato de conexão )",
            "Quem acompanhou o teste?",
            "Em qual equipamento do cliente foi testado?",
            "Qual o ponto de acesso?",
            "Download",
            "Upload",
            "Tempo de resposta médio",
            "1-Técnico foi informado para tirar foto novamente em caso da troca de equipamento durante a manutenção ?",
            "2-Foi alterado o tipo do atendimento?",
          ],
        },
        radio: {
          name: ["Manutenção Rádio", "radio"],
          questions: [
            "Técnico Externo:",
            "Técnico Interno:",
            "OS:",
            "Protocolo:",
            "Possui visada para outras torres?",
            "Cliente possui roteador?",
            "Qual o login de acesso ao roteador?",
            "Qual a senha de acesso ao roteador?",
            "»» Roteador adquirido na Persis?",
            "»» Qual o patrimônio do roteador?",
            "Qual o IP esta registrado no teste? (confirmar com o IP no extrato de conexão )",
            "Quais procedimentos realizados durante a manutenção?",
            "*Número do patrimônio do rádio? (em caso de troca)",
            "Em qual equipamento do cliente foi testado?",
            "Quem acompanhou o teste?",
            "Download",
            "Upload",
            "Tempo de resposta médio",
            "1-Acesso remoto funcionando? (verificar se está acessando remotamente)",
            "2-Firmware atualizado? (verificar versão do FIRMWARE no Rádio)",
            "3-Nome do dispositivo configurado em identificação do equipamento? (Código do cliente) (Verificar na aba STATUS no RÁDIO)",
            "4-Qual o sinal da torre no equipamento do cliente?  (verificar na aba status no rádio)",
            "5-Data-rate configurado em MCS4?   (Verificar no RÁDIO)",
            "6-A potencia tx? (evitar deixar em 28 dBm)",
            "7-Qual AP o cliente conecta?  (Verificar no RÁDIO, Verificar no SSID)",
            "8-Qual o ACK do equipamento?  (Verificar no AP do cliente)",
            "9-Qual o sinal na AP (máximo -75)?  (Verificar no AP do CLIENTE)",
            "10-Qual o CCQ na AP (mínimo 95%)?  (Verificar no AP do cliente)",
            "11-Foi alterado o tipo do atendimento?",
          ],
        },
      },
    },

    schedulling: {
      name: "Agendamento",
      src: 'schedulling',
      checks: {
        message: {
          name: ["Mensagem", "message"],
          questions: [
            'Cliente:',
            'Código:' ,
            'OS:' ,
            'Cidade:' ,
            'Endereço:',
            'Motivo:'
          ],
        },
        fiber: {
          name: ["Fibra", "fiber"],
          questions: [
            "NOME: ",
            "CONTATO:",
            "PERÍODO:",
            "REFERÊNCIA:",
            "CAIXA:",
            "PORTA:",
            "LOCAL-CTO:",
            "ONU:",
            "DBM:",
            "MOTIVO:",
            'LOGIN PPPoE:',
            "OBS:",
          ],
        },
        building: {
          name: ["Prédio/condomínio", "building"],
          questions: [
            "NOME: ",
            "CONTATO:",
            "PERÍODO:",
            "REFERÊNCIA:",
            "CONDOMÍNIO:",
            "MOTIVO:",
            'LOGIN PPPoE:',
            "OBS:",
          ],
        },
        los: {
          name: ["LOS VERMELHO", "los"],
          questions: [
            "NOME: ",
            "CONTATO:",
            "PERÍODO:",
            "REFERÊNCIA:",
            "CAIXA:",
            "PORTA:",
            "LOCAL-CTO:",
            'LOGIN PPPoE:',
            "ONU:",
          ],
        },
      },
    },

    activation: {
      name: "Ativação Persis",
      src: 'activation',
      checks: {
        fiber: {
          name: ["Ativação Fibra", "fiber"],
          questions: [
            "Técnico Externo:",
            "Técnico Interno:",
            "OS:",
            "Protocolo:",
            "Qual o MAC da ONU?",
            "Qual o numero do patrimonio?",
            "Qual a caixa que esta conectado?",
            "Qual a porta que esta conectado?",
            "Qual o sinal da fibra na caixa (entre -15 e -25)? ",
            "Qual o sinal da fibra na residência (diferença máxima de -3db)? ",
            "Conector CAIXA:",
            "Conector CASA:",
            "Quanto de cabo foi utilizado para a instalação?",
            "Cliente possui roteador?",
            "Qual o modelo?",
            "Qual o login de acesso ao roteador?",
            "Qual a senha de acesso ao roteador?",
            "Roteador adquirido com a Persis?",
            "Qual o patrimônio do roteador?",
            "Acesso remoto foi liberado?",
            "Foi habilitado o IPV6?",
            "Alguma observação adicional sobre a instalação?",
            "Qual IP esta registrado no teste? ",
            "Quem acompanhou o teste?",
            "Em qual equipamento do cliente foi testado?",
            "Download",
            "Upload",
            "Tempo de resposta médio",
            "Sinal da fibra mostrado na ONU(mínimo 19, máxima 27)?( confirmar Sinal dentro da ONU) Diferença máxima de 2 DB",
            "Técnico foi informado para tirar foto novamente em caso da troca de equipamento durante a ativação ?",
          ],
        },
        huawei_zteac: {
          name: ["Ativação Huawei/ZTE", "huawei_zteac"],
          questions: [
            "Técnico Externo:",
            "Técnico Interno:",
            "OS:",
            "Protocolo:",
            "Qual o PON da ONU (Huawei/ZTE)",
            "Qual o MAC da ONU?",
            "Qual o numero do patrimonio?",
            "Qual a caixa que esta conectado?",
            "Qual a porta que esta conectado?",
            "Qual o sinal da fibra na caixa (entre -15 e -25)? ",
            "Qual o sinal da fibra na residência (diferença máxima de -3db)? ",
            "Conector CAIXA: ",
            "Conector CASA: ",
            "Quanto de cabo foi utilizado para a instalação?",
            "Cliente possui roteador?",
            "Qual o modelo?",
            "Qual o login de acesso ao roteador?",
            "Qual a senha de acesso ao roteador?",
            "Roteador adquirido com a Persis?",
            "Qual o patrimônio do roteador?",
            "Acesso remoto foi liberado?",
            "Foi habilitado o IPV6?",
            "Alguma observação adicional sobre a instalação?",
            "Qual IP esta registrado no teste? ",
            "Quem acompanhou o teste?",
            "Em qual equipamento do cliente foi testado?",
            "Download",
            "Upload",
            "Tempo de resposta médio",
            "Sinal da fibra mostrado na ONU(mínimo 19, máxima 27)?( confirmar Sinal dentro da ONU) Diferença máxima de 2 DB",
            "Técnico foi informado para tirar foto novamente em caso da troca de equipamento durante a ativação ?",
          ],
        },
        building: {
          name: ["Ativação Pŕedio/Condomínio", "building"],
          questions: [
            "Técnico Externo:",
            "Técnico Interno:",
            "OS:",
            "Protocolo:",
            "O cabo e conectorização no lado do cliente estão adequados?",
            "O cabo e conectorização no lado do switch estão adequados?",
            "As instalações elétricas dos switches estão adequadas?",
            "Cliente possui roteador?",
            "Qual o login de acesso ao roteador?",
            "Qual a senha de acesso ao roteador?",
            "Roteador adquirido na Persis?",
            "Qual o patrimônio do roteador?",
            "Qual o modelo do roteador?",
            "Acesso remoto foi liberado?",
            "Foi habilitado o IPV6?",
            "Alterado ponto de ACESSO no integrator? Adicionado referência?",
            "Qual o IP esta registrado no teste? (confirmar com o IP no extrato de conexão )",
            "Alguma observação adicional sobre a instalação?",
            "Quem acompanhou o teste?",
            "Em qual equipamento do cliente foi testado?",
            "Qual o ponto de acesso?",
            "Download",
            "Upload",
            "Tempo de resposta médio",
          ],
        },
      },
    }
}

export default checklists;