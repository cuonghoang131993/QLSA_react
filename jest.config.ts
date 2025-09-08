export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  moduleNameMapper: {
    "^constants/(.*)$": "<rootDir>/src/constants/$1",
    "^src/(.*)$": "<rootDir>/src/$1",
    "^store/(.*)$": "<rootDir>/src/store/$1",
    "^services/(.*)$": "<rootDir>/src/services/$1",
    "^routes/(.*)$": "<rootDir>/src/routes/$1",
    "^utils/(.*)$": "<rootDir>/src/utils/$1",
    "^pages/(.*)$": "<rootDir>/src/pages/$1",
    "^components/(.*)$": "<rootDir>/src/components/$1",
    "\\.(css|less|scss|sass)$": "<rootDir>/__mocks__/styleMock.ts",
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/__mocks__/fileMock.ts",
  },
  testPathIgnorePatterns: [
    "<rootDir>/src/__mocks__/",
    "<rootDir>/src/utils.test-utils.tsx/",
  ],
  coveragePathIgnorePatterns: ["<rootDir>/src/setupTests.ts"],
};
