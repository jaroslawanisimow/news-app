import translateText from './translateService';

const test = (description: string, testFunction: () => void) => {
  console.log(description);
  testFunction();
};

const expectToEqual = (actual: any, expected: any) => {
  if (actual !== expected) {
    throw new Error(`Expected ${actual} to equal ${expected}`);
  }
};

test('translates text to target language', async () => {
  const text = 'Hello, world!';
  const targetLanguage = 'es';

  const translatedText = await translateText(text, targetLanguage);

  expectToEqual(translatedText, '¡Hola, mundo!');
});
