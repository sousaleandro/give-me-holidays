module.exports = {
  collectCoverage: false,
  collectCoverageFrom: [
    "src/**/*.jsx", // ou o padrão de arquivos que você deseja incluir nos relatórios de cobertura
    "!src/index.jsx", // exclua arquivos que não deseja incluir
  ],
  coverageReporters: ["json", "lcov", "text", "clover"],
};