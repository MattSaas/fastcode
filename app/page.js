import LoginButton from "@/components/LoginButton";
import ListItem from "@/components/ListItem";
import FAQListItem from "@/components/FAQListItem";
import Image from "next/image";
import ProductDemo from "@/app/productDemo.jpeg";

export default function Home() {
  const UserData = {
    isLoggedin: true,
    UserName: "John",
    extraStyle: "w-full",
  };

  const { isLoggedin, UserName, extraStyle } = UserData;

  return (
    <main>
      {/* Header */}
      <section className="bg-base-200 ">
        <div className="flex justify-between items-center px-10 py-2 max-w-6xl mx-auto md:flex-shrink-0">
          <div className="font-extrabold text-primary hover:text-secondary link no-underline">
            CodeApp
          </div>
          <div className="space-x-4 hidden md:block">
            <a
              className="link link-hover hover:text-sky-400 no-underline"
              href="#pricing"
            >
              Pricing
            </a>
            <a
              className="link link-hover hover:text-sky-400 no-underline"
              href="#faq"
            >
              FAQ
            </a>
          </div>
          <div>
            <LoginButton isLoggedin={isLoggedin} Username={UserName} />
          </div>
        </div>
      </section>

      {/* Here */}
      <section className="bg-base-200 text-center py-5 pt-10 px-8 max-w-6xl mx-auto flex flex-col md:flex-row gap-3 justify-center items-center">
        <Image
          src={ProductDemo}
          alt="Product demo"
          className="w-96 mx-2 md:mx-8  py-16 rounded-3xl"
        ></Image>
        <div className="lg:text-left">
          <h1 className="text-3xl font-extrabold mb-10 lg:text-4xl md:text-2xl">
            Collecting customer feedback to creating products that truly meet
            expectations of your users.
          </h1>

          <div className="opacity-1 mb-10 font-sans text-base-400 text-lg">
            Collecting customer feedback is essential for creating better
            products and meeting user needs. Start by defining clear objectives,
            such as identifying usability issues, understanding preferences, or
            prioritizing new features. Use multiple channels to gather insights,
            including surveys.
          </div>
          <LoginButton isLoggedin={isLoggedin} Username={UserName} />
        </div>
      </section>

      {/* Pricing */}
      <section
        className="bg-base-200 text-center py-5 px-8 max-w-6xl mx-auto"
        id="pricing"
      >
        <div className="py-10 px-8 max-w-6xl mx-auto">
          <p className="text-gl uppercase text-primary font-medium text-center m-6">
            Pricing
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">
            A pricing that adapts to your needs.
          </h2>

          {/* Pricing Card */}
          <div className="flex max-w-full justify-between ">
            {/* card 1 */}
            <div className="p-8 bg-base-100 w-96 rounded-xl mx-auto">
              <div className="flex gap-2 items-baseline mb-6">
                <div className="text-4xl font-extrabold">$19</div>
                <div className="text-1xl uppercase font-medium opacity-60">
                  /Month
                </div>
              </div>
              <ul className="space-y-2 mb-5">
                <ListItem checkColor="green">Collect feedback</ListItem>
                <ListItem checkColor="green">Unlimited boards</ListItem>
                <ListItem checkColor="green">Admin dashboard</ListItem>
                <ListItem checkColor="green">24/7 Support</ListItem>
              </ul>
              <LoginButton
                isLoggedin={isLoggedin}
                Username={UserName}
                extraStyle={extraStyle}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="bg-base-200 text-center py-5 px-8 max-w-6xl mx-auto"
        id="faq"
      >
        <div className="rounded-xl py-5 max-w-4xl mx-auto bg-base-100">
          <p className="text-gl uppercase text-primary font-medium text-center m-6">
            FAQ
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">
            Frequently Asked Questions
          </h2>

          {/* FAQ Modal */}
          <ul className="space-y-2 max-w-2xl mb-5 mx-auto">
            {[
              {
                qustion: "What is FastCode?",
                answer:
                  "AFastCode is a cutting-edge SaaS platform integrations for developers and teams.",
              },
              {
                qustion: "How does FastCode work?",
                answer:
                  "FastCode streamlines coding by offering pre-built modules, AI-assisted suggestions.",
              },
              {
                qustion: "Who can use FastCode?",
                answer:
                  "FastCode is designed for developers, startups, and enterprises looking to speed up development processes.",
              },
              {
                qustion: "Is there a free trial available?",
                answer:
                  "Yes, FastCode offers a 14-day free trial with access to all premium features—no credit card required.",
              },
              {
                qustion: "How secure is FastCode?",
                answer:
                  "FastCode supports GitHub, GitLab, Bitbucket, Slack, Jira, and many other developer tools. For the full list, visit our Integrations Page.",
              },
              {
                qustion: "How can I get support?",
                answer:
                  "Our support team is available 24/7. Contact us via live chat, email, or our Help Center.",
              },
            ].map((qa) => (
              <FAQListItem key={qa.qustion} qa={qa}></FAQListItem>
            ))}
          </ul>
        </div>
      </section>

      {/* spider card */}
      <section className="bg-base-200 text-center py-32 px-8 max-w-6xl mx-auto">
        <div className="card card-side bg-base-100 shadow-xl max-w-3xl mx-auto my-5 ">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              alt="Movie"
            />
            {/* <Image
              src={`https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp`}
              alt="Spiderman Movie"
              width="600"
              height="400"
            ></Image> */}
          </figure>
          <div className="card-body">
            <h2 className="card-title lg:text-4xl text-primary font-semibold font-mono uppercase">
              New movie is released!
            </h2>
            <p className="text-left">
              Click the button to watch on Jetflix app.
            </p>
            <div className="card-actions justify-end">
              <LoginButton isLoggedin={isLoggedin} Username={UserName} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
