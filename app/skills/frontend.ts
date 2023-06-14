import HTML from "@/public/frontend-svgs/svg-html-5.svg";
import CSS from "@/public/frontend-svgs/svg-css-3.svg";
import SASS from "@/public/frontend-svgs/svg-sass.svg";
import Less from "@/public/frontend-svgs/svg-less.svg";
import JavaScript from "@/public/frontend-svgs/svg-javascript.svg";
import TypeScript from "@/public/frontend-svgs/svg-typescript.svg";
import ESLint from "@/public/frontend-svgs/svg-eslint.svg";
import Webpack from "@/public/frontend-svgs/svg-webpack.svg";
import Babel from "@/public/frontend-svgs/svg-babel.svg";
import Gatsby from "@/public/frontend-svgs/svg-gatsbyjs.svg";
import Vue from "@/public/frontend-svgs/svg-vuejs.svg";
import React from "@/public/frontend-svgs/svg-react.svg";
import ReactRouter from "@/public/frontend-svgs/svg-react-router.svg";
import Redux from "@/public/frontend-svgs/svg-redux.svg";
import ReduxSaga from "@/public/frontend-svgs/svg-redux-saga.svg";
import Tailwind from "@/public/frontend-svgs/svg-tailwindcss.svg";
import MaterialUI from "@/public/frontend-svgs/svg-material-ui.svg";
import Chakra from "@/public/frontend-svgs/svg-chakra-ui.svg";
import Bootstrap from "@/public/frontend-svgs/svg-bootstrap.svg";
import StyledComponents from "@/public/frontend-svgs/svg-styled-components.svg";
import ReactQuery from "@/public/frontend-svgs/svg-react-query.svg";
import NextJs from "@/public/frontend-svgs/svg-next.svg";
import Jest from "@/public/frontend-svgs/svg-jest.svg";
import RTL from "@/public/frontend-svgs/svg-react-testing-library.svg";
import ReactStorybook from "@/public/frontend-svgs//svg-react-storybook.svg";
import Flux from "@/public/frontend-svgs/svg-flux.svg";
import ReactNative from "@/public/frontend-svgs/svg-react.svg";
import PWA from "@/public/frontend-svgs/svg-pwa.svg";
import Figma from "@/public/frontend-svgs/svg-figma.svg";

import {
  FaHtml5,
  FaSass,
  FaJs,
  FaVuejs,
  FaReact,
  FaBootstrap,
  FaFigma,
} from "react-icons/fa";
import {
  SiLess,
  SiRedux,
  SiReduxsaga,
  SiReactrouter,
  SiEslint,
  SiWebpack,
  SiBabel,
  SiCss3,
  SiNextdotjs,
  SiTailwindcss,
  // SiMaterialui,
  SiChakraui,
  SiStyledcomponents,
  SiJest,
  SiGatsby,
  SiPwa,
  SiTypescript,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import "./skills.css";
import { ReactComponentElement } from "react";
const className = "skills-dark-icons";

// type frontend = {
//   name: String;
//   icon: ReactComponentElement;
//   svg: SVGAElement;
//   value: Number;
// };

const FrontEnd: {
  name: String;
  // icon: ReactComponentElement;
  svg: SVGAElement;
  value: Number;
}[] = [
  {
    name: "HTML 5",
    // icon: <FaHtml5 className={className} />,
    svg: HTML,
    value: 80,
  },
  {
    name: "CSS 3",
    // icon: <SiCss3 className={className} />,
    svg: CSS,
    value: 80,
  },
  // {
  //   name: "SASS",
  //   icon: <FaSass className={className} />,
  //   svg: SASS,
  //   value: 70,
  // },
  // {
  //   name: "Less",
  //   icon: <SiLess className={className} />,
  //   svg: Less,
  //   value: 50,
  // },
  // {
  //   name: "JavaScript",
  //   icon: <FaJs className={className} />,
  //   svg: JavaScript,
  //   value: 70,
  // },
  // {
  //   name: "TypeScript",
  //   icon: <SiTypescript className={className} />,
  //   svg: TypeScript,
  //   value: 60,
  // },
  // {
  //   name: "ESLint",
  //   icon: <SiEslint className={className} />,
  //   svg: ESLint,
  //   value: 57,
  // },

  // {
  //   name: "Webpack",
  //   icon: <SiWebpack className={className} />,
  //   svg: Webpack,
  //   value: 50,
  // },
  // {
  //   name: "Babel",
  //   icon: <SiBabel className={className} />,
  //   svg: Babel,
  //   value: 80,
  // },
  // {
  //   name: "Vue Js",
  //   icon: <FaVuejs className={className} />,
  //   svg: Vue,
  //   value: 45,
  // },
  // {
  //   name: "React Js",
  //   icon: <FaReact className={className} />,
  //   svg: React,
  //   value: 90,
  // },
  // {
  //   name: "React Router",
  //   icon: <SiReactrouter className={className} />,
  //   svg: ReactRouter,
  //   value: 90,
  // },
  // {
  //   name: " Redux / Redux Toolkit",
  //   icon: <SiRedux className={className} />,
  //   svg: Redux,
  //   value: 80,
  // },
  // {
  //   name: "Redux Saga",
  //   icon: <SiReduxsaga className={className} />,
  //   svg: ReduxSaga,
  //   value: 70,
  // },
  // {
  //   name: "Next Js",
  //   icon: <SiNextdotjs className={className} />,
  //   svg: NextJs,
  //   value: 40,
  // },
  // {
  //   name: "Bootstrap",
  //   icon: <FaBootstrap className={className} />,
  //   svg: Bootstrap,
  //   value: 80,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: <SiTailwindcss className={className} />,
  //   svg: Tailwind,
  //   value: 80,
  // },
  // {
  //   name: "MaterialUI",
  //   icon: <SiMaterialui className={className} />,
  //   svg: MaterialUI,
  //   value: 80,
  // },
  // {
  //   name: "Chakra UI",
  //   icon: <SiChakraui className={className} />,
  //   svg: Chakra,
  //   value: 80,
  // },
  // {
  //   name: "Styled Components",
  //   icon: <SiStyledcomponents className={className} />,
  //   svg: StyledComponents,
  //   value: 80,
  // },
  // {
  //   name: "React Query",
  //   icon: <TbBrandReactNative className={className} />,
  //   svg: ReactQuery,
  //   value: 60,
  // },
  //   {
  //     name: "React Testing Library",
  //   icon:<FaHtml5 className={className} />,
  //   svg: RTL,
  //      value: 80,
  //   }
  // {
  //   name: "Jest",
  //   icon: <SiJest className={className} />,
  //   svg: Jest,
  //   value: 50,
  // },
  //    {
  //     name: "Flux",
  //   icon:<FaHtml5 className={className} />,
  //   svg: Flux,
  //     value: 80,
  //    },
  // {
  //   name: "Gatsby Js",
  //   icon: <SiGatsby className={className} />,
  //   svg: Gatsby,
  //   value: 80,
  // },
  // {
  //   name: "React Native",
  //   icon: <FaReact className={className} />,
  //   svg: ReactNative,
  //   value: 30,
  // },
  // {
  //   name: "Progressive Web Apps",
  //   icon: <SiPwa className={className} />,
  //   svg: PWA,
  //   value: 30,
  // },
  // {
  //   name: "Figma",
  //   icon: <FaFigma className={className} />,
  //   svg: Figma,
  //   value: 80,
  // },
];
export default FrontEnd;
