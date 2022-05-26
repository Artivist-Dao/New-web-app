import { NextPage } from "next";

interface Props {
  className?: string;
  onClick?: () => void;
}

const IconClose: NextPage<Props> = ({ className, onClick }) => {
  return (
    <>
      <svg
        onClick={onClick}
        className={`${className} fill-current`}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 3.2C0 1.43269 1.43269 0 3.2 0H16.8C18.5673 0 20 1.43269 20 3.2V16.8C20 18.5673 18.5673 20 16.8 20H3.2C1.43269 20 0 18.5673 0 16.8V3.2ZM3.2 1.6C2.31634 1.6 1.6 2.31634 1.6 3.2V16.8C1.6 17.6837 2.31634 18.4 3.2 18.4H16.8C17.6837 18.4 18.4 17.6837 18.4 16.8V3.2C18.4 2.31634 17.6837 1.6 16.8 1.6H3.2ZM14.9657 5.03435C15.2782 5.34677 15.2782 5.85331 14.9657 6.16572L11.1314 10.0001L14.9656 13.8342C15.278 14.1466 15.278 14.6532 14.9656 14.9656C14.6531 15.278 14.1466 15.278 13.8342 14.9656L10 11.1314L6.16582 14.9657C5.8534 15.2781 5.34687 15.2781 5.03445 14.9657C4.72203 14.6532 4.72203 14.1467 5.03445 13.8343L8.86867 10.0001L5.03426 6.16565C4.72184 5.85324 4.72184 5.3467 5.03426 5.03428C5.34668 4.72186 5.85321 4.72187 6.16563 5.03428L10 8.86869L13.8344 5.03435C14.1468 4.72193 14.6533 4.72193 14.9657 5.03435Z"
          fill="currentColor"
        />
      </svg>
    </>
  );
};

export default IconClose;