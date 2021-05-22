module.exports = {
  setupFilesAfterEnv: ["./jest.setup.js"],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  moduleNameMapper: {
    "^@/components(.*)$": "<rootDir>/components$1",
    "^@/pages(.*)$": "<rootDir>/pages$1",
    "^@/hooks(.*)$": "<rootDir>/hooks$1",
    "\\.(scss|sass|css)$": "identity-obj-proxy",
  },
};
