module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '600px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        white: "#FDF7EB",
        light: "#C98200",
        contrast: "#5E3F05",
        card:"#063978",
        blueDark:"#063978",
        auxiliar:"#86A6CE",
        tb:"#000000",
        tw:"#FFFFFF"
      },
      spacing: {
        screen: "100vw",
        full: "100%",
        0: "0",
        0.5: "2px",
        1: "4px",
        1.5: "6px",
        2: "8px",
        2.5: "10px",
        3: "12px",
        3.5: "14px",
        4: "16px",
        4.5: "18px",
        5: "20px",
        5.5: "22px",
        6: "24px",
        6.5: "26px",
        7: "28px",
        7.5: "30px",
        8: "32px",
        8.5: "34px",
        9: "36px",
        9.5: "38px",
        10: "40px",
        11: "44px",
        11.5: "47px",
        12: "48px",
        14: "56px",
        16: "64px",
        20: "80px",
        24: "96px",
        28: "112px",
        32: "128px",
        36: "144px",
        40: "160px",
        44: "176px",
        48: "192px",
        51: "207px",
        52: "208px",
        56: "224px",
        57: "235px",
        60: "240px",
        64: "256px",
        72: "288px",
        80: "320px",
        96: "384px",
        97.5: "390px",
        120: "480px",
        150: "600px",
        160: "640px",
        175: "700px",
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/6": "16.666667%",
        "2/6": "33.333333%",
        "3/6": "50%",
        "4/6": "66.666667%",
        "5/6": "83.333333%",
        "1/12": "8.333333%",
        "2/12": "16.666667%",
        "3/12": "25%",
        "4/12": "33.333333%",
        "5/12": "41.666667%",
        "6/12": "50%",
        "7/12": "58.333333%",
        "8/12": "66.666667%",
        "9/12": "75%",
        "10/12": "83.333333%",
        "11/12": "91.666667%",
      },
      borderRadius: {
        none: "0px",
        sm: "2px",
        DEFAULT: "4px",
        md: "6px",
        lg: "8px",
        xl: "12px",
        "2xl": "16px",
        "3xl": "24px",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        DEFAULT:
          "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.7)",
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.8)",
        inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.2)",
      },
      fontFamily: {
        sansef: ['Helvetica', 'Arial', 'sans-serif'],
        monse: ['Montserrat', 'sans-serif'],
        // monstserrat: ['Monstserrat'],
        mono: ["ui-monospace", "Menlo", "Consolas", "monospace"],
      },
      fontWeight: {
        hairline: 100,
        'extra-light': 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        'extra-bold': 800,
        black: 900,
      },
      fontSize: {
        0: "0",
        xxs: "11px",
        xs: "12px",
        "2xs": "13px",
        sm: "14px",
        "2sm": "15px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "30px",
        "4xl": "36px",
        "5xl": "48px",
        "6xl": "60px",
        "7xl": "72px",
        "8xl": "96px",
        "9xl": "128px",
      },
      letterSpacing: (theme) => ({
        ...theme("spacing"),
      }),
      lineHeight: (theme) => ({
        ...theme("spacing"),
      }),
      maxWidth: (theme) => ({
        ...theme("spacing"),
        xs: "160px",
        sm: "192px",
        md: "224px",
        lg: "256px",
        xl: "288px",
        "2xl": "336px",
        "3xl": "384px",
        "4xl": "448px",
        "5xl": "512px",
        "6xl": "576px",
        "7xl": "640px",
      }),
      minHeight: (theme) => ({
        ...theme("spacing"),
      }),
      minWidth: (theme) => ({
        ...theme("spacing"),
      }),
    },
  },
  corePlugins: {
    preflight: true,
    backgroundOpacity: false,
    borderOpacity: false,
    boxShadow: true,
    divideOpacity: false,
    placeholderOpacity: false,
    textOpacity: false,
  },
  plugins: [
  ],
}