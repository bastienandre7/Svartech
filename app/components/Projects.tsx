import { Section } from "./Section"

export const Projects = () => {
    return(
        <div>
            <Section>
                <h2 className="text-3xl">Mes Réalisations</h2>
                <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg mt-5">
                    <img
                        alt=""
                        src="images/SvartechBike/SvartechBike1.jpg"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                        <div className="p-4 sm:p-6">
                            <time dateTime="2022-10-10" className="block text-xs text-white/90"> 1 Juin 2024 </time>
                            <a href="#">
                                <h3 className="mt-0.5 text-lg text-white">Covering de ma moto aux couleurs de Svartech</h3>
                            </a>
                        </div>
                    </div>
                </article>
                <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg mt-5">
                    <img
                        alt=""
                        src="images/RedBike/RedBike1.jpg"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                        <div className="p-4 sm:p-6">
                            <time dateTime="2022-10-10" className="block text-xs text-white/90"> 22 Avril 2024 </time>
                            <a href="#">
                                <h3 className="mt-0.5 text-lg text-white">Covering noir brillant sur la bulle du CBR500R</h3>
                            </a>
                        </div>
                    </div>
                </article>
                <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg mt-5">
                    <img
                        alt=""
                        src="images/Megane/Megane1.jpg"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                        <div className="p-4 sm:p-6">
                            <time dateTime="2022-10-10" className="block text-xs text-white/90"> 13 Avril 2024 </time>
                            <a href="#">
                                <h3 className="mt-0.5 text-lg text-white">Dechromage et suppression de l’écriture Megane sur la Megane 3 GT</h3>
                            </a>
                        </div>
                    </div>
                </article>
                <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg mt-5">
                    <img
                        alt=""
                        src="images/GreenBike/GreenBike1.jpg"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                        <div className="p-4 sm:p-6">
                            <time dateTime="2022-10-10" className="block text-xs text-white/90"> 17 Mars 2024 </time>
                            <a href="#">
                                <h3 className="mt-0.5 text-lg text-white">Covering vert émeraude pour ce 401 vitpilen</h3>
                            </a>
                        </div>
                    </div>
                </article>
                <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg mt-5">
                    <img
                        alt=""
                        src="images/Helmet/Helmet1.jpg"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                        <div className="p-4 sm:p-6">
                            <time dateTime="2022-10-10" className="block text-xs text-white/90"> 4 Mars 2024 </time>
                            <a href="#">
                                <h3 className="mt-0.5 text-lg text-white">Réalisation d’un covering noir brillant 3M sur le RPHA70 Carbon</h3>
                            </a>
                        </div>
                    </div>
                </article>
            </Section>
        </div>
    )
}