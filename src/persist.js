export default (options) => {
  const key = options.persistKey;

  const save = (state) => (localStorage[key] = JSON.stringify(state || {}));

  const restore = () => JSON.parse(localStorage[key] || '{}');

  return {
    save,
    restore,
  };
};
