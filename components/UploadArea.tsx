import { NextPage } from "next";

interface Props {
  coverUrl: string;
  setCover: (e: any) => void;
}

const UploadArea: NextPage<Props> = ({ coverUrl, setCover }) => {
  return (
    <div className="flex pl-2">
      <div>
        <p className="flex justify-center mb-3 text-black font-semibold">
          Upload a campaign cover
        </p>
        <label
          htmlFor="dropzone-file"
          className="flex flex-col justify-center items-center w-64 h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-purple-900"
        >
          <div className="flex flex-col justify-center items-center pt-5 pb-6">
            <svg
              aria-hidden="true"
              className="mb-3 w-10 h-10 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              ></path>
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={setCover}
          />
        </label>
      </div>
      <div className="ml-6 mt-9">
        {coverUrl && (
          <img src={coverUrl} width="200px" className="rounded-lg" />
        )}
      </div>
    </div>
  );
};

export default UploadArea;
