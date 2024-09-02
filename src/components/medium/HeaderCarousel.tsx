import { useState, useEffect } from "react";

// Dummy array of image URLs
const images: string[] = [
  "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1581726690015-c9861fa5057f?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const shuffleArray = (array: string[]): string[] => {
  return array.sort(() => Math.random() - 0.5);
};
export default function HeaderCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shuffledImages, setShuffledImages] = useState<string[]>([]);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    setShuffledImages(shuffleArray([...images]));

    const intervalId = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === shuffledImages.length - 1 ? 0 : prevIndex + 1
        );
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [shuffledImages.length]);

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === shuffledImages.length - 1 ? 0 : prevIndex + 1
      );
      setFade(true);
    }, 500);
  };

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? shuffledImages.length - 1 : prevIndex - 1
      );
      setFade(true);
    }, 500);
  };

  return (
    <div>
      <div className="w-[330px] h-[308px] rounded-[10px] relative bg-gray-900 md:w-[1318px]">
        <img
          src={shuffledImages[currentIndex]}
          alt="Carousel"
          className={`w-full h-full object-cover rounded-[10px] transition-opacity duration-500 ${
            fade ? "opacity-30" : "opacity-10"
          }`}
        />
        <div
          className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 cursor-pointer bg-white rounded-full"
          onClick={handlePrev}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-[50px] w-[50px] text-[#125B9A]"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <div
          className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 cursor-pointer bg-white rounded-full"
          onClick={handleNext}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-[50px] w-[50px] text-[#125B9A]"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
