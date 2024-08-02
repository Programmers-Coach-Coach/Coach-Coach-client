import "jest-styled-components";
import { theme, BodySize, TitleSize } from "../style/theme";
import {
  ColorKey,
  FontSize,
  FontWeight,
  ButtonSize,
  ProfileImageSize
} from "../style/theme";

describe("Theme Object", () => {
  it("should match the theme snapshot", () => {
    expect(theme).toMatchSnapshot();
  });

  test.each([
    ["background", "#FFFFFF"],
    ["box", "#F8F9FA"],
    ["primary", "#5271FF"],
    ["secondary", "#9CABEF"],
    ["third", "#AECDFF"],
    ["error", "#F22455"],
    ["likes", "#ABDEE6"],
    ["review", "#FEAF29"],
    ["text", "#212121"],
    ["gray1", "#E1E1E1"],
    ["gray2", "#D9D9D9"],
    ["gray3", "#808080"],
    ["lightTransparentBlack", "rgba(0, 0, 0, 0.3)"]
  ] as [ColorKey, string][])(
    "should have correct color value for %s",
    (colorKey, expectedValue) => {
      expect(theme.color[colorKey]).toBe(expectedValue);
    }
  );

  test.each([
    ["large", "20px"],
    ["medium", "16px"],
    ["small", "12px"]
  ] as [FontSize, string][])(
    "should have correct fontSize value for %s",
    (fontSize, expectedValue) => {
      expect(theme.fontSize[fontSize]).toBe(expectedValue);
    }
  );

  test.each([
    ["bold", "700"],
    ["normal", "400"]
  ] as [FontWeight, string][])(
    "should have correct fontWeight value for %s",
    (fontWeight, expectedValue) => {
      expect(theme.fontWeight[fontWeight]).toBe(expectedValue);
    }
  );

  test.each([
    ["large", { padding: "16px", height: "48px", width: "314px" }],
    ["small", { padding: "16px", height: "32px", width: "105px" }]
  ] as [ButtonSize, { padding: string; height: string; width?: string }][])(
    "should have correct button value for %s",
    (buttonSize, expectedValue) => {
      expect(theme.button[buttonSize]).toEqual(expectedValue);
    }
  );

  it("should have correct borderRadius value", () => {
    expect(theme.borderRadius.default).toBe("20px");
  });

  it("should have correct boxShadow value", () => {
    expect(theme.boxShadow).toBe("0 10px 40px 0 rgba(0, 0, 0, 0.03)");
  });

  test.each([
    ["small", { width: "86px", height: "86px" }],
    ["medium", { width: "114px", height: "114px" }],
    ["large", { width: "316px", height: "140px" }]
  ] as [ProfileImageSize, { width: string; height: string }][])(
    "should have correct profileImage value for %s",
    (profileImageSize, expectedValue) => {
      expect(theme.profileImage[profileImageSize]).toEqual(expectedValue);
    }
  );

  it("should have correct modal value", () => {
    expect(theme.modal.default.width).toBe("352px");
  });

  it("should have correct padding value", () => {
    expect(theme.padding.default).toBe("50px");
  });

  test.each([
    ["t1", { fontSize: "20px", lineHeight: "36px", bold: "800" }],
    ["t2", { fontSize: "16px", lineHeight: "24px", bold: "800" }]
  ] as [TitleSize, { fontSize: string; lineHeight: string; bold: string }][])(
    "should have correct titleSize value for %s",
    (titleSize, expectedValue) => {
      expect(theme.titleSize[titleSize]).toEqual(expectedValue);
    }
  );

  test.each([
    ["b1", { fontSize: "16px", lineHeight: "16px", bold: "400" }],
    ["b2", { fontSize: "12px", lineHeight: "16px", bold: "400" }],
    ["b3", { fontSize: "16px", lineHeight: "32px", bold: "800" }]
  ] as [BodySize, { fontSize: string; lineHeight: string; bold: string }][])(
    "should have correct bodySize value for %s",
    (bodySize, expectedValue) => {
      expect(theme.bodySize[bodySize]).toEqual(expectedValue);
    }
  );

  test.each([
    [
      "contained",
      {
        backgroundColor: "#5271FF",
        color: "#FFFFFF",
        border: "none",
        borderHoverColor: "#5271FF"
      }
    ],
    [
      "outlined",
      {
        backgroundColor: "transparent",
        color: "#5271FF",
        border: "1px solid #5271FF",
        borderHoverColor: "#5271FF"
      }
    ]
  ] as [
    keyof typeof theme.buttonVariant,
    {
      backgroundColor: string;
      color: string;
      border: string;
      borderHoverColor: string;
    }
  ][])(
    "should have correct buttonVariant value for %s",
    (variant, expectedValue) => {
      expect(theme.buttonVariant[variant]).toEqual(expectedValue);
    }
  );
});
