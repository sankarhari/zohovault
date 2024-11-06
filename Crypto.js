import VaultCrypto from "./VaultCrypto.js";

export async function vaultencode(masterPassword, salt, iterations, data) {
  var masterKey = await VaultCrypto.pbkdf2(masterPassword, salt, iterations);
  console.log("master key: " + masterKey);
  const encryptedData = await VaultCrypto.aesEncrypt(data, masterKey);
  console.log("encrypted data: " + encryptedData);
  return encryptedData;
}

export async function vaultdecode(masterPassword, salt, iterations, data) {
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
