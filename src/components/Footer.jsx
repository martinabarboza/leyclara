import { Scale, ExternalLink, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0B3C5D] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
                <Scale className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-white font-bold text-lg leading-none block">
                  Ley Clara
                </span>
                <span className="text-[10px] text-white/50 font-medium tracking-wide uppercase leading-none">
                  Uruguay
                </span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Hacemos que la ley sea comprensible para todos los uruguayos.
            </p>
            <div className="mt-4 flex items-center gap-1 text-white/40 text-xs">
              <Heart className="w-3.5 h-3.5 text-emerald-400" />
              <span>Hecho con orgullo en Uruguay</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white/90 mb-4 text-sm uppercase tracking-wide">
              Plataforma
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Inicio", href: "/" },
                { label: "Hacer una consulta", href: "/#consultar" },
                { label: "Base de datos legal", href: "/base-legal" },
                { label: "Cómo funciona", href: "/#como-funciona" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white/90 mb-4 text-sm uppercase tracking-wide">
              Cuenta
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Iniciar sesión", href: "/login" },
                { label: "Registrarse", href: "/registro" },
                { label: "Continuar como invitado", href: "/#consultar" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white/90 mb-4 text-sm uppercase tracking-wide">
              Fuentes
            </h4>
            <ul className="space-y-2">
              {[
                {
                  label: "IMPO",
                  href: "https://www.impo.com.uy",
                  external: true,
                },
                {
                  label: "Parlamento Uruguay",
                  href: "https://www.parlamento.gub.uy",
                  external: true,
                },
                {
                  label: "Presidencia UY",
                  href: "https://www.presidencia.gub.uy",
                  external: true,
                },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-white/60 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1"
                  >
                    {link.label}
                    {link.external && <ExternalLink className="w-3 h-3" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-white/40 text-xs leading-relaxed max-w-xl">
            <span className="text-white/60 font-medium">Aviso importante:</span>{" "}
            Ley Clara no sustituye el asesoramiento legal profesional. La
            información proporcionada es de carácter orientativo. Para casos
            concretos, consultá a un abogado habilitado en Uruguay.
          </p>
          <p className="text-white/30 text-xs whitespace-nowrap">
            © {new Date().getFullYear()} Ley Clara · Uruguay
          </p>
        </div>
      </div>
    </footer>
  );
}
