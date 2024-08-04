import WithNavAndFooter from "@/HOC/withNavAndFooter";
import WithBorder from "@/HOC/withBorder";
import Beneficios from "@/components/Beneficios";

import "./index.scss";

export default function Nosotros() {
  return (
    <main>
      <WithNavAndFooter>
        <div className="nosotros_container margin">
          <WithBorder>
            <p>Págos fáciles y seguros</p>
            <button>
              <p>Conoce mas</p>
            </button>
          </WithBorder>
          <Beneficios />
        </div>
      </WithNavAndFooter>
    </main>
  );
}
