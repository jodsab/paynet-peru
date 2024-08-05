import WithNavAndFooter from "@/HOC/withNavAndFooter";
import TablaDeComisiones from "@/components/TablaDeComisiones";
import FormContact from "../funcionamiento/components/FormContact";

import "./index.scss";

export default function Comisiones() {
  return (
    <main>
      <WithNavAndFooter>
        <div className="comisiones_container content">
          <TablaDeComisiones />
          <FormContact />
        </div>
      </WithNavAndFooter>
    </main>
  );
}
