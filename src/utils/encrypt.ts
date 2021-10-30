import { JSEncrypt } from 'jsencrypt';

const encrypt = (str: string, key: string) => {
  const encrypt = new JSEncrypt();
  encrypt.setPublicKey(key);
  const encrypted = encrypt.encrypt(str);

  return encrypted;
};

export default encrypt;
