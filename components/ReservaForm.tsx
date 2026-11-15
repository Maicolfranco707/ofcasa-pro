"use client";

import { useState } from "react";
import { Check, WhatsAppIcon } from "./Icons";
import { site } from "@/lib/site";

const tipos = [
  "Oficina corporativa",
  "Oficina pequeña o coworking",
  "Consultorio",
  "Edificio o zonas comunes",
  "Apartamento o casa",
  "Sofás, colchones o alfombras",
];

const frecuencias = ["Una sola vez", "Semanal", "Varias veces por semana", "Diaria", "Aún no sé"];

const pasos = ["Espacio", "Frecuencia", "Tus datos"];

function Option({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`flex min-h-14 w-full items-center justify-between gap-3 rounded-xl border px-4 text-left text-base transition-colors ${
        selected ? "border-navy bg-navy text-white" : "border-line bg-white text-ink hover:border-navy"
      }`}
    >
      {label}
      <span
        className={`grid size-6 shrink-0 place-items-center rounded-full border ${
          selected ? "border-gold bg-gold text-navy-deep" : "border-line"
        }`}
      >
        {selected && <Check className="size-3.5" />}
      </span>
    </button>
  );
}

/* Reserva en tres pasos: en el celular se llena con el pulgar, sin escribir casi nada. */
export function ReservaForm() {
  const [paso, setPaso] = useState(0);
  const [tipo, setTipo] = useState("");
  const [frecuencia, setFrecuencia] = useState("");
  const [nombre, setNombre] = useState("");
  const [barrio, setBarrio] = useState("");
  const [fecha, setFecha] = useState("");
  const [nota, setNota] = useState("");
  const [error, setError] = useState("");

  function elegirTipo(t: string) {
    setTipo(t);
    setPaso(1);
  }
  function elegirFrecuencia(f: string) {
    setFrecuencia(f);
    setPaso(2);
  }

  function enviar(e: React.FormEvent) {
    e.preventDefault();
    if (!nombre.trim()) {
      setError("Escribe tu nombre para saber a quién responder.");
      return;
    }
    setError("");
    const lineas = [
      "Hola Ofcasa Pro, quiero reservar una visita.",
      `Nombre: ${nombre.trim()}`,
      `Espacio: ${tipo}`,
      `Frecuencia: ${frecuencia}`,
      barrio.trim() && `Barrio o dirección: ${barrio.trim()}`,
      fecha && `Fecha deseada: ${fecha}`,
      nota.trim() && `Detalles: ${nota.trim()}`,
    ].filter(Boolean);
    window.open(`https://wa.me/${site.phoneIntl}?text=${encodeURIComponent(lineas.join("\n"))}`, "_blank", "noopener,noreferrer");
  }

  const field =
    "mt-2 block min-h-12 w-full rounded-lg border border-line bg-white px-4 text-base text-ink placeholder:text-slate/70 focus:border-navy";

  return (
    <div className="rounded-2xl border border-line bg-white p-5 sm:p-8">
      <h2 className="font-display text-3xl text-navy">Reserva tu visita</h2>

      {/* Progreso */}
      <ol className="mt-6 grid grid-cols-3 gap-2" aria-label="Pasos de la reserva">
        {pasos.map((p, i) => {
          const done = i < paso;
          const current = i === paso;
          return (
            <li key={p}>
              <button
                type="button"
                disabled={i > paso}
                onClick={() => setPaso(i)}
                aria-current={current ? "step" : undefined}
                className="w-full text-left disabled:cursor-default"
              >
                <span className={`block h-1 rounded-full ${done || current ? "bg-navy" : "bg-line"}`} />
                <span className={`mt-2 block text-sm ${current ? "font-semibold text-navy" : done ? "text-ink" : "text-slate"}`}>
                  {i + 1}. {p}
                </span>
              </button>
            </li>
          );
        })}
      </ol>

      <div className="mt-7">
        {paso === 0 && (
          <fieldset>
            <legend className="text-lg font-medium text-ink">¿Qué espacio necesitas limpiar?</legend>
            <div className="mt-4 grid gap-2.5">
              {tipos.map((t) => (
                <Option key={t} label={t} selected={tipo === t} onClick={() => elegirTipo(t)} />
              ))}
            </div>
          </fieldset>
        )}

        {paso === 1 && (
          <fieldset>
            <legend className="text-lg font-medium text-ink">¿Cada cuánto?</legend>
            <div className="mt-4 grid gap-2.5">
              {frecuencias.map((f) => (
                <Option key={f} label={f} selected={frecuencia === f} onClick={() => elegirFrecuencia(f)} />
              ))}
            </div>
            <button type="button" onClick={() => setPaso(0)} className="mt-5 min-h-11 text-[15px] font-medium text-slate underline underline-offset-4">
              Volver
            </button>
          </fieldset>
        )}

        {paso === 2 && (
          <form onSubmit={enviar} noValidate>
            <p className="rounded-lg bg-mist px-4 py-3 text-[15px] text-ink">
              {tipo}, {frecuencia.toLowerCase()}
            </p>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <label className="text-[15px] font-medium text-ink sm:col-span-2">
                Nombre
                <input
                  className={field}
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  autoComplete="name"
                  aria-invalid={!!error}
                  aria-describedby={error ? "error-nombre" : undefined}
                />
                {error && (
                  <span id="error-nombre" className="mt-2 block text-sm text-[#b42318]">
                    {error}
                  </span>
                )}
              </label>
              <label className="text-[15px] font-medium text-ink">
                Barrio o dirección
                <input className={field} value={barrio} onChange={(e) => setBarrio(e.target.value)} placeholder="Ej. Provenza" />
              </label>
              <label className="text-[15px] font-medium text-ink">
                Fecha deseada
                <input type="date" className={field} value={fecha} onChange={(e) => setFecha(e.target.value)} />
              </label>
              <label className="text-[15px] font-medium text-ink sm:col-span-2">
                Algo que debamos saber <span className="font-normal text-slate">(opcional)</span>
                <textarea
                  className={`${field} min-h-24 py-3`}
                  value={nota}
                  onChange={(e) => setNota(e.target.value)}
                  placeholder="Tamaño aproximado, número de baños, horario…"
                />
              </label>
            </div>
            <button
              type="submit"
              className="mt-7 flex min-h-13 w-full items-center justify-center gap-2 rounded-full bg-navy font-semibold text-white transition-colors hover:bg-navy-deep"
            >
              <WhatsAppIcon className="size-5" />
              Enviar por WhatsApp
            </button>
            <div className="mt-4 flex items-center justify-between gap-4">
              <button type="button" onClick={() => setPaso(1)} className="min-h-11 text-[15px] font-medium text-slate underline underline-offset-4">
                Volver
              </button>
              <p className="text-right text-sm text-slate">Solo usamos tus datos para confirmar la visita.</p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
