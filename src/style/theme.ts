export type ColorKey =
  | "background"
  | "yellow"
  | "black"
  | "white"
  | "gray1"
  | "gray2"
  | "gray3";

export type FontSize = "large" | "medium" | "small";
export type FontWeight = "bold" | "normal";
export type ButtonSize = "large" | "small";
export type ProfileImageSize = "small" | "medium" | "large";
export type ModalSize = "default";

interface Theme {
  color: Record<ColorKey, string>;
  fontSize: Record<FontSize, string>;
  fontWeight: Record<FontWeight, string>;
  button: {
    [key in ButtonSize]: {
      padding: string;
      height: string;
      width?: string;
    };
  };
  borderRadius: {
    default: string;
  };
  boxShadow: string;
  profileImage: {
    [key in ProfileImageSize]: {
      width: string;
      height: string;
    };
  };
  modal: {
    [key in ModalSize]: {
      width: string;
    };
  };
}

export const theme: Theme = {
  color: {
    background: "#234257",
    yellow: "#FEAF29",
    black: "#000000",
    white: "#F8F9FA",
    gray1: "#E1E1E1",
    gray2: "#D9D9D9",
    gray3: "#808080"
  },
  fontSize: {
    large: "20px",
    medium: "16px",
    small: "12px"
  },
  fontWeight: {
    bold: "700",
    normal: "400"
  },
  button: {
    large: {
      padding: "16px",
      height: "48px",
      width: "100%"
    },
    small: {
      padding: "16px",
      height: "32px"
    }
  },
  borderRadius: {
    default: "20px"
  },
  boxShadow: "0 10px 40px 0 rgba(0, 0, 0, 0.03)",
  profileImage: {
    small: {
      width: "86px",
      height: "86px"
    },
    medium: {
      width: "114px",
      height: "114px"
    },
    large: {
      width: "316px",
      height: "140px"
    }
  },
  modal: {
    default: {
      width: "352px"
    }
  }
};
