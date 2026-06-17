// app/(marketing)/privacy/page.tsx
import { AFFILIATE_DISCLOSURE_PRIVACY } from "@/lib/constants";

export const metadata = {
  title: "Privacy Policy | FlowconvertLab",
  description: "Privacy Policy for FlowconvertLab - Learn how we collect, use, and protect your personal information.",
  alternates: { canonical: "https://www.flowconvertlab.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="pt-[var(--nav-height)] bg-[var(--bg)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        
        <style>{`
          [data-custom-class='body'], [data-custom-class='body'] * {
            background: transparent !important;
          }
          [data-custom-class='title'], [data-custom-class='title'] * {
            font-family: Arial !important;
            font-size: 26px !important;
            color: #000000 !important;
          }
          [data-custom-class='subtitle'], [data-custom-class='subtitle'] * {
            font-family: Arial !important;
            color: #595959 !important;
            font-size: 14px !important;
          }
          [data-custom-class='heading_1'], [data-custom-class='heading_1'] * {
            font-family: Arial !important;
            font-size: 19px !important;
            color: #000000 !important;
          }
          [data-custom-class='heading_2'], [data-custom-class='heading_2'] * {
            font-family: Arial !important;
            font-size: 17px !important;
            color: #000000 !important;
          }
          [data-custom-class='body_text'], [data-custom-class='body_text'] * {
            color: #595959 !important;
            font-size: 14px !important;
            font-family: Arial !important;
          }
          [data-custom-class='link'], [data-custom-class='link'] * {
            color: var(--accent) !important;
            font-size: 14px !important;
            font-family: Arial !important;
            word-break: break-word !important;
          }
          ul {
            list-style-type: square;
            color: #595959;
          }
          ul > li > ul {
            list-style-type: circle;
          }
          ul > li > ul > li > ul {
            list-style-type: square;
          }
          ol li {
            font-family: Arial;
          }
          .privacy-policy-container {
            color: var(--text);
          }
          .privacy-policy-container a {
            color: var(--accent) !important;
            text-decoration: none;
          }
          .privacy-policy-container a:hover {
            text-decoration: underline;
          }
        `}</style>

        <div className="privacy-policy-container">
          <span style={{ display: "block", margin: "0 auto 3.125rem", width: "11.125rem", height: "2.375rem", background: "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNzgiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCAxNzggMzgiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZmlsbD0iI0QxRDFEMSIgZD0iTTQuMjgzIDI0LjEwN2MtLjcwNSAwLTEuMjU4LS4yNTYtMS42Ni0uNzY4aC0uMDg1Yy4wNTcuNTAyLjA4Ni43OTIuMDg2Ljg3djIuNDM0SC45ODV2LTguNjQ4aDEuMzMybC4yMzEuNzc5aC4wNzZjLjM4My0uNTk0Ljk1LS44OTIgMS43MDItLjg5Mi43MSAwIDEuMjY0LjI3NCAxLjY2NS44MjIuNDAxLjU0OC42MDIgMS4zMDkuNjAyIDIuMjgzIDAgLjY0LS4wOTQgMS4xOTgtLjI4MiAxLjY3LS4xODguNDczLS40NTYuODMzLS44MDMgMS4wOC0uMzQ3LjI0Ny0uNzU2LjM3LTEuMjI1LjM3ek0zLjggMTkuMTkzYy0uNDA1IDAtLjcuMTI0LS44ODYuMzczLS4xODcuMjQ5LS4yODMuNjYtLjI5IDEuMjM0di4xNzdjMCAuNjQ1LjA5NSAxLjEwNy4yODcgMS4zODYuMTkyLjI4LjQ5NS40MTkuOTEuNDE5LjczNCAwIDEuMTAxLS42MDUgMS4xMDEtMS44MTYgMC0uNTktLjA5LTEuMDM0LS4yNy0xLjMyOS0uMTgyLS4yOTUtLjQ2NS0uNDQzLS44NTItLjQ0M3ptNS41NyAxLjc5NGMwIC41OTQuMDk4IDEuMDQ0LjI5MyAxLjM0OC4xOTYuMzA0LjUxMy40NTcuOTU0LjQ1Ny40MzcgMCAuNzUtLjE1Mi45NDItLjQ1NC4xOTItLjMwMy4yODgtLjc1My4yODgtMS4zNTEgMC0uNTk1LS4wOTctMS4wNC0uMjktMS4zMzgtLjE5NC0uMjk3LS41MS0uNDQ1LS45NS0uNDQ1LS40MzggMC0uNzUzLjE0Ny0uOTQ2LjQ0My0uMTk0LjI5NS0uMjkuNzQyLS4yOSAxLjM0em00LjE1MyAwYzAgLjk3Ny0uMjU4IDEuNzQyLS43NzQgMi4yOTMtLjUxNS41NTItMS4yMzMuODI3LTIuMTU0LjgyNy0uNTc2IDAtMS4wODUtLjEyNi0xLjUyNS0uMzc4YTIuNTIgMi41MiAwIDAgMS0xLjAxNS0xLjA4OGMtLjIzNy0uNDczLS4zNTUtMS4wMjQtLjM1NS0xLjY1NCAwLS45ODEuMjU2LTEuNzQ0Ljc2OC0yLjI4OC41MTItLjU0NSAxLjIzMi0uODE3IDIuMTYtLjgxNy41NzYgMCAxLjA4NS4xMjYgMS41MjUuMzc2LjQ0LjI1MS43NzkuNjEgMS4wMTUgMS4wOC4yMzYuNDY5LjM1NSAxLjAxOS4zNTUgMS42NDl6TTE5LjcxIDI0bC0uNDYyLTIuMS0uNjIzLTIuNjUzaC0uMDM3TDE3LjQ5MyAyNEgxNS43M2wtMS43MDgtNi4wMDVoMS42MzNsLjY5MyAyLjY1OWMuMTEuNDc2LjIyNCAxLjEzMy4zMzggMS45NzFoLjAzMmMuMDE1LS4yNzIuMDc3LS43MDQuMTg4LTEuMjk0bC4wODYtLjQ1Ny43NDItMi44NzloMS44MDRsLjcwNCAyLjg3OWMuMDE0LjA3OS4wMzcuMTk1LjA2Ny4zNS4wNS4zMzQuMTA2LjY2OC4xNjcgMS4wMDIuMDIzLjE2NS4wMzYuMjk5LjA0LjM5OWguMDMyYy4wMzItLjI1OC4wOS0uNjExLjE3Mi0xLjA2LjA4Mi0uNDUuMTQxLS43NTQuMTc3LS45MTFsLjcyLTIuNjU5aDEuNjA2TDIxLjQ5NCAyNGgtMS43ODN6bTcuMDg2LTQuOTUyYy0uMzQ4IDAtLjYyLjExLS44MTcuMzMtLjE5Ny4yMi0uMzEuNTMzLS4zMzguOTM3aDIuMjk5Yy0uMDA4LS40MDQtLjExMy0uNzE3LS4zMTctLjkzNy0uMjA0LS4yMi0uNDgtLjMzLS44MjctLjMzem0uMjMgNS4wNmMtLjk2NiAwLTEuNzIyLS4yNjctMi4yNjYtLjgtLjU0NC0uNTM0LS44MTYtMS4yOS0uODE2LTIuMjY3IDAtMS4wMDcuMjUxLTEuNzg1Ljc1NC0yLjMzNC41MDMtLjU1IDEuMTk5LS44MjUgMi4wODctLjgyNS44NDggMCAxLjUxLjI0MiAxLjk4Mi43MjUuNDcyLjQ4NC43MDkgMS4xNTIuNzA5IDIuMDA0di43OTVoLTMuODczYy4wMTguNDY1LjE1Ni44MjkuNDE0IDEuMDkuMjU4LjI2MS42Mi4zOTIgMS4wODUuMzkyLjM2MSAwIC43MDMtLjAzNyAxLjAyNi0uMTEzYTUuMTMzIDUuMTMzIDAgMCAwIDEuMDEtLjM2djEuMjY4Yy0uMjg3LjE0My0uNTkzLjI1LS45Mi4zMmE1Ljc5IDUuNzkgMCAwIDEtMS4xOTEuMTA0em03LjI1My02LjIyNmMuMjIyIDAgLjQwNi4wMTYuNTUzLjA0OWwtLjEyNCAxLjUzNmExLjg3NyAxLjg3NyAwIDAgMC0uNDgzLS4wNTRjLS41MjMgMC0uOTMuMTM0LTEuMjIyLjQwMy0uMjkyLjI2OC0uNDM4LjY0NC0uNDM4IDEuMTI4VjI0aC0xLjYzOHYtNi4wMDVoMS4yNGwuMjQyIDEuMDFoLjA4Yy4xODctLjMzNy40MzktLjYwOC43NTYtLjgxNGExLjg2IDEuODYgMCAwIDEgMS4wMzQtLjMwOXptNC4wMjkgMS4xNjZjLS4zNDcgMC0uNjIuMTEtLjgxNy4zMy0uMTk3LjIyLS4zMS41MzMtLjMzOC45MzdoMi4yOTljLS4wMDctLjQwNC0uMTEzLS43MTctLjMxNy0uOTM3LS4yMDQtLjIyLS40OC0uMzMtLjgyNy0uMzN6bS4yMyA1LjA2Yy0uOTY2IDAtMS43MjItLjI2Ny0yLjI2Ni0uOC0uNTQ0LS41MzQtLjgxNi0xLjI5LS44MTYtMi4yNjcgMC0xLjAwNy4yNTEtMS43ODUuNzU0LTIuMzM0LjUwNC0uNTUgMS4yLS44MjUgMi4wODctLjgyNS44NDkgMCAxLjUxLjI0MiAxLjk4Mi43MjUuNDczLjQ4NC43MDkgMS4xNTIuNzA5IDIuMDA0di43OTVoLTMuODczYy4wMTguNDY1LjE1Ni44MjkuNDE0IDEuMDkuMjU4LjI2MS42Mi4zOTIgMS4wODUuMzkyLjM2MiAwIC43MDQtLjAzNyAxLjAyNi0uMTEzYTUuMTMzIDUuMTMzIDAgMCAwIDEuMDEtLjM2djEuMjY4Yy0uMjg3LjE0My0uNTkzLjI1LS45MTkuMzJhNS43OSA1Ljc5IDAgMCAxLTEuMTkyLjEwNHptNS44MDMgMGMtLjcwNiAwLTEuMjYtLjI3NS0xLjY2My0uODIyLS40MDMtLjU0OC0uNjA0LTEuMzA3LS42MDQtMi4yNzggMC0uOTg0LjIwNS0xLjc1Mi42MTUtMi4zMDEuNDEtLjU1Ljk3NS0uODI1IDEuNjk1LS44MjUuNzU1IDAgMS4zMzIuMjk0IDEuNzI5Ljg4MWguMDU0YTYuNjk3IDYuNjk3IDAgMCAxLS4xMjQtMS4xOTh2LTEuOTIyaDEuNjQ0VjI0SDQ2LjQzbC0uMzE3LS43NzloLS4wN2MtLjM3Mi41OTEtLjk0Ljg4Ni0xLjcwMi44ODZ6bS41NzQtMS4zMDZjLjQyIDAgLjcyNi0uMTIxLjkyMS0uMzY1LjE5Ni0uMjQzLjMwMi0uNjU3LjMyLTEuMjR2LS4xNzhjMC0uNjQ0LS4xLTEuMTA2LS4yOTgtMS4zODYtLjE5OS0uMjc5LS41MjItLjQxOS0uOTctLjQxOWEuOTYyLjk2MiAwIDAgMC0uODUuNDY1Yy0uMjAzLjMxLS4zMDQuNzYtLjMwNCAxLjM1IDAgLjU5Mi4xMDIgMS4wMzUuMzA2IDEuMzMuMjA0LjI5Ni40OTYuNDQzLjg3NS40NDN6bTEwLjkyMi00LjkyYy43MDkgMCAxLjI2NC4yNzcgMS42NjUuODMuNC41NTMuNjAxIDEuMzEyLjYwMSAyLjI3NSAwIC45OTItLjIwNiAxLjc2LS42MiAyLjMwNC0uNDE0LjU0NC0uOTc3LjgxNi0xLjY5LjgxNi0uNzA1IDAtMS4yNTgtLjI1Ni0xLjY1OS0uNzY4aC0uMTEzbC0uMjc0LjY2MWgtMS4yNTF2LTguMzU3aDEuNjM4djEuOTQ0YzAgLjI0Ny0uMDIxLjY0My0uMDY0IDEuMTg3aC4wNjRjLjM4My0uNTk0Ljk1LS44OTIgMS43MDMtLjg5MnptLS41MjcgMS4zMWMtLjQwNCAwLS43LjEyNS0uODg2LjM3NC0uMTg2LjI0OS0uMjgzLjY2LS4yOSAxLjIzM3YuMTc3YzAgLjY0NS4wOTYgMS4xMDcuMjg3IDEuMzg2LjE5Mi4yOC40OTUuNDE5LjkxLjQxOS4zMzcgMCAuNjA1LS4xNTUuODA0LS40NjUuMTk5LS4zMS4yOTgtLjc2LjI5OC0xLjM1IDAtLjU5MS0uMS0xLjAzNS0uMy0xLjMzYS45NDMuOTQzIDAgMCAwLS44MjMtLjQ0M3ptMy4xODYtMS4xOTdoMS43OTRsMS4xMzQgMy4zNzljLjA5Ni4yOTMuMTYzLjY0LjE5OCAxLjA0MmguMDMzYy4wMzktLjM3LjExNi0uNzE3LjIzLTEuMDQybDEuMTEyLTMuMzc5aDEuNzU3bC0yLjU0IDYuNzczYy0uMjM0LjYyNy0uNTY2IDEuMDk2LS45OTcgMS40MDctLjQzMi4zMTItLjkzNi40NjgtMS41MTIuNDY4LS4yODMgMC0uNTYtLjAzLS44MzMtLjA5MnYtMS4zYTIuOCAyLjggMCAwIDAgLjY0NS4wN2MuMjkgMCAuNTQzLS4wODguNzYtLjI2Ni4yMTctLjE3Ny4zODYtLjQ0NC41MDgtLjgwM2wuMDk2LS4yOTUtMi4zODUtNS45NjJ6Ii8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzMpIj48Y2lyY2xlIGN4PSIxOSIgY3k9IjE5IiByPSIxOSIgZmlsbD0iI0UwRTBFMCIvPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0yMi40NzQgMTUuNDQzaDUuMTYyTDEyLjQzNiAzMC40VjEwLjM2M2gxNS4ybC01LjE2MiA1LjA4eiIvPjwvZz48cGF0aCBmaWxsPSIjRDJEMkQyIiBkPSJNMTIxLjU0NCAxNC41NnYtMS43MjhoOC4yNzJ2MS43MjhoLTMuMDI0VjI0aC0yLjI0di05LjQ0aC0zLjAwOHptMTMuNzQ0IDkuNTY4Yy0xLjI5IDAtMi4zNDEtLjQxOS0zLjE1Mi0xLjI1Ni0uODEtLjgzNy0xLjIxNi0xLjk0NC0xLjIxNi0zLjMycy40MDgtMi40NzcgMS4yMjQtMy4zMDRjLjgxNi0uODI3IDEuODcyLTEuMjQgMy4xNjgtMS4yNHMyLjM2LjQwMyAzLjE5MiAxLjIwOGMuODMyLjgwNSAxLjI0OCAxLjg4IDEuMjQ4IDMuMjI0IDAgLjMxLS4wMjEuNTk3LS4wNjQuODY0aC02LjQ2NGMuMDUzLjU3Ni4yNjcgMS4wNC42NCAxLjM5Mi4zNzMuMzUyLjg0OC41MjggMS40MjQuNTI4Ljc3OSAwIDEuMzU1LS4zMiAxLjcyOC0uOTZoMi40MzJhMy44OTEgMy44OTEgMCAwIDEtMS40ODggMi4wNjRjLS43MzYuNTMzLTEuNjI3LjgtMi42NzIuOHptMS40OC02LjY4OGMtLjQtLjM1Mi0uODgzLS41MjgtMS40NDgtLjUyOHMtMS4wMzcuMTc2LTEuNDE2LjUyOGMtLjM3OS4zNTItLjYwNS44MjEtLjY4IDEuNDA4aDQuMTkyYy0uMDMyLS41ODctLjI0OC0xLjA1Ni0uNjQ4LTEuNDA4em03LjAxNi0yLjMwNHYxLjU2OGMuNTk3LTEuMTMgMS40NjEtMS42OTYgMi41OTItMS42OTZ2Mi4zMDRoLS41NmMtLjY3MiAwLTEuMTc5LjE2OC0xLjUyLjUwNC0uMzQxLjMzNi0uNTEyLjkxNS0uNTEyIDEuNzM2VjI0aC0yLjI1NnYtOC44NjRoMi4yNTZ6bTYuNDQ4IDB2MS4zMjhjLjU2NS0uOTcgMS40ODMtMS40NTYgMi43NTItMS40NTYuNjcyIDAgMS4yNzIuMTU1IDEuOC40NjQuNTI4LjMxLjkzNi43NTIgMS4yMjQgMS4zMjguMzEtLjU1NS43MzMtLjk5MiAxLjI3Mi0xLjMxMmEzLjQ4OCAzLjQ4OCAwIDAgMSAxLjgxNi0uNDhjMS4wNTYgMCAxLjkwNy4zMyAyLjU1Mi45OTIuNjQ1LjY2MS45NjggMS41OS45NjggMi43ODRWMjRoLTIuMjR2LTQuODk2YzAtLjY5My0uMTc2LTEuMjI0LS41MjgtMS41OTItLjM1Mi0uMzY4LS44MzItLjU1Mi0xLjQ0LS41NTJzLTEuMDkuMTg0LTEuNDQ4LjU1MmMtLjM1Ny4zNjgtLjUzNi44OTktLjUzNiAxLjU5MlYyNGgtMi4yNHYtNC44OTZjMC0uNjkzLS4xNzYtMS4yMjQtLjUyOC0xLjU5Mi0uMzUyLS4zNjgtLjgzMi0uNTUyLTEuNDQtLjU1MnMtMS4wOS4xODQtMS40NDguNTUyYy0uMzU3LjM2OC0uNTM2Ljg5OS0uNTM2IDEuNTkyVjI0aC0yLjI1NnYtOC44NjRoMi4yNTZ6TTE2NC45MzYgMjRWMTIuMTZoMi4yNTZWMjRoLTIuMjU2em03LjA0LS4xNmwtMy40NzItOC43MDRoMi41MjhsMi4yNTYgNi4zMDQgMi4zODQtNi4zMDRoMi4zNTJsLTUuNTM2IDEzLjA1NmgtMi4zNTJsMS44NC00LjM1MnoiLz48L2c+PC9zdmc+) center no-repeat" }}></span>

          <div data-custom-class="body">
            <div><strong><span style={{ fontSize: "26px" }}><span data-custom-class="title">PRIVACY POLICY</span></span></strong></div>
            <div><span style={{ color: "rgb(127, 127, 127)" }}><strong><span style={{ fontSize: "15px" }}><span data-custom-class="subtitle">Last updated April 17, 2026</span></span></strong></span></div>
            <div><br /></div>
            <div><br /></div>
            <div><br /></div>
            
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ color: "rgb(127, 127, 127)" }}>
                <span style={{ color: "rgb(89, 89, 89)", fontSize: "15px" }}>
                  <span data-custom-class="body_text">
                    This Privacy Notice for <span className="question noTranslate">FlowconvertLab</span> ('<strong>we</strong>', '<strong>us</strong>', or '<strong>our</strong>'), describes how and why we might access, collect, store, use, and/or share ('<strong>process</strong>') your personal information when you use our services ('<strong>Services</strong>'), including when you:
                  </span>
                </span>
              </span>
            </div>
            
            

            <ul>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                    <span data-custom-class="body_text">Engage with us in other related ways, including any marketing or events</span>
                  </span>
                </span>
              </li>
            </ul>

            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <span style={{ color: "rgb(127, 127, 127)" }}>
                  <span data-custom-class="body_text">
                    <strong>Questions or concerns? </strong>Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <span className="question noTranslate">info@flowconvertlab.com</span>.
                  </span>
                </span>
              </span>
            </div>

            <div style={{ lineHeight: "1.5" }}><br /></div>
            <div style={{ lineHeight: "1.5" }}><br /></div>

            <div style={{ lineHeight: "1.5", padding: "1rem 1.25rem", borderRadius: "0.75rem", background: "var(--accent-soft)", border: "1px solid color-mix(in srgb, var(--accent) 25%, transparent)" }}>
              <strong><span style={{ fontSize: "15px" }}><span data-custom-class="heading_2">Affiliate Disclosure</span></span></strong>
              <div style={{ marginTop: "0.5rem" }}>
                <span style={{ fontSize: "15px" }}><span data-custom-class="body_text">{AFFILIATE_DISCLOSURE_PRIVACY}</span></span>
              </div>
            </div>

            <div style={{ lineHeight: "1.5" }}><br /></div>

            <div style={{ lineHeight: "1.5" }}>
              <strong><span style={{ fontSize: "15px" }}><span data-custom-class="heading_1">SUMMARY OF KEY POINTS</span></span></strong>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <span data-custom-class="body_text">
                  <strong><em>This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our </em></strong>
                </span>
              </span>
              <a data-custom-class="link" href="#toc"><span style={{ color: "rgb(0, 58, 250)", fontSize: "15px" }}><span data-custom-class="body_text"><strong><em>table of contents</em></strong></span></span></a>
              <span style={{ fontSize: "15px" }}><span data-custom-class="body_text"><strong><em> below to find the section you are looking for.</em></strong></span></span>
            </div>

            <div style={{ lineHeight: "1.5" }}><br /></div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <span data-custom-class="body_text"><strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. Learn more about </span>
              </span>
              <a data-custom-class="link" href="#personalinfo"><span style={{ color: "rgb(0, 58, 250)", fontSize: "15px" }}><span data-custom-class="body_text">personal information you disclose to us</span></span></a>
              <span data-custom-class="body_text">.</span>
            </div>

            <div style={{ lineHeight: "1.5" }}><br /></div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <span data-custom-class="body_text"><strong>Do we process any sensitive personal information? </strong>Some of the information may be considered 'special' or 'sensitive' in certain jurisdictions, for example your racial or ethnic origins, sexual orientation, and religious beliefs. We do not process sensitive personal information.</span>
              </span>
            </div>

            <div style={{ lineHeight: "1.5" }}><br /></div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <span data-custom-class="body_text"><strong>Do we collect any information from third parties?</strong> We do not collect any information from third parties.</span>
              </span>
            </div>

            <div style={{ lineHeight: "1.5" }}><br /></div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <span data-custom-class="body_text"><strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Learn more about </span>
              </span>
              <a data-custom-class="link" href="#infouse"><span style={{ color: "rgb(0, 58, 250)", fontSize: "15px" }}><span data-custom-class="body_text">how we process your information</span></span></a>
              <span data-custom-class="body_text">.</span>
            </div>

            <div style={{ lineHeight: "1.5" }}><br /></div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <span data-custom-class="body_text"><strong>In what situations and with which parties do we share personal information?</strong> We may share information in specific situations and with specific third parties. Learn more about </span>
              </span>
              <a data-custom-class="link" href="#whoshare"><span style={{ color: "rgb(0, 58, 250)", fontSize: "15px" }}><span data-custom-class="body_text">when and with whom we share your personal information</span></span></a>
              <span style={{ fontSize: "15px" }}><span data-custom-class="body_text">.</span></span>
            </div>

            <div style={{ lineHeight: "1.5" }}><br /></div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <span data-custom-class="body_text"><strong>How do we keep your information safe?</strong> We have adequate organisational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorised third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Learn more about </span>
              </span>
              <a data-custom-class="link" href="#infosafe"><span style={{ color: "rgb(0, 58, 250)", fontSize: "15px" }}><span data-custom-class="body_text">how we keep your information safe</span></span></a>
              <span data-custom-class="body_text">.</span>
            </div>

            <div style={{ lineHeight: "1.5" }}><br /></div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <span data-custom-class="body_text"><strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about </span>
              </span>
              <a data-custom-class="link" href="#privacyrights"><span style={{ color: "rgb(0, 58, 250)", fontSize: "15px" }}><span data-custom-class="body_text">your privacy rights</span></span></a>
              <span data-custom-class="body_text">.</span>
            </div>

            <div style={{ lineHeight: "1.5" }}><br /></div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <span data-custom-class="body_text"><strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by submitting a </span>
              </span>
              <a data-custom-class="link" href="https://app.termly.io/dsar/32ebd73f-4815-4819-925e-be81b57d9627" rel="noopener noreferrer" target="_blank"><span style={{ color: "rgb(0, 58, 250)", fontSize: "15px" }}><span data-custom-class="body_text">data subject access request</span></span></a>
              <span style={{ fontSize: "15px" }}><span data-custom-class="body_text">, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</span></span>
            </div>

            <div style={{ lineHeight: "1.5" }}><br /></div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}><span data-custom-class="body_text">Want to learn more about what we do with any information we collect? </span></span>
              <a data-custom-class="link" href="#toc"><span style={{ color: "rgb(0, 58, 250)", fontSize: "15px" }}><span data-custom-class="body_text">Review the Privacy Notice in full</span></span></a>
              <span style={{ fontSize: "15px" }}><span data-custom-class="body_text">.</span></span>
            </div>

            <div style={{ lineHeight: "1.5" }}><br /></div>
            <div style={{ lineHeight: "1.5" }}><br /></div>

            <div id="toc" style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <span style={{ color: "rgb(127, 127, 127)" }}>
                  <span style={{ color: "rgb(0, 0, 0)" }}>
                    <strong><span data-custom-class="heading_1">TABLE OF CONTENTS</span></strong>
                  </span>
                </span>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}><span style={{ fontSize: "15px" }}><a data-custom-class="link" href="#infocollect"><span style={{ color: "rgb(0, 58, 250)" }}>1. WHAT INFORMATION DO WE COLLECT?</span></a></span></div>
            <div style={{ lineHeight: "1.5" }}><span style={{ fontSize: "15px" }}><a data-custom-class="link" href="#infouse"><span style={{ color: "rgb(0, 58, 250)" }}>2. HOW DO WE PROCESS YOUR INFORMATION?</span></a></span></div>
            <div style={{ lineHeight: "1.5" }}><span style={{ fontSize: "15px" }}><a data-custom-class="link" href="#legalbases"><span style={{ color: "rgb(0, 58, 250)" }}>3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?</span></a></span></div>
            <div style={{ lineHeight: "1.5" }}><span style={{ fontSize: "15px" }}><a data-custom-class="link" href="#whoshare"><span style={{ color: "rgb(0, 58, 250)" }}>4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</span></a></span></div>
            <div style={{ lineHeight: "1.5" }}><span style={{ fontSize: "15px" }}><a data-custom-class="link" href="#cookies"><span style={{ color: "rgb(0, 58, 250)" }}>5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</span></a></span></div>
            <div style={{ lineHeight: "1.5" }}><span style={{ fontSize: "15px" }}><a data-custom-class="link" href="#inforetain"><span style={{ color: "rgb(0, 58, 250)" }}>6. HOW LONG DO WE KEEP YOUR INFORMATION?</span></a></span></div>
            <div style={{ lineHeight: "1.5" }}><span style={{ fontSize: "15px" }}><a data-custom-class="link" href="#infosafe"><span style={{ color: "rgb(0, 58, 250)" }}>7. HOW DO WE KEEP YOUR INFORMATION SAFE?</span></a></span></div>
            <div style={{ lineHeight: "1.5" }}><span style={{ fontSize: "15px" }}><a data-custom-class="link" href="#infominors"><span style={{ color: "rgb(0, 58, 250)" }}>8. DO WE COLLECT INFORMATION FROM MINORS?</span></a></span></div>
            <div style={{ lineHeight: "1.5" }}><span style={{ fontSize: "15px" }}><a data-custom-class="link" href="#privacyrights"><span style={{ color: "rgb(0, 58, 250)" }}>9. WHAT ARE YOUR PRIVACY RIGHTS?</span></a></span></div>
            <div style={{ lineHeight: "1.5" }}><span style={{ fontSize: "15px" }}><a data-custom-class="link" href="#DNT"><span style={{ color: "rgb(0, 58, 250)" }}>10. CONTROLS FOR DO-NOT-TRACK FEATURES</span></a></span></div>
            <div style={{ lineHeight: "1.5" }}><span style={{ fontSize: "15px" }}><a data-custom-class="link" href="#uslaws"><span style={{ color: "rgb(0, 58, 250)" }}>11. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</span></a></span></div>
            <div style={{ lineHeight: "1.5" }}><span style={{ fontSize: "15px" }}><a data-custom-class="link" href="#policyupdates"><span style={{ color: "rgb(0, 58, 250)" }}>12. DO WE MAKE UPDATES TO THIS NOTICE?</span></a></span></div>
            <div style={{ lineHeight: "1.5" }}><a data-custom-class="link" href="#contact"><span style={{ color: "rgb(0, 58, 250)", fontSize: "15px" }}>13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</span></a></div>
            <div style={{ lineHeight: "1.5" }}><a data-custom-class="link" href="#request"><span style={{ color: "rgb(0, 58, 250)" }}>14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</span></a></div>

            <div style={{ lineHeight: "1.5" }}><br /></div>
            <div style={{ lineHeight: "1.5" }}><br /></div>

            <div id="infocollect" style={{ lineHeight: "1.5" }}>
              <span style={{ color: "rgb(0, 0, 0)" }}>
                <span style={{ color: "rgb(0, 0, 0)", fontSize: "15px" }}>
                  <span style={{ fontSize: "15px", color: "rgb(0, 0, 0)" }}>
                    <span style={{ fontSize: "15px", color: "rgb(0, 0, 0)" }}>
                      <span id="control" style={{ color: "rgb(0, 0, 0)" }}>
                        <strong><span data-custom-class="heading_1">1. WHAT INFORMATION DO WE COLLECT?</span></strong>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </div>
            
            <div style={{ lineHeight: "1.5" }}>
              <span data-custom-class="heading_2" id="personalinfo" style={{ color: "rgb(0, 0, 0)" }}>
                <span style={{ fontSize: "15px" }}><strong>Personal information you disclose to us</strong></span>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ color: "rgb(127, 127, 127)" }}>
                <span style={{ color: "rgb(89, 89, 89)", fontSize: "15px" }}>
                  <span data-custom-class="body_text">
                    <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                      <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                        <span data-custom-class="body_text"><strong><em>In Short: </em></strong><em>We collect personal information that you provide to us.</em></span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </div>

            <div style={{ lineHeight: "1.5" }}><br /></div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  <span data-custom-class="body_text">We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</span>
                </span>
              </span>
            </div>

            <div style={{ lineHeight: "1.5" }}><br /></div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  <span data-custom-class="body_text"><strong>Personal Information Provided by You.</strong> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:</span>
                </span>
              </span>
            </div>
            
            <ul>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                    <span data-custom-class="body_text">email addresses</span>
                  </span>
                </span>
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                    <span data-custom-class="body_text">names</span>
                  </span>
                </span>
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                    <span data-custom-class="body_text">phone numbers</span>
                  </span>
                </span>
              </li>
            </ul>

            <div id="sensitiveinfo" style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <span data-custom-class="body_text"><strong>Sensitive Information.</strong> We do not process sensitive information.</span>
              </span>
            </div>

            <div style={{ lineHeight: "1.5" }}><br /></div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  <span data-custom-class="body_text">All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</span>
                </span>
              </span>
            </div>

            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <strong><span data-custom-class="heading_2">Google API</span></strong>
                <span data-custom-class="body_text"> Our use of information received from Google APIs will adhere to </span>
              </span>
              <a data-custom-class="link" href="https://developers.google.com/terms/api-services-user-data-policy" rel="noopener noreferrer" target="_blank">
                <span style={{ color: "rgb(0, 58, 250)", fontSize: "15px" }}><span data-custom-class="body_text">Google API Services User Data Policy</span></span>
              </a>
              <span style={{ fontSize: "15px" }}>
                <span data-custom-class="body_text">, including the </span>
              </span>
              <a data-custom-class="link" href="https://developers.google.com/terms/api-services-user-data-policy#limited-use" rel="noopener noreferrer" target="_blank">
                <span style={{ color: "rgb(0, 58, 250)", fontSize: "15px" }}><span data-custom-class="body_text">Limited Use requirements</span></span>
              </a>
              <span style={{ fontSize: "15px" }}><span data-custom-class="body_text">.</span></span>
            </div>

            <div><span style={{ fontSize: "15px" }}><br /></span></div>
            <div style={{ lineHeight: "1.5" }}><br /></div>

            <div id="infouse" style={{ lineHeight: "1.5" }}>
              <span style={{ color: "rgb(127, 127, 127)" }}>
                <span style={{ color: "rgb(89, 89, 89)", fontSize: "15px" }}>
                  <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                    <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                      <span id="control" style={{ color: "rgb(0, 0, 0)" }}>
                        <strong><span data-custom-class="heading_1">2. HOW DO WE PROCESS YOUR INFORMATION?</span></strong>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  <span data-custom-class="body_text">
                    <strong><em>In Short: </em></strong><em>We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law.</em>
                  </span>
                </span>
              </span>
            </div>

            <div style={{ lineHeight: "1.5" }}><br /></div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  <span data-custom-class="body_text"><strong>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</strong></span>
                </span>
              </span>
            </div>

            <ul>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span data-custom-class="body_text">
                  <span style={{ fontSize: "15px" }}><strong>To save or protect an individual's vital interest.</strong> We may process your information when necessary to save or protect an individual's vital interest, such as to prevent harm.</span>
                </span>
              </li>
            </ul>

            <div style={{ lineHeight: "1.5" }}><br /></div>

            <div id="legalbases" style={{ lineHeight: "1.5" }}>
              <strong><span style={{ fontSize: "15px" }}><span data-custom-class="heading_1">3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?</span></span></strong>
              <em><span style={{ fontSize: "15px" }}><span data-custom-class="body_text"><strong>In Short: </strong>We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e. legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfil our contractual obligations, to protect your rights, or to fulfil our legitimate business interests.</span></span></em>
            </div>

            <div style={{ lineHeight: "1.5" }}><br /></div>
            <div style={{ lineHeight: "1.5" }}>
              <em><span style={{ fontSize: "15px" }}><span data-custom-class="body_text"><strong><u>If you are located in the EU or UK, this section applies to you.</u></strong></span></span></em>
            </div>
            <div style={{ lineHeight: "1.5" }}><br /></div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <span data-custom-class="body_text">The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:</span>
              </span>
            </div>
            
            <ul>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: "15px" }}>
                  <span data-custom-class="body_text"><strong>Consent. </strong>We may process your information if you have given us permission (i.e. consent) to use your personal information for a specific purpose. You can withdraw your consent at any time. Learn more about </span>
                </span>
                <a data-custom-class="link" href="#withdrawconsent"><span style={{ color: "rgb(0, 58, 250)", fontSize: "15px" }}><span data-custom-class="body_text">withdrawing your consent</span></span></a>
                <span data-custom-class="body_text">.</span>
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span data-custom-class="body_text">
                  <span style={{ fontSize: "15px" }}><strong>Legal Obligations.</strong> We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved.</span>
                </span>
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span data-custom-class="body_text">
                  <span style={{ fontSize: "15px" }}><strong>Vital Interests.</strong> We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.</span>
                </span>
              </li>
            </ul>

            <div style={{ lineHeight: "1.5" }}><br /></div>
            <div style={{ lineHeight: "1.5" }}>
              <span data-custom-class="body_text"><span style={{ fontSize: "15px" }}><strong><u><em>If you are located in Canada, this section applies to you.</em></u></strong></span></span>
            </div>
            <div style={{ lineHeight: "1.5" }}><br /></div>
            <div style={{ lineHeight: "1.5" }}>
              <span data-custom-class="body_text"><span style={{ fontSize: "15px" }}>We may process your information if you have given us specific permission (i.e. express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e. implied consent). You can </span></span>
              <a data-custom-class="link" href="#withdrawconsent"><span data-custom-class="body_text"><span style={{ color: "rgb(0, 58, 250)", fontSize: "15px" }}>withdraw your consent</span></span></a>
              <span data-custom-class="body_text"><span style={{ fontSize: "15px" }}> at any time.</span></span>
            </div>

            <div style={{ lineHeight: "1.5" }}><br /></div>
            <div style={{ lineHeight: "1.5" }}>
              <span data-custom-class="body_text"><span style={{ fontSize: "15px" }}>In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example:</span></span>
            </div>
            <ul>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way</li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>For investigations and fraud detection and prevention</li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>For business transactions provided certain conditions are met</li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim</li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>For identifying injured, ill, or deceased persons and communicating with next of kin</li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse</li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province</li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records</li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced</li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>If the collection is solely for journalistic, artistic, or literary purposes</li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>If the information is publicly available and is specified by the regulations</li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>We may disclose de-identified information for approved research or statistics projects, subject to ethics oversight and confidentiality commitments</li>
            </ul>

            <div style={{ lineHeight: "1.5" }}><br /></div>

            <div id="whoshare" style={{ lineHeight: "1.5" }}>
              <span style={{ color: "rgb(127, 127, 127)" }}>
                <span style={{ color: "rgb(89, 89, 89)", fontSize: "15px" }}>
                  <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                    <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                      <span id="control" style={{ color: "rgb(0, 0, 0)" }}>
                        <strong><span data-custom-class="heading_1">4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</span></strong>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  <span data-custom-class="body_text"><strong><em>In Short:</em></strong><em> We may share information in specific situations described in this section and/or with the following third parties.</em></span>
                </span>
              </span>
            </div>

            <div style={{ lineHeight: "1.5" }}><br /></div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}><span data-custom-class="body_text">We may need to share your personal information in the following situations:</span></span>
            </div>
            <ul>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: "15px" }}><span data-custom-class="body_text"><strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</span></span>
              </li>
            </ul>

            <div style={{ lineHeight: "1.5" }}><br /></div>

            <div id="cookies" style={{ lineHeight: "1.5" }}>
              <span style={{ color: "rgb(127, 127, 127)" }}>
                <span style={{ color: "rgb(89, 89, 89)", fontSize: "15px" }}>
                  <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                    <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                      <span id="control" style={{ color: "rgb(0, 0, 0)" }}>
                        <strong><span data-custom-class="heading_1">5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</span></strong>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  <span data-custom-class="body_text"><strong><em>In Short:</em></strong><em> We may use cookies and other tracking technologies to collect and store your information.</em></span>
                </span>
              </span>
            </div>

            <div style={{ lineHeight: "1.5" }}><br /></div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  <span data-custom-class="body_text">We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Services. Some online tracking technologies help us maintain the security of our Services, prevent crashes, fix bugs, save your preferences, and assist with basic site functions.</span>
                </span>
              </span>
            </div>

            <div style={{ lineHeight: "1.5" }}><br /></div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  <span data-custom-class="body_text">We also permit third parties and service providers to use online tracking technologies on our Services for analytics and advertising, including to help manage and display advertisements, to tailor advertisements to your interests, or to send abandoned shopping cart reminders (depending on your communication preferences). The third parties and service providers use their technology to provide advertising about products and services tailored to your interests which may appear either on our Services or on other websites.</span>
                </span>
              </span>
            </div>

            <div style={{ lineHeight: "1.5" }}><span style={{ fontSize: "15px" }}><br /></span></div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <span data-custom-class="body_text">To the extent these online tracking technologies are deemed to be a 'sale'/'sharing' (which includes targeted advertising, as defined under the applicable laws) under applicable US state laws, you can opt out of these online tracking technologies by submitting a request as described below under section </span>
              </span>
              <span data-custom-class="body_text"><a data-custom-class="link" href="#uslaws"><span style={{ color: "rgb(0, 58, 250)", fontSize: "15px" }}>DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</span></a></span>
              <span style={{ fontSize: "15px" }}><span data-custom-class="body_text">.</span></span>
            </div>

            <div style={{ lineHeight: "1.5" }}><br /></div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  <span data-custom-class="body_text">Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.</span>
                </span>
              </span>
            </div>

            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <strong><span data-custom-class="heading_2">Google Analytics</span></strong>
                <span data-custom-class="body_text"> We may share your information with Google Analytics to track and analyse the use of the Services. To opt out of being tracked by Google Analytics across the Services, visit <span style={{ color: "rgb(0, 58, 250)" }}><a data-custom-class="link" href="https://tools.google.com/dlpage/gaoptout" rel="noopener noreferrer" target="_blank">https://tools.google.com/dlpage/gaoptout</a>.</span> For more information on the privacy practices of Google, please visit the <span style={{ color: "rgb(0, 58, 250)" }}><a data-custom-class="link" href="https://policies.google.com/privacy" rel="noopener noreferrer" target="_blank">Google Privacy & Terms page</a></span>.</span>
              </span>
            </div>

            <div style={{ lineHeight: "1.5" }}><br /></div>

            <div id="inforetain" style={{ lineHeight: "1.5" }}>
              <span style={{ color: "rgb(127, 127, 127)" }}>
                <span style={{ color: "rgb(89, 89, 89)", fontSize: "15px" }}>
                  <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                    <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                      <span id="control" style={{ color: "rgb(0, 0, 0)" }}>
                        <strong><span data-custom-class="heading_1">6. HOW LONG DO WE KEEP YOUR INFORMATION?</span></strong>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  <span data-custom-class="body_text"><strong><em>In Short: </em></strong><em>We keep your information for as long as necessary to fulfil the purposes outlined in this Privacy Notice unless otherwise required by law.</em></span>
                </span>
              </span>
            </div>

            <div style={{ lineHeight: "1.5" }}><br /></div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  <span data-custom-class="body_text">We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).</span>
                </span>
              </span>
            </div>

            <div style={{ lineHeight: "1.5" }}><br /></div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  <span data-custom-class="body_text">When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymise such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</span>
                </span>
              </span>
            </div>

            <div style={{ lineHeight: "1.5" }}><br /></div>

            <div id="infosafe" style={{ lineHeight: "1.5" }}>
              <span style={{ color: "rgb(127, 127, 127)" }}>
                <span style={{ color: "rgb(89, 89, 89)", fontSize: "15px" }}>
                  <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                    <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                      <span id="control" style={{ color: "rgb(0, 0, 0)" }}>
                        <strong><span data-custom-class="heading_1">7. HOW DO WE KEEP YOUR INFORMATION SAFE?</span></strong>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  <span data-custom-class="body_text"><strong><em>In Short: </em></strong><em>We aim to protect your personal information through a system of organisational and technical security measures.</em></span>
                </span>
              </span>
            </div>

            <div style={{ lineHeight: "1.5" }}><br /></div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  <span data-custom-class="body_text">We have implemented appropriate and reasonable technical and organisational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorised third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.</span>
                </span>
              </span>
            </div>

            <div style={{ lineHeight: "1.5" }}><br /></div>

            <div id="infominors" style={{ lineHeight: "1.5" }}>
              <span style={{ color: "rgb(127, 127, 127)" }}>
                <span style={{ color: "rgb(89, 89, 89)", fontSize: "15px" }}>
                  <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                    <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                      <span id="control" style={{ color: "rgb(0, 0, 0)" }}>
                        <strong><span data-custom-class="heading_1">8. DO WE COLLECT INFORMATION FROM MINORS?</span></strong>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  <span data-custom-class="body_text"><strong><em>In Short:</em></strong><em> We do not knowingly collect data from or market to children under 18 years of age.</em></span>
                </span>
              </span>
            </div>

            <div style={{ lineHeight: "1.5" }}><br /></div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  <span data-custom-class="body_text">We do not knowingly collect, solicit data from, or market to children under 18 years of age, nor do we knowingly sell such personal information. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent's use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at <span style={{ color: "rgb(89, 89, 89)", fontSize: "15px" }}><span data-custom-class="body_text">info@flowconvertlab.com</span></span>.</span>
                </span>
              </span>
            </div>

            <div style={{ lineHeight: "1.5" }}><br /></div>

            <div id="privacyrights" style={{ lineHeight: "1.5" }}>
              <span style={{ color: "rgb(127, 127, 127)" }}>
                <span style={{ color: "rgb(89, 89, 89)", fontSize: "15px" }}>
                  <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                    <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                      <span id="control" style={{ color: "rgb(0, 0, 0)" }}>
                        <strong><span data-custom-class="heading_1">9. WHAT ARE YOUR PRIVACY RIGHTS?</span></strong>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  <span data-custom-class="body_text">
                    <strong><em>In Short:</em></strong><em> Depending on your state of residence in the US or in some regions, such as the European Economic Area (EEA), United Kingdom (UK), Switzerland, and Canada, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time, depending on your country, province, or state of residence.</em>
                  </span>
                </span>
              </span>
            </div>

            <div style={{ lineHeight: "1.5" }}><br /></div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  <span data-custom-class="body_text">In some regions (like the EEA, UK, Switzerland, and Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; (iv) if applicable, to data portability; and (v) not to be subject to automated decision-making. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section </span>
                </span>
              </span>
              <a data-custom-class="link" href="#contact"><span style={{ fontSize: "15px", color: "rgb(0, 58, 250)" }}><span style={{ fontSize: "15px", color: "rgb(0, 58, 250)" }}><span data-custom-class="body_text">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</span></span></span></a>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}><span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}><span data-custom-class="body_text"> below.</span></span></span>
            </div>

            <div style={{ lineHeight: "1.5" }}><br /></div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  <span data-custom-class="body_text">We will consider and act upon any request in accordance with applicable data protection laws.</span>
                </span>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}><span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}> </span></div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  <span data-custom-class="body_text">If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your <span style={{ fontSize: "15px" }}><span style={{ color: "rgb(0, 58, 250)" }}><span data-custom-class="body_text"><span style={{ color: "rgb(0, 58, 250)" }}><span data-custom-class="body_text"><a data-custom-class="link" href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm" rel="noopener noreferrer" target="_blank"><span style={{ fontSize: "15px" }}>Member State data protection authority</span></a></span></span></span></span></span> or </span>
                </span>
              </span>
              <a data-custom-class="link" href="https://ico.org.uk/make-a-complaint/data-protection-complaints/data-protection-complaints/" rel="noopener noreferrer" target="_blank"><span style={{ fontSize: "15px", color: "rgb(0, 58, 250)" }}><span style={{ fontSize: "15px", color: "rgb(0, 58, 250)" }}><span data-custom-class="body_text">UK data protection authority</span></span></span></a>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}><span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}><span data-custom-class="body_text">.</span></span></span>
            </div>

            <div style={{ lineHeight: "1.5" }}><br /></div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  <span data-custom-class="body_text">If you are located in Switzerland, you may contact the <span style={{ fontSize: "15px" }}><span style={{ color: "rgb(0, 58, 250)" }}><span data-custom-class="body_text"><span style={{ color: "rgb(0, 58, 250)" }}><span data-custom-class="body_text"><span style={{ color: "rgb(0, 58, 250)", fontSize: "15px" }}><a data-custom-class="link" href="https://www.edoeb.admin.ch/edoeb/en/home.html" rel="noopener noreferrer" target="_blank">Federal Data Protection and Information Commissioner</a></span></span></span></span></span></span>.</span>
                </span>
              </span>
            </div>

            <div style={{ lineHeight: "1.5" }}><br /></div>
            <div id="withdrawconsent" style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  <span data-custom-class="body_text"><strong><u>Withdrawing your consent:</u></strong> If we are relying on your consent to process your personal information, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section </span>
                </span>
              </span>
              <a data-custom-class="link" href="#contact"><span style={{ fontSize: "15px", color: "rgb(0, 58, 250)" }}><span style={{ fontSize: "15px", color: "rgb(0, 58, 250)" }}><span data-custom-class="body_text">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</span></span></span></a>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}><span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}><span data-custom-class="body_text"> below.</span></span></span>
            </div>

            <div style={{ lineHeight: "1.5" }}><br /></div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <span data-custom-class="body_text">However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.</span>
              </span>
            </div>

            <div style={{ lineHeight: "1.5" }}><br /></div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <span data-custom-class="body_text"><strong><u>Opting out of marketing and promotional communications:</u></strong><strong> </strong>You can unsubscribe from our marketing and promotional communications at any time by contacting us using the details provided in the section </span>
              </span>
              <a data-custom-class="link" href="#contact"><span style={{ color: "rgb(0, 58, 250)", fontSize: "15px" }}><span data-custom-class="body_text">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</span></span></a>
              <span style={{ fontSize: "15px" }}><span data-custom-class="body_text"> below. You will then be removed from the marketing lists. However, we may still communicate with you — for example, to send you service-related messages that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes.</span></span>
            </div>

            <div style={{ lineHeight: "1.5" }}><br /></div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  <span data-custom-class="body_text"><strong><u>Cookies and similar technologies:</u></strong> Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services.</span>
                </span>
              </span>
            </div>

            <div style={{ lineHeight: "1.5" }}><br /></div>
            <div style={{ lineHeight: "1.5" }}>
              <span data-custom-class="body_text"><span style={{ fontSize: "15px" }}>If you have questions or comments about your privacy rights, you may email us at info@flowconvertlab.com.</span></span>
            </div>

            <div style={{ lineHeight: "1.5" }}><br /></div>

            <div id="DNT" style={{ lineHeight: "1.5" }}>
              <span style={{ color: "rgb(127, 127, 127)" }}>
                <span style={{ color: "rgb(89, 89, 89)", fontSize: "15px" }}>
                  <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                    <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                      <span id="control" style={{ color: "rgb(0, 0, 0)" }}>
                        <strong><span data-custom-class="heading_1">10. CONTROLS FOR DO-NOT-TRACK FEATURES</span></strong>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  <span data-custom-class="body_text">Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ('DNT') feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognising and implementing DNT signals has been finalised. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Notice.</span>
                </span>
              </span>
            </div>

            <div style={{ lineHeight: "1.5" }}><span style={{ fontSize: "15px" }}><br /></span></div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <span data-custom-class="body_text">California law requires us to let you know how we respond to web browser DNT signals. Because there currently is not an industry or legal standard for recognising or honouring DNT signals, we do not respond to them at this time.</span>
              </span>
            </div>

            <div style={{ lineHeight: "1.5" }}><br /></div>

            <div id="policyupdates" style={{ lineHeight: "1.5" }}>
              <span style={{ color: "rgb(127, 127, 127)" }}>
                <span style={{ color: "rgb(89, 89, 89)", fontSize: "15px" }}>
                  <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                    <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                      <span id="control" style={{ color: "rgb(0, 0, 0)" }}>
                        <strong><span data-custom-class="heading_1">11. DO WE MAKE UPDATES TO THIS NOTICE?</span></strong>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  <span data-custom-class="body_text"><em><strong>In Short: </strong>Yes, we will update this notice as necessary to stay compliant with relevant laws.</em></span>
                </span>
              </span>
            </div>

            <div style={{ lineHeight: "1.5" }}><br /></div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  <span data-custom-class="body_text">We may update this Privacy Notice from time to time. The updated version will be indicated by an updated 'Revised' date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.</span>
                </span>
              </span>
            </div>

            <div style={{ lineHeight: "1.5" }}><br /></div>

            <div id="contact" style={{ lineHeight: "1.5" }}>
              <span style={{ color: "rgb(127, 127, 127)" }}>
                <span style={{ color: "rgb(89, 89, 89)", fontSize: "15px" }}>
                  <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                    <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                      <span id="control" style={{ color: "rgb(0, 0, 0)" }}>
                        <strong><span data-custom-class="heading_1">12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</span></strong>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  <span data-custom-class="body_text">If you have questions or comments about this notice, you may contact us by post at:</span>
                </span>
              </span>
            </div>

 <div style={{ lineHeight: "1.5" }}>
  <span style={{ fontSize: "15px" }}>
    <span style={{ color: "rgb(127, 127, 127)" }}>
      <span data-custom-class="body_text">
        <strong>Questions or concerns? </strong>Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a href="mailto:info@flowconvertlab.com" className="question noTranslate" style={{ color: "var(--accent)", textDecoration: "none" }}>info@flowconvertlab.com</a>.
      </span>
    </span>
  </span>
</div>

            <div style={{ lineHeight: "1.5" }}><br /></div>

            <div id="request" style={{ lineHeight: "1.5" }}>
              <span style={{ color: "rgb(127, 127, 127)" }}>
                <span style={{ color: "rgb(89, 89, 89)", fontSize: "15px" }}>
                  <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                    <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                      <span id="control" style={{ color: "rgb(0, 0, 0)" }}>
                        <strong><span data-custom-class="heading_1">13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</span></strong>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  <span data-custom-class="body_text">Based on the applicable laws of your country or state of residence in the US, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please fill out and submit a </span>
                  <span style={{ color: "rgb(0, 58, 250)" }}><span data-custom-class="body_text"><span style={{ color: "rgb(0, 58, 250)", fontSize: "15px" }}><a data-custom-class="link" href="https://app.termly.io/dsar/32ebd73f-4815-4819-925e-be81b57d9627" rel="noopener noreferrer" target="_blank">data subject access request</a></span></span></span>
                  <span data-custom-class="body_text">.</span>
                </span>
              </span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}