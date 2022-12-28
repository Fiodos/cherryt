export default function CampaignInfo() {
  return (
    <div>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Campaign Goal (in $)
        </label>
        <input
          type="text"
          id="goal"
          className="font-mono bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-violet-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500"
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Receiver Address
        </label>
        <input
          type="text"
          id="address"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-violet-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500"
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Campaign Name
        </label>
        <input
          type="text"
          id="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-violet-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500"
        />
      </div>
      <div className="mb-6 h-80 w-80">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Campaign Description
        </label>
        <div className="flex justify-center">
          <div className="mb-3 xl:w-96">
            <textarea
              className="
	  form-control
	  block
	  w-full
	  px-3
	  py-1.5
	  text-base
	  font-normal
	  text-gray-700
	  bg-gray-50 bg-clip-padding
	  border border-solid border-gray-300
	  rounded-lg
	  transition
	  ease-in-out
	  m-0
	  focus:text-gray-700 focus:bg-white focus:border-violet-500 focus:outline-none
	"
              id="description"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
