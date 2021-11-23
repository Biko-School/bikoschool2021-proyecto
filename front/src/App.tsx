import React from "react";
import { MemeList } from "./pages/MemeList/MemeList";
import { Header } from "./components/Header/Header";
import { PageContainer } from "./components/PageContainer/PageContainer";
import "./components/reset.css";
import "./components/reboot.css";

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
