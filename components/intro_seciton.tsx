import { NextPage } from "next";
import IconDot from "./icons/icon_dot";

interface Props {
  className?: string;
}

const IntroSection: NextPage<Props> = ({ className }) => {
  return (
    <>
      <div className={`${className} intro-background text-on-primary h-[23rem] xl:h-[32rem] 2xl:h-[44rem]`}>
        <div className="page-max-width relative h-full">
            <img
              src="intro-section-image.png"
              alt="human-kindness"
              className="absolute right-0 bottom-0 w-7/12  3xl:w-auto"
            />
          <div className="content-max-width flex flex-col justify-end pb-[6%] h-full">
            <div className="w-[43%] 3xl:w-[43.5%] space-y-5 xl:space-y-10">
              <div className="space-y-5 xl:space-y-10">
                <IconDot className="w-4 aspect-square" />
                <h4 className="text-2xl xl:text-[2rem] 2xl:text-[2.55rem] leading-tight font-alfaslabone">
                  We connect artists, NGOs, and activist consumers in a creative
                  economy network
                </h4>
                <p className="font-medium xl:text-2xl 2xl:text-3xl leading-snug">
                  Artivist is a collaborative space where people working towards
                  positive transformation can use the potential of web3 to
                  secure resources to support their causes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroSection;
