import React from "react";
import { MemeList } from "./pages/MemeList";
import { Header } from "./components/Header/Header";
import { PageContainer } from "./components/PageContainer/PageContainer";

export const App: React.FC = () => {
  return (
    <PageContainer>
      <Header />
      <main>
        <MemeList />
      </main>
    </PageContainer>
  );
};
