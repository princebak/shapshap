import { Fragment } from "react";
import Link from "next/link";
import AppStore from "./app-store";
import Image from "components/BazaarImage";
import { Paragraph } from "components/Typography";
export default function LogoSection() {
  return (
    <Fragment>
      <Link href="/">
        <Image mb={2.5} src="/assets/images/logo.svg" alt="logo" />
      </Link>

      <Paragraph mb={2.5} color="grey.500">
        Shapshap Description, Shapshap Description, Shapshap Description,
        Shapshap Description, Shapshap Description, Shapshap Description,
        Shapshap Description, Shapshap Description, Shapshap Description,
        Shapshap Description.
      </Paragraph>
    </Fragment>
  );
}
