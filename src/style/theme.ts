export type ColorKey =
  | "background"
  | "box"
  | "border"
  | "primary"
  | "secondary"
  | "third"
  | "error"
  | "likes"
  | "review"
  | "text"
  | "gray1"
  | "gray2"
  | "gray3"
  | "lightTransparentBlack";

export type FontSize = "large" | "medium" | "small";
export type FontWeight = "bold" | "normal";
export type ButtonSize =
  | "large"
  | "small"
  | "full"
  | "mini"
  | "super-mini"
  | "full-sharp";
export type CustomButtonType = "contained" | "outlined";
export type ProfileImageSize = "mini" | "small" | "medium" | "large";
export type ModalSize = "default";
export type PaddingSize = "default";

export type TitleSize = "t1" | "t2";
export type BodySize = "b1" | "b2" | "b3";

export type Sports = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

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
    };
  };
  buttonVariant: {
    [key in CustomButtonType]: {
      backgroundColor: string;
      color: string;
      border: string;
      borderHoverColor: string;
    };
  };
  sports: {
    [key in Sports]: string;
  };
}

export const theme: Theme = {
  color: {
    background: "#FFFFFF",
    box: "#F8F9FA",
    border: "#BDBDBD",
    primary: "#5271FF",
    secondary: "#9CABEF",
    third: "#AECDFF",
    error: "#F22455",
    likes: "#ABDEE6",
    review: "#FEAF29",
    text: "#212121",
    gray1: "#E1E1E1",
    gray2: "#D9D9D9",
    gray3: "#808080",
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
      height: "32px",
      width: "105px"
    },
    full: {
      padding: "16px",
      height: "48px",
      width: "100%"
    },
    mini: {
      padding: "16px",
      height: "32px",
      width: "86px"
    },
    "super-mini": {
      padding: "3px",
      height: "auto",
      width: "auto"
    },
    "full-sharp": {
      padding: "4px",
      height: "auto",
      width: "auto"
    }
  },
  borderRadius: {
    default: "20px"
  },
  boxShadow: "0 10px 40px 0 rgba(0, 0, 0, 0.1)",
  profileImage: {
    mini: {
      width: "60px",
      height: "60px"
    },
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
    }
  },
  buttonVariant: {
    contained: {
      backgroundColor: "#5271FF",
      color: "#FFFFFF",
      border: "none",
      borderHoverColor: "#5271FF"
    },
    outlined: {
      backgroundColor: "transparent",
      color: "#5271FF",
      border: "1px solid #5271FF",
      borderHoverColor: "#5271FF"
    }
  },
  sports: {
    1: "#F0C40E",
    2: "#B6D9DD",
    3: "#8369C2",
    4: "#4D8AA6",
    5: "#D1AA8D",
    6: "#F85F51",
    7: "#AAC77A",
    8: "#FFC1C2",
    9: "#2E4B77",
    10: "#B2CBE7",
    11: "#0496D1",
    12: "#5A4097"
  }
};
