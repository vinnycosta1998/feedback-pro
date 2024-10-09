"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const signUpBodySchema = z.object({
  name: z.string(),
  email: z.string().email(),
  cnpj: z.string(),
  password: z
    .string()
    .min(8, "A senha deve conter no minímo 8 caractheres")
    .max(14, "A senha deve conter no máximo 14 caractheres"),
  password_confitmation: z
    .string()
    .min(8, "A senha de confirmação deve conter no minímo 8 caractheres")
    .max(14, "A senha de confirmação deve conter no máximo 14 caractheres"),
});

type SignUpData = z.infer<typeof signUpBodySchema>;

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpBodySchema),
  });

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
            {...register("name")}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="cnpj" className="text-white">
            CNPJ
          </label>
          <input
            type="text"
            id="cnpj"
            className="w-[30rem] h-[3rem] outline-none bg-zinc-800 rounded-md px-2"
            placeholder="Digite o CNPJ"
            {...register("cnpj")}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-white">
            Email
          </label>
          <input
            type="text"
            id="email"
            className="w-[30rem] h-[3rem] outline-none bg-zinc-800 rounded-md px-2"
            placeholder="Digite o seu email"
            {...register("email")}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className="text-white">
            Senha
          </label>
          <input
            type="password"
            id="password"
            className="w-[30rem] h-[3rem] outline-none bg-zinc-800 rounded-md px-2"
            placeholder="Digite a sua senha"
            {...register("password")}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password_confirmation" className="text-white">
            Confirme a sua senha
          </label>
          <input
            type="password"
            id="password_confirmation"
            className="w-[30rem] h-[3rem] outline-none bg-zinc-800 rounded-md px-2"
            placeholder="Confirme a sua senha"
            {...register("password_confirmation")}
          />
        </div>

        <button className="w-[30rem] h-[3rem] font-bold text-white bg-zinc-800 rounded-md">
          Cadastrar
        </button>
      </form>
    </div>
  );
}
