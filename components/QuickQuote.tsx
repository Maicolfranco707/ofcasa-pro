"use client";

import { useState } from "react";
import { WhatsAppIcon } from "./Icons";
import { waLink } from "@/lib/site";

const espacios = ["Oficina", "Consultorio", "Edificio", "Casa o apto"];
const frecuencias = ["Una vez", "Semanal", "Diaria"];
const tamanos = ["Pequeño", "Mediano", "Grande"];

function Choice({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <fieldset>
      <legend className="text-[15px] font-medium text-ink">{label}</legend>
      <div className="mt-2.5 flex flex-wrap gap-2">
        {options.map((o) => {
          const on = o === value;
          return (
            <button
              key={o}
              type="button"
              onClick={() => onChange(o)}
              aria-pressed={on}
              className={`min-h-11 rounded-full border px-4 text-[15px] transition-colors ${
                on ? "border-navy bg-navy text-white" : "border-line bg-white text-ink hover:border-navy"
              }`}
            >
              {o}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

/* Cotizador corto: tres toques y se abre WhatsApp con el mensaje armado. */
export function QuickQuote() {
  const [espacio, setEspacio] = useState(espacios[0]);
  const [frecuencia, setFrecuencia] = useState(frecuencias[1]);
  const [tamano, setTamano] = useState(tamanos[1]);

  const mensaje = `Hola Ofcasa Pro, quiero una cotización.\nEspacio: ${espacio}\nFrecuencia: ${frecuencia}\nTamaño: ${tamano}`;

  return (
    <div className="rounded-2xl bg-white p-6 text-ink shadow-[0_30px_60px_-24px_rgba(0,0,0,0.55)] md:p-8">
      <h2 className="font-display text-2xl text-navy md:text-[28px]">Cotiza en 30 segundos</h2>
      <p className="mt-1.5 text-[15px] text-slate">Elige y te respondemos hoy mismo por WhatsApp.</p>
      <div className="mt-6 space-y-5">
        <Choice label="¿Qué espacio?" options={espacios} value={espacio} onChange={setEspacio} />
        <Choice label="¿Cada cuánto?" options={frecuencias} value={frecuencia} onChange={setFrecuencia} />
        <Choice label="Tamaño aproximado" options={tamanos} value={tamano} onChange={setTamano} />
      </div>
      <a
        href={waLink(mensaje)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-7 flex min-h-13 items-center justify-center gap-2 rounded-full bg-wa font-semibold text-white transition-colors hover:bg-[#158a45]"
      >
        <WhatsAppIcon className="size-5" />
        Pedir cotización
      </a>
    </div>
  );
}
