export type ColorKey =
  | "background"
  | "box"
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
export type ButtonSize = "large" | "small" | "full" | "mini";
export type ProfileImageSize = "small" | "medium" | "large";
export type ModalSize = "default";
export type PaddingSize = "default";

export type TitleSize = "t1" | "t2";
export type BodySize = "b1" | "b2" | "b3";

export type Sports = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

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
  sports: {
    [key in Sports]: string;
  };
}

export const theme: Theme = {
  color: {
    background: "#FFFFFF",
    box: "#F8F9FA",
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
    0: "#F0C40E",
    1: "#B6D9DD",
    2: "#8369C2",
    3: "#4D8AA6",
    4: "#D1AA8D",
    5: "#F85F51",
    6: "#AAC77A",
    7: "#FFC1C2",
    8: "#2E4B77",
    9: "#B2CBE7",
    10: "#0496D1",
    11: "#5A4097"
  }
};
