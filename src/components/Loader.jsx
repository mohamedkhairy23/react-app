import React from "react";
import { Spinner } from "flowbite-react";
const Loader = () => {
  return (
    <div class="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
      <div class="flex justify-center items-center">
        <div
          class="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full"
          role="status"
          aria-label="loading"
        >
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
