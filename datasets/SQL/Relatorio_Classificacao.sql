

CREATE VIEW [dbo].[_PR_SolicRenovaBolsaEstudos]

AS

SELECT [NUM_PROCES] 	  ,[periodoInscricao]       ,[solicitante]      ,[gestorcc]      ,[analistaGERH]      ,[nomeEmpregado]      ,[dataAdmissao]
      ,[funcao]      ,[lotacao]      ,[radioTipoBolsa]      ,[radioCurso]      ,UPPER([curso]) AS curso      ,UPPER([instituicao]) AS instituicao
      ,[radioLocal]      ,[horarioEntrada]      ,[horarioSaida]      ,[valorMensalidade]      ,[qtdParcelas]      ,UPPER([duracaoCurso]) AS duracaoCurso
      ,UPPER([periodo]) PERIODO      ,[inicioCurso]      ,[terminoCurso]      ,[tempoCasa]      ,[valorBolsa]      ,[resultadoClassificacao]
  FROM PROCES_WORKFLOW A
	JOIN ML001101 B ON (A.NR_DOCUMENTO_CARD=B.documentid) /* SOLICITACAO */
WHERE STATUS <> 1 /* 1 - CANCELADO */ AND resultadoClassificacao > 0


GO