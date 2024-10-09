export default function SignIn() {
  return (
    <div className="w-screen h-screen bg-purple-dark flex justify-around items-center">
      <div>
        <h1 className="font-bold text-white text-6xl">Feedback-pro</h1>
      </div>
      <form action="" className="flex flex-col gap-8">
        <h1 className="font-bold text-white text-4xl">Crie a sua conta</h1>
        <div className="flex flex-col">
          <label htmlFor="name" className="text-white">
            Nome
          </label>
          <input
            type="text"
            id="name"
            className="w-[30rem] h-[3rem] outline-none bg-zinc-800 rounded-md px-2"
            placeholder="Digite o seu nome"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="name" className="text-white">
            Email
          </label>
          <input
            type="text"
            id="name"
            className="w-[30rem] h-[3rem] outline-none bg-zinc-800 rounded-md px-2"
            placeholder="Digite o seu email"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="name" className="text-white">
            Senha
          </label>
          <input
            type="password"
            id="name"
            className="w-[30rem] h-[3rem] outline-none bg-zinc-800 rounded-md px-2"
            placeholder="Digite a sua senha"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="name" className="text-white">
            Confirme a sua senha
          </label>
          <input
            type="password"
            id="name"
            className="w-[30rem] h-[3rem] outline-none bg-zinc-800 rounded-md px-2"
            placeholder="Confirme a sua senha"
          />
        </div>

        <button className="w-[30rem] h-[3rem] font-bold text-white bg-zinc-800 rounded-md">
          Cadastrar
        </button>
      </form>
    </div>
  );
}
