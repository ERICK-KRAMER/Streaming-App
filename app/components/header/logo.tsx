import Image from "next/image"
import img from "@/public/image.png";

const Logo = () => {
  return <Image src={img} alt="Dramatic-logo" width={130} height={10} className="cursor-pointer" />
}

export { Logo };