module.exports = (api) => {
  api.cache(true);

  const presets = [
    [
      `@babel/env`,
      {
        targets: {
          node: `14.4`,
        },
      },
    ],
    [`@babel/preset-typescript`, { onlyRemoveTypeImports: true }],
  ];

  const plugins = [
    `@babel/transform-runtime`,
  ];

  return { presets, plugins };
};
