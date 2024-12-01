import About from "@/components/about";
import BasicElements from "@/components/basic-elements";
import Contact from "@/components/contact";
import Feedback from "@/components/feedback";
import Kurssit from "@/components/kurssit";
import MainIntro from "@/components/main-intro";
import RecentPosts from "@/components/recent-posts";

export default async function Home() {
  return (
    <>
      <MainIntro />
      <BasicElements />
      <RecentPosts />
      <Feedback />
      <About />
      <Kurssit />
      <div id="contact"><Contact /></div>
    </>
  );
}
