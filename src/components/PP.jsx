import CollapseItem from "./ItemColapse";
import { useEffect } from "react";
import React from "react";

import Button from "@mui/material/Button";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

export default function PrivacyPolicy() {
  useEffect(() => {
    const init = async () => {
      await import("preline/dist/index.js");
      window.HSStaticMethods?.autoInit();
    };
    init();
  }, []);

  const onButtonClick = (nombre) => {
    const pdfUrl = "Sample.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "your file name.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="politcaPrivacidad" className="w-full px-[12%] py-10 scroll-mt-20">
      <h2 className="text-center text-5xl font-Ovo mb-10">
        Política de privacidad
      </h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-justify">
        Para obtener el código de acceso a la aplicación es necesario devolver
        cumplimentados y firmados los documentos: deber_de_informar.pdf y
        cuestionario.pdf.{" "}
        <strong>
          Enviar ambos ficheros a{" "}
          <a
            href="mailto:rafael.martinezo@upm.es"
            className="text-blue-600 underline hover:text-blue-800"
          >
            rafael.martinezo@upm.es
          </a>
        </strong>
      </p>
      <div className="grid grid-cols-auto gap-6 my-10">
        <Button
          variant="contained"
          color="error"
          startIcon={<PictureAsPdfIcon />}
          href="./assets/Cuestionario.pdf"
          download
        >
          {" "}
          Cuestionario{" "}
        </Button>
        <Button
          variant="contained"
          color="error"
          startIcon={<PictureAsPdfIcon />}
          href="./assets/Deber_de_informar.pdf"
          download
        >
          {" "}
          Deber de informar{" "}
        </Button>
        <Button
          variant="contained"
          color="error"
          startIcon={<PictureAsPdfIcon />}
          href="./assets/GUIA_FIRMA.pdf"
          download
        >
          {" "}
          GUÍA DE FIRMA{" "}
        </Button>
      </div>
      <CollapseItem
        id="finalidad-investigación"
        title="Finalidad investigación"
      >
        <p className="justify-hyphen text-lg leading-8 font-Ovo text-muted-foreground-1">
          La presente investigación pretende diferenciar las características de
          la voz y el habla de personas con síndromes del neurodesarrollo. Para
          ello se van a realizar grabaciones de voz mediante aplicación HablApp.
        </p>
      </CollapseItem>

      <CollapseItem
        id="recogida-datos"
        title="Procedimiento de recogida de datos"
      >
        <p className="justify-hyphen text-lg leading-8 font-Ovo text-muted-foreground-1">
          La aplicación sólo grabará durante la realizción del ejercicio, nunca
          grabará fuera de la ejecucción del ejercicio ni en segundo plano
          cuando se encuentre cerrada. Recopilará exclusivamente muestras de
          voz, nunca datos personales de los hablantes. Los padres/tutores de
          los participantes (o los propios participantes en caso de no precisar
          de tutor legal) accederán a ella mediante un código alfanumérico que
          garantizará su anonimato.
        </p>
      </CollapseItem>

      <CollapseItem id="tratamiento-datos" title="Tratamiento de los datos">
        <p className="justify-hyphen text-lg leading-8 font-Ovo text-muted-foreground-1">
          En todo momento las muestras grabadas preservarán el anonimato de los
          participantes. Se asignará un código alfanumérico que permitirá a los
          miembros del equipo de investigación identificar el tipo de ejercicio
          y las características del participante: edad, comunidad autónoma de
          residencia, diagnóstico, características sociolingüísticas, pero nunca
          su identidad personal. El padre/tutor del hablante recibirá este
          código una vez que haya cumplimentado y firmado el consentimiento
          informado para participar en la investigación. Este código lo
          utilizará siempre que acceda a la aplicación. Los datos personales,
          que son recabados en los consentimientos informados, serán custodiados
          únicamente por el investigador principal.
        </p>
      </CollapseItem>

      <CollapseItem id="uso-grabaciones" title="Uso de las grabaciones">
        <p className="justify-hyphen text-lg leading-8 font-Ovo text-muted-foreground-1">
          Las grabaciones de voz serán únicamente empleadas en tareas de
          investigación.
        </p>
      </CollapseItem>

      <CollapseItem
        id="contacto-comite"
        title="Contacto del Comité de Ética de la Universidad Politécnica de Madrid"
      >
        <p className="justify-hyphen text-lg leading-8 font-Ovo text-muted-foreground-1">
          En caso de cualquier duda o conflicto podrá dirigirse al Comité de
          Ética de la Universidad Politécnica de Madrid:
          secretaria.adjunto.vinvestigacion@upm.es
        </p>
      </CollapseItem>
    </div>
  );
}
