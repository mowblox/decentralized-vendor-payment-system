import Image from "next/image";

function SpiralImage() {
  return (
    <div className="relative pt-40">
      <Image
        className="mb-10 transform -translate-x-[30px]" 
        src="/images/landingPage/moon.png"
        width={200}
        height={100}
        alt="spiral-img"
      />
    </div>
  );
}

export default SpiralImage;
