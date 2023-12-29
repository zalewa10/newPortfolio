import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Container from "./ui/container";
import PortfolioCard from "./elements/PortfolioCard";
import { portfolio } from "@/constants";

const Portfolio = () => {
  return (
    <main className="px-4 sm:px-6 lg:px-8 py-20 sm:py-6 lg:py-8">
      <Container>
        <div className="px-4 sm:px-6 lg:px-8 lg:pt-32 flex flex-col md:flex-row items-center w-full">
          <div className="flex flex-col items-start gap-6 w-full">
            <h1 className="scroll-m-20 text-center md:text-left text-4xl font-extrabold tracking-tight lg:text-6xl w-full">
              Portfolio
            </h1>
            <Tabs defaultValue="account">
              <div className="flex w-full items-center justify-center mx-auto md:block">
                <TabsList>
                  <TabsTrigger value="account">Websites</TabsTrigger>
                  <TabsTrigger value="password">Projects</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="account">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
                  {portfolio.map((project, index) => (
                    <PortfolioCard key={index} project={project} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="password">
                <h1 className="scroll-m-20 text-center md:text-left text-4xl font-extrabold tracking-tight lg:text-6xl">
                  Personal projects
                </h1>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Portfolio;
