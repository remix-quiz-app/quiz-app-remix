
/**
 * @returns {import("@remix-run/node").MetaDescriptor[]}
 */
export const meta = () => {
  return [
    { title: "Quiz app" },
    { name: "description", content: "Welcome to Quiz app!" },
  ];
};

import "~/styles/index.css"

export default function Index() {
  return (
    <div className="app">
      <h1 className="app__title">Quiz app</h1>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Fastlink-WSC/quiz-app"
          >
            Let&apos;s get this done!
          </a>
        </li>
      </ul>
    </div>
  );
}
