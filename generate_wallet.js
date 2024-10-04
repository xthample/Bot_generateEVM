const { ethers } = require("ethers");
const fs = require("fs");

function generateWallets(count) {
    const wallets = [];
    for (let i = 0; i < count; i++) {
        const wallet = ethers.Wallet.createRandom();
        wallets.push({
            address: wallet.address,
            privateKey: wallet.privateKey
        });
    }
    return wallets;
}

// Menghasilkan 50 alamat wallet
const numberOfWallets = 50;
const wallets = generateWallets(numberOfWallets);

// Menyimpan kunci privat ke dalam file
const privateKeys = wallets.map(wallet => wallet.privateKey).join('\n');

fs.writeFileSync('privateKeys.txt', privateKeys, (err) => {
    if (err) {
        console.error('Error writing to file', err);
    } else {
        console.log('Kunci privat berhasil disimpan ke privateKeys.txt');
    }
});

// Mencetak alamat wallet
wallets.forEach((wallet, index) => {
    console.log(`Wallet ${index + 1}:`);
    console.log("Alamat:", wallet.address);
    console.log("-------------------------");
});
