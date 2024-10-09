import Image from "next/image";
import iphoneImg from "../assets/iphone.svg";
import ipadImg from "../assets/ipad.svg";
import iphoneContentImg from "../assets/iphone-content.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-purple-dark flex flex-col items-center">
      <div className="flex flex-col items-center mt-12">
        <h1 className="font-bold text-white text-6xl">Feedback-pro</h1>
        <h2 className="font-bold text-white text-4xl">
          O feedback do seu cliente na palma da sua mão
        </h2>
        <div className="flex">
          <div>
            <Image
              src={iphoneImg}
              alt="Imagem de iphone"
              width={400}
              height={600}
            />
          </div>
          <Image
            src={ipadImg}
            alt="Imagem de iphone"
            width={1100}
            height={400}
          />
        </div>
        <Link href="/signin" className="text-zinc-400 mt-12">
          <span>
            Não possui uma conta? <u>Clique aqui</u> para se cadastrar
          </span>
        </Link>
      </div>
    </div>
  );
}
