import Image from "next/image";
// CUSTOM COMPONENTS

import { H5 } from "components/Typography";
import FlexRowCenter from "components/flex-box/flex-row-center";
// IMPORT IMAGES

import logo from "../../../../public/assets/images/bazaar-black-sm.svg";
import Link from "next/link";

export default function LogoWithTitle() {
  return (
    <FlexRowCenter flexDirection="column" gap={1.5} mb={4}>
      <Link href={"/"} title="Go to Home page">
        <Image src={logo} alt="bazaar" />
      </Link>

      <H5 fontWeight={700}>Welcome To ShapShap</H5>
    </FlexRowCenter>
  );
}
