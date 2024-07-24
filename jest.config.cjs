// package.json에서 type이 module 이므로 파일 확장명이 commonJs인 cjs로 사용
module.exports = {
  testEnvironment: "jest-environment-jsdom",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testMatch: [
    "**/__tests__/**/*.(test|spec).(ts|tsx)",
    "**/?(*.)+(spec|test).(ts|tsx)"
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
    "^.+\\.(css|scss|png|jpg|jpeg|gif|svg)$": "jest-transform-stub"
  },
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json"
    }
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "^/public/(.*)$": "<rootDir>/public/$1", // public 디렉토리의 모든 파일 매핑
    "^.+\\.(png|jpg|jpeg|gif|svg)$": "jest-transform-stub" // 기타 이미지 파일 매핑
  }
};
