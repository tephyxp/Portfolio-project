import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href='/'>
      <Image src='/logo-sc-developer.png' width={56} height={56} priority alt=''/>
    </Link>
  )
}

export default Logo