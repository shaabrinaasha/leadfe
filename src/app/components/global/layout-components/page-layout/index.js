import React from 'react'
import ContentLayout from "../content-layout";
import Wrapper from "../wrapper";
import Header from "../header";
import TitleBar from "../title-bar";
import dynamic from "next/dynamic";

const Sidebar = dynamic(() => import("../sidebar"), {
    ssr: false,
  });

export default function PageLayout({children, title}) {
  return (
    <main className="flex">
      <Sidebar/>
      <div className="flex-col w-full">
        <Header></Header>
        <Wrapper>
          <ContentLayout>
            <TitleBar title={title}></TitleBar>
            <div className="px-3 py-3">{children}</div>
          </ContentLayout>
        </Wrapper>
      </div>
    </main>
  )
}
