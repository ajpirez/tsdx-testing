export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('probando crear libreria en npm con typescript');
  }
  return a + b;
};
