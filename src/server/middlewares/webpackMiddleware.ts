import webpack from "webpack";
import whm from "webpack-hot-middleware";
import wdm from "webpack-dev-middleware";
import errorOverlay from "react-dev-utils/errorOverlayMiddleware";
import openBrowser from "react-dev-utils/openBrowser";

export const webpackMiddleware = () => {
  openBrowser();
};
