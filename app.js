const bip39 = require('bip39');

document.getElementById('generate-btn').addEventListener('click', function() {
    const seed = bip39.generateMnemonic(); // Generar la seed con BIP39
    document.getElementById('seed-output').textContent = seed;
});
