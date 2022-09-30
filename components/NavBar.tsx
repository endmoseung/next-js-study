import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  console.log(router);

  const handleReload = () => {
    router.reload();
  };
  return (
    <nav>
      <Link href="/">
        <a>home</a>
      </Link>
      <Link href="/login">login</Link>
      <div onClick={handleReload}>reload</div>
    </nav>
  );
}
