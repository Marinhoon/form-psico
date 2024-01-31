function formatarCEP(cep) {
   return cep.replace(/^(\d{5})(\d{3})$/, "$1-$2");
}

// CEP
var cepDigitado = "12345678";
var cepFormatado = formatarCEP(cepDigitado);
console.log(cepFormatado); // Saída: "12345-678"

function formatarCPF(cpf) {
   return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

// CPF
var cpfDigitado = "12345678901";
var cpfFormatado = formatarCPF(cpfDigitado);
console.log(cpfFormatado); // Saída: "123.456.789-01"

function formatarTelefone(telefone) {
   return telefone.replace(/(\d{2})(\d{4,5})(\d{4})/, "($1) $2-$3");
}

// Telefone
var telefoneDigitado = "1123456789";
var telefoneFormatado = formatarTelefone(telefoneDigitado);
console.log(telefoneFormatado); // Saída: "(11) 2345-6789"

