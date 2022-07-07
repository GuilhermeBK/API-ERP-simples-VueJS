export default {
data: () => ({
    dados: {},
  }),
  methods: {
    getDadosApi(url, queryParams) {

      queryParams = {} //define valor default para permitir fazer pesquisas apenas com a URL base
      
      //se a string for vazia, vai retirar o parametro, se nao ele vai vazio e interfere na pesquisa
      Object.keys(queryParams).forEach(chave => {
        if(queryParams[chave] == '') delete queryParams[chave]
    })

    const urlQueryParams = new URLSearchParams(queryParams).toString()

    //se a urlQueryParams nao for nula, recebe o obj, se for nula, recebe apenas a URL base
    const urlFinal = urlQueryParams ? `${url}&${urlQueryParams}` : url;

      fetch(url)
        .then((response) => response.json())
        .then((response) => {
          this.dados = response;
        });
    }
  }
}