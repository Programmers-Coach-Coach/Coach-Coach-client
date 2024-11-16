// package.json에서 type이 module 이므로 파일 확장명이 commonJs인 cjs로 사용
module.exports = {
  resolver: "jest-resolve",
  testEnvironment: "jest-environment-jsdom",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testMatch: [
    "**/__tests__/**/*.(test|spec).(ts|tsx)",
    "**/?(*.)+(spec|test).(ts|tsx)"
  ],
  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.json",
        babelConfig: true, // Babel 설정을 사용하도록 지정
        diagnostics: {
          ignoreCodes: [1343]
        },
        astTransformers: {
          before: [
            {
              path: "node_modules/ts-jest-mock-import-meta", // or, alternatively, 'ts-jest-mock-import-meta' directly, without node_modules.
              options: {
                metaObjectReplacement: {
                  env: { VITE_BASE_URL: "https://api.coach-coach.site" }
                }
              }
            }
          ]
        }
      }
    ],
    "^.+\\.(js|jsx)$": "babel-jest",
    "^.+\\.(css|scss|png|jpg|jpeg|gif|svg)$": "jest-transform-stub"
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "^/public/(.*)$": "<rootDir>/public/$1", // public 디렉토리의 모든 파일 매핑
    "^.+\\.(png|jpg|jpeg|gif|svg)$": "jest-transform-stub", // 기타 이미지 파일 매핑
    "^@/(.*)$": "<rootDir>/src/$1", // tsconfig에서 설정한 alias를 Jest에서 매핑
    "\\.(svg)$": "<rootDir>/__mocks__/fileMock.js" // SVG 파일 처리
  },
  setupFiles: ["<rootDir>/test-setup.js"]
};
