import ToolItem from "@/components/tool-item";
import { Section } from "@/types/section";
import Image from "next/image";

export default function Home() {

  const sections: Section[] = [
    {
      title: "Generators",
      tools: [
        {
          name: "Password generator",
          description: "Custom password generator",
          path: "/password-generator"
        },
        {
          name: "CNPJ generator",
          description: "Generate a new random CNPJ",
          path: "/cnpj-generator"
        },
        {
          name: "CPF generator",
          description: "Generate a new random CPF",
          path: "/cpf-generator"
        },
        {
          name: "RG generator",
          description: "Generate a new random RG",
          path: "/rg-generator"
        }
      ]
    },
    {
      title: "Validators",
      tools: [
        {
          name: "CPF Validator",
          description: "Validate cpf",
          path: "/cpf-validator"
        },
        {
          name: "CNPJ Validator",
          description: "Validate cnpj",
          path: "/cnpj-validator"
        }
      ]
    }
  ]

  return (
    <main className="flex flex-col space-y-10">
      {sections.map((section, index) => (
        <section key={index}>
          <div className="container mx-auto px-4 space-y-4">
            <h2 className="text-bold">{section.title}</h2>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
              {section.tools.map((tool, index) => (
                <ToolItem key={index} tool={tool} />
              ))}
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
