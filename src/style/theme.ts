export type ColorKey =
  | "background"
  | "yellow"
  | "black"
  | "white"
  | "gray1"
  | "gray2"
  | "gray3"
  | "semiTransparentBlack"
  | "lightTransparentBlack";

export type FontSize = "large" | "medium" | "small";
export type FontWeight = "bold" | "normal";
export type ButtonSize = "large" | "small";
export type ProfileImageSize = "small" | "medium" | "large";
export type ModalSize = "default";
export type PaddingSize = "default";

export type TitleSize = "t1" | "t2";
export type BodySize = "b1" | "b2" | "b3";

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
  padding: {
    [key in PaddingSize]: string;
  };
  titleSize: {
    [key in TitleSize]: {
      fontSize: string;
      lineHeight: string;
      bold: string;
    };
  };
  bodySize: {
    [key in BodySize]: {
      fontSize: string;
      lineHeight: string;
      bold: string;
  buttonVariant: {
    contained: {
      backgroundColor: string;
      color: string;
      border: string;
      borderHoverColor: string;
    };
    outlined: {
      backgroundColor: string;
      color: string;
      border: string;
      borderHoverColor: string;
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
    gray3: "#808080",
    semiTransparentBlack: "rgba(0, 0, 0, 0.8)",
    lightTransparentBlack: "rgba(0, 0, 0, 0.3)"
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
      width: "314px"
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
  },
  padding: {
    default: "50px"
  },
  titleSize: {
    t1: {
      fontSize: "20px",
      lineHeight: "36px",
      bold: "800"
    },
    t2: {
      fontSize: "16px",
      lineHeight: "24px",
      bold: "800"
    }
  },
  bodySize: {
    b1: {
      fontSize: "16px",
      lineHeight: "16px",
      bold: "400"
    },
    b2: {
      fontSize: "12px",
      lineHeight: "16px",
      bold: "400"
    },
    b3: {
      fontSize: "16px",
      lineHeight: "32px",
      bold: "800"
  buttonVariant: {
    contained: {
      backgroundColor: "#FEAF29",
      color: "#F8F9FA",
      border: "none",
      borderHoverColor: "#FEAF29"
    },
    outlined: {
      backgroundColor: "transparent",
      color: "#FEAF29",
      border: "1px solid #FEAF29",
      borderHoverColor: "#FEAF29"
    }
  }
};
