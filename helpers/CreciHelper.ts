export default class CreciHelper {
  // Propriedades estáticas
  static regionais = [
    {id: 1, uf: "RJ", ufExtenso: "Rio de Janeiro"},
    {id: 2, uf: "SP", ufExtenso: "São Paulo"},
    {id: 3, uf: "RS", ufExtenso: "Rio Grande do Sul"},
    {id: 4, uf: "MG", ufExtenso: "Minas Gerais"},
    {id: 5, uf: "GO", ufExtenso: "Goiás"},
    {id: 6, uf: "PR", ufExtenso: "Paraná"},
    {id: 7, uf: "PE", ufExtenso: "Pernambuco"},
    {id: 8, uf: "DF", ufExtenso: "Distrito Federal"},
    {id: 9, uf: "BA", ufExtenso: "Bahia"},
    {id: 11, uf: "SC", ufExtenso: "Santa Catarina"},
    {id: 12, uf: "PA", ufExtenso: "Pará"},
    {id: 13, uf: "ES", ufExtenso: "Espírito Santo"},
    {id: 14, uf: "MS", ufExtenso: "Mato Grosso do Sul"},
    {id: 15, uf: "CE", ufExtenso: "Ceará"},
    {id: 16, uf: "SE", ufExtenso: "Sergipe"},
    {id: 17, uf: "RN", ufExtenso: "Rio Grande do Norte"},
    {id: 18, uf: "AM-RR", ufExtenso: "Amazonas & Roraima"},
    {id: 19, uf: "MT", ufExtenso: "Mato Grosso"},
    {id: 20, uf: "MA", ufExtenso: "Maranhão"},
    {id: 21, uf: "PB", ufExtenso: "Paraíba"},
    {id: 22, uf: "AL", ufExtenso: "Alagoas"},
    {id: 23, uf: "PI", ufExtenso: "Piauí"},
    {id: 24, uf: "RO", ufExtenso: "Rondônia"},
    {id: 25, uf: "TO", ufExtenso: "Tocantins"},
    {id: 26, uf: "AC", ufExtenso: "Acre"}
  ];
  static cofeciToken = [
    //regional: null = Token genérico. Nunca remover da primeira posição.
    {regional: null, homologacao: 'dc1f169180281d012afe39286aca1e7d464c48e9', producao: '1ae4e4b35e1520acff1b2925a00f3ddfae7c0ae1'},
    {regional: 0, homologacao: '80c30324b5d70fdd2a4352d3619fa009fc23ee02', producao: '088153f304fed56fac3183adf9404dabf61c2231'},
    {regional: 1, homologacao: '1e7dd51008c728dea55c2edb3836b7ce34f3d886', producao: '0885cb1e2c8f12c636bf84123fd657034cb7cd1e'},
    {regional: 4, homologacao: '1ed243bd491e0f29c80e74a3eeee10ec20967a87', producao: '39265653db698e339e83d8f695d0a38161f03a2b'},
    {regional: 6, homologacao: 'e74bfc63f05bd0ccb3ad441b8d1cdc00fe129e3d', producao: '240903b09f3921014541accad5e4f97715569cc9'},
    {regional: 8, homologacao: '660f7284387f26ab489f8151a2c1ad7cd75fd831', producao: 'd11ebd09ebfb074e8c533141fb6c1faa452b8c36'},
    {regional: 9, homologacao: 'cc86651adcc061f608e5ffa2b37d58d464015fc0', producao: '199db48ef14661d11a6088a9d0c69f741b52e0a9'},
    {regional: 12, homologacao: 'fd541d7b0b9157b697648b676059cd260576b6d3', producao: '3f5a86b000129ea9446b19328b68ebb01b0cae45'},
    {regional: 14, homologacao: '8dfd8fdafbd1954f77eed6204d06480e6399a78a', producao: 'ff77f17038b1729591661c0486887c316c2b83ff'},
    {regional: 15, homologacao: '7daa73481e417f334cc6eb398091df237fbd71e2', producao: 'b4e75d98a17cdba4f6a8d8c6090895cbec6c104e'},
    {regional: 16, homologacao: '088153f304fed56fac3183adf9404dabf61c2231', producao: 'c754df6dce4f2cc708fb8fc0fac076545e75ef1a'},
    {regional: 18, homologacao: '9c79478fb15041f3e1449c3f3822a3adfb713be4', producao: 'c6ff034099e959998e02fd3dd9aba153cd7b7b1c'},
    {regional: 20, homologacao: '', producao: 'bacca50e2e5910443e41a23d3a57818a1ed57237'},
    {regional: 21, homologacao: '55b83f545b8791c8aa08c6d1137d2b8c40b4b427', producao: 'db0ed92bd49cca868722d7af0ac66dcff6b8542a'},
    {regional: 22, homologacao: '19fc8e0d783496a74feeab511712b9f27823cc26', producao: '4f0afc0cc16b6aaf6c9804b779380adaef2cbfb1'},
    {regional: 23, homologacao: '', producao: '19bfe7efcfd49e7bfdd141be04c27aec4a954886'},
    {regional: 24, homologacao: '', producao: '5ba00ab5b61de8e59315afb659a79ab27976a6f4'},
    {regional: 26, homologacao: '', producao: '3e6d274432d77cf91b6da79117cfac243720b130'},
  ];
  static regionaisConselhoNet = [0, 6, 8, 9, 12, 14, 15, 16, 18, 20, 21, 22, 23, 24, 26];

  // Métodos estáticos
  static utilizaConselhoNet(regionalId: number) : boolean {
    return CreciHelper.regionaisConselhoNet.includes(regionalId);
  }
  static getCofeciToken(regionalId: number, homologacao = false): string {
    let result = CreciHelper.cofeciToken.find(i => i.regional === regionalId);
    if (!result) result = CreciHelper.cofeciToken[0];
    return homologacao ? result.homologacao : result.producao; 
  }
  static regionalIdParaUf(regionalId: number, upperCase = true, nomeExtenso = false): string|null {
    const regional = CreciHelper.regionais.find(r => r.id === regionalId);
    if (!regional) return null;
    const uf = nomeExtenso ? regional.ufExtenso : regional.uf;
    return upperCase ? uf.toUpperCase() : (nomeExtenso ? uf : uf.toLowerCase());
  }
  static regionalUfparaId(regionalUf: string): number|null {
    const regional = CreciHelper.regionais.find(r => r.uf === regionalUf.toUpperCase());
    return regional ? regional.id : null;
  }
}