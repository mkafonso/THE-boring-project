import { Aside, Header } from "..";

type AppLayoutProps = {
  children: React.ReactNode;
};

export function AppLayout(props: AppLayoutProps) {
  const { children } = props;

  return (
    <main>
      <Aside />
      <div className="w-full pl-80">
        <Header />
        <div className="max-w-7xl m-auto">{children}</div>
      </div>
    </main>
  );
}
