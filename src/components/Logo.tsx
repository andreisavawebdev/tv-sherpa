import Image from "next/image";
import SherpaLogo from "@/../public/tv-sherpa-logo.svg";

interface Props {
  size: number; // Logo image size
}

export function Logo({ size }: Props) {
  return <Image src={SherpaLogo} width={size} height={size} alt="Logo" />;
}
