import { useState } from "react";
import ButtonCustom from "../small/ButtonCustom";

export default function CardTaskList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsAlertOpen(true); // Tampilkan alert
      setIsModalOpen(false); // Tutup modal
    }, 2000);
  };

  const closeAlert = () => {
    setIsAlertOpen(false);
  };

  return (
    <>
      <div className="w-[1050px] h-[271px] bg-[#FFFFFF] mt-6 ml-14 rounded-[10px] mr-2 shadow-lg p-6 flex flex-col justify-between">
        <div>
          <h1>
            Due Date: <span className="font-bold">9 September 2024</span>
          </h1>
          <p className="mt-3 font-normal text-[14px] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra urna vitae dictum venenatis. Vestibulum vehicula, leo ut semper efficitur, est justo hendrerit leo, et pulvinar lectus felis a tortor. Vivamus vel nulla non ligula commodo mattis non et justo. Fusce condimentum faucibus malesuada. Vestibulum ut felis auctor, faucibus risus non, ullamcorper ipsum. Duis orci nulla, ullamcorper eget lectus non, congue auctor orci. Etiam feugiat purus ligula, quis tincidunt sapien fermentum id. Integer et elit ut lorem pulvinar efficitur sed at magna. Nullam id quam feugiat, lacinia nisl non, luctus ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc a euismod nunc. Pellentesque molestie erat nec nisl hendrerit tempus. Etiam vel nisl eget lectus ultricies imperdiet quis sit amet odio. Proin ut urna metus.
          </p>
        </div>
        <div className="flex justify-end">
          <ButtonCustom onClick={toggleModal} />
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[917px] h-[531px]">
            <h2 className="text-xl font-bold mb-4">Task Details</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra urna vitae dictum venenatis. Vestibulum vehicula, leo ut semper efficitur, est justo hendrerit leo, et pulvinar lectus felis a tortor. Vivamus vel nulla non ligula commodo mattis non et justo. Fusce condimentum faucibus malesuada. Vestibulum ut felis auctor, faucibus risus non, ullamcorper ipsum. Duis orci nulla, ullamcorper eget lectus non, congue auctor orci. Etiam feugiat purus ligula, quis tincidunt sapien fermentum id. Integer et elit ut lorem pulvinar efficitur sed at magna. Nullam id quam feugiat, lacinia nisl non, luctus ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc a euismod nunc. Pellentesque molestie erat nec nisl hendrerit tempus. Etiam vel nisl eget lectus ultricies imperdiet quis sit amet odio. Proin ut urna metus.
            </p>

            <div className="mt-4">
              <textarea
                id="largeTextarea"
                className="block w-[841px] h-[204px] p-4 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-lg resize-none shadow-xl"
                placeholder="Your Answer"
                rows={4}
              />
            </div>



            <div className="flex justify-end mt-4 gap-4">
              <button
                className={`px-4 py-2 rounded-md text-white ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#125B9A] hover:bg-blue-600'}`}
                onClick={handleSubmit}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="animate-spin rounded-full border-t-2 border-b-2 border-white w-6 h-6"></div>
                ) : (
                  'Submit'
                )}
              </button>

              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-400"
                onClick={toggleModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {isAlertOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
            <h2 className="text-xl font-bold mb-4">Success!</h2>
            <p className="mb-4">Your task has been submitted successfully.</p>
            <div className="flex justify-end">
              <button
                className="bg-[#125B9A] text-white px-4 py-2 rounded-md hover:bg-blue-600"
                onClick={closeAlert}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
