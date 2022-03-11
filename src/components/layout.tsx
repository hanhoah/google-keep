import Header from "./Header";
import Footer from "./Footer";
import { Layout } from "antd";

const { Sider, Content } = Layout;

export default function AppLayout({ children }) {
  return (
    <>
      <Layout>
        <Header />
        <Layout>
          <Sider style={{ background: "#eee" }}>Sider</Sider>
          <Content>
            <main>{children}</main>
          </Content>
        </Layout>
        <Footer />
      </Layout>
    </>
  );
}
