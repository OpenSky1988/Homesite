import { JSEncrypt } from 'jsencrypt';

const encrypt = (string: string, key: string) => {
  const encrypt = new JSEncrypt();
  encrypt.setPublicKey(key);
  const encrypted = encrypt.encrypt(string);

  return encrypted;
};

export default encrypt;
