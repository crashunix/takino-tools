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
          path: "/password-generator"
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
            <div className="grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
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
