import EditorForm from "@/components/editor/editor-form";
import PageLayout from "@/components/page-layout";
import UserMenu from "@/components/user-menu";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Keyword",
};

export default function Dashboard() {
  return (
    <PageLayout>
      <div className="h-full md:px-5 pb-5 flex flex-col border border-red-500 w-full">
        <div className="self-end">
          <UserMenu />
        </div>
        <div className="w-full flex flex-col md:px-10 lg:px-20 mt-40">
          <EditorForm />
        </div>
      </div>
    </PageLayout>
  );
}
