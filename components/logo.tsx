import { NextPage } from "next";

interface Props {
  className?: string;
  onClick?: () => void;
}

const Logo: NextPage<Props> = ({ className, onClick }) => (
  <svg
    className={`${className} fill-current`}
    viewBox="0 0 426 100"
    fill="none"
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M188.552 41.422L188.549 41.4236C187.919 41.7362 187.401 41.9937 187.02 42.1788C187.013 42.1824 187.005 42.1862 186.995 42.1902L186.983 42.1956C186.97 42.2008 186.956 42.2063 186.941 42.2121L186.918 42.2212C186.63 42.3329 185.994 42.5792 185.994 43.3892C185.994 44.357 186.834 44.5564 187.241 44.6529C187.304 44.6678 187.356 44.6803 187.393 44.6927C190.637 45.8002 190.522 49.9478 190.479 51.5009C190.475 51.6453 190.472 51.7672 190.472 51.8622V87.6164C190.472 92.9236 189.725 96.0894 187.207 98.6034H218.455C215.937 96.0894 215.19 92.9236 215.19 87.6164V35.6611C215.19 33.7989 215.097 32.0298 212.392 32.0298C207.465 32.0298 193.942 38.7454 188.552 41.422Z"
      fill="currentColor"
    />
    <path
      d="M202.598 27.1881C210.806 27.1881 216.217 21.7877 216.217 13.594C216.217 5.40037 210.806 0 202.598 0C194.389 0 188.979 5.40037 188.979 13.594C188.979 21.7877 194.389 27.1881 202.598 27.1881Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.3196 14.8976C18.6557 40.7821 15.7641 55.3073 8.20851 80.54L7.95695 81.3747C5.72607 88.7806 3.68635 95.5519 0 98.6033H31.5281C37.0316 98.6033 38.3375 93.1099 38.3375 88.7337C38.3375 81.0056 35.166 73.3706 31.9013 65.5493H45.6132C47.4788 76.1639 48.6914 85.3817 48.6914 88.4544C48.6914 92.2719 47.4788 96.1825 45.3334 98.6033H83.8574C80.1711 95.5519 78.1313 88.7806 75.9004 81.3746L75.6489 80.54C68.0933 55.3073 65.2017 40.7821 60.5378 14.8976C59.8848 11.2663 60.5378 7.44879 62.5899 5.49349H21.2675C23.3196 7.44879 23.9726 11.2663 23.3196 14.8976ZM30.8752 23.743C36.0988 23.743 41.3224 43.4823 44.7737 61.3594H30.129C27.1441 54.0037 24.439 46.3687 24.439 38.175C24.439 30.7263 26.0247 23.743 30.8752 23.743Z"
      fill="currentColor"
    />
    <path
      d="M88.0549 44.4134V87.6164C88.0549 92.9236 87.3087 96.0894 84.7902 98.6034H116.038C113.52 96.0894 112.774 92.9236 112.774 87.6164V62.2905C112.774 57.1695 113.893 50.0931 121.728 50.0931C127.16 50.0931 128.961 53.0459 130.401 55.4063C131.36 56.9778 132.158 58.2868 133.761 58.2868C135.175 58.2868 136.92 54.7866 138.996 50.6228C139.385 49.8426 139.785 49.0391 140.198 48.2309C140.806 47.0159 141.44 45.7882 142.045 44.6173L142.049 44.609C143.76 41.2973 145.235 38.4414 145.235 37.6164C145.235 33.9851 138.519 32.0298 133.575 32.0298C123.627 32.0298 119.404 38.0016 116.694 41.8322C115.415 43.6408 114.474 44.9721 113.427 44.9721C113.054 44.9721 112.774 44.9721 112.774 42.7374V41.1546C112.774 36.406 111.654 33.4264 107.643 33.4264H84.7902C87.3087 35.9404 88.0549 39.1061 88.0549 44.4134Z"
      fill="currentColor"
    />
    <path
      d="M175.27 13.9665C176.39 13.9665 177.043 14.8976 177.043 16.2011V33.4264H185.065V38.0819H177.043V75.6983C177.043 76.2734 177.04 76.8525 177.037 77.433C177.003 84.1839 176.968 91.1185 181.52 93.9479C182.03 94.2662 182.54 94.3233 183.11 94.3871C183.374 94.4167 183.65 94.4476 183.945 94.5065C183.479 97.8585 178.255 100 173.778 100C155.868 100 153.35 86.6853 153.35 73.9292L153.35 43.8699C153.352 41.1201 153.354 38.0819 149.059 38.0819H146.168V33.4264C151.95 33.4264 160.192 26.096 166.558 20.4333C170.565 16.8696 173.829 13.9665 175.27 13.9665Z"
      fill="currentColor"
    />
    <path
      d="M218.922 33.4264H251.569C249.391 38.4994 251.01 44.6301 252.817 51.4754L252.968 52.0484C253.545 54.2147 254.146 56.5291 254.765 58.9127C258.746 74.2532 263.471 92.4581 267.427 92.4581C270.691 92.4581 274.143 81.6573 274.143 71.229C274.143 54.823 266.081 50.6869 261.099 48.1306C258.871 46.9874 257.259 46.1601 257.259 44.6927C257.259 38.8268 269.199 32.0298 278.9 32.0298C286.269 32.0298 289.067 37.8957 289.067 43.9479C289.067 51.3716 283.647 66.6589 277.988 82.6223L277.987 82.6248L277.984 82.6316L277.977 82.652C276.755 86.0997 275.521 89.5788 274.329 93.0168C272.401 98.6063 269.751 98.6049 267.178 98.6034L246.625 98.6033C239.476 98.6033 236.646 87.4579 234.326 78.3228L234.323 78.3118C234.162 77.6777 234.004 77.0534 233.846 76.4432C231.975 69.1279 230.56 64.4144 228.294 56.8663C227.849 55.3837 227.371 53.7909 226.85 52.0484C226.564 51.0823 226.284 50.1146 226.007 49.1544L226.007 49.152C224.122 42.6176 222.337 36.4298 218.922 33.4264Z"
      fill="currentColor"
    />
    <path
      d="M293.957 41.422C293.326 41.7354 292.806 41.9934 292.425 42.1788C292.401 42.1908 292.366 42.2044 292.323 42.221C292.035 42.3327 291.399 42.5792 291.399 43.3892C291.399 44.357 292.239 44.5564 292.645 44.6529C292.708 44.6678 292.761 44.6803 292.798 44.6927C296.041 45.8002 295.927 49.9478 295.884 51.5009C295.88 51.6453 295.876 51.7672 295.876 51.8622V87.6164C295.876 92.9236 295.13 96.0894 292.612 98.6034H323.86C321.341 96.0894 320.595 92.9236 320.595 87.6164V35.6611C320.595 33.7989 320.502 32.0298 317.797 32.0298C312.87 32.0298 299.347 38.7454 293.957 41.422Z"
      fill="currentColor"
    />
    <path
      d="M308.003 27.1881C316.211 27.1881 321.621 21.7877 321.621 13.594C321.621 5.40037 316.211 0 308.003 0C299.794 0 294.384 5.40037 294.384 13.594C294.384 21.7877 299.794 27.1881 308.003 27.1881Z"
      fill="currentColor"
    />
    <path
      d="M355.761 32.0298C372.178 32.0298 385.704 37.8026 385.704 43.203C385.704 49.4413 380.387 55.8659 377.029 55.8659C370.73 55.8659 365.32 51.1369 359.995 46.4813C354.832 41.9678 349.748 37.5233 344.008 37.5233C340.743 37.5233 336.546 39.2924 336.546 43.9479C336.546 48.5102 342.796 50.3724 350.631 51.7691C367.141 54.6555 385.517 59.4972 385.517 77.4674C385.517 94.6927 368.074 100 357.534 100C344.754 100 326.192 96.3687 326.192 91.6201C326.192 87.6164 331.322 74.2086 335.147 74.2086C337.185 74.2086 339.742 75.838 342.994 77.9102C348.674 81.5293 356.473 86.4991 367.328 86.4991C373.764 86.4991 380.48 82.7747 380.48 77.933C380.48 75.6983 379.081 75.0465 376.562 75.0465C375.144 75.0465 373.379 75.251 371.3 75.4918C368.32 75.837 364.694 76.257 360.518 76.257C345.407 76.257 325.726 70.2979 325.726 52.0484C325.726 36.4991 341.676 32.0298 355.761 32.0298Z"
      fill="currentColor"
    />
    <path
      d="M417.978 16.2011C417.978 14.8976 417.325 13.9665 416.203 13.9665C414.761 13.9665 411.497 16.8702 407.491 20.4344C401.125 26.0969 392.886 33.4264 387.106 33.4264V38.0819H389.991C394.286 38.0819 394.284 41.12 394.282 43.8698L394.282 73.9292C394.282 86.6853 396.801 100 414.713 100C419.191 100 424.414 97.8585 424.881 94.5065C424.586 94.4476 424.309 94.4167 424.046 94.3871C423.476 94.3233 422.966 94.2662 422.455 93.9479C417.903 91.1185 417.938 84.1839 417.972 77.4331C417.975 76.8525 417.978 76.2734 417.978 75.6983V38.0819H426V33.4264H417.978V16.2011Z"
      fill="currentColor"
    />
  </svg>
);

export default Logo;
