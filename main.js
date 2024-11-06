const VaultCrypto = require("./VaultCrypto");

async function vaultencode(masterPassword, salt, iterations, data) {
  var masterKey = await VaultCrypto.pbkdf2(masterPassword, salt, iterations);
  console.log("master key: " + masterKey);
  const encryptedData = await VaultCrypto.aesEncrypt(data, masterKey);
  console.log("encrypted data: " + encryptedData);
  return encryptedData;
}

async function vaultdecode(masterPassword, salt, iterations, data) {
  var masterKey = await VaultCrypto.pbkdf2(
    masterPassword,
    salt,
    iterations,
    data
  );
  console.log("master key: " + masterKey);
  const decryptedData = await VaultCrypto.aesDecrypt(data, masterKey);
  console.log("decrypted username: " + decryptedData);
  return decryptedData;
}

async function main() {
  const encrypted = await vaultencode(
    "!g!2H%26H7B%3DeX_29>",
    "147b5d7196fb446c5305e31f6fe057ee",
    310000,
    "apitest@gmail.com"
  );

  await vaultdecode(
    "!g!2H%26H7B%3DeX_29>",
    "147b5d7196fb446c5305e31f6fe057ee",
    310000,
    encrypted
  );
}

main();
