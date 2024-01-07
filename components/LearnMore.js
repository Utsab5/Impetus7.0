import { Typography } from "@mui/material";
import { useRouter } from "next/router";

const styles = {
  color: "#57B8FF",
  cursor: "pointer",
};

export default function LearnMore({ link }) {
  const router = useRouter();

  const changePage = () => {
    router.push(link);
  };

  return (
    <Typography className="mt-1" onClick={changePage} sx={styles}>
      <a
        href="#"
        className="inline-flex items-center px-3 py-1.5 mt-1 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Read more
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </Typography>
  );
}
