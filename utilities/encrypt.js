import CryptoJS from "react-native-crypto-js";

// Replace with your encryption algorithm and key


// Decrypt
// let bytes = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
// let originalText = bytes.toString(CryptoJS.enc.Utf8);

export function encrypt(data) {
    let ciphertext = CryptoJS.AES.encrypt(data, 'kedarayare').toString();
    return ciphertext
}

export function decrypt(data) {
    let bytes = CryptoJS.AES.decrypt(data, 'kedarayare');
    let originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText
}

