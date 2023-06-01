const api = "https://servicodados.ibge.gov.br/api/v1/"
const selectEstados = document.querySelector("select#estado");
const selectCidades = document.querySelector("select#cidade");

fetch(api + "localidades/estados").then(data => {
    return data.json()
}).then(json => {
    const estados = json;
    for (let c = 0; c < estados.length; c++) {
        selectEstados.innerHTML += `<option value="${estados[c].sigla}">${estados[c].nome}</option>`
    }
})

selectEstados.addEventListener("click",() => {

    fetch(api + `localidades/estados/${selectEstados.value}/municipios`).then(data => data.json()).then(json => {
        const cidades = json;
        for (let c = 0; c < cidades.length; c++) {
            selectCidades.innerHTML += `<option>${cidades[c].nome}</option>`
        }
    })
})
