import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "virtual:windi.css"

function App() {
  return (
    <aside className="flex flex-col gap-12 justify-center cursor-pointer transition-filter duration-500 hover:filter-[hue-rotate(240deg)]">
      <div
        className="relative flex items-end"
        style={{
          width: "1024px",
          height: "510px",
        }}
      >
        <div
          className="absolute"
          style={{
            width: "27%",
            height: "130%",
            transform: "translate(135%,30%)",
            clipPath: "polygon(0 20%, 50% 0, 100% 20%, 50% 40%)",
            background: "repeating-linear-gradient(red 0 10px, black 10px 15px)",
          }}
        ></div>
        <div
          className="relative"
          style={{
            width: "50%",
            height: "60%",
            background: "repeating-linear-gradient(red 0 10px, black 10px 15px)",
            clipPath: "polygon(0 100%, 67% 0, 96% 50%, 96% 100%)",
          }}
        ></div>
        <div
          className="relative scale-x-[-1]"
          style={{
            width: "50%",
            height: "60%",
            background: "repeating-linear-gradient(red 0 10px, black 10px 15px)",
            clipPath: "polygon(0 100%, 67% 0, 96% 50%, 96% 100%)",
          }}
        ></div>
      </div>
      <div className="text w-[1024px] text-red-600">
        <div className="text-[142px] text-center">SKYNET</div>
      </div>
      <style>{`
        @font-face {
          font-family: 'Terminator';
          src: local('Terminator'), url('https://manzdev.github.io/cdn/fonts/terminator.woff') format('woff');
        }
        *,*::after,*::before { box-sizing: border-box; margin:0; padding:0; font-family:sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue'; }
        a { -webkit-tap-highlight-color: transparent; }
        html { scroll-behavior: smooth; scrollbar-width: thin; scrollbar-color: transparent transparent; }
        body { height:100vh; width:100%; display:flex; flex-direction:column; gap:3rem; flex-wrap:wrap; place-content:center; margin:0; font-family:'Terminator'; background:black; --skynet-texture: repeating-linear-gradient(red 0 10px, black 10px 15px); }
      `}</style>
    </aside>
  )
}

const root = document.createElement("div")
document.body.appendChild(root)
createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
)
