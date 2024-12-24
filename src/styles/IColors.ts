interface IBaseColors {
  [key: string]: string | IBaseColors;
}

export interface IColors extends IBaseColors {
  white: string,
  textBlack: string,
  textOrange: string,
  textGray: string;
  textBlue: string;
  gray: string;
  grayCartBorder: string;
  input: {
    borderColor: string;
    placeholderColor: string;
  },
  button: {
    buttonOrange: string;
    buttonDisable: string;
    buttonRed: string;
  },
}
