import "jest-styled-components";
import { theme } from "../style/theme";

describe("Theme Object", () => {
  // Snapshot Testing
  it("should match the theme snapshot", () => {
    expect(theme).toMatchSnapshot();
  });

  // Unit Testing
  it("should have correct color values", () => {
    expect(theme.color.background).toBe("#234257");
    expect(theme.color.yellow).toBe("#FEAF29");
    expect(theme.color.black).toBe("#000000");
    expect(theme.color.white).toBe("#F8F9FA");
    expect(theme.color.gray1).toBe("#E1E1E1");
    expect(theme.color.gray2).toBe("#D9D9D9");
    expect(theme.color.gray3).toBe("#808080");
    expect(theme.color.semiTransparentBlack).toBe("rgba(0, 0, 0, 0.8)");
    expect(theme.color.lightTransparentBlack).toBe("rgba(0, 0, 0, 0.3)");
  });

  it("should have correct fontSize values", () => {
    expect(theme.fontSize.large).toBe("20px");
    expect(theme.fontSize.medium).toBe("16px");
    expect(theme.fontSize.small).toBe("12px");
  });

  it("should have correct fontWeight values", () => {
    expect(theme.fontWeight.bold).toBe("700");
    expect(theme.fontWeight.normal).toBe("400");
  });

  it("should have correct button values", () => {
    expect(theme.button.large.padding).toBe("16px");
    expect(theme.button.large.height).toBe("48px");
    expect(theme.button.large.width).toBe("100%");

    expect(theme.button.small.padding).toBe("16px");
    expect(theme.button.small.height).toBe("32px");
  });

  it("should have correct borderRadius value", () => {
    expect(theme.borderRadius.default).toBe("20px");
  });

  it("should have correct boxShadow value", () => {
    expect(theme.boxShadow).toBe("0 10px 40px 0 rgba(0, 0, 0, 0.03)");
  });

  it("should have correct profileImage values", () => {
    expect(theme.profileImage.small.width).toBe("86px");
    expect(theme.profileImage.small.height).toBe("86px");

    expect(theme.profileImage.medium.width).toBe("114px");
    expect(theme.profileImage.medium.height).toBe("114px");

    expect(theme.profileImage.large.width).toBe("316px");
    expect(theme.profileImage.large.height).toBe("140px");
  });

  it("should have correct modal value", () => {
    expect(theme.modal.default.width).toBe("352px");
  });

  it("should have correct padding value", () => {
    expect(theme.padding.default).toBe("50px");
  });
});
